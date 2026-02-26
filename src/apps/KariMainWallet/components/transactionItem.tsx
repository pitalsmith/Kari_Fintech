import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  StyleProp,
  ViewStyle,
  TextStyle,
} from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

const transactions = [
  {
    id: "1",
    name: "@Jerry paid you",
    description: "For Movie tickets · 12:35am",
    amount: 500,
    type: "credit",
    avatar: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    id: "2",
    name: "You paid @Sam",
    description: "Grab some snacks",
    amount: -100,
    type: "debit",
    avatar: "https://randomuser.me/api/portraits/men/43.jpg",
  },
  {
    id: "3",
    name: "Paid for Electricity B...",
    description: "7:35pm",
    amount: -1000,
    type: "debit",
    avatar: "https://randomuser.me/api/portraits/men/12.jpg",
  },
  {
    id: "4",
    name: "@Tobe paid you",
    description: "9:00pm",
    amount: 200,
    type: "credit",
    avatar: "https://randomuser.me/api/portraits/men/77.jpg",
  },
  {
    id: "5",
    name: "Paid for airtime",
    description: "9:00pm",
    amount: -100,
    type: "debit",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
  },
];


import TransferIcon from '@assets/icons/transfer.svg';
import TopUpIcon from '@assets/icons/topup.svg';
import ScanIcon from '@assets/icons/scan.svg';
import Barcode from '@assets/icons/barcode.svg';


 const WalletScreen = () => {
    // const ScanIcon = Ionicons;
    // const Barcode = Ionicons;
    
  
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 20 }}
      >
        {/* Action Card */}

        <View style={styles.actionCard}>
  
  <TouchableOpacity style={styles.actionButton}>
    <ScanIcon name="qr-code-outline" size={10} color="#fff" style={styles.IconTarget} />
    <Text style={styles.actionText}>Scan to Pay</Text>
  </TouchableOpacity>

  <View style={styles.divider} />

  <TouchableOpacity style={styles.actionButton}>
    <Barcode name="download-outline" size={10} color="#fff" style={styles.IconTarget2}/>
    <Text style={styles.actionText2}>Receive Payment</Text>
  </TouchableOpacity>

</View>


        

        {/* Transactions Header */}
        <View style={styles.transactionHeader}>
          <Text style={styles.transactionTitle}>Transactions</Text>
          <TouchableOpacity>
            <Text style={styles.viewAll}>View all</Text>
          </TouchableOpacity>
        </View>

        {/* Transactions List */}
        {transactions.map((item) => (
          <TransactionItem key={item.id} item={item} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const TransactionItem = ({ item }: { item: any }) => {
  const isCredit = item.type === "credit";

  return (
    <View style={styles.transactionItem}>
      <Image source={{ uri: item.avatar }} style={styles.avatar} />

      <View style={styles.transactionDetails}>
        <Text style={styles.transactionName}>{item.name}</Text>
        {item.description ? (
          <Text style={styles.transactionDesc}>{item.description}</Text>
        ) : null}
      </View>

      <Text
        style={[styles.amount, { color: isCredit ? "#2ECC71" : "#E74C3C" }]}
      >
        {isCredit ? "+" : ""}
        {item.amount}
      </Text>
    </View>
  );
};

export default WalletScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
    // paddingHorizontal: 0,
  },

  actionCard: {
    flexDirection: "row",
    backgroundColor: "#C7553C",
    borderRadius: 16,
    paddingVertical: 30,
    marginTop: 0,
    paddingHorizontal: 0,
    marginBottom: 30,
    marginVertical: 10,
    alignItems: "center",
    justifyContent: "space-around",
    width: '100%',
  },

  IconTarget: {
 marginLeft: 24,
  },

   IconTarget2: {
 marginLeft: -2,
  },

  actionButton: {
    flex: 1,
    alignItems: "center",
     flexDirection: "row",
     gap: 0,     
  },

  actionText: {
  marginLeft: 4,
  color: "#fff",
  fontSize: 14,
  fontWeight: "600",
  },

  actionText2: {
  marginLeft: 6,
  color: "#fff",
  fontSize: 14,
  fontWeight: "600",
  },


  divider: {
    width: 1,
    height: 30,
    backgroundColor: "rgba(255,255,255,0.4)",
    marginRight: 15,
  },

  transactionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },

  transactionTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#222",
  },

  viewAll: {
    color: "#C7553C",
    fontWeight: "500",
  },

  transactionItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },

  avatar: {
    width: 45,
    height: 45,
    borderRadius: 22.5,
    marginRight: 12,
  },

  transactionDetails: {
    flex: 1,
  },

  transactionName: {
    fontSize: 15,
    fontWeight: "600",
    color: "#222",
  },

  transactionDesc: {
    fontSize: 13,
    color: "#777",
    marginTop: 2,
  },

  amount: {
    fontSize: 15,
    fontWeight: "600",
  },
});




