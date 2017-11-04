import { update, set, cloneDeep } from 'lodash';

import { StoreState, Bracket, Game } from '../types';
import * as constants from '../constants';
import { Action, UpdateBracketIndex, UpdateNode } from '../actions';

import startingBrackets from './startingBrackets';

import { updateTeamAtNode, updateTeamAbove, nullTeamBelow, getNodeAt, fullNodeUpdate } from '../data-structures/bracket';

const initialState: StoreState = {
    activeBracketIndex: 0,
    userBrackets: startingBrackets,
    canonicalBrackets: startingBrackets
};


export const bracketIndex = (state: number = 0, action: UpdateBracketIndex): number => {
    return action.index;
}

export const nodeUpdate = (state: Bracket = startingBrackets[0], action: UpdateNode): Bracket => {
    let targetNodeID;

    // If we're on a desktop screen or the action is being called on the champion, we want to 
    // run the update on that node.

    if (state.champion.id === action.id || window.innerWidth > 767) {
        targetNodeID = action.id;
    }

    // However, due to how we update nodes on mobile - by tapping - if neither of the above are true,
    // We want to update the node's CHILD - because we tapped its parent to choose it would win.

    else {
        targetNodeID = getNodeAt(state, action.id).childID;
    }

    return fullNodeUpdate(state, targetNodeID, action.team);

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