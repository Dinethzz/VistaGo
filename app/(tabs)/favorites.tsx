import { DestinationCard } from '@/components/destination-card';
import { destinations } from '@/constants/destinations';
import { useFavorites } from '@/contexts/favorites-context';
import { useTheme } from '@/contexts/theme-context';
import { Ionicons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

export default function FavoritesScreen() {
  const { favorites } = useFavorites();
  const { isDark } = useTheme();

  const favoriteDestinations = destinations.filter(dest => 
    favorites.includes(dest.id)
  );

  return (
    <View style={[styles.container, isDark && styles.containerDark]}>
      <StatusBar style={isDark ? 'light' : 'dark'} />
      
      {/* Header */}
      <View style={[styles.header, isDark && styles.headerDark]}>
        <Text style={[styles.title, isDark && styles.titleDark]}>My Favorites</Text>
        <Text style={[styles.subtitle, isDark && styles.subtitleDark]}>
          {favorites.length} {favorites.length === 1 ? 'destination' : 'destinations'} saved
        </Text>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {favoriteDestinations.length > 0 ? (
          <View style={styles.listContainer}>
            {favoriteDestinations.map((destination) => (
              <DestinationCard 
                key={destination.id} 
                destination={destination}
              />
            ))}
          </View>
        ) : (
          <View style={styles.emptyState}>
            <Ionicons name="heart-outline" size={80} color={isDark ? '#444' : '#ccc'} />
            <Text style={[styles.emptyStateTitle, isDark && styles.emptyStateTitleDark]}>No favorites yet</Text>
            <Text style={[styles.emptyStateText, isDark && styles.emptyStateTextDark]}>
              Start adding destinations to your favorites{'\n'}
              to see them here
            </Text>
          </View>
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  header: {
    paddingHorizontal: 20,
    paddingTop: 60,
    paddingBottom: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#333',
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 14,
    color: '#666',
  },
  listContainer: {
    padding: 16,
  },
  emptyState: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 80,
    paddingHorizontal: 40,
  },
  emptyStateTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#999',
    marginTop: 20,
    marginBottom: 8,
  },
  emptyStateText: {
    fontSize: 15,
    color: '#bbb',
    textAlign: 'center',
    lineHeight: 22,
  },
  // Dark mode styles
  containerDark: {
    backgroundColor: '#000',
  },
  headerDark: {
    backgroundColor: '#1c1c1e',
  },
  titleDark: {
    color: '#fff',
  },
  subtitleDark: {
    color: '#999',
  },
  emptyStateTitleDark: {
    color: '#666',
  },
  emptyStateTextDark: {
    color: '#444',
  },
});
