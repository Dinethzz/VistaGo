import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/use-color-scheme';
import { FavoritesProvider } from '@/contexts/favorites-context';

export const unstable_settings = {
  anchor: '(tabs)',
};

export default function RootLayout() {
  const colorScheme = useColorScheme();

  return (
    <FavoritesProvider>
      <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
        <Stack>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen 
            name="destination/[id]" 
            options={{ 
              headerShown: false,
              presentation: 'card',
              animation: 'slide_from_right'
            }} 
          />
          <Stack.Screen name="modal" options={{ presentation: 'modal', title: 'VistaGo' }} />
        </Stack>
        <StatusBar style="auto" />
      </ThemeProvider>
    </FavoritesProvider>
  );
}
