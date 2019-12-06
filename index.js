#!/usr/bin/env node
var dht = require('dht-rpc')
var minimist = require('minimist')

var argv = minimist(process.argv, {
  alias: {port: 'p'},
  default: {port: 6620}
})

var node = dht ({
  ephemeral: true
})

node.listen(Number(argv.port), function () {
  console.log('dbootstrap node listening on %d', node.address().port)
})
