import { StoreState } from '../types';
import * as constants from '../constants';
import { Action, UpdateBracketIndex } from '../actions';


export const bracketIndex = (state: number, action: UpdateBracketIndex): number => {
    return action.index;
}

export const bracketApp = (state: StoreState, action: Action): StoreState => {
    switch (action.type) {
        case constants.UPDATE_BRACKET_INDEX:
            return Object.assign({}, state, {
                activeBracketIndex: bracketIndex(state.activeBracketIndex, action as UpdateBracketIndex)
            });
        default:
            return state;
    }
}