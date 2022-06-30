// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
module.exports = {
  transform: {
    'node_modules/@cloudscape-design/.+\\.js$': require.resolve('./js-transformer'),
    'node_modules/@cloudscape-design/.+\\.css': require.resolve('./css-transformer'),
  },
  transformIgnorePatterns: ['/node_modules/(?!@cloudscape-design/).+\\.js$'],
};
