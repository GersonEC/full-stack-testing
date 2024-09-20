import { expect, test } from 'vitest'
import { getErrorMessage } from './misc.tsx'

test('Error object return message', () => {
	const error = new Error('This is an error')
	expect(getErrorMessage(error)).toBe('This is an error')
})

test('String returns itself', () => {
	const error = 'This is another error'
	expect(getErrorMessage(error)).toBe('This is another error')
})

test('undefined falls back to Unknown', () => {
	const error = undefined
	expect(getErrorMessage(error)).toBe('Unknown Error')
})
