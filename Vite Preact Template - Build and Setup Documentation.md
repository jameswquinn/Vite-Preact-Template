# Vite Preact Template - Build and Setup Documentation

This document contains all the necessary files and configurations for the Vite Preact Template. You can copy and paste these files directly into your GitHub repository.

## File Structure

```
/
├── src/
│   ├── components/
│   │   ├── PlaceholderComponent.tsx
│   │   ├── PlaceholderComponent.css
│   │   └── PlaceholderComponent.test.tsx
│   ├── App.tsx
│   └── index.ts
├── vite.config.ts
├── tsconfig.json
├── jest.config.js
├── .eslintrc.json
├── .versionrc
├── package.json
└── README.md
```

## File Contents

### src/components/PlaceholderComponent.tsx

```typescript
import { h } from 'preact';
import { useState } from 'preact/hooks';
import styled from 'styled-components';
import './PlaceholderComponent.css';

// Example of using styled-components for CSS-in-JS
// You can modify this or use your preferred styling solution
const StyledButton = styled.button`
  background-color: #0070f3;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0051a2;
  }
`;

const PlaceholderComponent = () => {
  // Example of using useState hook for state management
  // Replace this with your own state logic as needed
  const [count, setCount] = useState(0);

  return (
    <div className="placeholder-container">
      {/* Replace this with your own JSX */}
      <h1>Hello World</h1>
      <p>Click Count: {count}</p>
      <StyledButton onClick={() => setCount(count + 1)}>
        Increment
      </StyledButton>
    </div>
  );
};

export default PlaceholderComponent;
```

### src/components/PlaceholderComponent.css

```css
/* Example of using a standard CSS file
   You can modify this or remove it if you prefer to use only CSS-in-JS */
.placeholder-container {
  text-align: center;
  padding: 20px;
  font-family: Arial, sans-serif;
}
```

### src/components/PlaceholderComponent.test.tsx

```typescript
import { h } from 'preact';
import { render, fireEvent } from '@testing-library/preact';
import PlaceholderComponent from './PlaceholderComponent';

describe('PlaceholderComponent', () => {
  it('renders Hello World', () => {
    const { getByText } = render(<PlaceholderComponent />);
    expect(getByText('Hello World')).toBeTruthy();
  });

  it('increments count when button is clicked', () => {
    const { getByText } = render(<PlaceholderComponent />);
    const button = getByText('Increment');
    
    expect(getByText('Click Count: 0')).toBeTruthy();
    fireEvent.click(button);
    expect(getByText('Click Count: 1')).toBeTruthy();
  });
});
```

### src/App.tsx

```typescript
import { h } from 'preact';
import PlaceholderComponent from './components/PlaceholderComponent';

// This is the main App component
// Add your routing logic here if needed, or integrate with your preferred routing library
const App = () => (
  <div>
    <PlaceholderComponent />
    {/* Add more components or routes here as your app grows */}
  </div>
);

export default App;
```

### src/index.ts

```typescript
export { default as App } from './App';
export { default as PlaceholderComponent } from './components/PlaceholderComponent';
```

### vite.config.ts

```typescript
import { defineConfig } from 'vite';
import preact from '@preact/preset-vite';

export default defineConfig({
  plugins: [preact()],
  build: {
    lib: {
      entry: 'src/index.ts',
      name: 'MyLib',
      fileName: (format) => `my-lib.${format}.js`,
    },
    rollupOptions: {
      external: ['preact'],
      output: {
        globals: {
          preact: 'Preact',
        },
      },
    },
    cssCodeSplit: true,
  },
});
```

### tsconfig.json

```json
{
  "compilerOptions": {
    "target": "ESNext",
    "useDefineForClassFields": true,
    "lib": ["DOM", "DOM.Iterable", "ESNext"],
    "allowJs": false,
    "skipLibCheck": true,
    "esModuleInterop": false,
    "allowSyntheticDefaultImports": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "module": "ESNext",
    "moduleResolution": "Node",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx",
    "jsxImportSource": "preact",
    "declaration": true
  },
  "include": ["src"],
  "references": [{ "path": "./tsconfig.node.json" }]
}
```

### tsconfig.node.json

```json
{
  "compilerOptions": {
    "composite": true,
    "module": "ESNext",
    "moduleResolution": "Node",
    "allowSyntheticDefaultImports": true
  },
  "include": ["vite.config.ts"]
}
```

### jest.config.js

```javascript
export default {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '^preact$': '<rootDir>/node_modules/preact/dist/preact.min.js',
  },
  transform: {
    '^.+\\.tsx?$': ['ts-jest', {
      tsconfig: 'tsconfig.json',
      babel: true,
      useESM: true,
    }],
  },
  extensionsToTreatAsEsm: ['.ts', '.tsx'],
  collectCoverage: true,
  coverageDirectory: "coverage",
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80
    }
  }
};
```

### .eslintrc.json

```json
{
  "env": {
    "browser": true,
    "es2021": true,
    "jest": true
  },
  "extends": [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:preact/recommended"
  ],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": 12,
    "sourceType": "module"
  },
  "plugins": ["@typescript-eslint", "preact"],
  "rules": {
    "@typescript-eslint/explicit-module-boundary-types": "error",
    "@typescript-eslint/no-explicit-any": "error",
    "preact/no-unused-props": "error"
  }
}
```

