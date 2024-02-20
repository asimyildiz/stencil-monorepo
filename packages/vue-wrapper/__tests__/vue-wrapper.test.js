'use strict';

const vueWrapper = require('..');
const assert = require('assert').strict;

assert.strictEqual(vueWrapper(), 'Hello from vueWrapper');
console.info('vueWrapper tests passed');
