import 'mocha';
import * as chai from 'chai';
const assert = chai.assert;

import { bracketIndex, nodeUpdate } from './index';
import { UpdateBracketIndex, UpdateNode } from '../actions';

import dummyBracket from '../data-structures/bracket/dummy-bracket';

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

            const newChampionBracket = nodeUpdate(bracket, updateChampionAction);

            const newNode = newChampionBracket.champion;

            assert.deepEqual(newNode, {
                id: 3,
                team: {
                    name: 'Team A'
                },
                parentIDs: [1, 2]
            });

        });
        it('properly nulls nodes below the targeted update, when necessary', () => {
            let bracket = dummyBracket;

            //Fill in the second-round nodes...
            bracket.games[2].nodes[0].team = { name: 'Team A' };
            bracket.games[2].nodes[1].team = { name: 'Team C' };

            //Fill in the champion...
            bracket.champion.team = { name: 'Team A' };

            //Now, set up an action to change the winner of A-B in the first round to B.

            const action: UpdateNode = {
                type: 'UPDATE_NODE',
                id: 5,
                team: { name: 'Team B' }
            };

            // This should null the champion seat, because it's no longer possible for A to be champion.

            const newBracket = nodeUpdate(bracket, action);
            assert.isNull(newBracket.champion.team);

        });
        it('properly updates nodes above the target node, when necessary', () => {

        });
    });
});