import 'mocha';
import * as chai from 'chai';
const assert = chai.assert;

import * as n from './index';
import { createTeam } from '../team';



describe('Node', () => {
    const id = 5;
    const team = createTeam('The Marvin Gayes');
    describe('createNode', () => {
        it('returns an object', () => {
            const node = n.createNode(id, team);
            assert.isObject(node);
        });
        it('the object is frozen', () => {
            const node = n.createNode(id, team);
            assert.frozen(node);
        });
        it('the object has an id property, which is a number', () => {
            const node = n.createNode(id, team);
            assert.property(node, 'id');
            assert.isNumber(node.id);
        });
        it('the object has a team property, which is a Team or null', () => {
            const node = n.createNode(id, team);
            assert.property(node, 'team');
            const nodeTeam = node.team;
            assert.property(nodeTeam, 'name');
            const nodeB = n.createNode(id, null);
            assert.property(nodeB, 'team');
            assert.isNull(nodeB.team);
        });
        it('if passed a child ID, it has a childID property, which is a number', () => {
            const node = n.createNode(id, team, 6);
            assert.property(node, 'childID');
            assert.isNumber(node.childID)
        });
        it('if passed parentIDs, it has a parentIDs property, which is an array of two numbers', () => {
            const node = n.createNode(id, team, undefined, [6, 7]);
            assert.property(node, 'parentIDs');
            const parentIDs = node.parentIDs as [number, number];
            parentIDs.forEach((parentID => {
                assert.isNumber(parentID);
            }));
        });
    });
    describe('getParentIDs', () => {
        it('returns undefined if the node has no parentIDs', () => {
            const node = n.createNode(id, team);
            assert.isUndefined(n.getParentIDs(node));
        });
        it('returns an array of two numbers if the node has parentIDs', () => {
            const node = n.createNode(id, team, undefined, [6, 7]);
            const parentIDs = n.getParentIDs(node) as [number, number];
            assert.isArray(parentIDs);
            assert.lengthOf(parentIDs, 2);

            parentIDs.forEach((parentID => {
                assert.isNumber(parentID);
            }));
        });
    });
    describe('isNode', () => {
        it(`returns true if the object's shape matches the Node interface`, () => {
            const validNode = {
                id: 5,
                team: {
                    name: 'Rockula'
                },
                childID: 12,
                parentIDs: [1, 2]
            };

            assert.isTrue(n.isNode(validNode));
        });
        it('returns false if the object has too many properties', () => {
            const invalidNode = {
                id: 5,
                team: {
                    name: 'Rockula'
                },
                childID: 12,
                parentIDs: [1, 2],
                foo: 'bar'
            };

            assert.isFalse(n.isNode(invalidNode));
        });
        it('returns false if the object has an id property that is not a number', () => {
            const invalidNode = {
                id: 'string',
                team: {
                    name: 'Rockula'
                },
                childID: 12,
                parentIDs: [1, 2],
            };

            assert.isFalse(n.isNode(invalidNode));
        });
        it('returns false if the object has no id or team property', () => {
            const invalidNode = {
                childID: 12,
                parentIDs: [1, 2],
            };

            assert.isFalse(n.isNode(invalidNode));
        });
        it(`returns false if any of the object's properties are malformed`, () => {
            const invalidNode = {
                id: 555,
                team: ['foo'],
                childID: 12,
                parentIDs: [1, 2],
            };

            const anotherBadOne = {
                id: 555,
                team: {
                    name: 'test'
                },
                childID: 'hello',
                parentIDs: [1, 2],
            };

            const oneMore = {
                id: 555,
                team: {
                    name: 'test'
                },
                childID: 5,
                parentIDs: ['test', 2],
            };

            assert.isFalse(n.isNode(invalidNode));
            assert.isFalse(n.isNode(anotherBadOne));
            assert.isFalse(n.isNode(oneMore));
        });
    });
});