/**
 * ThemeContext.jsx
 * Provides theme management functionality for the application.
 * Handles light/dark mode switching and persistence via localStorage.
 */

import { createContext, useContext, useEffect, useState } from 'react';

// Create context with a default value
const ThemeContext = createContext({
  theme: 'light',
  setTheme: () => {},
});

/**
 * ThemeProvider component that wraps the application and provides theme context.
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Child components to be wrapped
 * @returns {JSX.Element} ThemeProvider component
 */
export function ThemeProvider({ children }) {
  // Initialize theme from localStorage or system preference
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) return savedTheme;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  });

  // Update document class and localStorage when theme changes
  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

/**
 * Custom hook to access the theme context.
 * @returns {Object} Theme context object containing theme state and setter
 * @throws {Error} If used outside of ThemeProvider
 */
export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
