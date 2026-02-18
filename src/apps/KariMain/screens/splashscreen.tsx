import React, { useEffect, useState } from 'react';
import { View, Image, StyleSheet, ImageBackground } from 'react-native';

export default function SplashScreen({ navigation }: any) {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Onboarding');
    }, 5000); // 2 seconds
  }, []); 

  return (

  
 <ImageBackground
      source={require('../../../../assets/splashbg.png')} // Your background image
      style={styles.container}
      resizeMode="cover" // cover, contain, stretch etc.
    >
        <View style={styles.logoContainer}>
      <Image
        source={require('../../../../assets/karilogo.png')} 
        style={styles.logo}
        resizeMode="contain"
      />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  logo: {
    width: 200,
    height: 200,
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 20,
    marginLeft: 35,
    // paddingHorizontal: 20,
    // paddingVertical: 20,
  },
  logoContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