### .versionrc

```json
{
  "types": [
    {"type": "feat", "section": "Features"},
    {"type": "fix", "section": "Bug Fixes"},
    {"type": "chore", "hidden": true},
    {"type": "docs", "hidden": true},
    {"type": "style", "hidden": true},
    {"type": "refactor", "hidden": true},
    {"type": "perf", "hidden": true},
    {"type": "test", "hidden": true}
  ],
  "commitUrlFormat": "https://github.com/your-username/your-repo/commit/{{hash}}",
  "compareUrlFormat": "https://github.com/your-username/your-repo/compare/{{previousTag}}...{{currentTag}}"
}
```

### package.json

```json
{
  "name": "vite-preact-lib-template",
  "version": "0.1.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "preview": "vite preview",
    "test": "jest",
    "lint": "eslint src --ext ts,tsx --report-unused-disable-directives --max-warnings 0",
    "prepare": "husky install",
    "release": "standard-version"
  },
  "dependencies": {
    "preact": "^10.13.1",
    "styled-components": "^5.3.9"
  },
  "devDependencies": {
    "@preact/preset-vite": "^2.5.0",
    "@testing-library/preact": "^3.2.3",
    "@types/jest": "^29.5.0",
    "@types/styled-components": "^5.1.26",
    "@typescript-eslint/eslint-plugin": "^5.57.1",
    "@typescript-eslint/parser": "^5.57.1",
    "eslint": "^8.38.0",
    "eslint-plugin-preact": "^0.1.0",
    "husky": "^8.0.0",
    "jest": "^29.5.0",
    "jest-environment-jsdom": "^29.5.0",
    "standard-version": "^9.5.0",
    "ts-jest": "^29.1.0",
    "typescript": "^5.0.2",
    "vite": "^4.3.0"
  },
  "files": [
    "dist"
  ],
  "main": "./dist/my-lib.umd.js",
  "module": "./dist/my-lib.es.js",
  "types": "./dist/index.d.ts",
  "exports": {
    ".": {
      "import": "./dist/my-lib.es.js",
      "require": "./dist/my-lib.umd.js"
    }
  }
}
```

### README.md

```markdown
# Vite Preact Template

This is a template for creating Preact applications using Vite, with TypeScript, Jest for testing, ESLint for linting, and styled-components for CSS-in-JS styling. It also includes a basic example component and automatic versioning setup.

## Features

- Vite for fast development and optimized builds
- Preact for efficient UI rendering
- TypeScript for type safety
- Jest and Testing Library for unit testing
- ESLint for code linting
- Styled-components for CSS-in-JS (with an example of standard CSS as well)
- Automatic versioning and changelog generation

## Getting Started

To use this template, follow these steps:

1. Clone this repository or use it as a template for your new project
2. Install dependencies:
   ```
   npm install
   ```
3. Start the development server:
   ```
   npm run dev
   ```

## Available Scripts

- `npm run dev`: Start the development server
- `npm run build`: Build the project for production
- `npm run preview`: Preview the production build locally
- `npm test`: Run the test suite
- `npm run lint`: Lint the codebase
- `npm run release`: Generate a new version and update the changelog

## Project Structure

```
/
├── src/
│   ├── components/
│   │   ├── PlaceholderComponent.tsx
│   │   ├── PlaceholderComponent.css
│   │   └── PlaceholderComponent.test.tsx
│   ├── App.tsx
│   └── index.ts
├── vite.config.ts
├── tsconfig.json
├── jest.config.js
├── .eslintrc.json
├── .versionrc
└── package.json
```

## Extending the Template

### Adding New Components

1. Create a new file in the `src/components/` directory
2. Write your component using Preact's functional component syntax
3. Use hooks for state management and side effects
4. Add styles using styled-components or create a separate CSS file
5. Create a test file for your component

### Routing

This template doesn't include routing by default. To add routing:

1. Install your preferred routing library (e.g., `preact-router`)
2. Set up routes in the `App.tsx` file

### State Management

For simple state management, use Preact's built-in `useState` and `useReducer` hooks. For more complex state management:

1. Choose a state management library (e.g., Redux, MobX)
2. Install the library and its Preact bindings
3. Set up your store and wrap your app with the necessary providers

### Styling

This template includes both styled-components and an example of standard CSS. Choose the method that best fits your project:

- For CSS-in-JS: Use styled-components as demonstrated in `PlaceholderComponent.tsx`
- For standard CSS: Create `.css` files and import them in your components

### Testing

Add new tests in `*.test.tsx` files alongside your components. Run tests using `npm test`.

### Linting

Modify the ESLint rules in `.eslintrc.json` to match your code style preferences.

## Deployment

To deploy your app:

1. Run `npm run build` to create a production build
2. Deploy the contents of the `dist/` directory to your hosting provider

## Versioning

This template uses `standard-version` for automatic versioning and changelog generation. To create a new version:

1. Make your changes and commit them
2. Run `npm run release`
3. Push the new version and tags to your repository

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
```

This compilation includes all the necessary files and configurations for the Vite Preact Template. You can copy and paste these files directly into your GitHub repository to set up the project structure.
