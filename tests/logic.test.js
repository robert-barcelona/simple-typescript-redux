import test from 'ava';

import {getPastaData} from "../src/logic.ts"

test('foo', t => {
  t.pass();
});

test('bar', async t => {
  const bar = Promise.resolve('bar');
  t.is(await bar, 'bar');
});
