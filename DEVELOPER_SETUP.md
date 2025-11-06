# 🚀 Developer Setup Guide

## Welcome to Al Marsa Insight Hub!

This guide will help you set up the development environment and start contributing.

---

## 📋 **Prerequisites**

Before you begin, ensure you have:

- ✅ **Node.js** v18+ ([Download](https://nodejs.org/))
- ✅ **npm** v9+ (comes with Node.js)
- ✅ **Git** ([Download](https://git-scm.com/))
- ✅ **VS Code** or your preferred editor

---

## 🔧 **Quick Start (5 minutes)**

### 1. Clone the Repository

```bash
git clone <repository-url>
cd almarsa-insight-hub-main
```

### 2. Install Dependencies

```bash
npm install
```

This installs all production dependencies (~150MB).

### 3. Start Development Server

```bash
npm run dev
```

The app will be available at `http://localhost:8080`

✅ **You're ready to code!**

---

## 🧪 **Optional: Setup Testing (Recommended)**

### Install Testing Dependencies

```bash
npm install --save-dev vitest @vitest/ui @vitest/coverage-v8 jsdom @testing-library/react @testing-library/jest-dom @testing-library/user-event
```

### Run Tests

```bash
npm test              # Run tests in watch mode
npm run test:ui       # Open visual test runner
npm run test:coverage # Generate coverage report
```

📚 **See `TESTING_INSTALL.md` for detailed testing setup**

---

## 📁 **Project Structure**

```
almarsa-insight-hub-main/
├── src/
│   ├── pages/          # Page components (11 routes)
│   │   ├── Home.tsx
│   │   ├── Contact.tsx
│   │   └── ...
│   ├── components/     # Reusable components
│   │   ├── ui/        # Shadcn/ui components (44)
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── ...
│   ├── lib/           # Utilities & core logic
│   │   ├── api.ts     # API client
│   │   ├── utils.ts   # Helper functions
│   │   └── i18n.ts    # Translations
│   ├── hooks/         # Custom React hooks
│   ├── data/          # Static data & content
│   ├── styles/        # CSS modules
│   └── types/         # TypeScript types
├── public/            # Static assets
├── .github/           # CI/CD workflows
└── Config files       # Build & deployment
```

---

## 🛠️ **Available Scripts**

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |
| `npm test` | Run tests (if installed) |
| `npm run test:ui` | Open test UI |
| `npm run test:coverage` | Generate coverage report |

---

## 🎨 **Code Style & Standards**

### TypeScript

```typescript
// ✅ Good - Explicit types
interface Props {
  title: string;
  count: number;
}

// ❌ Bad - Implicit any
function process(data) { ... }
```

### React Components

```tsx
// ✅ Good - Functional component with TypeScript
interface ButtonProps {
  label: string;
  onClick: () => void;
}

const Button = ({ label, onClick }: ButtonProps) => {
  return <button onClick={onClick}>{label}</button>;
};
```

### Imports

```typescript
// ✅ Good - Use path aliases
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

// ❌ Bad - Relative paths
import { Button } from '../../components/ui/button';
```

---

## 🧩 **Common Tasks**

### Adding a New Page

1. Create component in `src/pages/`
   ```tsx
   // src/pages/NewPage.tsx
   import Header from '@/components/Header';
   import Footer from '@/components/Footer';
   
   const NewPage = () => {
     return (
       <div>
         <Header />
         <main>{/* Your content */}</main>
         <Footer />
       </div>
     );
   };
   
   export default NewPage;
   ```

2. Add route in `src/App.tsx`
   ```tsx
   const NewPage = lazy(() => import("./pages/NewPage"));
   
   // In Routes:
   <Route path="/new-page" element={<NewPage />} />
   ```

3. Add navigation link in `src/components/Header.tsx`

### Adding a New Component

1. Create in `src/components/`
2. Use TypeScript for props
3. Import from `@/components/YourComponent`

### Updating Styles

- Use Tailwind CSS utility classes
- Custom CSS in `src/styles/`
- Design tokens in `tailwind.config.ts`

### Adding Translations

Update `src/lib/i18n.ts`:
```typescript
export const translations = {
  en: {
    newKey: 'English text',
  },
  ar: {
    newKey: 'Arabic text',
  }
};
```

---

## 🐛 **Debugging**

### Development Tools

The app includes helpful dev tools:

```javascript
// In browser console
window.devtools.checkAPI()      // Test API connection
window.devtools.clearStorage()  // Clear local storage
window.devtools.getRouteInfo()  // Get current route
```

### Common Issues

**Issue:** `Cannot find module '@/...`  
**Fix:** Restart VS Code or dev server

**Issue:** TypeScript errors  
**Fix:** Run `npm install` and restart TypeScript server

**Issue:** Hot reload not working  
**Fix:** Stop server (`Ctrl+C`) and restart with `npm run dev`

---

## 📦 **Dependencies Overview**

### Core Dependencies
- **React 18.3.1** - UI library
- **TypeScript 5.8.3** - Type safety
- **Vite 7.1.9** - Build tool
- **Tailwind CSS 3.4.17** - Styling

### UI Components
- **Radix UI** - Accessible primitives
- **Lucide React** - Icons

### Form Handling
- **React Hook Form** - Form management
- **Zod** - Schema validation

### Routing & State
- **React Router 6.30.1** - Client routing
- **React Query 5.83.0** - Server state

---

## 🔍 **Code Review Checklist**

Before submitting a PR:

- [ ] Code follows TypeScript strict mode
- [ ] No console.log in production code
- [ ] Components are responsive (mobile/tablet/desktop)
- [ ] Accessibility attributes present (aria-label, etc.)
- [ ] Error handling implemented
- [ ] Code is formatted (Prettier/ESLint)
- [ ] No TypeScript errors (`npm run lint`)
- [ ] Tests written (if testing is set up)

---

## 📚 **Helpful Resources**

### Documentation
- [React 18 Docs](https://react.dev/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Radix UI](https://www.radix-ui.com/)
- [Vite Guide](https://vitejs.dev/guide/)

### Project Docs
- `TESTING.md` - Testing guide
- `ISSUES_FIXED.md` - Recent fixes
- `README.md` - Project overview

### Getting Help
- Check existing issues/PRs
- Ask in team chat
- Review code comments
- Check this guide!

---

## 🎯 **Your First Contribution**

### Good First Issues

1. **Add a new service to Services page**
   - Edit `src/data/servicesData.ts`
   - Add icon mapping
   - Update page

2. **Improve accessibility**
   - Add more `aria-label` attributes
   - Test with screen reader
   - Update documentation

3. **Write tests**
   - Pick a component
   - Write tests in `__tests__/`
   - Aim for >80% coverage

4. **Update translations**
   - Complete Arabic translations
   - Test RTL layout
   - Add new translation keys

---

## 🚢 **Deployment**

### Development
- Automatically deploys from `develop` branch
- Preview URL provided in PR

### Production
- Deploys from `main` branch
- Requires approval
- Runs all tests before deployment

### Vercel Setup
1. Project connected to Git
2. Environment variables configured
3. Automatic deployments enabled

---

## 💡 **Tips & Tricks**

### VS Code Extensions (Recommended)
- **ES7+ React/Redux/React-Native snippets**
- **Tailwind CSS IntelliSense**
- **ESLint**
- **Prettier - Code formatter**
- **TypeScript Error Translator**

### Keyboard Shortcuts
- `Ctrl+Shift+P` - Command palette
- `Ctrl+P` - Quick file open
- `Ctrl+`` - Toggle terminal
- `F12` - Go to definition

### Performance
- Use React DevTools Profiler
- Check Lighthouse scores
- Monitor bundle size

---

## ✅ **Checklist: You're Ready When...**

- [ ] Development server running
- [ ] Can navigate all pages
- [ ] Understand project structure
- [ ] Read relevant documentation
- [ ] Know how to run tests
- [ ] Familiar with code standards
- [ ] Can create components
- [ ] Understand Git workflow

---

## 🎉 **Welcome Aboard!**

You're all set to start contributing. If you have questions:

1. Check this guide
2. Review project documentation
3. Ask the team
4. Create an issue

**Happy coding! 🚀**

---

**Last Updated:** October 9, 2025
