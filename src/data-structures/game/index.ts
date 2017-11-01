import { Game, Node } from '../../types';

import { isNode } from '../node';

export const createGame = (location: string, time: string, nodes: [Node, Node]): Game => {
    return Object.freeze(Object.assign({}, { location: location }, { time: time }, { nodes: nodes }));
}

export const getNodesInGame = (game: Game): [Node, Node] => {
    return game.nodes;
}

export const isGame = (object: object): object is Game => {
    if (Object.getOwnPropertyNames(object).length > 3 || Object.getOwnPropertyNames(object).length < 1) return false;
    const { location, time, nodes } = <Game>object;
    if (!location || !time || !nodes) return false;

    if (typeof location !== 'string') return false;

    if (typeof time !== 'string') return false;

    if (!Array.isArray(nodes)) return false;
    else {
        let flag = true;
        nodes.forEach((node) => {
            if (!isNode(node)) flag = false;
        });
        if (!flag) return false;
    }

    return true;

}