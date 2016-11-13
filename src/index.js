#!/usr/bin/env node

const program = require('commander')
const path = require('path')
const generateFile = require('./features')

program
  .version('1.0.0')
  .option('-s, --scope <browser scope>', 'The browser scope')
  .option('-f, --filename [filename]', 'The filename')
  .parse(process.argv)

if (program.scope) {
  let output = path.join(process.cwd(), 'features.json')
  if (program.filename) {
    output = path.join(process.cwd(), program.filename)
  }

  generateFile(program.scope, output)
} else {
  console.error('Please provide a browser scope')
}