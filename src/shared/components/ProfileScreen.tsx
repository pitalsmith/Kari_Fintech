import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';


type ProfileScreenNavigationProp = NativeStackNavigationProp<any>;

export default function ProfileScreen({ navigation }: { navigation: ProfileScreenNavigationProp }) {
  const insets = useSafeAreaInsets();

  return (
    // We combine the dynamic safe area inset with our base styles
    <View style={[styles.container, { paddingTop: insets.top }]}>
      
      <Text style={styles.title}>Profile Screen</Text>
      
      <TouchableOpacity 
        style={styles.button}
        activeOpacity={0.8}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.buttonText}>Back to Home</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#facc15', // Same as yellow-400
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 40, // Same as mt-10 (10 * 4)
    color: '#000000',
  },
  button: {
    marginTop: 40,
    backgroundColor: '#000000',
    paddingHorizontal: 32, // Same as px-8
    paddingVertical: 12,   // Same as py-3
    borderRadius: 9999,    // Same as rounded-full
  },
  buttonText: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});





// import React from 'react';
// import { Text, View, TouchableOpacity } from 'react-native';
// import { useSafeAreaInsets } from 'react-native-safe-area-context';

// export default function ProfileScreen({ navigation }) {
//   const insets = useSafeAreaInsets();

//   return (
//     <View style={{ paddingTop: insets.top }} className="items-center flex-1 bg-yellow-400">
//       <Text className="mt-10 text-2xl font-bold">Profile Screen</Text>
      
//       <TouchableOpacity 
//         className="px-8 py-3 mt-10 bg-black rounded-full"
//         onPress={() => navigation.goBack()}
//       >
//         <Text className="font-bold text-white">Back to Home</Text>
//       </TouchableOpacity>
//     </View>
//   );
// }

