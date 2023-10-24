// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
const test = require('node:test');
const assert = require('node:assert');
const preset = require('../jest-preset');

const ignorePatterns = preset.transformIgnorePatterns.map(pattern => new RegExp(pattern));

function isPathIgnored(path) {
  return ignorePatterns.some(pattern => pattern.test(path));
}

test('ignore patterns', () => {
  assert.strictEqual(isPathIgnored('/node_modules/react/react.js'), true);
  assert.strictEqual(isPathIgnored('/src/component/index.js'), false);
  assert.strictEqual(isPathIgnored('/node_modules/@cloudscape-design/components/index.js'), false);
  assert.strictEqual(isPathIgnored('/node_modules/@cloudscape-design/design-tokens/index.js'), false);
  assert.strictEqual(isPathIgnored('/node_modules/internmap/index.js'), false);
  assert.strictEqual(isPathIgnored('/node_modules/d3-color/index.js'), false);
  assert.strictEqual(isPathIgnored('/node_modules/d3-scale/index.js'), false);
  assert.strictEqual(isPathIgnored('/node_modules/d3-array/index.js'), false);
  assert.strictEqual(isPathIgnored('/node_modules/d3-interpolate/index.js'), false);
  assert.strictEqual(isPathIgnored('/node_modules/d3-format/index.js'), false);
  assert.strictEqual(isPathIgnored('/node_modules/d3-time/index.js'), false);
  assert.strictEqual(isPathIgnored('/node_modules/d3-time-format/index.js'), false);
});
