import { test } from 'node:test';
import assert from 'node:assert/strict';
import { add, divide } from './calc.js';

test('add: складывает два числа', () => {
  assert.equal(add(2, 3), 5);
});

test('divide: делит числа', () => {
  assert.equal(divide(6, 3), 2);
});

test('divide: бросает ошибку при делении на ноль', () => {
  assert.throws(() => divide(1, 0), /Division by zero/);
});