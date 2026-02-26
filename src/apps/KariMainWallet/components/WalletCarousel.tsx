import React, { useRef } from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  Dimensions,
  Animated,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient'; // If using Bare CLI, use 'react-native-linear-gradient'

const { width } = Dimensions.get('window');
const CARD_WIDTH = width * 0.82;
const SPACING = 16;
const FULL_SIZE = CARD_WIDTH + SPACING;

const DATA = [
  { id: '1', balance: '15,903', lastFour: '2342', expiry: '07/21', colors: ['#F69D3C', '#EB5E28'] },
  { id: '2', balance: '12,000', lastFour: '5521', expiry: '12/24', colors: ['#4CC9F0', '#4361EE'] },
  { id: '3', balance: '8,450', lastFour: '9901', expiry: '01/26', colors: ['#4ade80', '#166534'] },
];



export default function WalletCarousel() {
  const scrollX = useRef(new Animated.Value(0)).current;

  return (
    <SafeAreaView style={styles.container}>
      <Animated.ScrollView
        horizontal
        pagingEnabled={false} // False so we can use snapToInterval for custom widths
        showsHorizontalScrollIndicator={false}
        snapToInterval={FULL_SIZE}
        decelerationRate="fast"
        contentContainerStyle={styles.scrollContainer}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: false }
        )}
        scrollEventThrottle={16}
      >
        {DATA.map((item) => (
          /* SHADOW WRAPPER: Handles the shadow so overflow:hidden doesn't clip it */
          <View key={item.id} style={styles.shadowWrapper}>
            <LinearGradient 
              colors={item.colors as [string, string, ...string[]]}  
              start={{ x: 0, y: 0 }} 
              end={{ x: 1, y: 1 }} 
              style={styles.cardContainer}
            >
              {/* Top Section */}
              <View>
                <Text style={styles.brandText}>Fundz</Text>
                <Text style={styles.balanceText}>₦ {item.balance}</Text>
              </View>

              {/* Bottom Section */}
              <View style={styles.cardFooter}>
                <Text style={styles.cardNumber}>**** **** **** {item.lastFour}</Text>
                <Text style={styles.expiryText}>{item.expiry}</Text>
              </View>

              {/* Decorative Glass Circle */}
              <View style={styles.overlayCircle} />
            </LinearGradient>
          </View>
        ))}
      </Animated.ScrollView>

      {/* ANIMATED PAGINATION */}
      <View style={styles.pagination}>
        {DATA.map((_, i) => {
          const inputRange = [
            (i - 1) * FULL_SIZE,
            i * FULL_SIZE,
            (i + 1) * FULL_SIZE,
          ];

          const dotWidth = scrollX.interpolate({
            inputRange,
            outputRange: [8, 22, 8],
            extrapolate: 'clamp',
          });

          const opacity = scrollX.interpolate({
            inputRange,
            outputRange: [0.3, 1, 0.3],
            extrapolate: 'clamp',
          });

          return (
            <Animated.View
              key={i}
              style={[styles.dot, { width: dotWidth, opacity }]}
            />
          );
        })}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    justifyContent: 'center',
  },
  scrollContainer: {
    paddingLeft: 20, // Align first card with screen edge padding
    paddingVertical: 30, // Room for shadow spread
  },
  shadowWrapper: {
    width: CARD_WIDTH,
    height: 200,
    marginRight: SPACING,
    // iOS Shadow
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 12 },
    shadowOpacity: 0.25,
    shadowRadius: 12,
    // Android Shadow
    elevation: 15,
  },
  cardContainer: {
    flex: 1,
    borderRadius: 25,
    padding: 24,
    justifyContent: 'space-between',
    overflow: 'hidden', // Clips the circle
  },
  brandText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: '500',
    opacity: 0.9,
    marginBottom: 8,
  },
  balanceText: {
    color: '#FFF',
    fontSize: 30,
    fontWeight: '700',
  },
  cardFooter: {
    gap: 8,
  },
  cardNumber: {
    color: '#FFF',
    fontSize: 17,
    letterSpacing: 1.5,
    opacity: 0.9,
  },
  expiryText: {
    color: '#FFF',
    fontSize: 15,
    opacity: 0.8,
  },
  overlayCircle: {
    position: 'absolute',
    bottom: -60,
    right: -40,
    width: 220,
    height: 220,
    borderRadius: 110,
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
  },
  pagination: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  dot: {
    height: 8,
    borderRadius: 4,
    backgroundColor: '#111',
    marginHorizontal: 4,
  },
});



