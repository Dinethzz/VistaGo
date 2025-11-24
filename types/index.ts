/**
 * TypeScript type definitions for the VistaGo application
 * Centralized types for better type safety and reusability
 */

// User Types
export interface User {
  id: number;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  gender: string;
  image: string;
}

export interface RegisterData {
  username: string;
  password: string;
  email: string;
  firstName: string;
  lastName: string;
}

// Authentication Types
export interface LoginResponse {
  token?: string;
  accessToken?: string;
  id: number;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  gender: string;
  image: string;
}

// Theme Types
export type ColorScheme = 'light' | 'dark' | 'system';

export interface ThemeColors {
  primary: string;
  background: string;
  card: string;
  text: string;
  border: string;
}

// Destination Types
export type DestinationCategory = 'beach' | 'mountain' | 'city' | 'adventure' | 'cultural';

export interface Destination {
  id: string;
  name: string;
  country: string;
  description: string;
  image: string;
  rating: number;
  price: number;
  duration: string;
  category: DestinationCategory;
  highlights: string[];
  bestTimeToVisit: string;
  activities: string[];
}

// Component Props Types
export interface DestinationCardProps {
  destination: Destination;
  variant?: 'large' | 'small';
}

export interface CategoryItem {
  id: string;
  name: string;
  icon: string;
}

// Error Types
export interface ApiError {
  message: string;
  code?: string;
  statusCode?: number;
}
