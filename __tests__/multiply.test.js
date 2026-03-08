import assert from 'node:assert'
import { test } from 'node:test'

import multiply from '../src/multiply.js'

test('multiply group', async (it) => {
    await it.test('add 1 * 2 to equal 2', () => {
        assert.strictEqual(multiply(1,2), 2)
    })
    await it.test('add 2 * 3 to equal 6', () => {
        assert.strictEqual(multiply(2,3), 6)
    })
    await it.test('add 4 * 2 to equal 8', () => {
        assert.strictEqual(multiply(4,2), 8)
    })
})

test('multiply', () => {
    assert.strictEqual(multiply(1,2), 2)
})