// import React from "react";
// import {
//   View,
//   Text,
//   StyleSheet,
//   SafeAreaView,
//   FlatList,
//   TouchableOpacity,
//   Image,
// } from "react-native";

// const transactions = [
//   {
//     id: "1",
//     name: "@Jerry paid you",
//     description: "For Movie tickets · 12:35am",
//     amount: 500,
//     type: "credit",
//     avatar: "https://randomuser.me/api/portraits/women/65.jpg",
//   },
//   {
//     id: "2",
//     name: "You paid @Sam",
//     description: "Grab some snacks",
//     amount: -100,
//     type: "debit",
//     avatar: "https://randomuser.me/api/portraits/men/43.jpg",
//   },
//   {
//     id: "3",
//     name: "Paid for Electricity B...",
//     description: "7:35pm",
//     amount: -1000,
//     type: "debit",
//     avatar: "https://randomuser.me/api/portraits/men/12.jpg",
//   },
//   {
//     id: "4",
//     name: "@Tobe paid you",
//     description: "9:00pm",
//     amount: 200,
//     type: "credit",
//     avatar: "https://randomuser.me/api/portraits/men/77.jpg",
//   },
//   {
//     id: "5",
//     name: "Paid for airtime",
//     description: "",
//     amount: -100,
//     type: "debit",
//     avatar: "https://randomuser.me/api/portraits/women/44.jpg",
//   },
// ];

// const WalletScreen = () => {
//   const renderItem = ({ item }) => <TransactionItem item={item} />;

//   const ListHeader = () => (
//     <>
//       {/* Action Card */}
//       <View style={styles.actionCard}>
//         <TouchableOpacity style={styles.actionButton}>
//           <Text style={styles.actionText}>Scan to Pay</Text>
//         </TouchableOpacity>

//         <View style={styles.divider} />

//         <TouchableOpacity style={styles.actionButton}>
//           <Text style={styles.actionText}>Receive Payment</Text>
//         </TouchableOpacity>
//       </View>

//       {/* Transactions Header */}
//       <View style={styles.transactionHeader}>
//         <Text style={styles.transactionTitle}>Transactions</Text>
//         <TouchableOpacity>
//           <Text style={styles.viewAll}>View all</Text>
//         </TouchableOpacity>
//       </View>
//     </>
//   );

//   return (
//     <SafeAreaView style={styles.container}>
//       <FlatList
//         data={transactions}
//         keyExtractor={(item) => item.id}
//         renderItem={renderItem}
//         ListHeaderComponent={ListHeader}
//         showsVerticalScrollIndicator={false}
//         contentContainerStyle={{ paddingBottom: 20 }}
//       />
//     </SafeAreaView>
//   );
// };

// const TransactionItem = ({ item }) => {
//   const isCredit = item.type === "credit";

//   return (
//     <View style={styles.transactionItem}>
//       <Image source={{ uri: item.avatar }} style={styles.avatar} />

