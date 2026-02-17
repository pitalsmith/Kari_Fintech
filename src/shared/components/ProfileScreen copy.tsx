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

// import React from 'react';
// import { Text, View, Image, TouchableOpacity } from 'react-native';
// import { useSafeAreaInsets } from 'react-native-safe-area-context';

// export default function ProfileScreen() {
//   const insets = useSafeAreaInsets();

//   return (
//     <View 
 
//       className="flex-1 bg-slate-50 items-center pt-20 "
//     >
//       {/* Profile Header */}
//       <View className="w-full px-6 pt-10 pb-6 bg-white shadow-sm items-center rounded-b-3xl">
//         <View className="w-24 h-24 bg-blue-500 rounded-full items-center justify-center mb-4">
//           <Text className="text-white text-3xl font-bold">JD</Text>
//         </View>
//         <Text className="text-2xl font-bold text-slate-800 pt-20">John Doe</Text>
//         <Text className="text-slate-500">React Native Developerr</Text>
//       </View>

//       {/* Stats Section */}
//       <View className="flex-row w-full justify-around mt-8 px-4">
//         <View className="items-center">
//           <Text className="text-xl font-bold text-slate-800">12</Text>
//           <Text className="text-slate-500">Projects</Text>
//         </View>
//         <View className="items-center">
//           <Text className="text-xl font-bold text-slate-800">1.2k</Text>
//           <Text className="text-slate-500">Followers</Text>
//         </View>
//       </View>

//       {/* Edit Button */}
//       <TouchableOpacity className="mt-10 bg-blue-600 px-10 py-4 rounded-full shadow-md active:bg-blue-700">
//         <Text className="text-white font-bold text-lg">Edit Profile</Text>
//       </TouchableOpacity>
//     </View>
//   );
// }


// import React from 'react';
// import { Text } from 'react-native';
// import { SafeAreaView } from 'react-native-safe-area-context';

// export default function ProfileScreen() {
//   return (
//     <SafeAreaView className="flex-1 items-center justify-center bg-yellow-400 pt-200">
//   <Text className="text-2xl font-bold">This is the Profile Screen!</Text>
//   <Text>We just created a new page. Now Working - ggg </Text>
// </SafeAreaView>
//   );
// }