# VistaGo - Travel Destination App 🌍✈️

A beautiful React Native mobile application for discovering and exploring travel destinations around the world. Built with Expo and featuring an intuitive UI for browsing destinations, searching, filtering, and viewing detailed information.

## 🎓 Code Quality & Best Practices

This project follows industry-standard best practices and coding standards:

### Architecture Principles
- **Separation of Concerns**: Code organized into clear layers (UI, business logic, utilities)
- **DRY Principle**: Reusable utility functions and components
- **Type Safety**: Full TypeScript implementation with strict typing
- **Error Handling**: Comprehensive error boundaries and standardized error handling
- **Documentation**: JSDoc comments on all public functions and components

### Code Organization
- **Constants Module** (`constants/app.ts`): Centralized configuration
  - Storage keys for AsyncStorage/SecureStore
  - API endpoints and configuration
  - Theme colors (light/dark mode)
  - Validation rules
  
- **Types Module** (`types/index.ts`): TypeScript definitions
  - User, Auth, and Destination interfaces
  - Theme and color scheme types
  - API error types
  - Component prop types
  
- **Utilities Module** (`utils/helpers.ts`): Pure helper functions
  - Price formatting
  - Safe JSON parsing with fallbacks
  - Standardized error creation
  - Email and password validation
  - Debounce and text truncation

### Context Management
- **Authentication Context**: Secure user authentication with encrypted token storage
- **Favorites Context**: Persistent favorite destinations management
- **Theme Context**: System/light/dark theme support with user preferences

### Error Handling
- **Error Boundaries**: Catch and display errors gracefully without crashes
- **Standardized Errors**: Consistent error format across the application
- **Validation**: Input validation for forms (email, password, username)
- **Fallback UI**: User-friendly error messages and recovery options

### UI/UX Excellence
- **Dark Mode**: Full dark mode support across all screens
- **Responsive Design**: Adaptive layouts for various screen sizes
- **Haptic Feedback**: Touch feedback for better user experience
- **Loading States**: Proper loading indicators during async operations
- **Form Validation**: Real-time validation with error messages

## Features

### 🏠 Home Screen
- Featured destinations carousel
- Popular destinations list
- Category browsing (Beach, Mountain, City, Adventure, Cultural)
- Quick search functionality
- Beautiful destination cards with ratings and pricing

### 🔍 Explore Screen
- Advanced search with real-time filtering
- Category filters (All, Beach, Mountain, City, Adventure, Cultural)
- Sort by rating or price
- Comprehensive destination listings
- Interactive search with clear functionality

### 📱 Destination Details
- High-quality destination images
- Detailed descriptions and information
- Key statistics (Duration, Price, Category)
- Highlights and activities
- Best time to visit information
- Booking functionality

## Tech Stack

- **React Native** - Cross-platform mobile development
- **Expo** - Development platform and tools
- **TypeScript** - Type-safe development
- **Expo Router** - File-based routing
- **Expo Vector Icons** - Beautiful icon library
- **React Navigation** - Navigation solution

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Expo CLI (`npm install -g expo-cli`)

### Installation

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the development server

   ```bash
   npx expo start
   ```

3. Run on your device

   - Scan the QR code with **Expo Go** app (Android/iOS)
   - Press `a` for Android emulator
   - Press `i` for iOS simulator
   - Press `w` for web browser

## Project Structure

```
VistaGo/
├── app/
│   ├── (tabs)/
│   │   ├── index.tsx          # Home screen
│   │   ├── explore.tsx        # Explore screen with filters
│   │   ├── favorites.tsx      # Saved destinations
│   │   ├── profile.tsx        # User profile & settings
│   │   └── _layout.tsx        # Tab navigation layout
│   ├── auth/
│   │   ├── login.tsx          # Login screen with validation
│   │   └── register.tsx       # Registration with validation
│   ├── destination/
│   │   └── [id].tsx           # Dynamic destination details
│   └── _layout.tsx            # Root layout with error boundary
├── components/
│   ├── destination-card.tsx   # Reusable destination card
│   ├── error-boundary.tsx     # Error catching component
│   └── ui/                    # UI components
├── constants/
│   ├── app.ts                 # Centralized constants & config
│   ├── destinations.ts        # Destination data
│   └── theme.ts               # Theme configuration
├── contexts/
│   ├── auth-context.tsx       # Authentication state management
│   ├── favorites-context.tsx  # Favorites state management
│   └── theme-context.tsx      # Theme state management
├── types/
│   └── index.ts               # TypeScript type definitions
├── utils/
│   └── helpers.ts             # Utility functions
└── assets/                    # Images and fonts
```

### Key Directories Explained

#### `/constants`
Centralized configuration to eliminate magic strings and improve maintainability:
- `STORAGE_KEYS`: Keys for AsyncStorage and SecureStore
- `API_CONFIG`: Base URLs, endpoints, and timeouts
- `COLORS`: Light and dark mode color palettes
- `VALIDATION`: Validation rules for forms

#### `/types`
TypeScript interfaces and types for type safety:
- User authentication types
- Destination data structures
- Theme and UI types
- API error types

#### `/utils`
Pure utility functions with no side effects:
- Data formatting (prices, dates, text)
- Safe JSON parsing with fallbacks
- Validation helpers (email, password)
- Debounce and performance utilities

#### `/contexts`
React Context API for global state management:
- Authentication with secure token storage
- Favorites with persistent storage
- Theme with system/light/dark modes

## Key Features Implemented

### Data Model
- Comprehensive destination type with all required fields
- 10+ pre-populated destinations with real data
- Categories: Beach, Mountain, City, Adventure, Cultural
- Rich metadata including ratings, prices, durations, activities

### UI Components
- Custom destination cards with images and overlays
- Category chips and filters
- Search bar with clear functionality
- Sort controls (Rating/Price)
- Responsive layouts

### Navigation
- Tab-based navigation (Home & Explore)
- Stack navigation for destination details
- Smooth transitions and animations
- Back navigation with custom buttons

### Functionality
- Real-time search filtering
- Category-based filtering
- Dynamic sorting (rating/price)
- Detailed destination views
- Favorite functionality (UI ready)
- Booking interface (UI ready)

## Development

### Available Scripts

- `npm start` - Start Expo development server
- `npm run android` - Run on Android device/emulator
- `npm run ios` - Run on iOS simulator
- `npm run web` - Run in web browser
- `npm run lint` - Run ESLint

### Customization

To add new destinations, edit `constants/destinations.ts`:

```typescript
{
  id: 'unique-id',
  name: 'Destination Name',
  country: 'Country',
  description: 'Description...',
  image: 'https://image-url.com',
  rating: 4.8,
  price: 1500,
  duration: '7 days',
  category: 'beach',
  highlights: ['...'],
  bestTimeToVisit: '...',
  activities: ['...']
}
```

## Future Enhancements

- [ ] User authentication
- [ ] Booking system integration
- [ ] Favorites persistence
- [ ] Social sharing
- [ ] User reviews and ratings
- [ ] Map integration
- [ ] Price comparison
- [ ] Travel itinerary planner
- [ ] Offline mode
- [ ] Push notifications

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License.

## Contact

For questions or feedback, please reach out through GitHub issues.

---

Made with ❤️ using React Native and Expo
