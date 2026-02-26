import React, { useCallback, useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity, RefreshControl,ActivityIndicator, Modal,
  ImageSourcePropType,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTheme } from '@react-navigation/native';
import { createDrawerNavigator, DrawerContentScrollView } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { rootNavigationRef } from '../../../../App';

// =======================================================
//                         Screens
// =======================================================
// import ProfileScreen from 'ProfileScreen';
import Location_Screen from './location_screen';
import Cart_Screen from './cart_screen';
import Wallet_Screen from './wallet_screen';
import Notifications_Screen from './notifications_screen';

// =======================================================
//                         Components
// =======================================================
import KariPayHomeScreen from '../components/karipayhomescreen';
import ActionCardWithLoader from '@/apps/KariMainWallet/components/actionCard';


// =======================================================
//                         Icons
// =======================================================
import CustomSidebar from '@/shared/components/navigation/sidebar_drawer';
import LocationIcon from '@assets/icons/location.svg';
import EditIcon from '@assets/icons/Edit.svg';
import HamburgerIcon from '@assets/icons/Hamburger.svg';
import TransferIcon from '@assets/icons/transfer.svg';
import TopUpIcon from '@assets/icons/topup.svg';
import HistoryIcon from '@assets/icons/history.svg';



/* ---------- NAVIGATORS ---------- */
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

/* ---------- COLORS ---------- */
import { COLORS } from '@/shared/constants/Color';


export interface UserData {
  id: string;
  firstname: string;
  lastname: string;
  location: string;
  balance: number | string;
  profileImage?: ImageSourcePropType; // Optional
  currency: string;
}


export const userData: UserData = {
  id: 'user_01',
  firstname: 'Ogoluwa',
  lastname: 'Ojewale',
  location: '10, Anifowose Str, Ikeja',
  balance: '₦15,903',
  currency: 'USD',
  profileImage: require('../../../../assets/image2.jpg'),
};


// console.log('User Data:', userData); 

/* ---------- HEADER ---------- */
function AppHeader({ navigation }: any) {
const [loading, setLoading] = useState(false);

  return (
    <SafeAreaView edges={['top']} style={styles.headerSafeArea}>
      <View style={styles.header}>
        {/* Hamburger menu */}
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          {/* <Ionicons name="menu-outline" size={28} /> */}
          <HamburgerIcon 
              width={16} 
              height={16} 
              fill="#E57373" // This replaces the 'color' prop if the SVG is coded for it
      />
        </TouchableOpacity>

        <View style={styles.locationContainer}>
          <Text style={styles.locationTitle}>My Location</Text>
          <View style={styles.locationAddress}>
            {/* <Ionicons name="location-sharp" size={16} color="#E57373" /> */}
            <LocationIcon 
              width={25} 
              height={25} 
              fill="#E57373" // This replaces the 'color' prop if the SVG is coded for it
      />
            <Text style={styles.addressText}>{userData.location}</Text>
             <EditIcon 
              width={20} 
              height={20} 
              fill="#E57373" // This replaces the 'color' prop if the SVG is coded for it
      />
          </View>
        </View>
       <View style={styles.avatarGlowMain}>
      {/* 1. Show the indicator only when loading is true */}
      {loading && (
        <ActivityIndicator 
          style={styles.loader} 
          color="#E57373" // Or your brand color
          size="small" 
        />
      )}

      <Image
        source={userData.profileImage}
        style={styles.profilePic}
        onLoadStart={() => setLoading(true)}  // Starts the loader
        onLoadEnd={() => setLoading(false)}   // Hides the loader
      />
    </View>
      </View>
    </SafeAreaView>
  );
}

