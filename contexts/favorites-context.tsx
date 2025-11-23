import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { createContext, ReactNode, useContext, useEffect, useState } from 'react';

const FAVORITES_KEY = '@vistago_favorites';

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

  const loadFavorites = async () => {
    try {
      const stored = await AsyncStorage.getItem(FAVORITES_KEY);
      if (stored) {
        setFavorites(JSON.parse(stored));
      }
    } catch (error) {
      console.error('Error loading favorites:', error);
    } finally {
      setIsLoaded(true);
    }
  };

  const saveFavorites = async (newFavorites: string[]) => {
    try {
      await AsyncStorage.setItem(FAVORITES_KEY, JSON.stringify(newFavorites));
      setFavorites(newFavorites);
    } catch (error) {
      console.error('Error saving favorites:', error);
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