//       <View style={styles.transactionDetails}>
//         <Text style={styles.transactionName}>{item.name}</Text>
//         {item.description ? (
//           <Text style={styles.transactionDesc}>
//             {item.description}
//           </Text>
//         ) : null}
//       </View>

//       <Text
//         style={[
//           styles.amount,
//           { color: isCredit ? "#2ECC71" : "#E74C3C" },
//         ]}
//       >
//         {isCredit ? "+" : ""}
//         {item.amount}
//       </Text>
//     </View>
//   );
// };

// export default WalletScreen;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#F5F5F5",
//     paddingHorizontal: 20,
//   },

//   actionCard: {
//     flexDirection: "row",
//     backgroundColor: "#C7553C",
//     borderRadius: 16,
//     paddingVertical: 20,
//     marginTop: 20,
//     marginBottom: 30,
//     alignItems: "center",
//     justifyContent: "space-around",
//   },

//   actionButton: {
//     flex: 1,
//     alignItems: "center",
//   },

//   actionText: {
//     color: "#fff",
//     fontSize: 16,
//     fontWeight: "600",
//   },

//   divider: {
//     width: 1,
//     height: 30,
//     backgroundColor: "rgba(255,255,255,0.4)",
//   },

//   transactionHeader: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     alignItems: "center",
//     marginBottom: 20,
//   },

//   transactionTitle: {
//     fontSize: 18,
//     fontWeight: "700",
//     color: "#222",
//   },

//   viewAll: {
//     color: "#C7553C",
//     fontWeight: "500",
//   },

//   transactionItem: {
//     flexDirection: "row",
//     alignItems: "center",
//     marginBottom: 20,
//   },

//   avatar: {
//     width: 45,
//     height: 45,
//     borderRadius: 22.5,
//     marginRight: 12,
//   },

//   transactionDetails: {
//     flex: 1,
//   },

//   transactionName: {
//     fontSize: 15,
//     fontWeight: "600",
//     color: "#222",
//   },

//   transactionDesc: {
//     fontSize: 13,
//     color: "#777",
//     marginTop: 2,
//   },

//   amount: {
//     fontSize: 15,
//     fontWeight: "600",
//   },
// });




// import React from "react";
// import {
//   View,
//   Text,
//   StyleSheet,
//   SafeAreaView,
//   FlatList,
//   TouchableOpacity,
//   Image,
// } from "react-native";

// const transactions = [
//   {
//     id: "1",
//     name: "@Jerry paid you",
//     description: "For Movie tickets · 12:35am",
//     amount: 500,
//     type: "credit",
//     avatar: "https://randomuser.me/api/portraits/women/65.jpg",
//   },
//   {
//     id: "2",
//     name: "You paid @Sam",
//     description: "Grab some snacks",
//     amount: -100,
//     type: "debit",
//     avatar: "https://randomuser.me/api/portraits/men/43.jpg",
//   },
//   {
//     id: "3",
//     name: "Paid for Electricity B...",
//     description: "7:35pm",
//     amount: -1000,
//     type: "debit",
//     avatar: "https://randomuser.me/api/portraits/men/12.jpg",
//   },
//   {
//     id: "4",
//     name: "@Tobe paid you",
//     description: "9:00pm",
//     amount: 200,
//     type: "credit",
//     avatar: "https://randomuser.me/api/portraits/men/77.jpg",
//   },
//   {
//     id: "5",
//     name: "Paid for airtime",
//     description: "",
//     amount: -100,
//     type: "debit",
//     avatar: "https://randomuser.me/api/portraits/women/44.jpg",
//   },
// ];

// const WalletScreen = () => {
//   const renderItem = ({ item }) => (
//     <TransactionItem item={item} />
//   );

//   return (
//     <SafeAreaView style={styles.container}>
//       {/* Action Card */}
//       <View style={styles.actionCard}>
//         <TouchableOpacity style={styles.actionButton}>
//           <Text style={styles.actionText}>Scan to Pay</Text>
//         </TouchableOpacity>

