# Testing Guide

## Overview

This project uses **Vitest** as the testing framework with **React Testing Library** for component testing.

## Installation

Testing dependencies are included in `package.json` devDependencies:

```bash
npm install
```

## Running Tests

```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage
npm run test:coverage

# Run tests in UI mode
npm run test:ui
```

## Test Structure

Tests are located in `__tests__` folders within their respective directories:

```
src/
├── components/
│   └── __tests__/
│       └── CountUp.test.tsx
├── lib/
│   └── __tests__/
│       ├── utils.test.ts
│       └── seo.test.ts
└── test/
    ├── setup.ts           # Global test setup
    └── utils/
        └── test-utils.tsx # Custom render utilities
```

## Writing Tests

### Component Tests

```typescript
import { describe, it, expect } from 'vitest';
import { render, screen } from '@/test/utils/test-utils';
import MyComponent from '@/components/MyComponent';

describe('MyComponent', () => {
  it('renders correctly', () => {
    render(<MyComponent />);
    expect(screen.getByText('Hello')).toBeInTheDocument();
  });
});
```

### Utility Function Tests

```typescript
import { describe, it, expect } from 'vitest';
import { myUtilFunction } from '@/lib/utils';

describe('myUtilFunction', () => {
  it('returns expected value', () => {
    const result = myUtilFunction('input');
    expect(result).toBe('expected');
  });
});
```

## Coverage Requirements

- **Target:** 80% code coverage
- **Critical paths:** 100% coverage required
- **UI components:** Focus on user interactions

## Best Practices

1. **Test user behavior, not implementation**
2. **Use semantic queries** (getByRole, getByLabelText)
3. **Avoid testing internal state**
4. **Mock external dependencies**
5. **Keep tests simple and focused**

## Mocking

### API Calls

```typescript
import { vi } from 'vitest';

vi.mock('@/lib/api', () => ({
  apiClient: {
    submitContactForm: vi.fn().mockResolvedValue({ success: true }),
  },
}));
```

### React Router

Router is included in the test utilities wrapper automatically.

## Continuous Integration

Tests run automatically on:
- Pull requests
- Commits to main branch
- Before deployment

## Troubleshooting

### Common Issues

**Issue:** Tests fail with "Cannot find module"
**Solution:** Check import paths and ensure dependencies are installed

**Issue:** Component not rendering
**Solution:** Verify all providers are wrapped in test-utils

**Issue:** Async tests timing out
**Solution:** Use `waitFor` or `findBy` queries for async operations

## Additional Resources

- [Vitest Documentation](https://vitest.dev/)
- [React Testing Library](https://testing-library.com/react)
- [Testing Best Practices](https://kentcdodds.com/blog/common-mistakes-with-react-testing-library)
