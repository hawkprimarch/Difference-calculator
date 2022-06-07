#!/usr/bin/env node
import { Command } from 'commander/esm.mjs';
import getGeneralLogic from '../src/index.js';

const program = new Command();
program
  .description('Compares two configuration files and shows a difference.')
  .arguments('<filepath1> <filepath2>')
  .option('-f, --format [type]', 'output format', 'stylish')
  .action((filepath1, filepath2, { format }) => {
    getGeneralLogic(filepath1, filepath2, format);
  })
  .helpOption('-h, --help', 'output usage information')
  .option('-f, --format <type>', 'output format');

program.parse();
