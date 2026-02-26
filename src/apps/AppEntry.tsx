import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  StatusBar,
  Dimensions,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialCommunityIcons } from '@expo/vector-icons'; // Standard with Expo

const { width } = Dimensions.get('window');

import COLORS from '@/shared/constants/Color';


export type RootStackParamList = {
  Welcome: undefined;        // No params
  Splash_Screen: undefined;  // No params
  Home: undefined;
  Details: { id: string };   // Example of a screen with params
};

const AppEntry = () => {
const navigation = useNavigation<any>();

  return (
    <ImageBackground
      source={{ uri: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1000' }}
      style={styles.background}
    >
      <StatusBar barStyle="light-content" />
      <View style={styles.overlay} />

      <SafeAreaView style={styles.safeArea}>
        {/* Top Bar */}
        <View style={styles.header}>
          <TouchableOpacity style={styles.skipButton}>
            <Text style={styles.skipText}>Skip</Text>
          </TouchableOpacity>
        </View>

        {/* Hero Section */}
        <View style={styles.heroSection}>
          <Text style={styles.welcomeTitle}>
            Welcome {'\n'}to <Text style={styles.brandColor}>Kari</Text>
          </Text>
          <Text style={styles.subTitle}>Kari anything, anywhere</Text>
        </View>

        {/* Main CTA Card */}
        <View style={styles.mainCardShadow}>
          <View style={styles.mainCard}>
            <View style={styles.cardContent}>
              <Text style={styles.cardTitle}>Kari Food &{'\n'}Fintech</Text>
             <TouchableOpacity 
              style={styles.openAppButton} 
              onPress={() => navigation.navigate('Splash_Screen')}
              activeOpacity={0.8} // Adds a nice subtle dim when pressed
            >
              <Text style={styles.openAppText}>Open App</Text>
            </TouchableOpacity>
              
            </View>
            {/* Decorative circles to match the UI */}
            <View style={[styles.circle, styles.circleTop]} />
            <View style={[styles.circle, styles.circleBottom]} />
          </View>
        </View>

        {/* Bottom Grid Actions */}
        <View style={styles.bottomSection}>
          <View style={styles.grid}>
            <TouchableOpacity style={[styles.gridItem, { backgroundColor: '#A2D2FF' }]}>
              <MaterialCommunityIcons name="package-variant" size={32} color="white" />
              <Text style={styles.gridText}>Delivery Rider</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.gridItem, { backgroundColor: '#FFC8A2' }]}>
              <MaterialCommunityIcons name="car" size={32} color="white" />
              <Text style={styles.gridText}>Driver</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.gridItem, { backgroundColor: '#B2E2B2' }]}>
              <MaterialCommunityIcons name="storefront" size={32} color="white" />
              <Text style={styles.gridText}>Vendor</Text>
            </TouchableOpacity>
          </View>

          {/* Footer Text */}
         <View style={styles.footer}>
          <Text style={styles.footerText}>
            Already have an account?{' '}
            <TouchableOpacity 
              activeOpacity={0.7} 
              onPress={() => navigation.navigate('Home')}
              style={styles.signInButton}
            >
              <Text style={styles.signInText}>Sign In</Text>
            </TouchableOpacity>
          </Text>
        </View>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.35)', // Darkens background for text readability
  },
  safeArea: {
    flex: 1,
  },
  header: {
    alignItems: 'flex-end',
    paddingHorizontal: 20,
    marginTop: 10,
  },
  skipButton: {
    backgroundColor: '#FFCC00',
    paddingHorizontal: 22,
    paddingVertical: 8,
    borderRadius: 20,
  },
  skipText: {
    fontWeight: 'bold',
    color: '#000',
  },
  heroSection: {
    paddingHorizontal: 30,
    marginTop: 40,
  },
  welcomeTitle: {
    fontSize: 48,
    fontWeight: '800',
    color: '#FFF',
    lineHeight: 55,
  },
  brandColor: {
    color: '#FFCC00',
  },
  subTitle: {
    fontSize: 18,
    color: '#FFF',
    marginTop: 10,
    fontWeight: '400',
  },
  mainCardShadow: {
    marginHorizontal: 30,
    marginTop: 50,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.3,
    shadowRadius: 15,
    elevation: 10,
  },
  mainCard: {
    height: 180,
    backgroundColor: '#1A2340', // Deep navy
    borderRadius: 20,
    overflow: 'hidden',
    padding: 25,
    justifyContent: 'center',
  },
  cardContent: {
    zIndex: 2,
  },
  cardTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: '#FFF',
    marginBottom: 15,
  },
  openAppButton: {
    backgroundColor: '#D64D52',
    alignSelf: 'flex-start',
    paddingHorizontal: 25,
    paddingVertical: 10,
    borderRadius: 25,
  },
  openAppText: {
    color: '#FFF',
    fontWeight: '600',
  },
  circle: {
    position: 'absolute',
    backgroundColor: '#D64D52',
    opacity: 0.6,
  },
  circleTop: {
    width: 100,
    height: 100,
    borderRadius: 50,
    top: -20,
    right: -20,
  },
  circleBottom: {
    width: 120,
    height: 120,
    borderRadius: 60,
    bottom: -40,
    right: -10,
    backgroundColor: '#4A2B3D',
  },
  bottomSection: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingBottom: 30,
  },
  grid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginBottom: 30,
  },
  gridItem: {
    width: (width - 60) / 3,
    height: 100,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
  },
  gridText: {
    color: '#FFF',
    fontSize: 12,
    fontWeight: '600',
    marginTop: 8,
    textAlign: 'center',
  },
  footer: {
    flexDirection: 'row', // Align "Already have..." and "Sign In" horizontally
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  signInButton: {
    marginLeft: 5, // Space between the question and the button
    borderBottomWidth: 1, // Optional: gives it a subtle underline feel
    borderBottomColor: '#FFF',
    marginTop: 5,
  },
  footerText: {
    color: '#FFFF',
    fontSize: 15,
  },

  signInText: {
    color: '#FFF',
    fontWeight: 'bold',
    paddingLeft: 2,
    marginTop: 2,
  },
});

