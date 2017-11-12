import 'mocha';
import * as chai from 'chai';
const assert = chai.assert;

import { Bracket, Node } from '../../types';
import * as b from './index';
import bracketData, { threeRoundBracket } from './dummy-bracket';

const partiallyFilledBracketData = returnPartiallyFilledBracket();

describe('Bracket', () => {
    const bracket = b.createBracket(bracketData.name, bracketData.games, bracketData.champion);
    const partiallyFilledBracket = b.createBracket(partiallyFilledBracketData.name, partiallyFilledBracketData.games, partiallyFilledBracketData.champion);
    describe('createBracket', () => {
        it('throws an error if any of the nodes passed to it have the same ID', () => {
            const badBracket: Bracket = {
                name: `World's Greatest Tournament`,
                games: [
                    {
                        location: 'Foobar Zone',
                        time: '7pm',
                        nodes: [
                            {
                                id: 1,
                                team: {
                                    name: 'Team A'
                                },
                                childID: 5
                            },
                            {
                                id: 1,
                                team: {
                                    name: 'Team B'
                                },
                                childID: 5
                            }

                        ]
                    }
                ],
                champion: {
                    id: 7,
                    team: null,
                    parentIDs: [5, 6]
                }
            };

            let err = null;

            try {
                const bracket = b.createBracket(badBracket.name, badBracket.games, badBracket.champion);
            } catch (e) {
                err = e;
            }

            assert.typeOf(err, 'Error');
        });
        it('returns an object', () => {
            assert.isObject(bracket);
        });
        it('the object is frozen', () => {
            assert.frozen(bracket);
        });
        it('the bracket has a name property, which is a string', () => {
            assert.property(bracket, 'name');
            assert.isString(bracket.name);
        });
        it('the bracket has a games property, which is an array', () => {
            assert.property(bracket, 'games');
            assert.isArray(bracket.games);
        });
        it('every item in the games array is a game object', () => {
            bracket.games.forEach((game) => {
                assert.property(game, 'location')
                assert.isString(game.location);
                assert.property(game, 'time');
                assert.isString(game.time);
                assert.property(game, 'nodes');
                assert.isArray(game.nodes);
            });
        });
    });
    describe('getNodeAt', () => {
        it('returns a node if a node exists at the given ID', () => {
            const node = b.getNodeAt(bracket, 2);
            assert.property(node, 'id');
            assert.isNumber(node.id);
            assert.property(node, 'team');
            assert.isObject(node.team);
        });
        it('returns undefined if there is no node with that ID in the bracket', () => {
            assert.isUndefined(b.getNodeAt(bracket, 1000));
        });
    });
    describe('getAllAccessibleAncestorIDs', () => {
        it('should throw an error if passed an id that does not exist in the bracket', () => {
            let err = null;

            try {
                const ancestorIDs = b.getAllAccessibleAncestorIDs(bracket, 50);
            } catch (e) {
                err = e;
            }
            assert.typeOf(err, 'Error');
        });
        it('should return undefined if the id passed references a node with no ancestors', () => {
            assert.isUndefined(b.getAllAccessibleAncestorIDs(bracket, 1));
        });
        it('should return an array if the node at the given ID has ancestors', () => {
            assert.isArray(b.getAllAccessibleAncestorIDs(bracket, 5));
        });
        it('should return an array containing all of the accessible node ancestors for the given ID', () => {
            const ancestors = b.getAllAccessibleAncestorIDs(bracket, 5);
            assert.lengthOf(ancestors, 2);
            assert.include(ancestors, 1);
            assert.include(ancestors, 2);
        });
        it('should not include lower-level ancestors beneath a node with a team in it', () => {
            const ancestors = b.getAllAccessibleAncestorIDs(partiallyFilledBracketData, 7);
            // 7 has two ancestors, 5 (has team) and 6(has no team, ancestors of 3 and 4). Which means...
            assert.lengthOf(ancestors, 4);
            assert.include(ancestors, 5);
            assert.include(ancestors, 6);
            assert.include(ancestors, 3);
            assert.include(ancestors, 4);
        });
    });
    describe('getAllDescendentIDs', () => {
        it('throws an error if the ID passed does not exist in the bracket', () => {
            let err = null;

            try {
                const descendents = b.getAllDescendentIDs(bracket, 10);
            } catch (e) {
                err = e;
            }

            assert.typeOf(err, 'Error');
        });
        it('returns undefined if the ID passed corresponds to a node with no child', () => {
            assert.isUndefined(b.getAllDescendentIDs(bracket, 7));
        });
        it('returns an array of numbers when given the ID of a node with a child', () => {
            const descendents = b.getAllDescendentIDs(bracket, 1);
            assert.isArray(descendents);
            descendents.forEach((descendentID) => {
                assert.isNumber(descendentID);
            });
        });
        it('works down multiple levels', () => {
            const descendents = b.getAllDescendentIDs(bracket, 1);
            assert.lengthOf(descendents, 2);
            assert.include(descendents, 5);
            assert.include(descendents, 7);
        });
    });
    describe('isTeamUpdateLegal', () => {
        const bracket = partiallyFilledBracket;
        it('returns false if the node at the given ID does not have the given team in its accessible ancestor chain', () => {
            assert.isFalse(b.isTeamUpdateLegal(bracket, 7, { name: 'Team B' }));
            assert.isFalse(b.isTeamUpdateLegal(bracket, 5, { name: 'Team C' }));
            assert.isFalse(b.isTeamUpdateLegal(bracket, 5, { name: 'Team D' }));
        });
        it('returns true if the node at the given ID does have the given team in its accessible ancestor chain', () => {
            assert.isTrue(b.isTeamUpdateLegal(bracket, 7, { name: 'Team A' }));
            assert.isTrue(b.isTeamUpdateLegal(bracket, 5, { name: 'Team A' }));
            assert.isTrue(b.isTeamUpdateLegal(bracket, 5, { name: 'Team B' }));
            assert.isTrue(b.isTeamUpdateLegal(bracket, 6, { name: 'Team C' }));
            assert.isTrue(b.isTeamUpdateLegal(bracket, 6, { name: 'Team D' }));
        });
        it('returns false if attempting to update the team of a root node', () => {
            assert.isFalse(b.isTeamUpdateLegal(bracket, 1, { name: 'Team B' }));
            assert.isFalse(b.isTeamUpdateLegal(bracket, 2, { name: 'Team B' }));
            assert.isFalse(b.isTeamUpdateLegal(bracket, 3, { name: 'Team B' }));
            assert.isFalse(b.isTeamUpdateLegal(bracket, 4, { name: 'Team B' }));
        });
    });
    describe('updateTeamAtNode', () => {
        const replacementTeam = { name: 'Jungle Juice' };


        it('throws an error if the id given does not exist in the bracket', () => {
            let err;
            try {
                const newBracket = b.updateTeamAtNode(bracket, 15, replacementTeam);
            } catch (e) {
                err = e;
            }

            assert.typeOf(err, 'Error');
        })
        it('returns a bracket', () => {
            const newBracket = b.updateTeamAtNode(bracket, 7, replacementTeam);
            assert.property(newBracket, 'name');
            assert.isString(newBracket.name);
            assert.property(newBracket, 'games');
            newBracket.games.forEach((game) => {
                assert.property(game, 'location');
                assert.property(game, 'time');
            });
        });
        it('the new bracket has the new team at the node with the id provided', () => {
            const newBracket = b.updateTeamAtNode(bracket, 7, replacementTeam);
            const newTeam = newBracket.champion.team;
            assert.strictEqual(newTeam.name, 'Jungle Juice');

            const anotherBracket = b.updateTeamAtNode(bracket, 1, { name: 'Bork' });
            assert.strictEqual(anotherBracket.games[0].nodes[0].team.name, 'Bork');
        });
    });
    describe('updateTeamAbove', () => {
        it('throws an error if the id passed does not exist in the bracket', () => {
            let err = null;

            try {
                const newBracket = b.updateTeamAbove(bracket, 50, { name: 'Ghouls' });
            } catch (e) {
                err = e;
            }

            assert.typeOf(err, 'Error');
        });
        it('returns a bracket', () => {
            const newBracket = b.updateTeamAbove(bracket, 7, { name: 'Team A' });
            assert.property(newBracket, 'name');
            assert.property(newBracket, 'games');
            assert.property(newBracket, 'champion');
        });
        it('updates every accessible ancestor of the node with the given team - if that is a legal move', () => {
            const newBracket = b.updateTeamAbove(bracket, 7, { name: 'Team A' });
            const newNodeFive = b.getNodeAt(newBracket, 5);
            assert.strictEqual(newNodeFive.team.name, 'Team A');
        });
        it('does not touch the node at the ID you pass to it', () => {
            const newBracket = b.updateTeamAbove(bracket, 7, { name: 'Team A' });
            assert.isNull(newBracket.champion.team);
        });
    });
    describe('nullTeamBelow', () => {
        it('throws an error if the starting node ID does not exist in the bracket', () => {
            let err = null;

            try {
                const newBracket = b.nullTeamBelow(bracket, 50, { name: 'Ghouls' });
            } catch (e) {
                err = e;
            }

            assert.typeOf(err, 'Error');
        });
        it('returns a bracket', () => {
            const newBracket = b.nullTeamBelow(bracket, 1, { name: 'Team A' });
            assert.property(newBracket, 'name');
            assert.property(newBracket, 'games');
            assert.property(newBracket, 'champion');
        });
        it('does not touch the node at the ID passed', () => {
            const newBracket = b.nullTeamBelow(bracket, 1, { name: 'Team Foo' });
            const newNodeOne = b.getNodeAt(newBracket, 1);

            assert.strictEqual(newNodeOne.team.name, 'Team A');
        });
        it('nulls the team of every descendent of the node at the ID passed with the given team', () => {
            const bracketWithChampion = b.updateTeamAtNode(partiallyFilledBracket, 7, { name: 'Team A' });
            const updatedBracket = b.nullTeamBelow(bracketWithChampion, 5, { name: 'Team A' });
            assert.isNull(b.getNodeAt(updatedBracket, 7).team);
        });
        describe('Three-round bracket', () => {
            let bracket = threeRoundBracket;

            beforeEach(() => {
                bracket = threeRoundBracket;
            });

            //At the start of every test, the bracket looks like this:

            // Team A
            //     null
            // Team B
            //         null
            // Team C
            //     null
            // Team D
            //              null
            // Team E
            //     null
            // Team F
            //         null
            // Team G
            //     null
            // Team H

            it('nulls every level of descendents', () => {
                const firstTeamUpdate = {
                    name: 'Team B'
                };

                const firstUpdatedBracket = b.fullNodeUpdate(bracket, 15, firstTeamUpdate);

                // The bracket now looks like this:

                // Team A
                //     Team A
                // Team B
                //         Team A
                // Team C
                //     null
                // Team D
                //              Team A
                // Team E
                //     null
                // Team F
                //         null
                // Team G
                //     null
                // Team H

                const secondTeamUpdate = {
                    name: 'Team B'
                };

                const secondUpdatedBracket = b.fullNodeUpdate(firstUpdatedBracket, 9, secondTeamUpdate);

                // The bracket should now look like this:

                // Team A
                //     Team B
                // Team B
                //         null
                // Team C
                //     null
                // Team D
                //              null
                // Team E
                //     null
                // Team F
                //         null
                // Team G
                //     null
                // Team H

                assert.deepEqual(b.getNodeAt(secondUpdatedBracket, 9).team, secondTeamUpdate);
                assert.isNull(b.getNodeAt(secondUpdatedBracket, 13).team);
                assert.isNull(b.getNodeAt(secondUpdatedBracket, 15).team);
            });
        });
    });
    describe('fullNodeUpdate', () => {
        describe('Two-round bracket', () => {
            let bracket = bracketData;

            beforeEach(() => {
                bracket = bracketData;
            });

            //At the start of every test, the bracket looks like this:

            // Team A
            //     null
            // Team B
            //         null
            // Team C
            //     null
            // Team D

            it('returns a bracket with the target node updated', () => {
                const newTeam = {
                    name: 'Team A'
                };

                const updated = b.fullNodeUpdate(bracket, 5, newTeam);

                const newNode5 = b.getNodeAt(updated, 5);

                assert.deepEqual(newNode5.team, newTeam);
            });
            it('updates only the target node if it is a one-level update', () => {
                const newTeam = {
                    name: 'Team A'
                };

                const updatedBracket = b.fullNodeUpdate(bracket, 5, newTeam);

                // The bracket should now look like this:

                // Team A
                //     Team A
                // Team B
                //         null
                // Team C
                //     null
                // Team D

                // Node 5 should be updated.

                const newNode5 = b.getNodeAt(updatedBracket, 5);

                assert.deepEqual(newNode5.team, newTeam);

                // Nodes 6 and 7 should be left alone.

                const newNode6 = b.getNodeAt(updatedBracket, 6);
                const newNode7 = b.getNodeAt(updatedBracket, 7);

                assert.isNull(newNode6.team);
                assert.isNull(newNode7.team);

            });
            it('nulls nodes below the target if they are no longer valid', () => {

                //Fill in the second-round nodes...
                bracket.games[2].nodes[0].team = { name: 'Team A' };
                bracket.games[2].nodes[1].team = { name: 'Team C' };

                //Fill in the champion...
                bracket.champion.team = { name: 'Team A' };

                //Now the bracket looks like this:

                // Team A
                //     Team A
                // Team B
                //         Team A
                // Team C
                //     Team C
                // Team D

                // Now, decide Team B beat Team A in the first round.

                const teamUpdate = { name: 'Team B' };

                const updated = b.fullNodeUpdate(bracket, 5, teamUpdate);

                // Node 7 should now be null, because it's impossible for A to be in that spot.

                assert.isNull(updated.champion.team);
            });
            it('updates nodes above the target if they were blank and should hold its team', () => {
                // We decide Team A is going to win the whole thing...

                const teamUpdate = { name: 'Team A' };

                const updated = b.fullNodeUpdate(bracket, 7, teamUpdate);

                // This should also fill node 5 with Team A - because it would have 
                // had to win there to make it to the top spot

                const newNode5 = b.getNodeAt(updated, 5);

                assert.deepEqual(newNode5.team, teamUpdate);
            });
        });

        describe('Three-round bracket', () => {
            let bracket = threeRoundBracket;

            beforeEach(() => {
                bracket = threeRoundBracket;
            });

            //At the start of every test, the bracket looks like this:

            // Team A
            //     null
            // Team B
            //         null
            // Team C
            //     null
            // Team D
            //              null
            // Team E
            //     null
            // Team F
            //         null
            // Team G
            //     null
            // Team H

            it('updates only the target node in one-level updates - even in multi-level brackets', () => {
                const newTeam = {
                    name: 'Team A'
                };

                const updatedBracket = b.fullNodeUpdate(bracket, 9, newTeam);

                // Node 9 should be updated.

                const newNode9 = b.getNodeAt(updatedBracket, 9);

                assert.deepEqual(newNode9.team, newTeam);

                // Nodes 10 - 15 should be left alone.

                assert.isNull(b.getNodeAt(updatedBracket, 10).team);
                assert.isNull(b.getNodeAt(updatedBracket, 11).team);
                assert.isNull(b.getNodeAt(updatedBracket, 12).team);
                assert.isNull(b.getNodeAt(updatedBracket, 13).team);
                assert.isNull(b.getNodeAt(updatedBracket, 14).team);
                assert.isNull(b.getNodeAt(updatedBracket, 15).team);

            });
            it('nulls every level of descendents after an update', () => {
                const firstTeamUpdate = {
                    name: 'Team B'
                };

                const firstUpdatedBracket = b.fullNodeUpdate(bracket, 15, firstTeamUpdate);

                // The bracket now looks like this:

                // Team A
                //     Team A
                // Team B
                //         Team A
                // Team C
                //     null
                // Team D
                //              Team A
                // Team E
                //     null
                // Team F
                //         null
                // Team G
                //     null
                // Team H

                const secondTeamUpdate = {
                    name: 'Team B'
                };

                const secondUpdatedBracket = b.fullNodeUpdate(firstUpdatedBracket, 9, secondTeamUpdate);

                // The bracket should now look like this:

                // Team A
                //     Team B
                // Team B
                //         null
                // Team C
                //     null
                // Team D
                //              null
                // Team E
                //     null
                // Team F
                //         null
                // Team G
                //     null
                // Team H

                assert.deepEqual(b.getNodeAt(secondUpdatedBracket, 9).team, secondTeamUpdate);
                assert.isNull(b.getNodeAt(secondUpdatedBracket, 13).team);
                assert.isNull(b.getNodeAt(secondUpdatedBracket, 15).team);
            });
        });
    });
    describe('isBracketComplete', () => {
        it('returns true if every node has a non-null team', () => {
            let bracket = returnPartiallyFilledBracket();

            // Fill in the rest of the bracket

            bracket.games[2].nodes[1].team = { name: 'Team C' };
            bracket.champion.team = { name: 'Team C' };

            assert.isTrue(b.isBracketComplete(bracket));
        });
        it('returns false if any node in the bracket has a null team', () => {
            assert.isFalse(b.isBracketComplete(partiallyFilledBracket));
        });
    });
    describe('isBracket', () => {
        it('returns true if the object passed matches the shape of the Bracket interface', () => {
            assert.isTrue(b.isBracket(bracket));
        });
        it('returns false if the object passed has more than 4 properties', () => {
            const badBracket = Object.assign({}, bracket, { foo: 'bar', baz: 'fest' });
            assert.isFalse(b.isBracket(badBracket));
        });
        it('returns false if the object passed is missing name, games or champion properties', () => {
            const badBracket = {
                name: 'Bad',
                champion: {
                    id: 7,
                    team: null,
                    parentIDs: [5, 6]
                } as Node
            };

            assert.isFalse(b.isBracket(badBracket));
        });
        it('returns false if any of the required properties are malformed', () => {
            const badName = Object.assign({}, bracket, { name: 5 });
            const badGames = Object.assign({}, bracket, { games: 'foo' });
            const badChampion = Object.assign({}, bracket, { champion: { bar: 'foo' } });

            assert.isFalse(b.isBracket(badName));
            assert.isFalse(b.isBracket(badGames));
            assert.isFalse(b.isBracket(badChampion));
        });
    });
});

function returnPartiallyFilledBracket(): Bracket {
    return {
        name: `World's Greatest Tournament`,
        games: [
            {
                location: 'Foobar Zone',
                time: '7pm',
                nodes: [
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

                ]
            },
            {
                location: 'Foobar Zone',
                time: '7pm',
                nodes: [
                    {
                        id: 3,
                        team: {
                            name: 'Team C'
                        },
                        childID: 6
                    },
                    {
                        id: 4,
                        team: {
                            name: 'Team D'
                        },
                        childID: 6
                    }
                ]
            },
            {
                location: 'Foobar Zone',
                time: '7pm',
                nodes: [
                    {
                        id: 5,
                        team: {
                            name: 'Team A'
                        },
                        childID: 7,
                        parentIDs: [1, 2]
                    },
                    {
                        id: 6,
                        team: null,
                        childID: 7,
                        parentIDs: [3, 4]
                    }
                ]
            }
        ],
        champion: {
            id: 7,
            team: null,
            parentIDs: [5, 6]
        }
    };
}