import { update, set, cloneDeep } from 'lodash';

import { StoreState, Bracket, Game } from '../types';
import * as constants from '../constants';
import { Action, UpdateBracketIndex, UpdateNode } from '../actions';

import startingBrackets from './startingBrackets';

import { updateTeamAtNode, updateTeamAbove, nullTeamBelow, getNodeAt } from '../data-structures/bracket';

const initialState: StoreState = {
    activeBracketIndex: 0,
    userBrackets: startingBrackets,
    canonicalBrackets: startingBrackets
};


export const bracketIndex = (state: number = 0, action: UpdateBracketIndex): number => {
    return action.index;
}

export const nodeUpdate = (state: Bracket = startingBrackets[0], action: UpdateNode): Bracket => {



    if (getNodeAt(state, action.id).team === action.team) return state;

    const currentChildTeam = cloneDeep(getNodeAt(state, action.id).team);

    const nullsBelow = nullTeamBelow(state, action.id, currentChildTeam);

    const updatedMainNode = updateTeamAtNode(nullsBelow, action.id, action.team);

    const updatesAbove = updateTeamAbove(updatedMainNode, action.id, action.team);

    return updatesAbove;

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