export default AppEntry;



// import React from 'react';
// import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
// import { useSafeAreaInsets } from 'react-native-safe-area-context';
// import { NativeStackNavigationProp } from '@react-navigation/native-stack';


// type ProfileScreenNavigationProp = NativeStackNavigationProp<any>;

// export default function AppEntry({ navigation }: { navigation: ProfileScreenNavigationProp }) {
//   const insets = useSafeAreaInsets();

//   return (
//     // We combine the dynamic safe area inset with our base styles
//     <View style={[styles.container, { paddingTop: insets.top }]}>
      
//       <Text style={styles.title}>Profile Screen</Text>
      
//       <TouchableOpacity 
//         style={styles.button}
//         activeOpacity={0.8}
//         onPress={() => navigation.goBack()}
//       >
//         <Text style={styles.buttonText}>Back to Home</Text>
//       </TouchableOpacity>

//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     backgroundColor: '#facc15', // Same as yellow-400
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginTop: 40, // Same as mt-10 (10 * 4)
//     color: '#000000',
//   },
//   button: {
//     marginTop: 40,
//     backgroundColor: '#000000',
//     paddingHorizontal: 32, // Same as px-8
//     paddingVertical: 12,   // Same as py-3
//     borderRadius: 9999,    // Same as rounded-full
//   },
//   buttonText: {
//     color: '#ffffff',
//     fontWeight: 'bold',
//     fontSize: 16,
//   },
// });





// // import React from 'react';
// // import { Text, View, TouchableOpacity } from 'react-native';
// // import { useSafeAreaInsets } from 'react-native-safe-area-context';

// // export default function ProfileScreen({ navigation }) {
// //   const insets = useSafeAreaInsets();

// //   return (
// //     <View style={{ paddingTop: insets.top }} className="items-center flex-1 bg-yellow-400">
// //       <Text className="mt-10 text-2xl font-bold">Profile Screen</Text>
      
// //       <TouchableOpacity 
// //         className="px-8 py-3 mt-10 bg-black rounded-full"
// //         onPress={() => navigation.goBack()}
// //       >
// //         <Text className="font-bold text-white">Back to Home</Text>
// //       </TouchableOpacity>
// //     </View>
// //   );
// // }

