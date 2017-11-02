import 'mocha';
import * as chai from 'chai';
const assert = chai.assert;

import { bracketIndex, nodeUpdate } from './index';
import { UpdateBracketIndex, UpdateNode } from '../actions';

import { Bracket } from '../types';

describe('Reducers', () => {
    describe('bracket index reducer', () => {
        it('returns the number matching the index of the action passed to it', () => {
            const initialNumber = 5;
            const updateAction: UpdateBracketIndex = {
                type: 'UPDATE_BRACKET_INDEX',
                index: 2
            };

            assert.strictEqual(bracketIndex(initialNumber, updateAction), 2);
        });
    });

    describe('node update reducer', () => {
        it('returns a bracket with the given node updated', () => {
            const bracket: Bracket = {
                name: 'Test',
                games: [
                    {
                        location: 'Foo',
                        time: 'Bar',
                        nodes: [
                            {
                                id: 1,
                                team: {
                                    name: 'Team A'
                                },
                                childID: 3
                            },
                            {
                                id: 2,
                                team: {
                                    name: 'Team B'
                                },
                                childID: 3
                            }
                        ]
                    }
                ],
                champion: {
                    id: 3,
                    team: null,
                    parentIDs: [1, 2]
                }
            };

            const updateChampionAction: UpdateNode = {
                type: 'UPDATE_NODE',
                id: 3,
                team: { name: 'Team A' }
            };

            const updateRootAction: UpdateNode = {
                type: 'UPDATE_NODE',
                id: 2,
                team: null
            };

            const newChampionBracket = nodeUpdate(bracket, updateChampionAction);

            const newNode = newChampionBracket.champion;

            assert.deepEqual(newNode, {
                id: 3,
                team: {
                    name: 'Team A'
                },
                parentIDs: [1, 2]
            });

            const newRootBracket = nodeUpdate(bracket, updateRootAction);

            const newRootNode = newRootBracket.games[0].nodes[1];

            assert.deepEqual(newRootNode, {
                id: 2,
                team: null,
                childID: 3
            });
        });
    });
});