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
});