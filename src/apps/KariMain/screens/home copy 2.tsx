import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

/* ---------- NAVIGATORS ---------- */

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

/* ---------- GLOBAL COLORS ---------- */

const COLORS = {
  primary: '#FFCC00',
  background: '#F8F9FA',
  white: '#FFFFFF',
  textDark: '#1A1A1A',
  textGray: '#7D7D7D',
  cardGray: '#F2F2F2',
  blue: '#2D5AF0',
};

/* ---------- HOME SCREEN ---------- */

function HomeScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 20 }}
      >
        <View style={styles.header}>
          <Ionicons name="menu-outline" size={28} />

          <View style={styles.locationContainer}>
            <Text style={styles.locationTitle}>My Location</Text>
            <View style={styles.locationAddress}>
              <Ionicons name="location-sharp" size={16} color="#E57373" />
              <Text style={styles.addressText}>
                10, Anifowose Str, Ikeja
              </Text>
            </View>
          </View>

          <Image
            source={{ uri: 'https://i.pravatar.cc/100' }}
            style={styles.profilePic}
          />
        </View>

        <View style={styles.welcomeRow}>
          <View>
            <Text style={styles.greetingText}>Hi Ogoluwa,</Text>
            <Text style={styles.subGreeting}>
              Your available balance
            </Text>
          </View>
          <Text style={styles.balanceText}>₦15,903</Text>
        </View>

        <View style={styles.actionCard}>
          <TouchableOpacity style={styles.actionItem}>
            <MaterialCommunityIcons name="swap-horizontal" size={24} />
            <Text style={styles.actionLabel}>Transfer</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.actionItem}>
            <MaterialCommunityIcons name="credit-card-plus" size={24} />
            <Text style={styles.actionLabel}>Top Up</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.actionItem}>
            <MaterialCommunityIcons name="history" size={24} />
            <Text style={styles.actionLabel}>History</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.promoCard}>
          <Text style={styles.promoText}>Promotional Banner</Text>
        </View>

        <View style={{ height: 40 }} />
      </ScrollView>
    </SafeAreaView>
  );
}

/* ---------- OTHER SCREENS ---------- */

function CenterScreen({ title }: { title: string }) {
  return (
    <View style={styles.centerScreen}>
      <Text style={{ fontSize: 22, fontWeight: 'bold' }}>
        {title}
      </Text>
    </View>
  );
}

const WalletScreen = () => <CenterScreen title="Wallet Screen" />;
const LocationScreen = () => <CenterScreen title="Location Screen" />;
const CartScreen = () => <CenterScreen title="Cart Screen" />;
const NotificationsScreen = () => (
  <CenterScreen title="Notifications Screen" />
);

/* ---------- BOTTOM TAB NAVIGATOR ---------- */

function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: 'black',
        tabBarInactiveTintColor: COLORS.textGray,
        tabBarStyle: {
          height: 70,
        },
        tabBarIcon: ({ color, size }) => {
          let iconName: any;

          if (route.name === 'Home') iconName = 'home';
          if (route.name === 'Wallet') iconName = 'wallet-outline';
          if (route.name === 'Location') iconName = 'location-outline';
          if (route.name === 'Cart') iconName = 'cart-outline';
          if (route.name === 'Notifications')
            iconName = 'notifications-outline';

          return <Ionicons name={iconName} size={24} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Wallet" component={WalletScreen} />
      <Tab.Screen name="Location" component={LocationScreen} />
      <Tab.Screen name="Cart" component={CartScreen} />
      <Tab.Screen
        name="Notifications"
        component={NotificationsScreen}
      />
    </Tab.Navigator>
  );
}

/* ---------- ROOT APP ---------- */

export default function App() {
  return (
    
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="MainTabs" component={MainTabs} />
      </Stack.Navigator>
    
  );
}

/* ---------- STYLES ---------- */

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: COLORS.white,
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 10,
  },

  locationContainer: { alignItems: 'center' },
  locationTitle: {
    fontSize: 12,
    color: COLORS.textGray,
  },

  locationAddress: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 2,
  },

  addressText: {
    fontSize: 14,
    fontWeight: 'bold',
    marginHorizontal: 4,
  },

  profilePic: {
    width: 40,
    height: 40,
    borderRadius: 10,
    backgroundColor: COLORS.primary,
  },

  welcomeRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 25,
  },

  greetingText: {
    fontSize: 20,
    fontWeight: 'bold',
  },

  subGreeting: {
    fontSize: 13,
    color: COLORS.textGray,
  },

  balanceText: {
    fontSize: 24,
    fontWeight: 'bold',
  },

  actionCard: {
    flexDirection: 'row',
    backgroundColor: COLORS.primary,
    borderRadius: 20,
    marginTop: 20,
    paddingVertical: 15,
  },

  actionItem: {
    flex: 1,
    alignItems: 'center',
  },

  actionLabel: {
    fontSize: 13,
    fontWeight: '600',
    marginTop: 5,
  },

  promoCard: {
    height: 200,
    backgroundColor: COLORS.cardGray,
    borderRadius: 20,
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },

  promoText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: COLORS.textDark,
  },

  centerScreen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
