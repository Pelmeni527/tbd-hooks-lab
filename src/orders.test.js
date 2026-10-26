import { test } from "node:test";
import assert from "node:assert/strict";
import { calcSubtotal, applyDiscount, calcTotal } from "./orders.js";

test("calcSubtotal: суммирует корректные позиции", () => {
  const items = [
    { name: "a", price: 100, qty: 2 },
    { name: "b", price: 50, qty: 1 },
  ];
  assert.equal(calcSubtotal(items), 250);
});

test("calcSubtotal: игнорирует позиции без цены или с нулевым количеством", () => {
  const items = [
    { name: "a", price: null, qty: 1 },
    { name: "b", price: 10, qty: 0 },
  ];
  assert.equal(calcSubtotal(items), 0);
});

test("applyDiscount: применяет скидку", () => {
  assert.equal(applyDiscount(200, 0.25), 150);
});

test("applyDiscount: ошибка при некорректной скидке", () => {
  assert.throws(() => applyDiscount(100, 1.5), RangeError);
  assert.throws(() => applyDiscount(100, -0.1), RangeError);
});

test("calcTotal: итог с налогом", () => {
  assert.equal(calcTotal([{ name: "a", price: 100, qty: 1 }]), 120);
});

test("calcTotal: итог со скидкой и налогом", () => {
  assert.equal(calcTotal([{ name: "a", price: 100, qty: 1 }], 0.5), 60);
});
