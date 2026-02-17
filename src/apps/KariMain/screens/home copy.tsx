import React from 'react';
import { 
  StyleSheet, View, Text, ScrollView, Image, 
  TouchableOpacity, SafeAreaView, Dimensions 
} from 'react-native';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import {COLORS} from '../../../shared/constants/Color';


const { width } = Dimensions.get('window');

export default function MainApp_HomeScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
        
        {/* --- HEADER --- */}
        <View style={styles.header}>
          <TouchableOpacity style={styles.menuButton}>
            <Ionicons name="menu-outline" size={28} color="black" />
          </TouchableOpacity>
          <View style={styles.locationContainer}>
            <Text style={styles.locationTitle}>My Location</Text>
            <View style={styles.locationAddress}>
              <Ionicons name="location-sharp" size={16} color="#E57373" />
              <Text style={styles.addressText}>10, Anifowose Str, Ikeja</Text>
              <Ionicons name="pencil-outline" size={12} color="#E57373" />
            </View>
          </View>
          <Image 
            source={{ uri: 'https://i.pravatar.cc/100' }} 
            style={styles.profilePic} 
          />
        </View>

        {/* --- WELCOME & BALANCE --- */}
        <View style={styles.welcomeRow}>
          <View>
            <Text style={styles.greetingText}>Hi Ogoluwa,</Text>
            <Text style={styles.subGreeting}>Your available balance</Text>
          </View>
          <Text style={styles.balanceText}>₦15,903</Text>
        </View>

        {/* --- QUICK ACTIONS --- */}
        <View style={styles.actionCard}>
          <TouchableOpacity style={styles.actionItem}>
            <MaterialCommunityIcons name="swap-horizontal" size={24} color="black" />
            <Text style={styles.actionLabel}>Transfer</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionItem}>
            <MaterialCommunityIcons name="credit-card-plus" size={24} color="black" />
            <Text style={styles.actionLabel}>Top Up</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionItem}>
            <MaterialCommunityIcons name="history" size={24} color="black" />
            <Text style={styles.actionLabel}>History</Text>
          </TouchableOpacity>
        </View>

        {/* --- CATEGORIES --- */}
        <View style={styles.categoryRow}>
          {['Wallet', 'Rides', 'Food', 'Mart'].map((item, index) => (
            <View key={item} style={styles.catItem}>
              <View style={[styles.catIconCircle, index === 0 && styles.activeCat]}>
                 <Ionicons name="wallet-outline" size={20} color={COLORS.primary} />
              </View>
              <Text style={styles.catLabel}>{item}</Text>
            </View>
          ))}
        </View>

        {/* --- KARIPAY GRID --- */}
        <Text style={styles.sectionTitle}>KariPay</Text>
        <View style={styles.gridContainer}>
          {[
            { name: 'Electricity', icon: 'flash' },
            { name: 'Data', icon: 'wifi' },
            { name: 'Deals', icon: 'ticket' },
            { name: 'Insurance', icon: 'medical-bag' },
            { name: 'Sell on Kari', icon: 'cart' },
            { name: 'Airtime', icon: 'cellphone' },
            { name: 'Bills', icon: 'file-document' },
            { name: 'More', icon: 'dots-horizontal' }
          ].map((item) => (
            <TouchableOpacity key={item.name} style={styles.gridItem}>
              <View style={styles.gridIconBox}>
                <MaterialCommunityIcons name={item.icon} size={24} color="#4CAF50" />
              </View>
              <Text style={styles.gridLabel}>{item.name}</Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* --- BANNER --- */}
        <View style={styles.banner}>
          <View style={styles.bannerTextContainer}>
            <Text style={styles.bannerTitle}>Special Deals For October</Text>
            <TouchableOpacity style={styles.orderBtn}>
              <Text style={styles.orderBtnText}>Order Now</Text>
            </TouchableOpacity>
          </View>
          <Image source={{ uri: 'https://via.placeholder.com/100x100' }} style={styles.bannerImg} />
        </View>

      </ScrollView>

      {/* --- BOTTOM TAB BAR --- */}
      <View style={styles.tabBar}>
        <TouchableOpacity style={styles.tabItemActive}>
          <Ionicons name="home" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabItem}>
          <Ionicons name="wallet-outline" size={24} color={COLORS.textGray} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabItem}>
          <Ionicons name="location-outline" size={24} color={COLORS.textGray} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabItem}>
          <Ionicons name="cart-outline" size={24} color={COLORS.textGray} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabItem}>
          <Ionicons name="notifications-outline" size={24} color={COLORS.textGray} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: COLORS.white },
  container: { flex: 1, paddingHorizontal: 20 },
  
  // Header
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  locationContainer: { alignItems: 'center' },
  locationTitle: { fontSize: 12, color: COLORS.textGray },
  locationAddress: { flexDirection: 'row', alignItems: 'center', marginTop: 2 },
  addressText: { fontSize: 14, fontWeight: 'bold', marginHorizontal: 4 },
  profilePic: { width: 40, height: 40, borderRadius: 10, backgroundColor: COLORS.primary },

  // Welcome & Balance
  welcomeRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 25 },
  greetingText: { fontSize: 20, fontWeight: 'bold' },
  subGreeting: { fontSize: 13, color: COLORS.textGray },
  balanceText: { fontSize: 24, fontWeight: 'bold' },

  // Action Card
  actionCard: {
    flexDirection: 'row',
    backgroundColor: COLORS.primary,
    borderRadius: 20,
    marginTop: 20,
    paddingVertical: 15,
  },
  actionItem: { flex: 1, alignItems: 'center' },
  actionLabel: { fontSize: 13, fontWeight: '600', marginTop: 5 },

  // Categories
  categoryRow: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 25 },
  catItem: { alignItems: 'center' },
  catIconCircle: { 
    width: 55, height: 55, borderRadius: 27.5, 
    borderWidth: 1, borderColor: '#EEE', 
    justifyContent: 'center', alignItems: 'center' 
  },
  activeCat: { borderColor: COLORS.primary, borderWidth: 2 },
  catLabel: { fontSize: 11, color: COLORS.textGray, marginTop: 8 },

  // Grid
  sectionTitle: { fontSize: 18, fontWeight: 'bold', marginTop: 30, marginBottom: 15 },
  gridContainer: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' },
  gridItem: { width: '23%', alignItems: 'center', marginBottom: 20 },
  gridIconBox: { 
    width: 50, height: 50, backgroundColor: COLORS.background, 
    borderRadius: 12, justifyContent: 'center', alignItems: 'center' 
  },
  gridLabel: { fontSize: 11, color: COLORS.textDark, textAlign: 'center', marginTop: 8 },

  // Banner
  banner: {
    backgroundColor: '#FF9933',
    borderRadius: 20,
    flexDirection: 'row',
    padding: 20,
    marginTop: 10,
    marginBottom: 100,
  },
  bannerTextContainer: { flex: 1 },
  bannerTitle: { color: COLORS.white, fontSize: 18, fontWeight: 'bold', width: '70%' },
  orderBtn: { 
    backgroundColor: COLORS.white, paddingHorizontal: 15, 
    paddingVertical: 8, borderRadius: 8, marginTop: 10, alignSelf: 'flex-start' 
  },
  orderBtnText: { color: '#FF9933', fontWeight: 'bold', fontSize: 12 },
  bannerImg: { width: 80, height: 80 },

  // Bottom Tab Bar
  tabBar: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
    height: 65,
    backgroundColor: COLORS.white,
    borderRadius: 35,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  tabItemActive: { 
    width: 45, height: 45, borderRadius: 22.5, 
    backgroundColor: COLORS.primary, justifyContent: 'center', alignItems: 'center' 
  },
  tabItem: { padding: 10 },
});