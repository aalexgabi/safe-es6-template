'use strict';

/* eslint-disable no-template-curly-in-string */

const { template } = require('../index');
const { expect } = require('chai');

describe('safe-es6-template', function() {
    it('should template string without interpolation', function() {
        const result = template('Hello world!');
        expect(result).to.equal('Hello world!');
    });
    it('should template string with interpolation', function() {
        const result = template('Hello ${name}!', { name: 'John' });
        expect(result).to.equal('Hello John!');
    });
    it('should template string with interpolation having spaces around variable name', function() {
        const result = template('Hello ${   name      }!', { name: 'John' });
        expect(result).to.equal('Hello John!');
    });
    it('should template string with multiple interpolations', function() {
        const result = template('Hello ${first} ${last}!', {
            first: 'John',
            last: 'Doe',
        });
        expect(result).to.equal('Hello John Doe!');
    });
    it('should template string with interpolation of nested property', function() {
        const result = template('Hello ${app.user.name}!', {
            app: {
                user: {
                    name: 'John',
                },
            },
        });
        expect(result).to.equal('Hello John!');
    });
    it('should interpolate with empty string for undefined', function() {
        const result = template('Hello ${name}!');
        expect(result).to.equal('Hello !');
    });
    it('should interpolate with empty string for undefined value of property that exists', function() {
        const result = template('Hello ${name}!', { name: undefined });
        expect(result).to.equal('Hello !');
    });
    it('should interpolate with empty string for null', function() {
        const result = template('Hello ${name}!', { name: null });
        expect(result).to.equal('Hello !');
    });
});
