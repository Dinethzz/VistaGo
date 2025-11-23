import { DestinationCard } from '@/components/destination-card';
import { destinations } from '@/constants/destinations';
import { Ionicons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import { useAuth } from '@/contexts/auth-context';

export default function HomeScreen() {
  const { user } = useAuth();
  const featuredDestinations = destinations.slice(0, 3);
  const popularDestinations = destinations.slice(3, 6);

  const categories = [
    { id: 'beach', name: 'Beach', icon: 'water' as const },
    { id: 'mountain', name: 'Mountain', icon: 'triangle' as const },
    { id: 'city', name: 'City', icon: 'business' as const },
    { id: 'adventure', name: 'Adventure', icon: 'rocket' as const },
    { id: 'cultural', name: 'Cultural', icon: 'book' as const },
  ];

  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <View style={styles.headerLeft}>
            {user?.image && (
              <Image 
                source={{ uri: user.image }} 
                style={styles.profileImage}
              />
            )}
            <View>
              <Text style={styles.greeting}>Hello, {user?.firstName || 'Traveler'}!</Text>
              <Text style={styles.title}>Where do you want to go?</Text>
            </View>
          </View>
          <TouchableOpacity style={styles.notificationButton}>
            <Ionicons name="notifications-outline" size={24} color="#333" />
          </TouchableOpacity>
        </View>

        {/* Search Bar */}
        <TouchableOpacity style={styles.searchBar}>
          <Ionicons name="search-outline" size={20} color="#999" />
          <Text style={styles.searchPlaceholder}>Search destinations...</Text>
        </TouchableOpacity>

        {/* Categories */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Categories</Text>
          <ScrollView 
            horizontal 
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.categoriesContainer}
          >
            {categories.map((category) => (
              <TouchableOpacity key={category.id} style={styles.categoryCard}>
                <View style={styles.categoryIcon}>
                  <Ionicons name={category.icon} size={24} color="#007AFF" />
                </View>
                <Text style={styles.categoryName}>{category.name}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        {/* Featured Destinations */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Featured Destinations</Text>
            <TouchableOpacity>
              <Text style={styles.seeAll}>See all</Text>
            </TouchableOpacity>
          </View>
          <ScrollView 
            horizontal 
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.horizontalScroll}
          >
            {featuredDestinations.map((destination) => (
              <DestinationCard 
                key={destination.id} 
                destination={destination}
                variant="small"
              />
            ))}
          </ScrollView>
        </View>

        {/* Popular Destinations */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Popular Destinations</Text>
            <TouchableOpacity>
              <Text style={styles.seeAll}>See all</Text>
            </TouchableOpacity>
          </View>
          {popularDestinations.map((destination) => (
            <DestinationCard 
              key={destination.id} 
              destination={destination}
            />
          ))}
        </View>
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 60,
    paddingBottom: 20,
    backgroundColor: '#fff',
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    flex: 1,
  },
  profileImage: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#f0f0f0',
  },
  greeting: {
    fontSize: 14,
    color: '#666',
    marginBottom: 4,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: '#333',
  },
  notificationButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#f8f9fa',
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    marginHorizontal: 20,
    marginTop: 20,
    marginBottom: 20,
    paddingHorizontal: 16,
    paddingVertical: 14,
    borderRadius: 12,
    gap: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  searchPlaceholder: {
    fontSize: 15,
    color: '#999',
  },
  section: {
    marginBottom: 24,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#333',
  },
  seeAll: {
    fontSize: 14,
    color: '#007AFF',
    fontWeight: '600',
  },
  categoriesContainer: {
    paddingHorizontal: 20,
    gap: 12,
  },
  categoryCard: {
    alignItems: 'center',
    gap: 8,
  },
  categoryIcon: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#F0F8FF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  categoryName: {
    fontSize: 12,
    color: '#333',
    fontWeight: '500',
  },
  horizontalScroll: {
    paddingHorizontal: 20,
    gap: 16,
  },
});