/* ---------- HOME SCREEN ---------- */
function HomeScreen({ navigation }: any) {
    const [refreshing, setRefreshing] = useState(false);
     const [loading, setLoading] = useState(false);

       const handleTransferPress = () => {
    setLoading(true);

    // Simulate a 2-second loading delay
    setTimeout(() => {
      setLoading(false);
      navigation.getParent()?.navigate("App_Entry"); // Replace with your actual screen name
    }, 2000);
  };
    
  const onRefresh = useCallback(() => {
    setRefreshing(true);

    // Simulate fetching data or refresh logic
    setTimeout(() => {
      setRefreshing(false);
    }, 1500); // 1.5 seconds
  }, []);



     const actions = [
    {
      Icon: TransferIcon,
      label: "Transfer",
      onPress: handleTransferPress,
      width: 28,
      height: 28,
    },
    {
      Icon: TopUpIcon,
      label: "Top Up",
      onPress: () => console.log("Transfer Pressed"),
    },
    {
      Icon: HistoryIcon,
      label: "History",
      onPress: () => console.log("Top Up Pressed"),
    },
  ];

  return (
    <ScrollView style={styles.MainContainer}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ paddingHorizontal: 20 }}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh}
         />
      }
    >
            <Modal transparent visible={loading}>
        <View style={styles.loadingOverlay}>
          <ActivityIndicator size="large" color="#FFCC00" />
          <Text style={styles.loadingText}>Loading...</Text>
        </View>
      </Modal>

      
      <View style={styles.welcomeRow}>
        <View>
          <Text style={styles.greetingText}>Hi {userData.firstname},</Text>
          <Text style={styles.subGreeting}>Your available balance</Text>
        </View>
        <Text style={styles.balanceText}>{userData.balance}</Text>
      </View>


      

       <ActionCardWithLoader loading={loading} actions={actions} />
      
      {/* ================= Home Screen Content ===================== */}
      <KariPayHomeScreen/>

      <View style={{ height: 40 }} />
    </ScrollView>
  );
}




// ================================================
//                      Other Screens
// ================================================

const WalletScreen = () => <Wallet_Screen/>;
const LocationScreen = () => <Location_Screen />;
const CartScreen = () => <Cart_Screen />;
const NotificationsScreen = () => <Notifications_Screen />;