// import React, { useRef } from 'react';
// import {
//   StyleSheet,
//   View,
//   ScrollView,
//   Dimensions,
//   Animated,
//   Text,
// } from 'react-native';

// const { width } = Dimensions.get('window');
// // Card width + the 20px margin you defined in styles
// const CARD_FULL_WIDTH = width * 0.85 + 20; 

// const DATA = [
//   { id: '1', balance: '15,903', lastFour: '2342', expiry: '07/21', color: '#F69D3C' },
//   { id: '2', balance: '12,000', lastFour: '5521', expiry: '12/24', color: '#4CC9F0' },
//   { id: '3', balance: '8,450', lastFour: '9901', expiry: '01/26', color: '#4361EE' },
// ];

// export default function WalletCarousel() {
//   const scrollX = useRef(new Animated.Value(0)).current;

//   return (
//     <View style={styles.container}>
//       <Animated.ScrollView
//         horizontal
//         pagingEnabled
//         showsHorizontalScrollIndicator={false}
//         snapToInterval={CARD_FULL_WIDTH}
//         decelerationRate="fast"
//         contentContainerStyle={styles.scrollContainer}
//         // This maps the scroll position to our scrollX variable
//         onScroll={Animated.event(
//           [{ nativeEvent: { contentOffset: { x: scrollX } } }],
//           { useNativeDriver: false }
//         )}
//         scrollEventThrottle={16}
//       >
//         {DATA.map((item) => (
//           <View key={item.id} style={[styles.card, { backgroundColor: item.color }]}>
//              <View>
//                 <Text style={styles.brandText}>Fundz</Text>
//                 <Text style={styles.balanceText}>₦ {item.balance}</Text>
//               </View>
//               <View style={styles.cardFooter}>
//                 <Text style={styles.cardNumber}>**** **** **** {item.lastFour}</Text>
//                 <Text style={styles.expiryText}>{item.expiry}</Text>
//               </View>
//               <View style={styles.overlayCircle} />
//           </View>
//         ))}
//       </Animated.ScrollView>

//       {/* Pagination Container */}
//       <View style={styles.pagination}>
//         {DATA.map((_, i) => {
//           // Calculate the range for each dot
//           const inputRange = [
//             (i - 1) * CARD_FULL_WIDTH,
//             i * CARD_FULL_WIDTH,
//             (i + 1) * CARD_FULL_WIDTH,
//           ];

//           // Animate the width (from dot to pill)
//           const dotWidth = scrollX.interpolate({
//             inputRange,
//             outputRange: [10, 25, 10],
//             extrapolate: 'clamp',
//           });

//           // Animate the opacity/color
//           const opacity = scrollX.interpolate({
//             inputRange,
//             outputRange: [0.3, 1, 0.3],
//             extrapolate: 'clamp',
//           });

//           return (
//             <Animated.View
//               key={i}
//               style={[styles.dot, { width: dotWidth, opacity }]}
//             />
//           );
//         })}
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     paddingVertical: 20,
//   },
//   scrollContainer: {
//     paddingHorizontal: 20,
//   },
//   card: {
//     width: width * 0.85,
//     height: 200,
//     borderRadius: 30,
//     padding: 25,
//     marginRight: 20,
//     justifyContent: 'space-between',
//     overflow: 'hidden',
//     backgroundColor: '#F69D3C', // Fallback color
    
    
//     // 1. iOS Shadow Properties
//     shadowColor: '#000',
//     shadowOffset: {
//       width: 0,
//       height: 10, // Moves shadow down (vertical offset)
//     },
//     shadowOpacity: 0.25, // How dark the shadow is (0 to 1)
//     shadowRadius: 15,    // The "blur" or spread of the shadow
    
//     // 2. Android Shadow Property
//     elevation: 10,       // Higher number = deeper shadow
    
