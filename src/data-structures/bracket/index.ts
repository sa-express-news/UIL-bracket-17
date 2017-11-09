import { isEqual, cloneDeep, update } from 'lodash';

import { Bracket, Game, Node, Team } from '../../types';

import { getParentIDs, isNode } from '../node';
import { getNodesInGame, isGame } from '../game';

import * as utils from '../../util';

export const createBracket = (name: string, games: Game[], champion: Node): Bracket => {
    let nodes: Node[] = games.map((game => getNodesInGame(game))).reduce((a, b) => a.concat(b), []);
    nodes.push(champion);
    if (!utils.everyObjectHasUniquePropertyValue(nodes, 'id')) throw new Error('Every node in a bracket must have a unique ID');

    return Object.freeze(Object.assign({}, { name: name, games: games, champion: champion }));
}

export const getNodeAt = (bracket: Bracket, id: number): Node | undefined => {
    const findFunction = (node: Node): boolean => {
        return node.id === id;
    }

    return getAllNodesInBracket(bracket).find(findFunction);
}

export const getAllAccessibleAncestorIDs = (bracket: Bracket, id: number): number[] | undefined => {
    // Throw an error if the node doesn't exist

    if (nodeAtIDDoesNotExist(bracket, id)) throwNonExistentIDError();

    // Return undefined if the node exists but has no ancestors

    if (!getNodeAt(bracket, id).parentIDs) return undefined;

    // Move through the node's ancestors using the recursion utility function:

    // On any given node, we should add it if:
    // Its id doesn't match the ID we started at (so we only get ancestors)
    // The node's child has no team ()

    const collectCondition = (nodeID: number) => {
        //We want to collect direct parents of the node no matter what
        if (getNodeAt(bracket, id).parentIDs.indexOf(nodeID) > -1) return true;

        return nodeID !== id && getNodeAt(bracket, getNodeAt(bracket, nodeID).childID).team === null;
    }

    // Call the function again on any of the node's parents that have a null team

    const moveUpCondition = (nodeID: number) => {
        // We want to call the recursive function on direct parents of the node no matter what
        if (getNodeAt(bracket, id).parentIDs.indexOf(nodeID) > -1) return true;

        return nodeID !== id && getNodeAt(bracket, getNodeAt(bracket, nodeID).childID).team === null;
    }

    // Return the array of collected ancestor IDs

    return getIDsMatchingConditions(bracket, id, collectCondition, moveUpCondition);
}

export const getAllDescendentIDs = (bracket: Bracket, id: number): number[] | undefined => {
    // Throw an error if the node doesn't exist

    if (nodeAtIDDoesNotExist(bracket, id)) throwNonExistentIDError();

    // If node doesn't have a child, return undefined

    if (!getNodeAt(bracket, id).childID) return undefined;

    // Create an array to hold all descendent IDs

    let descendents = [];

    let currentNode = getNodeAt(bracket, id);

    // Keep adding descendents to the array until you reach a node with no child

    while (currentNode.childID) {
        descendents.push(currentNode.childID);
        currentNode = getNodeAt(bracket, currentNode.childID);
    }

    // Return the array

    return descendents;

}

//For a team update to be legal, the team we're trying to update a node with
//Must exist in that node's accessible ancestor chain

export const isTeamUpdateLegal = (bracket: Bracket, id: number, team: Team): boolean => {
    const accessibleAncestorIDs: number[] = getAllAccessibleAncestorIDs(bracket, id);

    if (!accessibleAncestorIDs) return false;

    const accessibleAncestorNodes: Node[] = accessibleAncestorIDs.map(id => getNodeAt(bracket, id));

    const doesTeamMatch = (node: Node): boolean => {
        return isEqual(node.team, team);
    }

    return accessibleAncestorNodes.find(doesTeamMatch) !== undefined;
}

// Note: This function assumes the update is legal.
// Use the isTeamUpdateLegal function before calling it.

export const updateTeamAtNode = (bracket: Bracket, id: number, team: Team | null): Bracket => {
    if (nodeAtIDDoesNotExist(bracket, id)) throwNonExistentIDError();

    // If the champion is being updated, this is pretty straightforward:

    if (bracket.champion.id === id) {
        const newChampion = Object.assign({}, bracket.champion, { team: team });
        return Object.freeze(Object.assign({}, bracket, { champion: newChampion }));
    }

    // Otherwise, we need to find the game containing the node we want to update:

    const gameContainsMatchingNode = (game: Game): boolean => {
        return game.nodes.find(node => node.id === id) !== undefined;
    }

    const indexOfGameContainingNode = bracket.games.findIndex(gameContainsMatchingNode);

    // Then we create a function that, given that game, will return a copy of the game with the proper updated node:

    const updateGame = (game: Game): Game => {
        const indexOfNode = game.nodes.findIndex(node => node.id === id);
        const gameCopy = cloneDeep(game);
        gameCopy.nodes[indexOfNode] = Object.assign({}, game.nodes[indexOfNode], { team: team });
        return gameCopy;
    }

    //Then we use lodash to target the game we want and update its node:

    const newGames = update(cloneDeep(bracket.games), `${indexOfGameContainingNode}`, updateGame);

    return Object.assign({}, bracket, { games: newGames });

}

// This will just return the bracket as is if no updates above the start node are required,
// so you don't need to check before running it unless you're ultra concerned about performance.

