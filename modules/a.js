import './b.js'
// require('./b.js')


import b from './b.js'
// const b = require('./b.js')

import { eba } from './b.js'
// const eba = require('./b.js').eba

import * as everythingFromB from './b.js'

import { eba as myNamedExportFromB } from './b.js'
// const myNamedExportFromB = require('./b.js').eba

console.log(myNamedExportFromB, eba)
