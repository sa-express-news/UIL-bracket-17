import { bracketIndex } from './index';

import { UpdateBracketIndex } from '../actions';

describe('bracket index reducer', () => {
    it('returns the number matching the index of the action passed to it', () => {
        const initialNumber = 5;
        const updateAction: UpdateBracketIndex = {
            type: 'UPDATE_BRACKET_INDEX',
            index: 2
        };

        expect(bracketIndex(initialNumber, updateAction)).toEqual(2);
    });
});