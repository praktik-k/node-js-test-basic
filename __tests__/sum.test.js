import assert from 'node:assert'
import { test } from 'node:test'

import sum from '../src/sum.js'

test('sum group', async (it) => {
    await it.test('add 1 + 2 to equal 3', () => {
        assert.strictEqual(sum(1,2), 3)
    })
    await it.test('add 4 + 6 to equal 10', () => {
        assert.strictEqual(sum(4,6), 10)
    })
    await it.test('add 13 + 3 to equal 16', () => {
        assert.strictEqual(sum(13,3), 16)
    })
})

test('sum', () => {
    assert.strictEqual(sum(1,2), 3)
})