import { DrawerContentScrollView } from "@react-navigation/drawer";
import React, { useCallback, useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity, RefreshControl,ActivityIndicator, Modal,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { COLORS } from '@/shared/constants/Color';


// Define the shape of a single menu item
interface MenuItem {
  label: string;
  icon: string;
  screen: string;
}

// Update props to include menuItems
interface SidebarProps {
  navigation: any;
  menuItems: MenuItem[]; // 👈 New prop
}

// console.log(MenuItem);
/* ---------- SIDE BAR CUSTOM DRAWER ---------- */
function CustomSidebar(props: any) {
// Use the menuItems passed via props, or fallback to an empty array
  const { menuItems = [] } = props;

  return (
    <>
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
          onPress={() => {
            console.log('Logging out...');
            props.navigation.navigate('Splash_Screen');
          }}
        >
          <View style={styles.logoutIconWrapper}>
            <Text style={styles.powerIcon}>⏻</Text>
          </View>
          <Text style={styles.logoutText}>Log Out</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
    </>
  );
}



const styles = StyleSheet.create ({


container: { flex: 1 },
  scrollContainer: { paddingTop: 60 },
  profileSection: { paddingHorizontal: 25, marginBottom: 20 },
  avatarGlow: {
    width: 85,
    height: 85,
    borderRadius: 42.5,
    // backgroundColor: '#FFCC00',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
    shadowColor: '#FFCC00',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.4,
    shadowRadius: 12,
    elevation: 15,
  },
  avatarImage: { width: 85, height: 85, borderRadius: 37.5 },
  userName: { fontSize: 20, fontFamily: 'Sofia-Medium', color: COLORS.textBlack },
  userHandle: { fontSize: 12, color: COLORS.textGray, marginTop: 4 },

  menuList: { marginTop: 0, paddingHorizontal: 15 },
  menuItem: { flexDirection: 'row', alignItems: 'center', paddingVertical: 18, paddingHorizontal: 10 },
  menuIcon: { fontSize: 22, width: 40, textAlign: 'center', marginRight: 15, opacity: 0.6 },
  menuLabel: { fontSize: 16, color: COLORS.textBlack,  fontFamily: 'Sofia-Medium' },

  footer: { padding: 25, paddingBottom: 40 },
  logoutBtn: { backgroundColor: COLORS.textYellow, flexDirection: 'row', alignItems: 'center', paddingVertical: 10, paddingHorizontal: 15, borderRadius: 30, width: 125 },
  logoutIconWrapper: { backgroundColor: '#fff', width: 32, height: 28, borderRadius: 16, justifyContent: 'center', alignItems: 'center', marginRight:6 },
  powerIcon: { fontSize: 20, color: '#FFC800', fontWeight: 'bold' },
  logoutText: { fontSize: 16, fontWeight: '400', color: COLORS.textBlack, fontFamily: 'Sofia-Medium' },
   loadingOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)', // semi-transparent overlay
    justifyContent: 'center',
    alignItems: 'center',
  },
  profilePic2: { width: 75, height: 75, borderRadius: 37.5, backgroundColor: COLORS.primary },
//   loadingText: {
//     color: '#fff',
//     marginTop: 10,
//     fontSize: 16,
//     fontWeight: 'bold',
//   },



 });

 export default CustomSidebar;