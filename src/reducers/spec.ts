import 'mocha';
import * as chai from 'chai';
const assert = chai.assert;

import { bracketIndex, bracketID, nodeUpdate } from './index';
import { UpdateBracketIndex, UpdateBracketID, UpdateNode } from '../actions';

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
    describe('bracket ID reducer', () => {
        it('returns the string ID matching the id of the action passed to it', () => {
            const initialID = 'div1_1a';
            const updateAction: UpdateBracketID = {
                type: 'UPDATE_BRACKET_ID',
                id: 'div2_1a'
            };

            assert.strictEqual(bracketID(initialID, updateAction), 'div2_1a');
        });
    });
});