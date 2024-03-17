import { expect, test } from 'vitest'
import App from './App'
import { render, screen } from '@testing-library/react'

test('renders', () => {
    render(<App />)

    expect(screen.getByText('Hello Vitest')).toBeInTheDocument()
})