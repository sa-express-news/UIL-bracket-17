import { update, cloneDeep } from 'lodash';

import { StoreState, Bracket, Game } from '../types';
import * as constants from '../constants';
import { Action, UpdateBracketIndex, UpdateNode } from '../actions';


export const bracketIndex = (state: number, action: UpdateBracketIndex): number => {
    return action.index;
}

export const nodeUpdate = (state: Bracket, action: UpdateNode): Bracket => {
    if (state.champion.id === action.id) {
        return Object.assign({}, state, { champion: action.node });
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
                gameCopy.nodes[indexOfNode] = action.node;
                return gameCopy;
            });
            return Object.assign({}, state, { games: newGames });
        }
    }
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