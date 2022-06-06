import { fileURLToPath } from 'url';
import * as path from 'path';
import { dirname } from 'path';
import { getNormalizePath, getDiff } from '../src/getDiff.js';

const trullyMass = [
  { name: 'follow', oldValue: false },
  { name: 'host', fixed: 'hexlet.io' },
  { name: 'proxy', oldValue: '123.234.53.22' },
  { name: 'timeout', oldValue: 50, newValue: 20 },
  { name: 'verbose', newValue: true },
];

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const getFixture = (filename) => path.join(__dirname, '..', '__fixtures__', filename);

test('getDiff', () => {
  const obj1 = getNormalizePath(getFixture('filepath1.json'));
  const obj2 = getNormalizePath(getFixture('filepath2.json'));
  expect(getDiff(obj1, obj2)).toEqual(trullyMass);
});
