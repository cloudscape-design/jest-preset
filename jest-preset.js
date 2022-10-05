// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
const esModules = [
  '@cloudscape-design',

  // `d3-color` and `d3-scale` packages (plus their transitive dependencies) are using the ESM format.
  // We need to transform them to have them working in tests.
  'd3-.*',
  'internmap',
].join('|');
module.exports = {
  transform: {
    [`node_modules/(${esModules})/.+\\.js$`]: require.resolve('./js-transformer'),
    'node_modules/@cloudscape-design/.+\\.css': require.resolve('./css-transformer'),
  },
  transformIgnorePatterns: [`/node_modules/(?!(${esModules})/).+\\.js$`],
};
