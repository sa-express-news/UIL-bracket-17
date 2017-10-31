import * as constants from '../constants';

import { Node } from '../types';

export interface Action {
    type: string;
}

export interface UpdateBracketIndex {
    type: constants.UPDATE_BRACKET_INDEX;
    index: number;
}

export interface UpdateNode {
    type: constants.UPDATE_NODE;
    id: number;
    node: Node;
}

export const updateBracketIndex = (index: number): UpdateBracketIndex => {
    return {
        type: constants.UPDATE_BRACKET_INDEX,
        index: index
    };
}

export const updateNode = (id: number, node: Node): UpdateNode => {
    return {
        type: constants.UPDATE_NODE,
        id: id,
        node: node
    };
}