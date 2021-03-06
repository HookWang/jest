/**
 * Copyright (c) Facebook, Inc. and its affiliates. All Rights Reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

require('./SumDependency.js');
require('./OtherFile');

const uncoveredFunction = () => 1 + 'abc';

const sum = (a, b) => a + b;

module.exports = {
  sum,
  uncoveredFunction,
};
