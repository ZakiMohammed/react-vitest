import { expect, test } from 'vitest'
import App from './App'
import { render, screen } from '@testing-library/react'

test('renders', () => {
    render(<App />)

    expect(screen.getAllByText('React Vitest').length).not.toBe(0);
})