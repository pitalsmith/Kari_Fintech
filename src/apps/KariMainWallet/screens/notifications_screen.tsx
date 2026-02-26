import { View, Text, StyleSheet } from "react-native";

export default function Notifications_Screen() {
  return (
    <View style={styles.centerScreen}>
      <Text style={{ fontSize: 22, fontWeight: 'bold' }}>Notifications_Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
centerScreen: { flex: 1, justifyContent: 'center', alignItems: 'center' },


 });