export const updateTeamAbove = (bracket: Bracket, id: number, team: Team): Bracket => {
    if (nodeAtIDDoesNotExist(bracket, id)) throwNonExistentIDError();

    // No ancestors to update if this is a root node, so just return the bracket

    if (!getNodeAt(bracket, id).parentIDs) return bracket;

    // Get all accessible ancestors of the given node

    const accessibleAncestors = getAllAccessibleAncestorIDs(bracket, id).map(id => getNodeAt(bracket, id));

    // Filter out any of the ancestors with a team

    const teamlessAncestors = accessibleAncestors.filter(node => node.team === null);

    if (teamlessAncestors.length === 0) return bracket;

    // Filter again, removing any nodes that don't have the team in their accessible ancestor chain

    const ancestorsToUpdate = teamlessAncestors.filter(node => isTeamUpdateLegal(bracket, node.id, team));

    if (ancestorsToUpdate.length === 0) return bracket;
    let newBracket = cloneDeep(bracket);

    // For each node in that double filtered array, update its team to the new team

    ancestorsToUpdate.forEach((ancestorNode) => {
        newBracket = updateTeamAtNode(newBracket, ancestorNode.id, team);
    });

    // Return the updated bracket

    return newBracket;
}

export const nullTeamBelow = (bracket: Bracket, id: number, team: Team): Bracket => {
    if (nodeAtIDDoesNotExist(bracket, id)) throwNonExistentIDError();

    // Get all descendent IDs of the node at given ID

    const descendentIDs: number[] = getAllDescendentIDs(bracket, id);

    // Just return the bracket if there are no descendents of the node - no updates required

    if (!descendentIDs) return bracket;

    // Otherwise, get all descendent nodes

    const descendents: Node[] = descendentIDs.map(id => getNodeAt(bracket, id));

    // For each child, if the child has a team matching the team passed, set that team to null

    let newBracket = cloneDeep(bracket);
    descendents.forEach((descendent: Node) => {
        if (isEqual(descendent.team, team)) newBracket = updateTeamAtNode(newBracket, descendent.id, null);
    });

    // return a new bracket with the changes

    return newBracket;

}

export const fullNodeUpdate = (bracket: Bracket, id: number, team: Team): Bracket => {
    // Get the current team of the node to be updated

    const currentTeam = getNodeAt(bracket, id).team;

    // If the current team matches the team to update it with, bail - nothing needs to changes

    if (currentTeam === team) return bracket;

    // Null any descendents of the target that match the old team, accepting that this will just
    // return the bracket if no updates are necessary

    let newBracket = cloneDeep(bracket);

    newBracket = nullTeamBelow(newBracket, id, currentTeam);

    // Update the target node's team with the new indexOfNode

    newBracket = updateTeamAtNode(newBracket, id, team);

    // Update the target node's ancestors to match the new team, accepting
    // that this will just return the bracket if no updates are necessary

    return updateTeamAbove(newBracket, id, team);

}

export const isBracketComplete = (bracket: Bracket): boolean => {
    const nodes = getAllNodesInBracket(bracket);

    return nodes.every(node => node.team !== null);
}

export const isBracket = (object: Object): object is Bracket => {
    if (Object.getOwnPropertyNames(object).length > 4 || Object.getOwnPropertyNames(object).length < 1) return false;
    const { name, games, champion } = <Bracket>object;
    if (!name || !games || !champion) return false;

    if (typeof name !== 'string') return false;

    if (!isNode(champion)) return false;

    if (!Array.isArray(games)) return false;
    else {
        let flag = true;
        games.forEach((game) => {
            if (!isGame(game)) flag = false;
        });
        if (!flag) return false;
    }
    return true;
}

// This function moves recursively through a node and its ancestors to return an array of node IDs.
// The function starts on the given node, checking it against the addCondition function. If it returns true, the starting node is added to the array.
// The function then checks if the node has parents. If not, it's done and returns the array.
// If parents do exist, the function moves on to call itself on both parents.
// The optional recursionCondition is used to control whether you want to call the function on a parent.
// If passed, the function will only be called on parents that pass the recursionCondtion function test.

function getIDsMatchingConditions(bracket: Bracket, startingNodeID: number, addCondition: Function, recursionCondition?: Function): number[] {
    let matchingIDs: number[] = [];

    const recursion = (id: number): void => {
        if (addCondition(id)) matchingIDs.push(id);

        const parentIDs = getParentIDs(getNodeAt(bracket, id) as Node);

        if (parentIDs && recursionCondition) {
            parentIDs.forEach((parentID) => {
                if (recursionCondition(parentID)) recursion(parentID);
            });
        } else if (parentIDs) parentIDs.forEach((parentID => recursion(parentID)));
    }

    recursion(startingNodeID);

    return matchingIDs;
}

function nodeAtIDDoesNotExist(bracket: Bracket, id: number): boolean {
    return getNodeAt(bracket, id) === undefined;
}

function throwNonExistentIDError() {
    throw new Error('Bracket does not contain a node matching the given ID');
}

function getAllNodesInBracket(bracket: Bracket): Node[] {
    let nodes: Node[] = bracket.games.map((game => getNodesInGame(game))).reduce((a, b) => a.concat(b), []);
    nodes.push(bracket.champion);

    return nodes;
}