import { destinations } from '@/constants/destinations';
import { useFavorites } from '@/contexts/favorites-context';
import { Ionicons } from '@expo/vector-icons';
import * as Haptics from 'expo-haptics';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Dimensions, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const { width, height } = Dimensions.get('window');

export default function DestinationDetails() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const router = useRouter();
  const { isFavorite, toggleFavorite } = useFavorites();
  
  const destination = destinations.find(d => d.id === id);

  if (!destination) {
    return (
      <View style={styles.container}>
        <Text>Destination not found</Text>
      </View>
    );
  }

  const favorite = isFavorite(destination.id);

  const handleFavoritePress = async () => {
    await Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
    await toggleFavorite(destination.id);
  };

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.imageContainer}>
          <Image 
            source={{ uri: destination.image }} 
            style={styles.headerImage}
            resizeMode="cover"
          />
          <View style={styles.imageOverlay}>
            <TouchableOpacity 
              style={styles.backButton} 
              onPress={() => router.back()}
            >
              <Ionicons name="arrow-back" size={24} color="#fff" />
            </TouchableOpacity>
            <TouchableOpacity 
              style={styles.favoriteButton}
              onPress={handleFavoritePress}
            >
              <Ionicons 
                name={favorite ? 'heart' : 'heart-outline'} 
                size={24} 
                color={favorite ? '#FF3B30' : '#fff'} 
              />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.content}>
          <View style={styles.header}>
            <View>
              <Text style={styles.name}>{destination.name}</Text>
              <View style={styles.locationRow}>
                <Ionicons name="location" size={18} color="#007AFF" />
                <Text style={styles.country}>{destination.country}</Text>
              </View>
            </View>
            <View style={styles.ratingContainer}>
              <Ionicons name="star" size={20} color="#FFD700" />
              <Text style={styles.rating}>{destination.rating}</Text>
            </View>
          </View>

          <View style={styles.statsContainer}>
            <View style={styles.statItem}>
              <Ionicons name="time-outline" size={24} color="#007AFF" />
              <Text style={styles.statLabel}>Duration</Text>
              <Text style={styles.statValue}>{destination.duration}</Text>
            </View>
            <View style={[styles.statItem, styles.statItemBorder]}>
              <Ionicons name="pricetag-outline" size={24} color="#007AFF" />
              <Text style={styles.statLabel}>Price</Text>
              <Text style={styles.statValue}>${destination.price}</Text>
            </View>
            <View style={styles.statItem}>
              <Ionicons name="sunny-outline" size={24} color="#007AFF" />
              <Text style={styles.statLabel}>Category</Text>
              <Text style={styles.statValue}>{destination.category}</Text>
            </View>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>About</Text>
            <Text style={styles.description}>{destination.description}</Text>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Highlights</Text>
            <View style={styles.chipsContainer}>
              {destination.highlights.map((highlight, index) => (
                <View key={index} style={styles.chip}>
                  <Ionicons name="checkmark-circle" size={16} color="#007AFF" />
                  <Text style={styles.chipText}>{highlight}</Text>
                </View>
              ))}
            </View>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Activities</Text>
            <View style={styles.activitiesList}>
              {destination.activities.map((activity, index) => (
                <View key={index} style={styles.activityItem}>
                  <Ionicons name="chevron-forward" size={20} color="#007AFF" />
                  <Text style={styles.activityText}>{activity}</Text>
                </View>
              ))}
            </View>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Best Time to Visit</Text>
            <View style={styles.timeContainer}>
              <Ionicons name="calendar-outline" size={20} color="#007AFF" />
              <Text style={styles.timeText}>{destination.bestTimeToVisit}</Text>
            </View>
          </View>

          <TouchableOpacity style={styles.bookButton}>
            <Text style={styles.bookButtonText}>Book Now</Text>
            <Ionicons name="arrow-forward" size={20} color="#fff" />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  imageContainer: {
    position: 'relative',
  },
  headerImage: {
    width: width,
    height: height * 0.4,
  },
  imageOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
    paddingTop: 50,
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  favoriteButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 20,
  },
  name: {
    fontSize: 28,
    fontWeight: '700',
    color: '#333',
    marginBottom: 8,
  },
  locationRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  country: {
    fontSize: 16,
    color: '#666',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF9E6',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 20,
    gap: 4,
  },
  rating: {
    fontSize: 16,
    fontWeight: '700',
    color: '#333',
  },
  statsContainer: {
    flexDirection: 'row',
    backgroundColor: '#F8F9FA',
    borderRadius: 12,
    padding: 16,
    marginBottom: 24,
  },
  statItem: {
    flex: 1,
    alignItems: 'center',
    gap: 4,
  },
  statItemBorder: {
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderColor: '#E0E0E0',
  },
  statLabel: {
    fontSize: 12,
    color: '#666',
    marginTop: 4,
  },
  statValue: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
    textTransform: 'capitalize',
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#333',
    marginBottom: 12,
  },
  description: {
    fontSize: 15,
    color: '#666',
    lineHeight: 24,
  },
  chipsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  chip: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F0F8FF',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 20,
    gap: 6,
  },
  chipText: {
    fontSize: 14,
    color: '#333',
  },
  activitiesList: {
    gap: 12,
  },
  activityItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  activityText: {
    fontSize: 15,
    color: '#333',
  },
  timeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F8F9FA',
    padding: 16,
    borderRadius: 12,
    gap: 12,
  },
  timeText: {
    fontSize: 15,
    color: '#333',
    flex: 1,
  },
  bookButton: {
    backgroundColor: '#007AFF',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 18,
    borderRadius: 12,
    marginTop: 8,
    marginBottom: 20,
    gap: 8,
  },
  bookButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '700',
  },
});
