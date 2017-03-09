/*!
 * stack-utils-node-internals <https://github.com/tunnckoCore/stack-utils-node-internals>
 *
 * Copyright (c) Charlike Mike Reagent <@tunnckoCore> (https://i.am.charlike.online)
 * Released under the MIT license.
 */

'use strict'

const natives = Object.keys(process.binding('natives')).concat([
  'bootstrap_node',
  'node'
])

const nodeInternals = () => natives
  .map((n) => new RegExp('\\(' + n + '\\.js:\\d+:\\d+\\)$'))
  .concat([
    /\s*at (bootstrap_)?node\.js:\d+:\d+?$/,
    /\/\.node-spawn-wrap-\w+-\w+\/node:\d+:\d+\)?$/
  ])

nodeInternals.natives = natives
module.exports.natives = natives
module.exports = nodeInternals
