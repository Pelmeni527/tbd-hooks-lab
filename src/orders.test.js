import { test } from 'node:test';
import assert from 'node:assert/strict';
import { calcTotal } from './orders.js';

test('calcTotal: сумма без скидки', () => {
  assert.equal(calcTotal([{ name: 'a', price: 100, qty: 1 }]), 120);
});