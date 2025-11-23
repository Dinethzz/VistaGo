# VistaGo - Travel Destination App 🌍✈️

A beautiful React Native mobile application for discovering and exploring travel destinations around the world. Built with Expo and featuring an intuitive UI for browsing destinations, searching, filtering, and viewing detailed information.

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
│   │   ├── explore.tsx        # Explore screen
│   │   └── _layout.tsx        # Tab navigation layout
│   ├── destination/
│   │   └── [id].tsx           # Dynamic destination details
│   └── _layout.tsx            # Root layout
├── components/
│   ├── destination-card.tsx   # Reusable destination card
│   └── ui/                    # UI components
├── constants/
│   ├── destinations.ts        # Destination data and types
│   └── theme.ts               # Theme configuration
└── assets/                    # Images and fonts
```

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
