# 🧪 Testing Dependencies Installation Guide

## Quick Install

To install all testing dependencies at once, run:

```bash
npm install --save-dev vitest @vitest/ui @vitest/coverage-v8 jsdom @testing-library/react @testing-library/jest-dom @testing-library/user-event
```

## Individual Packages

If you prefer to understand each dependency:

### Core Testing Framework
```bash
npm install --save-dev vitest
npm install --save-dev @vitest/ui
npm install --save-dev @vitest/coverage-v8
```

### Testing Environment
```bash
npm install --save-dev jsdom
```

### React Testing Libraries
```bash
npm install --save-dev @testing-library/react
npm install --save-dev @testing-library/jest-dom
npm install --save-dev @testing-library/user-event
```

## Verification

After installation, verify the setup:

```bash
# Check if packages are installed
npm list vitest @testing-library/react

# Run tests (should show no tests found initially)
npm test

# Open test UI
npm run test:ui
```

## What Each Package Does

| Package | Purpose |
|---------|---------|
| `vitest` | Fast unit test framework (Vite-native) |
| `@vitest/ui` | Visual test runner interface |
| `@vitest/coverage-v8` | Code coverage reporting |
| `jsdom` | DOM implementation for Node.js |
| `@testing-library/react` | React component testing utilities |
| `@testing-library/jest-dom` | Custom matchers for DOM assertions |
| `@testing-library/user-event` | Simulate user interactions |

## Expected devDependencies Section

After installation, your `package.json` should include:

```json
"devDependencies": {
  "@testing-library/jest-dom": "^6.x.x",
  "@testing-library/react": "^14.x.x",
  "@testing-library/user-event": "^14.x.x",
  "@vitest/coverage-v8": "^1.x.x",
  "@vitest/ui": "^1.x.x",
  "jsdom": "^24.x.x",
  "vitest": "^1.x.x",
  // ... existing devDependencies
}
```

## Next Steps

1. ✅ Install dependencies (above)
2. ✅ Configuration files already created:
   - `vitest.config.ts`
   - `src/test/setup.ts`
   - `src/test/utils/test-utils.tsx`
3. ✅ Sample tests created in `__tests__` folders
4. 📝 Read `TESTING.md` for usage guide
5. 🚀 Start writing tests for your components

## Troubleshooting

### Issue: Module not found errors
**Solution:** Make sure all packages are installed and restart your IDE

### Issue: TypeScript errors in test files
**Solution:** Ensure `vitest/globals` is added to `tsconfig.json`:
```json
{
  "compilerOptions": {
    "types": ["vitest/globals", "@testing-library/jest-dom"]
  }
}
```

### Issue: Tests not finding components
**Solution:** Check that path aliases are correctly configured in `vitest.config.ts`

## Running Your First Test

After installation:

```bash
# Run in watch mode (recommended for development)
npm test

# Run once (useful for CI/CD)
npm test -- --run

# View coverage report
npm run test:coverage
```

## Integration with CI/CD

The test suite is ready for GitHub Actions, GitLab CI, or any CI/CD platform:

```yaml
# Example GitHub Actions workflow
- name: Run tests
  run: npm test -- --run
  
- name: Generate coverage
  run: npm run test:coverage
```

---

**Note:** Testing dependencies are optional for production deployment but **highly recommended** for development and maintenance.
