import 'mocha';
import * as chai from 'chai';
const assert = chai.assert;

import * as t from './index';

describe('Team', () => {
    describe('createTeam', () => {
        const name = 'Foo Fighters';
        const logo = 'https:www.example.com/logo.svg';
        const colors: [string, string] = ['#000000', '#FFFFFF'];

        it('returns an object', () => {
            const team = t.createTeam(name, logo, colors);
            assert.isObject(team);
        });
        it('the object has a name property, which is a string', () => {
            const team = t.createTeam(name, logo, colors);
            assert.isString(team.name);
        });
        it('if passed a logo, the object has a logo property, which is a string', () => {
            const team = t.createTeam(name, logo, colors);
            assert.isString(team.logo);
        });
        it('if passed colors, it has a colors property, which is an array of two strings', () => {
            const team = t.createTeam(name, logo, colors);
            assert.isArray(team.colors);
            assert.lengthOf(team.colors as Array<string>, 2);
        });
        it('the object is frozen', () => {
            const team = t.createTeam(name, logo, colors);
            assert.isFrozen(team);
        });
    });
    describe('isTeam', () => {
        it('returns true if the object passed has all properties of a team', () => {
            const goodTeam = {
                name: 'ABC'
            };

            const goodTeamWithColors = {
                name: 'CBA',
                colors: ['#FFF', '#AAA'],
            };

            assert.isTrue(t.isTeam(goodTeam));
            assert.isTrue(t.isTeam(goodTeamWithColors));
        });
        it('returns true if the object passed is null (teams can be null)', () => {
            assert.isTrue(t.isTeam(null));
        });
        it('returns false if the object passed lacks a name property', () => {
            const team = {
                colors: ['#fff', '#AAA']
            };

            assert.isFalse(t.isTeam(team));
        });
        it('returns false if the object has more than 3 properties', () => {
            const team = {
                foo: 'bar',
                bar: 'foo',
                bork: 'brown',
                bread: 'pudding'
            };

            assert.isFalse(t.isTeam(team));
        });
        it(`returns false if any of the object's expected team properties are malformed`, () => {
            const team = {
                name: 'The Team',
                colors: ['#FFF', '#AAA'],
                logo: 45
            };

            assert.isFalse(t.isTeam(team));
        });
    });
});