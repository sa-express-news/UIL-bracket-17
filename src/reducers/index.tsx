import { update, set, cloneDeep } from 'lodash';

import { StoreState, Bracket, Game } from '../types';
import * as constants from '../constants';
import { Action, UpdateBracketIndex, UpdateNode } from '../actions';

import startingBrackets from './startingBrackets';

const initialState: StoreState = {
    activeBracketIndex: 0,
    userBrackets: startingBrackets,
    canonicalBrackets: startingBrackets
};


export const bracketIndex = (state: number = 0, action: UpdateBracketIndex): number => {
    return action.index;
}

export const nodeUpdate = (state: Bracket = startingBrackets[0], action: UpdateNode): Bracket => {
    if (state.champion.id === action.id) {
        const newNode = Object.assign({}, state.champion, { team: action.team });
        return Object.assign({}, state, { champion: newNode });
    } else {

        const containsMatchingNode = (game: Game): boolean => {
            return game.nodes.find(node => node.id === action.id) !== undefined;
        }

        const indexOfGameContainingNode = state.games.findIndex(containsMatchingNode);

        if (indexOfGameContainingNode < 0) {
            return state;
        } else {
            const newGames = update(cloneDeep(state.games), `${indexOfGameContainingNode}`, function (game: Game) {
                const indexOfNode = game.nodes.findIndex(node => node.id === action.id);
                const gameCopy = cloneDeep(game);
                const newNode = Object.assign({}, game.nodes[indexOfNode], { team: action.team });
                gameCopy.nodes[indexOfNode] = newNode;
                return gameCopy;
            });
            return Object.assign({}, state, { games: newGames });
        }
    }
}

export const bracketApp = (state: StoreState = initialState, action: Action): StoreState => {
    switch (action.type) {
        case constants.UPDATE_BRACKET_INDEX:
            return Object.assign({}, state, {
                activeBracketIndex: bracketIndex(state.activeBracketIndex, action as UpdateBracketIndex)
            });
        case constants.UPDATE_NODE:
            const bracketToUpdate = state.userBrackets[state.activeBracketIndex];
            const updatedBracket = nodeUpdate(bracketToUpdate, action as UpdateNode);
            const newUserBrackets = set(cloneDeep(state.userBrackets), `${state.activeBracketIndex}`, updatedBracket);
            return Object.assign({}, state, {
                userBrackets: newUserBrackets
            });
        default:
            return state;
    }
}