//         <View style={styles.divider} />

//         <TouchableOpacity style={styles.actionButton}>
//           <Text style={styles.actionText}>Receive Payment</Text>
//         </TouchableOpacity>
//       </View>

//       {/* Header */}
//       <View style={styles.transactionHeader}>
//         <Text style={styles.transactionTitle}>Transactions</Text>
//         <TouchableOpacity>
//           <Text style={styles.viewAll}>View all</Text>
//         </TouchableOpacity>
//       </View>

//       {/* Transactions List */}
//       <FlatList
//         data={transactions}
//         keyExtractor={(item) => item.id}
//         renderItem={renderItem}
//         showsVerticalScrollIndicator={false}
//       />
//     </SafeAreaView>
//   );
// };

// const TransactionItem = ({ item }) => {
//   const isCredit = item.type === "credit";

//   return (
//     <View style={styles.transactionItem}>
//       <Image source={{ uri: item.avatar }} style={styles.avatar} />

//       <View style={styles.transactionDetails}>
//         <Text style={styles.transactionName}>{item.name}</Text>
//         {item.description ? (
//           <Text style={styles.transactionDesc}>
//             {item.description}
//           </Text>
//         ) : null}
//       </View>

//       <Text
//         style={[
//           styles.amount,
//           { color: isCredit ? "#2ECC71" : "#E74C3C" },
//         ]}
//       >
//         {isCredit ? "+" : ""}
//         {item.amount}
//       </Text>
//     </View>
//   );
// };

// export default WalletScreen;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#F5F5F5",
//     paddingHorizontal: 20,
//   },

//   actionCard: {
//     flexDirection: "row",
//     backgroundColor: "#C7553C",
//     borderRadius: 16,
//     paddingVertical: 20,
//     marginTop: 20,
//     marginBottom: 30,
//     alignItems: "center",
//     justifyContent: "space-around",
//   },

//   actionButton: {
//     flex: 1,
//     alignItems: "center",
//   },

//   actionText: {
//     color: "#fff",
//     fontSize: 16,
//     fontWeight: "600",
//   },

//   divider: {
//     width: 1,
//     height: 30,
//     backgroundColor: "rgba(255,255,255,0.4)",
//   },

//   transactionHeader: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     alignItems: "center",
//     marginBottom: 20,
//   },

//   transactionTitle: {
//     fontSize: 18,
//     fontWeight: "700",
//     color: "#222",
//   },

//   viewAll: {
//     color: "#C7553C",
//     fontWeight: "500",
//   },

//   transactionItem: {
//     flexDirection: "row",
//     alignItems: "center",
//     marginBottom: 20,
//   },

//   avatar: {
//     width: 45,
//     height: 45,
//     borderRadius: 22.5,
//     marginRight: 12,
//   },

//   transactionDetails: {
//     flex: 1,
//   },

//   transactionName: {
//     fontSize: 15,
//     fontWeight: "600",
//     color: "#222",
//   },

//   transactionDesc: {
//     fontSize: 13,
//     color: "#777",
//     marginTop: 2,
//   },

//   amount: {
//     fontSize: 15,
//     fontWeight: "600",
//   },
// });


// ====================================================================

// import React from "react";
// import {
//   View,
//   Text,
//   StyleSheet,
//   SafeAreaView,
//   FlatList,
//   TouchableOpacity,
//   Image,
// } from "react-native";

// const transactions = [
//   {
//     id: "1",
//     name: "@Jerry paid you",
//     description: "For Movie tickets · 12:35am",
//     amount: 500,
//     type: "credit",
//   },
//   {
//     id: "2",
//     name: "You paid @Sam",
//     description: "Grab some snacks",
//     amount: -100,
//     type: "debit",
//   },
//   {
//     id: "3",
//     name: "Paid for Electricity B...",
//     description: "7:35pm",
//     amount: -1000,
//     type: "debit",
//   },
//   {
//     id: "4",
//     name: "@Tobe paid you",
//     description: "9:00pm",
//     amount: 200,
//     type: "credit",
//   },
//   {
//     id: "5",
//     name: "Paid for airtime",
//     description: "",
//     amount: -100,
//     type: "debit",
//   },
// ];

