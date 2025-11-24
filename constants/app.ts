/**
 * Application-wide constants
 * Centralized configuration for consistent values across the app
 */

// Storage Keys
export const STORAGE_KEYS = {
  AUTH_TOKEN: 'auth_token',
  AUTH_USER: 'auth_user',
  THEME: '@vistago_theme',
  FAVORITES: '@vistago_favorites',
} as const;

// API Configuration
export const API_CONFIG = {
  BASE_URL: 'https://dummyjson.com',
  ENDPOINTS: {
    LOGIN: '/auth/login',
    USERS: '/users',
  },
  TIMEOUT: 10000,
} as const;

// App Configuration
export const APP_CONFIG = {
  NAME: 'VistaGo',
  VERSION: '1.0.0',
  FEATURED_DESTINATIONS_COUNT: 3,
  POPULAR_DESTINATIONS_COUNT: 3,
} as const;

// Theme Colors
export const COLORS = {
  LIGHT: {
    PRIMARY: '#007AFF',
    BACKGROUND: '#f8f9fa',
    CARD: '#fff',
    TEXT_PRIMARY: '#333',
    TEXT_SECONDARY: '#666',
    TEXT_TERTIARY: '#999',
    BORDER: '#f0f0f0',
  },
  DARK: {
    PRIMARY: '#007AFF',
    BACKGROUND: '#000',
    CARD: '#1c1c1e',
    CARD_SECONDARY: '#2c2c2e',
    TEXT_PRIMARY: '#fff',
    TEXT_SECONDARY: '#999',
    TEXT_TERTIARY: '#666',
    BORDER: '#2c2c2e',
  },
  COMMON: {
    SUCCESS: '#34C759',
    ERROR: '#FF3B30',
    WARNING: '#FF9500',
    STAR: '#FFD700',
  },
} as const;

// Validation Rules
export const VALIDATION = {
  USERNAME: {
    MIN_LENGTH: 3,
    MAX_LENGTH: 20,
  },
  PASSWORD: {
    MIN_LENGTH: 8,
    REQUIRE_UPPERCASE: true,
    REQUIRE_NUMBER: true,
    REQUIRE_SPECIAL: true,
  },
  EMAIL: {
    PATTERN: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  },
} as const;
