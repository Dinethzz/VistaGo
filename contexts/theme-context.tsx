/**
 * Theme Context
 * 
 * Manages the application's color scheme and theme preferences.
 * 
 * Features:
 * - System/Light/Dark theme modes
 * - Automatic system theme detection
 * - Persistent theme storage
 * - Type-safe theme operations
 */

import { STORAGE_KEYS } from '@/constants/app';
import { useColorScheme } from '@/hooks/use-color-scheme';
import { ColorScheme } from '@/types';
import { createApiError } from '@/utils/helpers';
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { createContext, ReactNode, useContext, useEffect, useState } from 'react';

interface ThemeContextType {
  colorScheme: 'light' | 'dark';
  themeMode: ColorScheme;
  setThemeMode: (mode: ColorScheme) => Promise<void>;
  isDark: boolean;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeProviderProps {
  children: ReactNode;
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  const systemColorScheme = useColorScheme();
  const [themeMode, setThemeModeState] = useState<ColorScheme>('system');
  const [isLoaded, setIsLoaded] = useState(false);

  // Load saved theme preference
  useEffect(() => {
    loadTheme();
  }, []);

  const loadTheme = async (): Promise<void> => {
    try {
      const saved = await AsyncStorage.getItem(STORAGE_KEYS.THEME);
      if (saved && (saved === 'light' || saved === 'dark' || saved === 'system')) {
        setThemeModeState(saved as ColorScheme);
      }
    } catch (error) {
      const apiError = createApiError(error);
      console.error('Error loading theme:', apiError.message);
    } finally {
      setIsLoaded(true);
    }
  };

  const setThemeMode = async (mode: ColorScheme): Promise<void> => {
    try {
      await AsyncStorage.setItem(STORAGE_KEYS.THEME, mode);
      setThemeModeState(mode);
    } catch (error) {
      const apiError = createApiError(error);
      console.error('Error saving theme:', apiError.message);
      throw new Error(apiError.message);
    }
  };

  // Determine actual color scheme based on mode
  const colorScheme = themeMode === 'system' 
    ? (systemColorScheme ?? 'light') 
    : themeMode;

  const isDark = colorScheme === 'dark';

  // Don't block rendering, just use default while loading
  return (
    <ThemeContext.Provider
      value={{
        colorScheme,
        themeMode,
        setThemeMode,
        isDark,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
