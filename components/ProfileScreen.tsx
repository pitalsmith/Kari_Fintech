import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function ProfileScreen({ navigation }) {
  const insets = useSafeAreaInsets();

  return (
    <View style={{ paddingTop: insets.top }} className="flex-1 items-center bg-yellow-400">
      <Text className="text-2xl font-bold mt-10">Profile Screen</Text>
      
      <TouchableOpacity 
        className="mt-10 bg-black px-8 py-3 rounded-full"
        onPress={() => navigation.goBack()}
      >
        <Text className="text-white font-bold">Back to Home</Text>
      </TouchableOpacity>
    </View>
  );
}

