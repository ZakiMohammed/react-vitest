# React Vitest

Unit testing in React using Vitest.

## Run App

Below command will run the project:

```
npm run dev
```

## Test App

Below command will test the project:

```
npm test
npm run test:ui
npm run test:watch
npm run test:coverage
```

## Initial Vitest Setup

Install Vitest in the application as dev dependency.

```
npm i -D vitest
```

Create `sum.js` file to test using `vitest`:

```
const sum = (a, b) => a + b;

export default sum;
```

Create `sum.test.js` file to write test cases for the same:

```
import { expect, test } from 'vitest'
import sum from './Sum'

test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
});
```

Install the `jsdom` package:

```
npm i -D jsdom
```

Add `jsdom` to `vite.config`:

```
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',       // 👈
  }
})
```

Install React Testing Library:

```
npm i -D @testing-library/jest-dom
npm i -D @testing-library/react
npm i -D @testing-library/user-event
```

Create `App.test.js` file to write test cases for the App.jsx:

```
import { expect, test } from 'vitest'
import App from './App'
import { render, screen } from '@testing-library/react'

test('renders', () => {
    render(<App />)

    expect(screen.getByText('Hello Vitest')).toBeInTheDocument()
})
```

Testing Cases:

- Test With Mock Data
- Test With Mock Data Covering All Branches
- Test User Interactions
- Test State Updates
- Test API Calls