//     // 3. Ensure shadow isn't clipped
//     // Note: If you use 'overflow: hidden' to clip the background circle, 
//     // the shadow might disappear on some versions. 
//     // If that happens, wrap the card in a Shadow Container View.
//   },
//   brandText: { color: '#FFF', fontSize: 18, opacity: 0.9 },
//   balanceText: { color: '#FFF', fontSize: 32, fontWeight: '700' },
//   cardFooter: { gap: 8 },
//   cardNumber: { color: '#FFF', fontSize: 18, letterSpacing: 2 },
//   expiryText: { color: '#FFF', fontSize: 16, opacity: 0.8 },
//   overlayCircle: {
//     position: 'absolute',
//     bottom: -50,
//     right: -20,
//     width: 200,
//     height: 200,
//     borderRadius: 100,
//     backgroundColor: 'rgba(255, 255, 255, 0.15)',
//   },
//   pagination: {
//     flexDirection: 'row',
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginTop: 25,
//   },
//   dot: {
//     height: 10,
//     borderRadius: 5,
//     backgroundColor: '#333',
//     marginHorizontal: 5,
//   },
// });


// import React from 'react';
// import { 
//   StyleSheet, 
//   Text, 
//   View, 
//   ScrollView, 
//   Dimensions, 
//   LinearGradient // Note: Requires expo-linear-gradient or react-native-linear-gradient
// } from 'react-native';
// import { SafeAreaView } from 'react-native-safe-area-context';

// const { width } = Dimensions.get('window');
// const CARD_WIDTH = width * 0.85;

// const WalletCard = ({ balance, lastFour, expiry, colors }) => {
//   return (

//     <View style={[styles.card, { backgroundColor: colors[0] }]}>
//       {/* Top Section */}
//       <View>
//         <Text style={styles.brandText}>Fundz</Text>
//         <Text style={styles.balanceText}>₦ {balance}</Text>
//       </View>

//       {/* Bottom Section */}
//       <View style={styles.cardFooter}>
//         <Text style={styles.cardNumber}>**** **** **** {lastFour}</Text>
//         <Text style={styles.expiryText}>{expiry}</Text>
//       </View>
      
//       {/* Decorative glass-morphism effect (Simplified for StyleSheet) */}
//       <View style={styles.overlayCircle} />
//     </View>
    
//   );
// };

// export default function WalletSlider() {
//   return (
//     //  <SafeAreaView>
//     <View style={styles.container}>
//       <ScrollView 
//         horizontal 
//         pagingEnabled 
//         showsHorizontalScrollIndicator={false}
//         contentContainerStyle={styles.scrollContainer}
//         snapToInterval={CARD_WIDTH + 20}
//         decelerationRate="fast"
//       >
//         <WalletCard balance="15,903" lastFour="2342" expiry="07/21" colors={['#F69D3C', '#EB5E28']} />
//         <WalletCard balance="12,000" lastFour="5521" expiry="12/24" colors={['#4CC9F0', '#4361EE']} />
//       </ScrollView>

//       {/* Pagination Indicators */}
//       <View style={styles.pagination}>
//         <View style={[styles.dot, styles.activeDot]} />
//         <View style={styles.dot} />
//         <View style={styles.dot} />
//       </View>
//     </View>
//     // </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     paddingVertical: 0,
//   },
//   scrollContainer: {
//     paddingHorizontal: 20,
//   },
//   card: {
//     width: CARD_WIDTH,
//     height: 200,
//     borderRadius: 30,
//     padding: 25,
//     marginRight: 20,
//     justifyContent: 'space-between',
//     overflow: 'hidden', // Clips the decorative circle
//     elevation: 5,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 4 },
//     shadowOpacity: 0.2,
//     shadowRadius: 8,
//   },
//   brandText: {
//     color: '#FFFFFF',
//     fontSize: 18,
//     opacity: 0.9,
//     marginBottom: 10,
//   },
//   balanceText: {
//     color: '#FFFFFF',
//     fontSize: 32,
//     fontWeight: '700',
//   },
//   cardFooter: {
//     gap: 10,
//   },
//   cardNumber: {
//     color: '#FFFFFF',
//     fontSize: 18,
//     letterSpacing: 2,
//     opacity: 0.9,
//   },
//   expiryText: {
//     color: '#FFFFFF',
//     fontSize: 16,
//     opacity: 0.8,
//   },
//   overlayCircle: {
//     position: 'absolute',
//     bottom: -50,
//     right: -20,
//     width: 200,
//     height: 200,
//     borderRadius: 100,
//     backgroundColor: 'rgba(255, 255, 255, 0.15)',
//   },
//   pagination: {
//     flexDirection: 'row',
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginTop: 20,
//   },
//   dot: {
//     width: 10,
//     height: 10,
//     borderRadius: 5,
//     backgroundColor: '#C4C4C4',
//     marginHorizontal: 5,
//   },
//   activeDot: {
//     width: 25,
//     backgroundColor: '#000000',
//   },
// });



