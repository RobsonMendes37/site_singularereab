import React, { createContext, useContext, useState, ReactNode } from 'react';

interface AppContextType {
  theme: 'light' | 'dark';
  language: 'pt' | 'en';
  setTheme: (theme: 'light' | 'dark') => void;
  setLanguage: (language: 'pt' | 'en') => void;
  toggleTheme: () => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

interface AppProviderProps {
  children: ReactNode;
}

/**
 * Provider para gerenciar estado global da aplicação
 * Gerencia tema, linguagem e outras configurações globais
 * 
 * @example
 * // Em App.tsx
 * <AppProvider>
 *   <YourApp />
 * </AppProvider>
 * 
 * // Em qualquer componente
 * const { theme, toggleTheme } = useApp();
 */
export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [language, setLanguage] = useState<'pt' | 'en'>('pt');

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  // Aplica o tema ao documento
  React.useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const value = {
    theme,
    language,
    setTheme,
    setLanguage,
    toggleTheme,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

/**
 * Hook para usar o contexto da aplicação
 * 
 * @throws Error se usado fora do AppProvider
 */
export const useApp = (): AppContextType => {
  const context = useContext(AppContext);
  
  if (context === undefined) {
    throw new Error('useApp must be used within an AppProvider');
  }
  
  return context;
};

