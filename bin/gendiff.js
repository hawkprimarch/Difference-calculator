#!/usr/bin/env node
import { Command } from '../commander.js/esm.mjs';
const program = new Command();
program
  .description('Compares two configuration files and shows a difference.')
  .arguments('<filepath1> <filepath2>')
  .option('-V, --version', 'output the version number', '0.0.1')
  .action((filepath1, filepath2, { format }) => {
    console.log(genDiff(filepath1, filepath2, format));
  })
  .helpOption('-h, --help', 'output usage information')
  .option('-f, --format <type>', 'output format');

program.parse();