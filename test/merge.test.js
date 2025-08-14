// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
const { test } = require('node:test');
const merge = require('../merge');

test('merging simple configurations', ({ assert }) => {
  assert.deepEqual(
    merge(
      {
        transformIgnorePatterns: ['project-ignore'],
        transform: {
          'project-js': 'project-babel-jest',
        },
      },
      {
        transformIgnorePatterns: ['our-ignore'],
        transform: {
          'cloudscape-js': 'our-babel-jest',
        },
      },
    ),
    {
      transform: {
        'project-js': 'project-babel-jest',
        'cloudscape-js': 'our-babel-jest',
      },
      transformIgnorePatterns: ['project-ignore', 'our-ignore'],
    },
  );
});

test('merging multiple configurations', ({ assert }) => {
  assert.deepEqual(
    merge(
      {
        transform: { 'project-js': 'project-babel-jest' },
      },
      {
        transform: { 'project-ts': 'ts-transformer' },
      },

      {
        transform: { 'cloudscape-js': 'our-babel-jest' },
      },
    ),
    {
      transform: {
        'project-js': 'project-babel-jest',
        'project-ts': 'ts-transformer',
        'cloudscape-js': 'our-babel-jest',
      },
    },
  );
});

test('does not mutate objects', ({ assert }) => {
  const src = {
    transform: { 'project-js': 'project-babel-jest' },
  };
  const dest = {
    transform: { 'cloudscape-js': 'our-babel-jest' },
  };
  assert.deepEqual(merge(src, dest), {
    transform: {
      'project-js': 'project-babel-jest',
      'cloudscape-js': 'our-babel-jest',
    },
  });
  assert.deepEqual(src, {
    transform: { 'project-js': 'project-babel-jest' },
  });
  assert.deepEqual(dest, {
    transform: { 'cloudscape-js': 'our-babel-jest' },
  });
});
