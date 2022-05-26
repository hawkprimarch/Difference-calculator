import path from 'path';
import fs from 'fs';
import _ from 'lodash';

const getObjectFromPath = (filepath) => {
  const pathOffile = path.isAbsolute(filepath) ? filepath : path.resolve(process.cwd(), filepath);
  const obj = JSON.parse(fs.readFileSync(pathOffile, 'utf-8'));
  return obj;
};

const getDiff = (obj1, obj2) => {
  const allKeys = _.sortBy(_.union([...Object.keys(obj1), ...Object.keys(obj2)]));
  const cb = (acc, key) => {
    const valueOfObj1 = obj1[key];
    const valueOfObj2 = obj2[key];
    if (_.has(obj1, key) && _.has(obj2, key)) {
      if (valueOfObj1 === valueOfObj2) {
        acc.push(`      ${key}: ${valueOfObj1}`);
      } else {
        acc.push(`    - ${key}: ${valueOfObj1}`);
        acc.push(`    + ${key}: ${valueOfObj2}`);
      }
    }
    if (_.has(obj1, key) && !_.has(obj2, key)) {
      acc.push(`    - ${key}: ${valueOfObj1}`);
    }
    if (!_.has(obj1, key) && _.has(obj2, key)) {
      acc.push(`    + ${key}: ${valueOfObj2}`);
    }
    return acc;
  };
  const result = allKeys.reduce(cb, []);
  const innerValue = result.join('\n');
  const parts = `{\n${innerValue}\n}`;
  return parts;
};

export { getObjectFromPath, getDiff };
