import 'mocha';
import * as chai from 'chai';
const assert = chai.assert;

import * as utils from './index';

describe('Utilities', () => {
    describe('everyObjectHasOwnProperty', () => {
        it('returns true if every object in the array has its own property matching the one provided', () => {
            const objects = [
                { foo: 1 },
                { foo: 2 }
            ];

            assert.isTrue(utils.everyObjectHasOwnProperty(objects, 'foo'));
        });
        it('returns false if any object in the array does not have its own property matching the one provided', () => {
            const objects = [
                { foo: 1 },
                { bar: 1 }
            ];

            assert.isFalse(utils.everyObjectHasOwnProperty(objects, 'foo'));
        });
    });
    describe('everyObjectHasUniquePropertyValue', () => {
        it('returns true if every object in the array has a unique value for the given property', () => {
            const objects = [
                { foo: 1 },
                { foo: 2 }
            ];
            assert.isTrue(utils.everyObjectHasUniquePropertyValue(objects, 'foo'));
        });
        it('returns false if every object in the array does not have a unique value for the given property', () => {
            const objects = [
                { foo: 1 },
                { foo: 1 },
                { foo: undefined }
            ];
            assert.isFalse(utils.everyObjectHasUniquePropertyValue(objects, 'foo'));
        });
    });
});