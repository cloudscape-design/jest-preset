// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
const babelJestModule = require('babel-jest');
// a work-around to support babel-jest versions >27 and <27
// https://github.com/facebook/jest/issues/11444#issuecomment-855989054
const babelJest = babelJestModule.__esModule ? babelJestModule.default : babelJestModule;

module.exports = babelJest.createTransformer({
  plugins: [require.resolve('@babel/plugin-transform-modules-commonjs')],
  // do not load own project configuration files
  babelrc: false,
  configFile: false,
});
