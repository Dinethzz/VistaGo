import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';
import { useFavorites } from '@/contexts/favorites-context';
import { destinations } from '@/constants/destinations';
import { DestinationCard } from '@/components/destination-card';

export default function FavoritesScreen() {
  const { favorites } = useFavorites();

  const favoriteDestinations = destinations.filter(dest => 
    favorites.includes(dest.id)
  );

  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>My Favorites</Text>
        <Text style={styles.subtitle}>
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
            <Ionicons name="heart-outline" size={80} color="#ccc" />
            <Text style={styles.emptyStateTitle}>No favorites yet</Text>
            <Text style={styles.emptyStateText}>
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
});
