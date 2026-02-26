import React, { useCallback, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Modal, ActivityIndicator, ScrollView, RefreshControl, Dimensions } from "react-native";
import { useNavigation } from '@react-navigation/native';
import WalletCarousel from '@/apps/KariMainWallet/components/WalletCarousel';
import LinearGradient from 'react-native-linear-gradient';
import TransactionsSection from '@/apps/KariMainWallet/components/transactionItem';
import TransactionsScr from '@/apps/KariMainWallet/components/transactionItem';
import TransferSection from '@/apps/KariMainWallet/components/transfercomponent';
import ActionCardWithLoader from '@/apps/KariMainWallet/components/actionCard';
import CustomSidebar from '@/shared/components/navigation/sidebar_drawer';




const { width } = Dimensions.get('window');

import KariPayHomeScreen from '@/apps/KariMainWallet/components/karipayhomescreen';

// =======================================================
//                         Icons
// =======================================================

import LocationIcon from '@assets/icons/location.svg';
import EditIcon from '@assets/icons/Edit.svg';
import HamburgerIcon from '@assets/icons/Hamburger.svg';
import TransferIcon from '@assets/icons/transfer.svg';
import TopUpIcon from '@assets/icons/topup.svg';
import HistoryIcon from '@assets/icons/history.svg';
import ReceiptIcon from '@assets/icons/receipt.svg';

/* ---------- COLORS ---------- */
import { COLORS } from '@/shared/constants/Color';





// const navigation = useNavigation<any>();

export default function Wallet_Screen() {
    const [refreshing, setRefreshing] = useState(false);
     const [loading, setLoading] = useState(false);
 const navigation = useNavigation<any>();
     
       const handleTransferPress = () => {
    setLoading(true);

    // Simulate a 2-second loading delay
    setTimeout(() => {
      setLoading(false);
      navigation.navigate("App_Entry"); // Replace with your actual screen name
    }, 2000);
  };
    
  const onRefresh = useCallback(() => {
    setRefreshing(true);

    // Simulate fetching data or refresh logic
    setTimeout(() => {
      setRefreshing(false);
    }, 1500); // 1.5 seconds
  }, []);





   const actions = [
    {
      Icon: ReceiptIcon,
      label: "KariPay",
      onPress: handleTransferPress,
      width: 28,
      height: 28,
    },
    {
      Icon: TransferIcon,
      label: "Transfer",
      onPress: () => console.log("Transfer Pressed"),
    },
    {
      Icon: TopUpIcon,
      label: "Top Up",
      onPress: () => console.log("Top Up Pressed"),
    },
  ];


  return (
    <ScrollView style={styles.MainContainer}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: 20 }}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh}
             />
          }
        >

      <WalletCarousel />

      <ActionCardWithLoader loading={loading} actions={actions} />

      <TransferSection />
      <TransactionsScr />

    </ScrollView>


  );
}

const styles = StyleSheet.create({
  MainContainer: { backgroundColor: COLORS.white },
  centerScreen: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  actionCard: { flexDirection: 'row', backgroundColor: COLORS.primary, borderRadius: 20, marginTop: 20, paddingVertical: 19 },
  actionItem: { flex: 1, alignItems: 'center' },
  actionLabel: { fontSize: 13, fontWeight: '600', marginTop: 10 },

  promoCard: { height: 200, backgroundColor: COLORS.cardGray, borderRadius: 20, marginTop: 20, justifyContent: 'center', alignItems: 'center' },
  promoText: { fontSize: 18, fontWeight: 'bold', color: COLORS.textDark },
  loadingOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)', // semi-transparent overlay
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    color: '#fff',
    marginTop: 10,
    fontSize: 16,
    fontWeight: 'bold',
  },
  loader: {
    position: 'absolute',
    zIndex: 1, // Ensures it stays on top of the image
  },

 });