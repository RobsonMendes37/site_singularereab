import { useState, useEffect } from 'react';

/**
 * Hook para gerenciar estado persistido no localStorage
 * 
 * @example
 * const [theme, setTheme] = useLocalStorage('theme', 'light');
 */
export const useLocalStorage = <T>(
  key: string,
  initialValue: T
): [T, (value: T | ((val: T) => T)) => void] => {
  // State para armazenar o valor
  const [storedValue, setStoredValue] = useState<T>(() => {
    if (typeof window === 'undefined') {
      return initialValue;
    }

    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(`Error loading localStorage key "${key}":`, error);
      return initialValue;
    }
  });

  // Retorna uma versão wrapped do setter que persiste no localStorage
  const setValue = (value: T | ((val: T) => T)) => {
    try {
      // Permite que value seja uma função
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      
      // Salva no state
      setStoredValue(valueToStore);
      
      // Salva no localStorage
      if (typeof window !== 'undefined') {
        window.localStorage.setItem(key, JSON.stringify(valueToStore));
      }
    } catch (error) {
      console.error(`Error setting localStorage key "${key}":`, error);
    }
  };

  return [storedValue, setValue];
};

