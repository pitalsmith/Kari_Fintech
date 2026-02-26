import React, { useEffect } from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import { NavigationContainer,createNavigationContainerRef, DefaultTheme, Theme, } from '@react-navigation/native';
import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { LogBox } from 'react-native';
import MainApp_HomeScreen from './src/apps/KariMainWallet/screens/home';
import Splash_Screen from './src/apps/KariMainWallet/screens/splashscreen';
import App_Entry from '@/apps/AppEntry';
import OnboardingScreen from './src/apps/KariMainWallet/screens/onboardingscreen';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

const originalWarn = console.warn;
console.warn = (...args) => {
  if (args[0]?.includes && 
      (args[0].includes('SafeAreaView') || 
       args[0].includes('deprecated'))) {
    return;
  }
  originalWarn(...args);
};


SplashScreen.preventAutoHideAsync().catch(() => {
  /* reloading the app might trigger an error here, which is fine to ignore */
});

type RootStackParamList = {
  Home: undefined;
  Profile: undefined;
  Main: undefined;
  Splash_Screen: undefined;
  OnboardingScreen: undefined;
  App_Entry: undefined;
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
        onPress={() => navigation.navigate('App_Entry')}
      >
        <Text style={styles.buttonText}>Go to Main App Home</Text>
      </TouchableOpacity>
    </View>
  );
}

// --- MAIN APP ---
export const rootNavigationRef = createNavigationContainerRef();

type ExtendedTheme = Theme & {
  fonts: Theme['fonts'] & {
    sofiaBold: { fontFamily: string; fontWeight: string };
    sofiaSemiBold: { fontFamily: string; fontWeight: string };
    sofiaBoldd: { fontFamily: string; fontWeight: string };
    regular: { fontFamily: 'Sofia-Regular', fontWeight: '400' },
    medium: { fontFamily: 'Sofia-Medium', fontWeight: '400' },
    bold: { fontFamily: 'Gilroy-Bold', fontWeight: '700' },
    heavy: { fontFamily: 'Gilroy-Bold', fontWeight: '800' },
  };
};

export default function App() {
const [fontsLoaded, error] = useFonts({
    'Gilroy-Bold': require('./assets/fonts/gilroy-Bold.ttf'),
    'Sofia-Regular': require('./assets/fonts/sofia-pro-regular.otf'),
    'Sofia-Medium': require('./assets/fonts/sofia-pro-medium.otf'),
    'Sofia-Bold': require('./assets/fonts/sofia-pro-bold.otf'),
    'Sofia-Semi-Bold': require('./assets/fonts/sofia-pro-bold.otf'),
  });

  useEffect(() => {
    if (fontsLoaded || error) SplashScreen.hideAsync();
  }, [fontsLoaded, error]);

  const AppTheme : ExtendedTheme = {
    ...DefaultTheme,
    // Mapping fonts to the standard navigation system
  fonts: {
    regular: { fontFamily: 'Sofia-Regular', fontWeight: '400' },
    medium: { fontFamily: 'Sofia-Medium', fontWeight: '400' },
    bold: { fontFamily: 'Gilroy-Bold', fontWeight: '700' },
    heavy: { fontFamily: 'Gilroy-Bold', fontWeight: '800' },

    sofiaBold: { fontFamily: 'Sofia-Bold', fontWeight: '700' },
    sofiaSemiBold: { fontFamily: 'Sofia-Semi-Bold', fontWeight: '700' },
    sofiaBoldd: { fontFamily: 'Sofia-S-Bold', fontWeight: '500' },
  },
  };

  if (!fontsLoaded && !error) return null;




  return (
    <SafeAreaProvider>
      <NavigationContainer theme={AppTheme}>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          {/* <Stack.Screen name="Home" component={HomeScreen} /> */}
          <Stack.Screen name="Home" component={App_Entry} />
          <Stack.Screen name="Main" component={MainApp_HomeScreen} />
          <Stack.Screen name="Splash_Screen" component={Splash_Screen} /> 
          <Stack.Screen name="Onboarding" component={OnboardingScreen} />
          <Stack.Screen name="App_Entry" component={App_Entry} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

// --- STYLESHEET ---

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#f8fafc' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20, color: '#1e293b' },
  button: { backgroundColor: '#2563eb', paddingHorizontal: 24, paddingVertical: 12, borderRadius: 12, shadowColor: '#000', 
    shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.1, shadowRadius: 4, elevation: 3 },
  buttonText: { color: '#ffffff', fontWeight: 'bold', fontSize: 16 },
});

