// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
const { mergeWith } = require('lodash');

function mergeArrays(dest, src) {
  if (Array.isArray(dest)) {
    return dest.concat(src);
  }
}

module.exports = function mergePresets(...presets) {
  return mergeWith({}, ...presets, mergeArrays);
};
