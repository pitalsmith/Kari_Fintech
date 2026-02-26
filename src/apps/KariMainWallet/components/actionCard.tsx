import React from "react";
import { View, Text, TouchableOpacity, Modal, ActivityIndicator, StyleSheet } from "react-native";
import { COLORS } from '@/shared/constants/Color'; // Make sure your COLORS import is correct

type ActionItem = {
  Icon: React.ComponentType<{ width?: number; height?: number }>;
  label: string;
  onPress: () => void;
  width?: number;
  height?: number;
};

type ActionCardWithLoaderProps = {
  loading: boolean;
  actions: ActionItem[];
};

const ActionCardWithLoader: React.FC<ActionCardWithLoaderProps> = ({ loading, actions }) => {
  return (
    <View style={styles.centerScreen}>
      {/* Loading Modal */}
      <Modal transparent visible={loading}>
        <View style={styles.loadingOverlay}>
          <ActivityIndicator size="large" color="#FFCC00" />
          <Text style={styles.loadingText}>Loading...</Text>
        </View>
      </Modal>

      {/* Action Card */}
      <View style={styles.actionCard}>
        {actions.map((action, index) => (
          <TouchableOpacity
            key={index}
            style={styles.actionItem}
            onPress={action.onPress}
          >
            <action.Icon width={action.width || 30} height={action.height || 30} />
            <Text style={styles.actionLabel}>{action.label}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  centerScreen: { flex: 1, justifyContent: "center", alignItems: "center" },
  actionCard: {
    flexDirection: "row",
    backgroundColor: COLORS.primary,
    borderRadius: 20,
    marginTop: 20,
    paddingVertical: 19,
  },
  actionItem: { flex: 1, alignItems: "center" },
  actionLabel: { fontSize: 13, fontWeight: "600", marginTop: 10 },
  loadingOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  loadingText: { marginTop: 10, color: "#fff", fontSize: 16 },
});

export default ActionCardWithLoader;




// import React from "react";
// import {
//   View,
//   Text,
//   TouchableOpacity,
//   Modal,
//   ActivityIndicator,
//   StyleSheet,
//   ViewStyle,
//   TextStyle,
// } from "react-native";

// // Define the type for each action button
// type ActionItem = {
//   Icon: React.ComponentType<{ width?: number; height?: number }>;
//   label: string;
//   onPress: () => void;
//   width?: number;
//   height?: number;
// };

// // Props for the reusable component
// type ActionCardWithLoaderProps = {
//   loading: boolean;
//   actions: ActionItem[];
//   style?: ViewStyle;
// };

// const ActionCardWithLoader: React.FC<ActionCardWithLoaderProps> = ({
//   loading,
//   actions,
//   style,
// }) => {
//   return (
//     <View style={[styles.centerScreen, style]}>
//       {/* Loading Modal */}
//       <Modal transparent visible={loading}>
//         <View style={styles.loadingOverlay}>
//           <ActivityIndicator size="large" color="#FFCC00" />
//           <Text style={styles.loadingText}>Loading...</Text>
//         </View>
//       </Modal>

//       {/* Action Card */}
//       <View style={styles.actionCard}>
//         {actions.map((action, index) => (
//           <TouchableOpacity
//             key={index}
//             style={styles.actionItem}
//             onPress={action.onPress}
//           >
//             <action.Icon width={action.width || 30} height={action.height || 30} />
//             <Text style={styles.actionLabel}>{action.label}</Text>
//           </TouchableOpacity>
//         ))}
//       </View>
//     </View>
//   );
// };

// // Example Styles
// const styles = StyleSheet.create({
//   centerScreen: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//   } as ViewStyle,
//   loadingOverlay: {
//     flex: 1,
//     backgroundColor: "rgba(0,0,0,0.5)",
//     justifyContent: "center",
//     alignItems: "center",
//   } as ViewStyle,
//   loadingText: {
//     marginTop: 10,
//     color: "#fff",
//     fontSize: 16,
//   } as TextStyle,
//   actionCard: {
//     flexDirection: "row",
//     backgroundColor: "#fff",
//     borderRadius: 10,
//     padding: 20,
//     shadowColor: "#000",
//     shadowOpacity: 0.1,
//     shadowRadius: 5,
//     elevation: 5,
//   } as ViewStyle,
//   actionItem: {
//     alignItems: "center",
//     marginHorizontal: 15,
//   } as ViewStyle,
//   actionLabel: {
//     marginTop: 5,
//     fontSize: 14,
//     fontWeight: "500",
//   } as TextStyle,
// });

// export default ActionCardWithLoader;