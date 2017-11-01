import 'mocha';
import * as chai from 'chai';
const assert = chai.assert;

import { Node } from '../../types';

import * as g from './index';

describe('Game', () => {
    const location = 'Foo Stadium';
    const time = 'Right now';
    const nodes: [Node, Node] = [
        {
            id: 1,
            team: {
                name: 'Team A'
            },
            childID: 5
        },
        {
            id: 2,
            team: {
                name: 'Team B'
            },
            childID: 5
        }
    ];

    const game = g.createGame(location, time, nodes);
    describe('createGame', () => {

        it('returns an object', () => {
            assert.isObject(game);
        });
        it('the object is frozen', () => {
            assert.isFrozen(game);
        });
        it('the object has a location property, which is a string', () => {
            assert.property(game, 'location');
            assert.isString(game.location);
        });
        it('the object has a time property, which is a string', () => {
            assert.property(game, 'time');
            assert.isString(game.time);
        });
        it('the object has a nodes property, which is an array of length 2', () => {
            assert.property(game, 'nodes');
            assert.isArray(game.nodes);
            assert.lengthOf(game.nodes, 2);
        });
        it('each item in the nodes array is a Node', () => {
            game.nodes.forEach((node) => {
                assert.property(node, 'id');
                assert.isNumber(node.id);
                assert.property(node, 'team');
            });
        });
    });
    describe('getNodesInGame', () => {
        it('returns an array', () => {
            assert.isArray(g.getNodesInGame(game));
        });
        it('the array has a length of 2', () => {
            assert.lengthOf(g.getNodesInGame(game), 2);
        });
        it('each item in the array is a Node', () => {
            g.getNodesInGame(game).forEach((node) => {
                assert.property(node, 'id');
                assert.isNumber(node.id);
                assert.property(node, 'team');
            });
        });
    });
    describe('isGame', () => {
        it('returns true if the object passed matches the shape of the game interface', () => {
            assert.isTrue(g.isGame(game));
        });
        it('returns false if the object has more than three properties', () => {
            const badGame = Object.assign({}, game, { foo: 'bar' });

            assert.isFalse(g.isGame(badGame));
        });
        it('returns false if the object is missing a location, time or nodes property', () => {
            const badGame = {
                time: 'today',
                location: 'Your backyard'
            };

            assert.isFalse(g.isGame(badGame));
        });
        it('returns false if any of the required properties are malformed', () => {
            const badTime = Object.assign({}, game, { time: { foo: 'bar' } });
            const badLocation = Object.assign({}, game, { location: [5] });
            const badNodes = Object.assign({}, game, { nodes: 'hello' });

            assert.isFalse(g.isGame(badTime));
            assert.isFalse(g.isGame(badLocation));
            assert.isFalse(g.isGame(badNodes));
        });
    });
});