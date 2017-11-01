import { Node, Team } from '../../types';

import { isTeam } from '../team';

export const createNode = (id: number, team: Team | null, childID?: number, parentIDs?: [number, number]): Node => {
    let node = { id: id, team: team };
    if (childID) {
        node = Object.assign({}, node, { childID: childID });
    }
    if (parentIDs) {
        node = Object.assign({}, node, { parentIDs: parentIDs });
    }

    return Object.freeze(node);
}

export const getParentIDs = (node: Node): [number, number] | undefined => {
    if (node.parentIDs) return node.parentIDs;
    return undefined;
}

export const isNode = (object: object): object is Node => {
    if (Object.getOwnPropertyNames(object).length > 4 || Object.getOwnPropertyNames(object).length < 1) return false;
    const { id, team, parentIDs, childID } = <Node>object;
    if (!Number.isNaN(id) && typeof id === 'number') {
        if (!isTeam(team) && team !== null) return false;

        if (childID && typeof childID !== 'number') return false;

        if (parentIDs) {
            if (!Array.isArray(parentIDs)) return false;
            else {
                let flag = null;
                parentIDs.forEach((parentID) => {
                    if (Number.isNaN(parentID) || typeof parentID !== 'number') flag = false;
                });
                if (flag === false) return false;
            }
        }

        return true;
    }

    return false;

}