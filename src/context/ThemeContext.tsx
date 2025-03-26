import React, { createContext, useState, useContext, useEffect, ReactNode } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { lightTheme, darkTheme } from '../theme/Themes';
import { Platform } from 'react-native';

interface ThemeContextType {
  isLightTheme: boolean;
  theme: typeof lightTheme | typeof darkTheme;
  toggleTheme: () => void;
  platform: 'ios' | 'android' | 'web' | 'windows' | 'macos' | 'unknown';
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// Hook personalizado para usar el contexto
export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme debe usarse dentro de un ThemeProvider');
  }
  return context;
};

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [isLightTheme, setIsLightTheme] = useState<boolean>(true);
  const platform = Platform.OS;

  useEffect(() => {
    const loadTheme = async () => {
      try {
        const storedTheme = await AsyncStorage.getItem('theme');
        setIsLightTheme(storedTheme !== 'darkTheme');
      } catch (error) {
        console.error('Error al cargar el tema:', error);
      }
    };

    loadTheme();
  }, []);

  const toggleTheme = async () => {
    try {
      const newTheme = !isLightTheme;
      setIsLightTheme(newTheme);
      await AsyncStorage.setItem('theme', newTheme ? 'lightTheme' : 'darkTheme');
    } catch (error) {
      console.error('Error al guardar el tema:', error);
    }
  };

  return (
    <ThemeContext.Provider
      value={{
        isLightTheme,
        theme: isLightTheme ? lightTheme : darkTheme,
        toggleTheme,
        platform,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