/* ---------- BOTTOM TABS ---------- */
function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false, // hide tab header
        tabBarShowLabel: false,
        tabBarActiveTintColor: 'black',
        tabBarInactiveTintColor: COLORS.textGray,
        tabBarStyle: { height: 75, paddingTop: 15 ,backgroundColor: COLORS.white,
          borderTopWidth: 0,},
        tabBarIcon: ({ color, focused }) => {
          let iconName: any;
          if (route.name === 'Home') iconName = 'home';
          if (route.name === 'Wallet') iconName = 'wallet-outline';
          if (route.name === 'Location') iconName = 'location-outline';
          if (route.name === 'Cart') iconName = 'cart-outline';
          if (route.name === 'Notifications') iconName = 'notifications-outline';
          return (
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
              {focused ? (
                // Active tab: icon inside a circle
                <View
                  style={{
                    width: 45,
                    height: 45,
                    borderRadius: 22.5,
                    backgroundColor: COLORS.primary,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <Ionicons name={iconName} size={24} color={COLORS.textBlack} />
                </View>
              ) : (
                // Inactive tab: normal icon
                <Ionicons name={iconName} size={24} color={COLORS.textGray} />
              )}
            </View>
          );
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


// /* ----------SIDE BAR PROPS DRAWER ---------- */
const passengerMenu =  [
    { label: 'Wallet', icon: '💳', screen: 'Wallet' },
    { label: 'My Profile', icon: '👤', screen: 'Profile' },
    { label: 'Ride History', icon: '📍', screen: 'RideHistory' },
    { label: 'Transactions', icon: '📄', screen: 'Transactions' },
    { label: 'Saved Items', icon: '❤️', screen: 'SavedItems' },
    { label: 'Settings', icon: '⚙️', screen: 'Settings' },
    { label: 'Help & Support', icon: '❓', screen: 'Help' },
  ];





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
      screenOptions={{ 
        headerShown: false,
        drawerStyle: {
          width: '75%',
          borderTopRightRadius: 40,
          borderBottomRightRadius: 40,
          backgroundColor: '#fff',
        }
      }}
      drawerContent={(props) => <CustomSidebar {...props} menuItems={passengerMenu} />}
    >
      <Drawer.Screen name="AppLayout" component={AppLayout} />
    </Drawer.Navigator>

      // <Drawer.Navigator
      //   screenOptions={{ headerShown: false }}
      //   drawerStyle={{
      //     width: '75%',
      //     borderTopRightRadius: 40,
      //     borderBottomRightRadius: 40,
      //     backgroundColor: '#fff',
      //   }}
      //   drawerContent={(props) => <CustomSidebar {...props} menuItems={passengerMenu} />}
      // >
      //   <Drawer.Screen name="AppLayout" component={AppLayout} />
      // </Drawer.Navigator>
   
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
    marginBottom: 0,
    marginTop: -20,
    backgroundColor: COLORS.white,
    paddingBottom: 20,
  },
  locationContainer: { alignItems: 'center', justifyContent: 'center' },
  locationTitle: { fontSize: 16, color: COLORS.textDark, fontFamily: 'Sofia-Medium' },
  locationAddress: { flexDirection: 'row', alignItems: 'center', marginTop: 2 },
  addressText: { fontSize: 16, fontFamily: 'Sofia-Medium',  marginVertical: 3, marginHorizontal: 4, color: COLORS.textRed },
  profilePic: { width: 40, height: 40, borderRadius: 10, backgroundColor: COLORS.primary },
  profilePic2: { width: 75, height: 75, borderRadius: 37.5, backgroundColor: COLORS.primary },
  
  MainContainer: { backgroundColor: COLORS.white, },
  welcomeRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 25 },
  greetingText: { fontSize: 18, fontFamily: 'Sofia-Medium', lineHeight: 21.6 , letterSpacing:0, color: COLORS.textBlack},
  subGreeting: { fontSize: 16, color: COLORS.textGray , fontFamily: 'Sofia-Medium', lineHeight: 19.2, letterSpacing:0,},
  balanceText: { fontSize: 28, fontFamily: 'Sofia-Medium', lineHeight: 33.6},

  actionCard: { flexDirection: 'row', backgroundColor: COLORS.primary, borderRadius: 20, marginTop: 20, paddingVertical: 19 },
  actionItem: { flex: 1, alignItems: 'center' },
  actionLabel: { fontSize: 13, fontWeight: '600', marginTop: 10 },

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
    // backgroundColor: '#FFCC00',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
    shadowColor: COLORS.primary,
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.4,
    shadowRadius: 12,
    elevation: 15,
  },
    avatarGlowMain: {
    // width: 85,
    // height: 85,
    borderRadius: 42.5,
    // backgroundColor: '#FFCC00',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 0,
    shadowColor: '#FFCC00',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.8,
    shadowRadius: 12,
    elevation: 15,
  },
  avatarImage: { width: 85, height: 85, borderRadius: 37.5 },
  userName: { fontSize: 20, fontWeight: "500", color: '#1A1A1A' },
  userHandle: { fontSize: 14, color: '#A0A0A0', marginTop: 4 },

  menuList: { marginTop: 10, paddingHorizontal: 15 },
  menuItem: { flexDirection: 'row', alignItems: 'center', paddingVertical: 18, paddingHorizontal: 10 },
  menuIcon: { fontSize: 22, width: 40, textAlign: 'center', marginRight: 15, opacity: 0.6 },
  menuLabel: { fontSize: 16, color: '#333', fontWeight: '500' },

  footer: { padding: 25, paddingBottom: 40 },
  logoutBtn: { backgroundColor: '#FFC800', flexDirection: 'row', alignItems: 'center', paddingVertical: 10, paddingHorizontal: 15, borderRadius: 30, width: 150 },
  logoutIconWrapper: { backgroundColor: '#fff', width: 32, height: 32, borderRadius: 16, justifyContent: 'center', alignItems: 'center', marginRight: 12 },
  powerIcon: { fontSize: 14, color: '#FFC800', fontWeight: 'bold' },
  logoutText: { fontSize: 16, fontWeight: '400', color: '#000' },
   loadingOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)', // semi-transparent overlay
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    color: '#fff',
    marginTop: 10,
    fontSize: 16,
    fontWeight: 'bold',
  },
  loader: {
    position: 'absolute',
    zIndex: 1, // Ensures it stays on top of the image
  },

  
});