// const TransactionsScr = () => {
//   const renderItem = ({ item }) => (
//     <TransactionItem item={item} />
//   );

//   return (
//     <SafeAreaView style={styles.container}>
//       {/* Action Card */}
//       <View style={styles.actionCard}>
//         <TouchableOpacity style={styles.actionButton}>
//           <Text style={styles.actionText}>Scan to Pay</Text>
//         </TouchableOpacity>

//         <View style={styles.divider} />

//         <TouchableOpacity style={styles.actionButton}>
//           <Text style={styles.actionText}>Receive Payment</Text>
//         </TouchableOpacity>
//       </View>

//       {/* Transactions Header */}
//       <View style={styles.transactionHeader}>
//         <Text style={styles.transactionTitle}>Transactions</Text>
//         <TouchableOpacity>
//           <Text style={styles.viewAll}>View all</Text>
//         </TouchableOpacity>
//       </View>

//       {/* Transactions List */}
//       <FlatList
//         data={transactions}
//         keyExtractor={(item) => item.id}
//         renderItem={renderItem}
//         showsVerticalScrollIndicator={false}
//       />
//     </SafeAreaView>
//   );
// };

// const TransactionItem = ({ item }) => {
//   const isCredit = item.type === "credit";

//   return (
//     <View style={styles.transactionItem}>
//       <View style={styles.avatar} />

//       <View style={styles.transactionDetails}>
//         <Text style={styles.transactionName}>{item.name}</Text>
//         {item.description ? (
//           <Text style={styles.transactionDesc}>{item.description}</Text>
//         ) : null}
//       </View>

//       <Text
//         style={[
//           styles.amount,
//           { color: isCredit ? "#2ECC71" : "#E74C3C" },
//         ]}
//       >
//         {isCredit ? "+" : ""}
//         {item.amount}
//       </Text>
//     </View>
//   );
// };

// export default TransactionsScr;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#F5F5F5",
//     paddingHorizontal: 20,
//   },

//   actionCard: {
//     flexDirection: "row",
//     backgroundColor: "#C7553C",
//     borderRadius: 16,
//     paddingVertical: 20,
//     marginTop: 20,
//     marginBottom: 30,
//     alignItems: "center",
//     justifyContent: "space-around",
//   },

//   actionButton: {
//     flex: 1,
//     alignItems: "center",
//   },

//   actionText: {
//     color: "#fff",
//     fontSize: 16,
//     fontWeight: "600",
//   },

//   divider: {
//     width: 1,
//     height: 30,
//     backgroundColor: "rgba(255,255,255,0.4)",
//   },

//   transactionHeader: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     alignItems: "center",
//     marginBottom: 20,
//   },

//   transactionTitle: {
//     fontSize: 18,
//     fontWeight: "700",
//     color: "#222",
//   },

//   viewAll: {
//     color: "#C7553C",
//     fontWeight: "500",
//   },

//   transactionItem: {
//     flexDirection: "row",
//     alignItems: "center",
//     marginBottom: 20,
//   },

//   avatar: {
//     width: 45,
//     height: 45,
//     borderRadius: 22.5,
//     backgroundColor: "#DDD",
//     marginRight: 12,
//   },

//   transactionDetails: {
//     flex: 1,
//   },

//   transactionName: {
//     fontSize: 15,
//     fontWeight: "600",
//     color: "#222",
//   },

//   transactionDesc: {
//     fontSize: 13,
//     color: "#777",
//     marginTop: 2,
//   },

//   amount: {
//     fontSize: 15,
//     fontWeight: "600",
//   },
// });




