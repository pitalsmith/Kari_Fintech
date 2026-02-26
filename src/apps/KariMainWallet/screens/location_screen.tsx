import { View, Text, StyleSheet } from "react-native";

export default function Location_Screen() {
  return (
    <View style={styles.centerScreen}>
      <Text style={{ fontSize: 22, fontWeight: 'bold' }}>Location Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
centerScreen: { flex: 1, justifyContent: 'center', alignItems: 'center' },


 });