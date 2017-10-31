import * as constants from '../constants';

export interface UpdateBracketIndex {
    type: constants.UPDATE_BRACKET_INDEX;
    index: number;
}

export const updateBracketIndex = (index: number): UpdateBracketIndex => {
    return {
        type: constants.UPDATE_BRACKET_INDEX,
        index: index
    };
}