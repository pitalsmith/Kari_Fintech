import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import ProfileScreen from './src/shared/components/ProfileScreen';
import MainApp_HomeScreen from './src/apps/KariMain/screens/home';

type RootStackParamList = {
  Home: undefined;
  Profile: undefined;
  Main: undefined;
};

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

interface HomeScreenProps {
  navigation: HomeScreenNavigationProp;
}

const Stack = createStackNavigator();

// --- COMPONENTS ---

function HomeScreen({ navigation }: HomeScreenProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home Screen</Text>
      
      <TouchableOpacity 
        style={styles.button}
        activeOpacity={0.7}
        onPress={() => navigation.navigate('Main')}
      >
        <Text style={styles.buttonText}>Go to Main App Home</Text>
      </TouchableOpacity>
    </View>
  );
}

// --- MAIN APP ---

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Profile" component={ProfileScreen} />
          <Stack.Screen name="Main" component={MainApp_HomeScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

// --- STYLESHEET ---

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f8fafc', // Same as slate-50
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#1e293b', // Deep slate color
  },
  button: {
    backgroundColor: '#2563eb', // Same as blue-600
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 12,
    // Team tip: Shadow helps buttons pop
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3, // Required for Android shadows
  },
  buttonText: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});



// import "./global.css";
// import React from 'react';
// import { Text, View, TouchableOpacity } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import { SafeAreaProvider } from 'react-native-safe-area-context';
// import ProfileScreen from './components/ProfileScreen';

// const Stack = createStackNavigator();

// function HomeScreen({ navigation }) {
//   return (
//     <View className="items-center justify-center flex-1 bg-slate-50">
//       <Text className="mb-5 text-2xl font-bold">Home Screen</Text>
//       <TouchableOpacity 
//         className="px-6 py-3 bg-blue-600 rounded-xl"
//         onPress={() => navigation.navigate('Profile')}
//       >
//         <Text className="font-bold text-white">Go to Profile</Text>
//       </TouchableOpacity>
//     </View>
//   );
// }

// export default function App() {
//   return (
//     <SafeAreaProvider>
//       <NavigationContainer>
//         <Stack.Navigator screenOptions={{ headerShown: false }}>
//           <Stack.Screen name="Home" component={HomeScreen} />
//           <Stack.Screen name="Profile" component={ProfileScreen} />
//         </Stack.Navigator>
//       </NavigationContainer>
//     </SafeAreaProvider>
//   );
// }

