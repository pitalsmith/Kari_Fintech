import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator, DrawerContentScrollView } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

/* ---------- NAVIGATORS ---------- */
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

/* ---------- COLORS ---------- */
const COLORS = {
  primary: '#FFCC00',
  white: '#FFFFFF',
  textDark: '#1A1A1A',
  textGray: '#7D7D7D',
  cardGray: '#F2F2F2',
};

/* ---------- HEADER ---------- */
function AppHeader({ navigation }: any) {
  return (
    <SafeAreaView edges={['top']} style={styles.headerSafeArea}>
      <View style={styles.header}>
        {/* Hamburger menu */}
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <Ionicons name="menu-outline" size={28} />
        </TouchableOpacity>

        <View style={styles.locationContainer}>
          <Text style={styles.locationTitle}>My Location</Text>
          <View style={styles.locationAddress}>
            <Ionicons name="location-sharp" size={16} color="#E57373" />
            <Text style={styles.addressText}>10, Anifowose Str, Ikeja</Text>
          </View>
        </View>

        <Image
          source={require('../../../../assets/image2.jpg')}
          style={styles.profilePic}
        />
      </View>
    </SafeAreaView>
  );
}

/* ---------- HOME SCREEN ---------- */
function HomeScreen() {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ paddingHorizontal: 20 }}
    >
      <View style={styles.welcomeRow}>
        <View>
          <Text style={styles.greetingText}>Hi Ogoluwa,</Text>
          <Text style={styles.subGreeting}>Your available balance</Text>
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
  );
}

/* ---------- OTHER SCREENS ---------- */
function CenterScreen({ title }: { title: string }) {
  return (
    <View style={styles.centerScreen}>
      <Text style={{ fontSize: 22, fontWeight: 'bold' }}>{title}</Text>
    </View>
  );
}

const WalletScreen = () => <CenterScreen title="Wallet Screen" />;
const LocationScreen = () => <CenterScreen title="Location Screen" />;
const CartScreen = () => <CenterScreen title="Cart Screen" />;
const NotificationsScreen = () => <CenterScreen title="Notifications Screen" />;

/* ---------- BOTTOM TABS ---------- */
function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false, // hide tab header
        tabBarShowLabel: false,
        tabBarActiveTintColor: 'black',
        tabBarInactiveTintColor: COLORS.textGray,
        tabBarStyle: { height: 70 },
        tabBarIcon: ({ color }) => {
          let iconName: any;
          if (route.name === 'Home') iconName = 'home';
          if (route.name === 'Wallet') iconName = 'wallet-outline';
          if (route.name === 'Location') iconName = 'location-outline';
          if (route.name === 'Cart') iconName = 'cart-outline';
          if (route.name === 'Notifications') iconName = 'notifications-outline';
          return <Ionicons name={iconName} size={24} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Wallet" component={WalletScreen} />
      <Tab.Screen name="Location" component={LocationScreen} />
      <Tab.Screen name="Cart" component={CartScreen} />
      <Tab.Screen name="Notifications" component={NotificationsScreen} />
    </Tab.Navigator>
  );
}

