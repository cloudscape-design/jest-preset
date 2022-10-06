// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
const esModules = ['d3-.*', 'internmap'].join('|');

module.exports = {
  transform: {
    'node_modules/@cloudscape-design/.+\\.js$': require.resolve('./js-transformer'),
    'node_modules/@cloudscape-design/.+\\.css': require.resolve('./css-transformer'),

    // `d3-color` and `d3-scale` packages (plus their transitive dependencies) are using the ESM format.
    // We need to transform them to have them working in tests.
    [`node_modules/(${esModules})/.+\\.js$`]: require.resolve('./js-transformer'),
  },
  transformIgnorePatterns: [`/node_modules/(?!(${esModules}|@cloudscape-design/)).+\\.js$`],
};
