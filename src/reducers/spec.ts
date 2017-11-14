import 'mocha';
import * as chai from 'chai';
const assert = chai.assert;

import { cloneDeep } from 'lodash';

import { bracketIndex, bracketID, notificationUpdate, nodeUpdate, bracketUpdate, touchToggle } from './index';
import { UpdateBracketIndex, UpdateBracketID, UpdateNode, UpdateNotification, UpdateBracket, ToggleTouch } from '../actions';

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
    describe('notification update reducer', () => {
        it('sets the notification to a string if the action contains a string', () => {
            const initialNotification = null as null;
            const updateAction: UpdateNotification = {
                type: 'UPDATE_NOTIFICATION',
                notification: 'Test'
            };

            assert.strictEqual(notificationUpdate(initialNotification, updateAction), 'Test');
        });

        it('sets the notification to null if the action contains null', () => {
            const newNotification = 'Blah blah';
            const newUpdateAction: UpdateNotification = {
                type: 'UPDATE_NOTIFICATION',
                notification: null
            };

            assert.isNull(notificationUpdate(newNotification, newUpdateAction));
        });
    });
    describe('full bracket update reducer', () => {
        const brackets = [cloneDeep(dummyBracket)];

        let newBracket = cloneDeep(dummyBracket);

        const newTeam = {
            name: 'Team A'
        };

        newBracket.champion.team = newTeam;

        const updateAction: UpdateBracket = {
            type: 'UPDATE_BRACKET',
            bracket: newBracket
        };

        const updatedBrackets = bracketUpdate(brackets, updateAction);

        const newFirstBracket = updatedBrackets[0];

        it(`updates the bracket in state matching the provided bracket's identifier`, () => {
            assert.deepEqual(newFirstBracket.champion.team, newTeam);
        });
        it('does not modify the original brackets passed to it', () => {
            assert.isNull(brackets[0].champion.team);
        });
    });
    describe('touch toggle reducer', () => {
        it('returns true if the previous state is false', () => {
            const initialState = false;

            const updateAction: ToggleTouch = {
                type: 'TOGGLE_TOUCH'
            };
            assert.isTrue(touchToggle(initialState, updateAction));
        });
        it('returns false if the previous state is true', () => {
            const initialState = true;

            const updateAction: ToggleTouch = {
                type: 'TOGGLE_TOUCH'
            };

            assert.isFalse(touchToggle(initialState, updateAction));
        });
    });
});