// import React, { useRef, useState } from 'react';
// import {
//   View,
//   Text,
//   StyleSheet,
//   FlatList,
//   Dimensions,
//   Animated,
// } from 'react-native';
// import LinearGradient from 'react-native-linear-gradient';


// const { width } = Dimensions.get('window');
// const CARD_WIDTH = width * 0.82;
// const SPACING = 16;

// type WalletCard = {
//   id: string;
//   title: string;
//   balance: string;
//   cardNumber: string;
//   expiry: string;
// };

// const walletData: WalletCard[] = [
//   {
//     id: '1',
//     title: 'Fundz',
//     balance: '₦ 15,903',
//     cardNumber: '****  ****  ****  2342',
//     expiry: '07/21',
//   },
//   {
//     id: '2',
//     title: 'Savings',
//     balance: '₦ 48,200',
//     cardNumber: '****  ****  ****  9876',
//     expiry: '12/24',
//   },
//   {
//     id: '3',
//     title: 'Travel',
//     balance: '₦ 102,000',
//     cardNumber: '****  ****  ****  1122',
//     expiry: '09/25',
//   },
// ];

// const WalletCarousel: React.FC = () => {
//   const scrollX = useRef(new Animated.Value(0)).current;
//   const [index, setIndex] = useState(0);

//   const renderItem = ({ item }: { item: WalletCard }) => (
//     <View style={styles.cardWrapper}>
//     <LinearGradient
//       colors={['#4c669f', '#3b5998', '#192f6a']}
//       style={styles.gradient}
//       start={{ x: 0, y: 0 }}
//       end={{ x: 1, y: 1 }}
//     >
//       <Text style={styles.text}>Wallet Carousel</Text>
//     </LinearGradient>
//     </View>
//   );

//   return (
//     <View>
//       <Animated.FlatList
//         data={walletData}
//         keyExtractor={(item) => item.id}
//         horizontal
//         showsHorizontalScrollIndicator={false}
//         snapToInterval={CARD_WIDTH + SPACING}
//         decelerationRate="fast"
//         contentContainerStyle={{ paddingHorizontal: SPACING }}
//         renderItem={renderItem}
//         onScroll={Animated.event(
//           [{ nativeEvent: { contentOffset: { x: scrollX } } }],
//           { useNativeDriver: false }
//         )}
//         onMomentumScrollEnd={(event) => {
//           const newIndex = Math.round(
//             event.nativeEvent.contentOffset.x / (CARD_WIDTH + SPACING)
//           );
//           setIndex(newIndex);
//         }}
//       />

//       {/* Pagination Dots */}
//       <View style={styles.dots}>
//         {walletData.map((_, i) => (
//           <View
//             key={i}
//             style={[
//               styles.dot,
//               index === i && styles.activeDot,
//             ]}
//           />
//         ))}
//       </View>
//     </View>
//   );
// };

// export default WalletCarousel;


// const styles = StyleSheet.create({
//   cardWrapper: {
//     width: CARD_WIDTH,
//     marginRight: SPACING,
//   },

//   card: {
//     borderRadius: 28,
//     padding: 24,
//     height: 190,
//     justifyContent: 'space-between',

//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 10 },
//     shadowOpacity: 0.25,
//     shadowRadius: 20,
//     elevation: 10,
//   },

//   title: {
//     color: '#FFFFFF',
//     fontSize: 16,
//     opacity: 0.9,
//   },

//   balance: {
//     color: '#FFFFFF',
//     fontSize: 26,
//     fontWeight: 'bold',
//     marginTop: 8,
//   },

//   bottomRow: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//   },

//   cardNumber: {
//     color: '#FFFFFF',
//     letterSpacing: 2,
//     fontSize: 14,
//   },

//   expiry: {
//     color: '#FFFFFF',
//     fontSize: 14,
//   },

//   dots: {
//     flexDirection: 'row',
//     justifyContent: 'center',
//     marginTop: 16,
//   },

//   dot: {
//     width: 8,
//     height: 8,
//     borderRadius: 4,
//     backgroundColor: '#CFCFCF',
//     marginHorizontal: 4,
//   },

//   activeDot: {
//     backgroundColor: '#000',
//     width: 18,
//   },
//     gradient: {
//     flex: 1,
//     padding: 20,
//     borderRadius: 10,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   text: {
//     color: '#fff',
//     fontSize: 18,
//   },
// });
