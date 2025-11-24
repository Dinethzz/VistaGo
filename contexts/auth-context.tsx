/**
 * Authentication Context
 * Manages user authentication state and operations
 * 
 * Features:
 * - Secure token storage using SecureStore
 * - User session management
 * - Login/Register/Logout operations
 * - Persistent authentication state
 */

import { API_CONFIG, STORAGE_KEYS } from '@/constants/app';
import { LoginResponse, RegisterData, User } from '@/types';
import { createApiError, safeJsonParse } from '@/utils/helpers';
import * as SecureStore from 'expo-secure-store';
import React, { createContext, ReactNode, useContext, useEffect, useState } from 'react';

interface AuthContextType {
  user: User | null;
  isLoading: boolean;
  isAuthenticated: boolean;
  login: (username: string, password: string) => Promise<void>;
  register: (userData: RegisterData) => Promise<void>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadStoredAuth();
  }, []);

  const loadStoredAuth = async (): Promise<void> => {
    try {
      const [token, userJson] = await Promise.all([
        SecureStore.getItemAsync(STORAGE_KEYS.AUTH_TOKEN),
        SecureStore.getItemAsync(STORAGE_KEYS.AUTH_USER),
      ]);

      if (token && userJson) {
        const storedUser = safeJsonParse<User | null>(userJson, null);
        if (storedUser) {
          setUser(storedUser);
        }
      }
    } catch (error) {
      const apiError = createApiError(error);
      console.error('Error loading auth:', apiError.message);
    } finally {
      setIsLoading(false);
    }
  };

  const login = async (username: string, password: string): Promise<void> => {
    try {
      const response = await fetch(`${API_CONFIG.BASE_URL}${API_CONFIG.ENDPOINTS.LOGIN}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          username,
          password,
          expiresInMins: 30,
        }),
      });

      if (!response.ok) {
        throw new Error('Invalid credentials');
      }

      const data: LoginResponse = await response.json();

      const userData: User = {
        id: data.id,
        username: data.username,
        email: data.email,
        firstName: data.firstName,
        lastName: data.lastName,
        gender: data.gender,
        image: data.image,
      };

      // Ensure token is a string
      const token = String(data.token || data.accessToken || '');
      
      await Promise.all([
        SecureStore.setItemAsync(STORAGE_KEYS.AUTH_TOKEN, token),
        SecureStore.setItemAsync(STORAGE_KEYS.AUTH_USER, JSON.stringify(userData)),
      ]);

      setUser(userData);
    } catch (error) {
      const apiError = createApiError(error);
      console.error('Login error:', apiError.message);
      throw new Error(apiError.message);
    }
  };

  const register = async (userData: RegisterData) => {
    try {
      // DummyJSON doesn't have real registration, so we'll simulate it
      const response = await fetch('https://dummyjson.com/users/add', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userData),
      });

      if (!response.ok) {
        throw new Error('Registration failed');
      }

      const data = await response.json();

      // After registration, automatically log in with the test user
      // Using DummyJSON test credentials
      await login('emilys', 'emilyspass');
    } catch (error) {
      const apiError = createApiError(error);
      console.error('Registration error:', apiError.message);
      throw new Error(apiError.message);
    }
  };

  const logout = async (): Promise<void> => {
    try {
      await Promise.all([
        SecureStore.deleteItemAsync(STORAGE_KEYS.AUTH_TOKEN),
        SecureStore.deleteItemAsync(STORAGE_KEYS.AUTH_USER),
      ]);
      setUser(null);
    } catch (error) {
      const apiError = createApiError(error);
      console.error('Logout error:', apiError.message);
      throw new Error(apiError.message);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isLoading,
        isAuthenticated: !!user,
        login,
        register,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
