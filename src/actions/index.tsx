import * as constants from '../constants';

import { Team } from '../types';

export interface Action {
    type: string;
}

export interface UpdateBracketIndex {
    type: constants.UPDATE_BRACKET_INDEX;
    index: number;
}

export interface UpdateBracketID {
    type: constants.UPDATE_BRACKET_ID;
    id: string;
}

export interface UpdateNode {
    type: constants.UPDATE_NODE;
    id: number;
    team: Team;
}

export const updateBracketIndex = (index: number): UpdateBracketIndex => {
    return {
        type: constants.UPDATE_BRACKET_INDEX,
        index: index
    };
}

export const updateBracketID = (id: string): UpdateBracketID => {
    return {
        type: constants.UPDATE_BRACKET_ID,
        id: id
    };
}

export const updateNode = (id: number, team: Team): UpdateNode => {
    return {
        type: constants.UPDATE_NODE,
        id: id,
        team: team
    };
}