// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
const tap = require('tap');
const preset = require('../jest-preset');

const ignorePatterns = preset.transformIgnorePatterns.map(pattern => new RegExp(pattern));

function isPathIgnored(path) {
  return ignorePatterns.some(pattern => pattern.test(path));
}

tap.equal(isPathIgnored('/node_modules/react/react.js'), true);
tap.equal(isPathIgnored('/src/component/index.js'), false);
tap.equal(isPathIgnored('/node_modules/@cloudscape-design/components/index.js'), false);
tap.equal(isPathIgnored('/node_modules/@cloudscape-design/design-tokens/index.js'), false);
tap.equal(isPathIgnored('/node_modules/internmap/index.js'), false);
tap.equal(isPathIgnored('/node_modules/d3-color/index.js'), false);
tap.equal(isPathIgnored('/node_modules/d3-scale/index.js'), false);
tap.equal(isPathIgnored('/node_modules/d3-array/index.js'), false);
tap.equal(isPathIgnored('/node_modules/d3-interpolate/index.js'), false);
tap.equal(isPathIgnored('/node_modules/d3-format/index.js'), false);
tap.equal(isPathIgnored('/node_modules/d3-time/index.js'), false);
tap.equal(isPathIgnored('/node_modules/d3-time-format/index.js'), false);
