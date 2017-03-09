/*!
 * stack-utils-node-internals <https://github.com/tunnckoCore/stack-utils-node-internals>
 *
 * Copyright (c) Charlike Mike Reagent <@tunnckoCore> (https://i.am.charlike.online)
 * Released under the MIT license.
 */

/* jshint asi:true */

'use strict'

const test = require('mukla')
const nodeInternals = require('./index')

test('stack-utils-node-internals', (done) => {
  const internals = nodeInternals()
  test.strictEqual(Array.isArray(internals), true)
  test.strictEqual(internals.length > 10, true)
  test.strictEqual(Array.isArray(nodeInternals.natives), true)
  test.strictEqual(nodeInternals.natives.length > 10, true)
  done()
})
