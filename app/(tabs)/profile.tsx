import { useAuth } from '@/contexts/auth-context';
import { useTheme } from '@/contexts/theme-context';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Alert, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function ProfileScreen() {
  const { user, logout } = useAuth();
  const { themeMode, setThemeMode, isDark } = useTheme();
  const router = useRouter();

  const handleLogout = () => {
    Alert.alert(
      'Logout',
      'Are you sure you want to logout?',
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Logout',
          style: 'destructive',
          onPress: async () => {
            await logout();
            router.replace('/auth/login');
          },
        },
      ]
    );
  };

  const menuItems = [
    { id: 'bookings', icon: 'calendar-outline', label: 'My Bookings', badge: null },
    { id: 'favorites', icon: 'heart-outline', label: 'Favorites', badge: null },
    { id: 'settings', icon: 'settings-outline', label: 'Settings', badge: null },
    { id: 'help', icon: 'help-circle-outline', label: 'Help & Support', badge: null },
    { id: 'about', icon: 'information-circle-outline', label: 'About', badge: null },
  ];

  const themeOptions = [
    { value: 'system' as const, label: 'System', icon: 'phone-portrait-outline' },
    { value: 'light' as const, label: 'Light', icon: 'sunny-outline' },
    { value: 'dark' as const, label: 'Dark', icon: 'moon-outline' },
  ];

  return (
    <View style={[styles.container, isDark && styles.containerDark]}>
      <StatusBar style={isDark ? 'light' : 'dark'} />
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={[styles.header, isDark && styles.headerDark]}>
          <Text style={[styles.headerTitle, isDark && styles.headerTitleDark]}>Profile</Text>
        </View>

        {/* Profile Card */}
        <View style={[styles.profileCard, isDark && styles.profileCardDark]}>
          <Image 
            source={{ uri: user?.image || 'https://via.placeholder.com/150' }} 
            style={styles.avatar}
          />
          <Text style={[styles.name, isDark && styles.nameDark]}>
            {user?.firstName} {user?.lastName}
          </Text>
          <Text style={styles.username}>@{user?.username}</Text>
          <Text style={[styles.email, isDark && styles.emailDark]}>{user?.email}</Text>

          <TouchableOpacity style={styles.editButton}>
            <Ionicons name="pencil" size={16} color="#007AFF" />
            <Text style={styles.editButtonText}>Edit Profile</Text>
          </TouchableOpacity>
        </View>

        {/* Stats */}
        <View style={[styles.statsContainer, isDark && styles.statsContainerDark]}>
          <View style={styles.statItem}>
            <Text style={[styles.statValue, isDark && styles.statValueDark]}>12</Text>
            <Text style={[styles.statLabel, isDark && styles.statLabelDark]}>Trips</Text>
          </View>
          <View style={[styles.statDivider, isDark && styles.statDividerDark]} />
          <View style={styles.statItem}>
            <Text style={[styles.statValue, isDark && styles.statValueDark]}>24</Text>
            <Text style={[styles.statLabel, isDark && styles.statLabelDark]}>Favorites</Text>
          </View>
          <View style={[styles.statDivider, isDark && styles.statDividerDark]} />
          <View style={styles.statItem}>
            <Text style={[styles.statValue, isDark && styles.statValueDark]}>8</Text>
            <Text style={[styles.statLabel, isDark && styles.statLabelDark]}>Reviews</Text>
          </View>
        </View>

        {/* Theme Selection */}
        <View style={[styles.themeSection, isDark && styles.themeSectionDark]}>
          <Text style={[styles.themeSectionTitle, isDark && styles.themeSectionTitleDark]}>Appearance</Text>
          <View style={styles.themeOptions}>
            {themeOptions.map((option) => (
              <TouchableOpacity
                key={option.value}
                style={[
                  styles.themeOption,
                  themeMode === option.value && styles.themeOptionActive,
                  isDark && styles.themeOptionDark,
                  themeMode === option.value && isDark && styles.themeOptionActiveDark,
                ]}
                onPress={() => setThemeMode(option.value)}
              >
                <Ionicons 
                  name={option.icon as any} 
                  size={24} 
                  color={themeMode === option.value ? '#007AFF' : (isDark ? '#999' : '#666')} 
                />
                <Text style={[
                  styles.themeOptionText,
                  themeMode === option.value && styles.themeOptionTextActive,
                  isDark && styles.themeOptionTextDark,
                ]}>
                  {option.label}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Menu Items */}
        <View style={[styles.menuSection, isDark && styles.menuSectionDark]}>
          {menuItems.map((item, index) => (
            <TouchableOpacity
              key={item.id}
              style={[
                styles.menuItem,
                index === menuItems.length - 1 && styles.menuItemLast,
                isDark && styles.menuItemDark,
              ]}
            >
              <View style={styles.menuItemLeft}>
                <View style={[styles.menuIconContainer, isDark && styles.menuIconContainerDark]}>
                  <Ionicons name={item.icon as any} size={22} color="#007AFF" />
                </View>
                <Text style={[styles.menuItemText, isDark && styles.menuItemTextDark]}>{item.label}</Text>
              </View>
              <Ionicons name="chevron-forward" size={20} color={isDark ? '#666' : '#999'} />
            </TouchableOpacity>
          ))}
        </View>

        {/* Logout Button */}
        <TouchableOpacity style={[styles.logoutButton, isDark && styles.logoutButtonDark]} onPress={handleLogout}>
          <Ionicons name="log-out-outline" size={22} color="#FF3B30" />
          <Text style={styles.logoutButtonText}>Logout</Text>
        </TouchableOpacity>

        {/* App Version */}
        <Text style={styles.version}>Version 1.0.0</Text>
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
  headerTitle: {
    fontSize: 28,
    fontWeight: '700',
    color: '#333',
  },
  profileCard: {
    backgroundColor: '#fff',
    marginHorizontal: 20,
    marginTop: 20,
    borderRadius: 16,
    padding: 24,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 16,
    backgroundColor: '#f0f0f0',
  },
  name: {
    fontSize: 24,
    fontWeight: '700',
    color: '#333',
    marginBottom: 4,
  },
  username: {
    fontSize: 16,
    color: '#007AFF',
    marginBottom: 4,
  },
  email: {
    fontSize: 14,
    color: '#666',
    marginBottom: 16,
  },
  editButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: '#F0F8FF',
    borderRadius: 20,
    gap: 6,
  },
  editButtonText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#007AFF',
  },
  statsContainer: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    marginHorizontal: 20,
    marginTop: 16,
    borderRadius: 16,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  statItem: {
    flex: 1,
    alignItems: 'center',
  },
  statValue: {
    fontSize: 24,
    fontWeight: '700',
    color: '#333',
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 12,
    color: '#666',
  },
  statDivider: {
    width: 1,
    backgroundColor: '#f0f0f0',
  },
  menuSection: {
    backgroundColor: '#fff',
    marginHorizontal: 20,
    marginTop: 16,
    borderRadius: 16,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 16,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  menuItemLast: {
    borderBottomWidth: 0,
  },
  menuItemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  menuIconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#F0F8FF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  menuItemText: {
    fontSize: 16,
    color: '#333',
  },
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    marginHorizontal: 20,
    marginTop: 16,
    borderRadius: 16,
    padding: 16,
    gap: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  logoutButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FF3B30',
  },
  version: {
    textAlign: 'center',
    fontSize: 12,
    color: '#999',
    marginTop: 24,
    marginBottom: 40,
  },
  // Dark mode styles
  containerDark: {
    backgroundColor: '#000',
  },
  headerDark: {
    backgroundColor: '#1c1c1e',
  },
  headerTitleDark: {
    color: '#fff',
  },
  profileCardDark: {
    backgroundColor: '#1c1c1e',
  },
  nameDark: {
    color: '#fff',
  },
  emailDark: {
    color: '#999',
  },
  statsContainerDark: {
    backgroundColor: '#1c1c1e',
  },
  statValueDark: {
    color: '#fff',
  },
  statLabelDark: {
    color: '#999',
  },
  statDividerDark: {
    backgroundColor: '#2c2c2e',
  },
  themeSection: {
    backgroundColor: '#fff',
    marginHorizontal: 20,
    marginTop: 16,
    borderRadius: 16,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  themeSectionDark: {
    backgroundColor: '#1c1c1e',
  },
  themeSectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 12,
  },
  themeSectionTitleDark: {
    color: '#fff',
  },
  themeOptions: {
    flexDirection: 'row',
    gap: 12,
  },
  themeOption: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 16,
    backgroundColor: '#f8f9fa',
    borderRadius: 12,
    borderWidth: 2,
    borderColor: 'transparent',
    gap: 8,
  },
  themeOptionDark: {
    backgroundColor: '#2c2c2e',
  },
  themeOptionActive: {
    backgroundColor: '#F0F8FF',
    borderColor: '#007AFF',
  },
  themeOptionActiveDark: {
    backgroundColor: '#1a2332',
    borderColor: '#007AFF',
  },
  themeOptionText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#666',
  },
  themeOptionTextDark: {
    color: '#999',
  },
  themeOptionTextActive: {
    color: '#007AFF',
  },
  menuSectionDark: {
    backgroundColor: '#1c1c1e',
  },
  menuItemDark: {
    borderBottomColor: '#2c2c2e',
  },
  menuIconContainerDark: {
    backgroundColor: '#2c2c2e',
  },
  menuItemTextDark: {
    color: '#fff',
  },
  logoutButtonDark: {
    backgroundColor: '#1c1c1e',
  },
});
