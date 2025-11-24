/**
 * Favorites Context
 * 
 * Manages the user's favorite destinations with persistent storage.
 * 
 * Features:
 * - Add/remove destinations from favorites
 * - Check if a destination is favorited
 * - Toggle favorite status
 * - Persistent storage using AsyncStorage
 * - Type-safe operations
 */

import { STORAGE_KEYS } from '@/constants/app';
import { createApiError, safeJsonParse } from '@/utils/helpers';
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { createContext, ReactNode, useContext, useEffect, useState } from 'react';

interface FavoritesContextType {
  favorites: string[];
  addFavorite: (id: string) => Promise<void>;
  removeFavorite: (id: string) => Promise<void>;
  isFavorite: (id: string) => boolean;
  toggleFavorite: (id: string) => Promise<void>;
}

const FavoritesContext = createContext<FavoritesContextType | undefined>(undefined);

interface FavoritesProviderProps {
  children: ReactNode;
}

export function FavoritesProvider({ children }: FavoritesProviderProps) {
  const [favorites, setFavorites] = useState<string[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  // Load favorites from AsyncStorage on mount
  useEffect(() => {
    loadFavorites();
  }, []);

  const loadFavorites = async (): Promise<void> => {
    try {
      const stored = await AsyncStorage.getItem(STORAGE_KEYS.FAVORITES);
      if (stored) {
        const parsed = safeJsonParse<string[]>(stored, []);
        setFavorites(parsed);
      }
    } catch (error) {
      const apiError = createApiError(error);
      console.error('Error loading favorites:', apiError.message);
    } finally {
      setIsLoaded(true);
    }
  };

  const saveFavorites = async (newFavorites: string[]): Promise<void> => {
    try {
      await AsyncStorage.setItem(STORAGE_KEYS.FAVORITES, JSON.stringify(newFavorites));
      setFavorites(newFavorites);
    } catch (error) {
      const apiError = createApiError(error);
      console.error('Error saving favorites:', apiError.message);
      throw new Error(apiError.message);
    }
  };

  const addFavorite = async (id: string) => {
    if (!favorites.includes(id)) {
      const newFavorites = [...favorites, id];
      await saveFavorites(newFavorites);
    }
  };

  const removeFavorite = async (id: string) => {
    const newFavorites = favorites.filter(fav => fav !== id);
    await saveFavorites(newFavorites);
  };

  const isFavorite = (id: string): boolean => {
    return favorites.includes(id);
  };

  const toggleFavorite = async (id: string) => {
    if (isFavorite(id)) {
      await removeFavorite(id);
    } else {
      await addFavorite(id);
    }
  };

  // Don't render children until favorites are loaded
  if (!isLoaded) {
    return null;
  }

  return (
    <FavoritesContext.Provider
      value={{
        favorites,
        addFavorite,
        removeFavorite,
        isFavorite,
        toggleFavorite,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
}

export function useFavorites() {
  const context = useContext(FavoritesContext);
  if (context === undefined) {
    throw new Error('useFavorites must be used within a FavoritesProvider');
  }
  return context;
}