/* ---------- SIDE BAR CUSTOM DRAWER ---------- */
function CustomSidebar(props: any) {
  const menuItems = [
    { label: 'Wallet', icon: '💳', screen: 'Wallet' },
    { label: 'My Profile', icon: '👤', screen: 'Profile' },
    { label: 'Ride History', icon: '📍', screen: 'RideHistory' },
    { label: 'Transactions', icon: '📄', screen: 'Transactions' },
    { label: 'Saved Items', icon: '❤️', screen: 'SavedItems' },
    { label: 'Settings', icon: '⚙️', screen: 'Settings' },
    { label: 'Help & Support', icon: '❓', screen: 'Help' },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <DrawerContentScrollView {...props} contentContainerStyle={styles.scrollContainer}>
        <View style={styles.profileSection}>
          <View style={styles.avatarGlow}>
            <Image
          source={require('../../../../assets/image2.jpg')}
          style={styles.profilePic2}
          resizeMode="cover" // 👈 makes the image fully cover the container
        />
          </View>
          <Text style={styles.userName}>Ogoluwa Ojewale</Text>
          <Text style={styles.userHandle}>@ogopedia</Text>
        </View>

        <View style={styles.menuList}>
          {menuItems.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={styles.menuItem}
              onPress={() => props.navigation.navigate(item.screen)}
            >
              <Text style={styles.menuIcon}>{item.icon}</Text>
              <Text style={styles.menuLabel}>{item.label}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </DrawerContentScrollView>

      <View style={styles.footer}>
        <TouchableOpacity
          style={styles.logoutBtn}
          onPress={() => console.log('Logging out...')}
        >
          <View style={styles.logoutIconWrapper}>
            <Text style={styles.powerIcon}>⏻</Text>
          </View>
          <Text style={styles.logoutText}>Log Out</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

/* ---------- DRAWER WRAPPER ---------- */
function AppLayout({ navigation }: any) {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <AppHeader navigation={navigation} />
      <MainTabs />
    </SafeAreaView>
  );
}

/* ---------- ROOT ---------- */
export default function App() {
  return (

      <Drawer.Navigator
        screenOptions={{ headerShown: false }}
        drawerStyle={{
          width: '75%',
          borderTopRightRadius: 40,
          borderBottomRightRadius: 40,
          backgroundColor: '#fff',
        }}
        drawerContent={(props) => <CustomSidebar {...props} />}
      >
        <Drawer.Screen name="AppLayout" component={AppLayout} />
      </Drawer.Navigator>
   
  );
}

/* ---------- STYLES ---------- */
const styles = StyleSheet.create({
  headerSafeArea: { backgroundColor: COLORS.white, },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 0,
    backgroundColor: COLORS.white,
    paddingBottom: 10,
  },
  locationContainer: { alignItems: 'center' },
  locationTitle: { fontSize: 12, color: COLORS.textGray },
  locationAddress: { flexDirection: 'row', alignItems: 'center', marginTop: 2 },
  addressText: { fontSize: 14, fontWeight: 'bold', marginHorizontal: 4 },
  profilePic: { width: 40, height: 40, borderRadius: 10, backgroundColor: COLORS.primary },
  profilePic2: { width: 75, height: 75, borderRadius: 37.5, backgroundColor: COLORS.primary },
  

  welcomeRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 25 },
  greetingText: { fontSize: 20, fontWeight: 'bold' },
  subGreeting: { fontSize: 13, color: COLORS.textGray },
  balanceText: { fontSize: 24, fontWeight: 'bold' },

  actionCard: { flexDirection: 'row', backgroundColor: COLORS.primary, borderRadius: 20, marginTop: 20, paddingVertical: 15 },
  actionItem: { flex: 1, alignItems: 'center' },
  actionLabel: { fontSize: 13, fontWeight: '600', marginTop: 5 },

  promoCard: { height: 200, backgroundColor: COLORS.cardGray, borderRadius: 20, marginTop: 20, justifyContent: 'center', alignItems: 'center' },
  promoText: { fontSize: 18, fontWeight: 'bold', color: COLORS.textDark },

  centerScreen: { flex: 1, justifyContent: 'center', alignItems: 'center' },

  container: { flex: 1 },
  scrollContainer: { paddingTop: 30 },
  profileSection: { paddingHorizontal: 25, marginBottom: 40 },
  avatarGlow: {
    width: 85,
    height: 85,
    borderRadius: 42.5,
    backgroundColor: '#FFCC00',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
    shadowColor: '#FFCC00',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.4,
    shadowRadius: 12,
    elevation: 15,
  },
  avatarImage: { width: 75, height: 75, borderRadius: 37.5 },
  userName: { fontSize: 20, fontWeight: 'bold', color: '#1A1A1A' },
  userHandle: { fontSize: 14, color: '#A0A0A0', marginTop: 4 },

  menuList: { marginTop: 10, paddingHorizontal: 15 },
  menuItem: { flexDirection: 'row', alignItems: 'center', paddingVertical: 18, paddingHorizontal: 10 },
  menuIcon: { fontSize: 22, width: 40, textAlign: 'center', marginRight: 15, opacity: 0.6 },
  menuLabel: { fontSize: 16, color: '#333', fontWeight: '500' },

  footer: { padding: 25, paddingBottom: 40 },
  logoutBtn: { backgroundColor: '#FFC800', flexDirection: 'row', alignItems: 'center', paddingVertical: 10, paddingHorizontal: 15, borderRadius: 30, width: 150 },
  logoutIconWrapper: { backgroundColor: '#fff', width: 32, height: 32, borderRadius: 16, justifyContent: 'center', alignItems: 'center', marginRight: 12 },
  powerIcon: { fontSize: 14, color: '#FFC800', fontWeight: 'bold' },
  logoutText: { fontSize: 16, fontWeight: '700', color: '#000' },
});
