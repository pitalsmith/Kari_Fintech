import "./global.css";
import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import ProfileScreen from './src/shared/components/ProfileScreen';

const Stack = createStackNavigator();

function HomeScreen({ navigation }) {
  return (
    <View className="flex-1 items-center justify-center bg-slate-50">
      <Text className="text-2xl font-bold mb-5">Home Screen</Text>
      <TouchableOpacity 
        className="bg-blue-600 px-6 py-3 rounded-xl"
        onPress={() => navigation.navigate('Profile')}
      >
        <Text className="text-white font-bold">Go to Profile</Text>
      </TouchableOpacity>
    </View>
  );
}

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Profile" component={ProfileScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}


// import { StatusBar } from 'expo-status-bar';
// import { View } from 'react-native';
// import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
// // 1. Import your new screen here:
// import ProfileScreen from './components/ProfileScreen'; 
// import "./global.css";

// export default function App() {
//   return (
//     <SafeAreaProvider className="flex-1">
//       {/* 2. Just put the name of the screen here to show it */}
//       <ProfileScreen /> 
//       <StatusBar style="auto" />
//     </SafeAreaProvider>
//   );
// }



// import React from 'react';
// import { Text, View, TouchableOpacity } from 'react-native';
// import { StatusBar } from 'expo-status-bar';

// export default function App() {
//   return (
//     <View className="flex-1 items-center justify-center bg-slate-100">
//       <View className="bg-white p-6 rounded-2xl shadow-lg w-80 items-center">
//         <Text className="text-2xl font-bold text-blue-600 mb-2">
//           Project Live!
//         </Text>
//         <Text className="text-slate-500 text-center mb-6">
//           This screen is now styled with Tailwind CSS. Open App.tsx to start building.
//         </Text>
        
//         <TouchableOpacity className="bg-blue-500 py-3 px-8 rounded-full active:bg-blue-700">
//           <Text className="text-white font-semibold">Get Started</Text>
//         </TouchableOpacity>
//       </View>
//       <StatusBar style="auto" />
//     </View>
//   );
// }




// import { ScreenContent } from 'components/ScreenContent';
// import { StatusBar } from 'expo-status-bar';

// import './global.css';

// export default function App() {
//   return (
//     <>
//       <ScreenContent title="Home" path="App.tsx"></ScreenContent>
//       <StatusBar style="auto" />
//     </>
//   );
// }
