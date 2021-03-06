/**
 * Copyright (c) Facebook, Inc. and its affiliates. All Rights Reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
'use strict';

test('should use the custom resolver', () => {
  require('foo');
});

test('should have regenerator injected', () => {
  expect(global.fakeRegeneratorInjected).toEqual(true);
});

test('should work with automock', () => {
  jest.mock('foo');

  const foo = require('foo');
  foo();

  expect(foo).toHaveBeenCalled();
});

test('should allow manual mocks to make require calls through the resolver', () => {
  jest.mock('../manual-mock');

  expect(require('../manual-mock')).toEqual('bar');
});
