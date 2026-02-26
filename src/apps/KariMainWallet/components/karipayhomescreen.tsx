import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  Dimensions,
  ImageSourcePropType, ImageBackground
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { COLORS } from '@/shared/constants/Color';
import RideIcon from '@assets/icons/ride.svg'
import RideIcon2 from '@assets/icons/ride2.svg'
import TopUpIcon from '@assets/icons/topup.svg';
import ElectIcon from '@assets/icons/elect.svg'
import WalletIcon from '@assets/icons/wallet.svg';
import FoodIcon from '@assets/icons/food.svg';
import MartIcon from '@assets/icons/mart.svg';
import DataIcon from '@assets/icons/data.svg';
import DealsIcon from '@assets/icons/deals.svg';
import InsuranceIcon from '@assets/icons/insurance.svg';
import SellIcon from '@assets/icons/sell.svg';
import AirtimeIcon from '@assets/icons/airtime.svg';
import BillIcon from '@assets/icons/bills.svg';
import MoreIcon from '@assets/icons/more.svg';

const { width } = Dimensions.get('window');

type TopCategory = {
  id: string;
  label: string;
  icon: React.FC<any>;
};

type ServiceItem = {
  id: string;
  label: string;
  icon: React.FC<any>;
};

const topCategories: TopCategory[] = [
  { id: '1', label: 'Wallet', icon: WalletIcon },
  { id: '2', label: 'Rides', icon: RideIcon },
  { id: '3', label: 'Food', icon: FoodIcon },
  { id: '4', label: 'Mart', icon: MartIcon },
];

const services: ServiceItem[] = [
  { id: '1', label: 'Electricity', icon: ElectIcon },
  { id: '2', label: 'Data', icon: DataIcon },
  { id: '3', label: 'Deals', icon: DealsIcon },
  { id: '4', label: 'Insurance', icon: InsuranceIcon },
  { id: '5', label: 'Sell on Kari', icon: SellIcon },
  { id: '6', label: 'Airtime', icon: AirtimeIcon },
  { id: '7', label: 'Bills', icon: BillIcon },
  { id: '8', label: 'More', icon: MoreIcon },
];

const KariPayHomeScreen: React.FC = () => {
  const [activeId, setActiveId] = React.useState<string>('1');

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>

        {/* Top Categories */}
        <View style={styles.topRow}>
          {topCategories.map((item) => {
            const Icon = item.icon;
            const isActive = activeId === item.id;

            return (
              <TouchableOpacity
                key={item.id}
                style={styles.topItem}
                activeOpacity={0.8}
                onPress={() => setActiveId(item.id)}
              >
                <View
                  style={[
                    styles.topIcon,
                    isActive && styles.activeTopIcon,
                  ]}
                >
                  <Icon width={25} height={25} />
                </View>

                <Text
                  style={[
                    styles.topLabel,
                    isActive && styles.activeTopLabel,
                  ]}
                >
                  {item.label}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>


        {/* Title */}
        <Text style={styles.sectionTitle}>KariPay</Text>

        {/* Services Grid */}
        <View style={styles.grid}>
          {services.map((item) => {
            const Icon = item.icon;

            return (
              <TouchableOpacity key={item.id} style={styles.gridItem}>
                <View style={styles.gridIcon}>
                  <Icon width={28} height={28} />
                </View>
                <Text style={styles.gridLabel}>{item.label}</Text>
              </TouchableOpacity>
            );
          })}
        </View>

        {/* Banner */}
        <View style={styles.container1}>
          <ImageBackground
            source={require("../../../../assets/specialdeals.jpg")} // your bg image
            style={styles.banner}
            imageStyle={styles.imageStyle}
            resizeMode="cover"
          >
            <View style={styles.contentWrapper}>
              {/* LEFT SPACE (for ice cream area in image) */}
              <View style={styles.leftSpace} />

              {/* RIGHT CONTENT */}
              <View style={styles.rightContent}>
                <Text style={styles.title}>
                  Special Deals{"\n"}For October
                </Text>

                <TouchableOpacity style={styles.button}>
                  <Text style={styles.buttonText}>Order Now</Text>
                </TouchableOpacity>
              </View>
            </View>
          </ImageBackground>
        </View>

        {/* Bottom Cards */}
        <View style={styles.bottomRow}>
          <TouchableOpacity style={styles.card}>
          <Image
              source={require('../../../../assets/car2.png')}
              style={styles.cardImage2}
            />
            <Image
              source={require('../../../../assets/car1.png')}
              style={styles.cardImage}
            />
            <Text style={styles.cardText}>Order/Share a Ride</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.card}>
            <Image
              source={require('../../../../assets/delivery.jpg')}
              style={styles.cardImage3}
            />
            <Text style={styles.cardText}>Deliver a Package</Text>
          </TouchableOpacity>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
};

export default KariPayHomeScreen;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    marginTop: -25,
  },

  // banner1: {
  //   height: 180,
  //   borderRadius: 20,
  //   overflow: "hidden",
  //   justifyContent: "center",
  // },

  imageStyle: {
    borderRadius: 20,
  },

  contentWrapper: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },

  leftSpace: {
    flex: 1.2, // space where ice cream image sits
  },

  rightContent: {
    flex: 1,
    paddingRight: 20,
  },

  title: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "700",
    lineHeight: 24,
  },

  button: {
    marginTop: 15,
    backgroundColor: "#FFFFFF",
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 12,
    alignSelf: "flex-start",
  },

  buttonText: {
    color: "#E67E22",
    fontWeight: "600",
  },

  container1: {
    flex: 1,
    backgroundColor: COLORS.white,
  },

  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    // marginTop: 0,
    // paddingHorizontal: 0,
    shadowColor: COLORS.textBlack,
  },

  topItem: {
    alignItems: 'center',
    shadowColor: COLORS.textBlack,
  },

  topIcon: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,

    // ✅ iOS shadow
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.08,
    shadowRadius: 6,
  },

  activeTopIcon: {
    borderWidth: 2,
    borderColor: COLORS.primary,
  },

  activeTopLabel: {
    //   color: '#F59E0B',
    //   fontWeight: '600',
  },

  topIconImage: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
  },

  topLabel: {
    marginTop: 8,
    fontSize: 13,
    color: '#333',
  },

  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginHorizontal: 10,
    marginTop: 25,
    marginBottom: 10,
    color: '#222',
  },

  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: 0,
  },

  gridItem: {
    width: '23%',
    alignItems: 'center',
    marginVertical: 15,
  },

  gridIcon: {
    width: 65,
    height: 65,
    borderRadius: 16,
    backgroundColor: '#E9ECEF',
    justifyContent: 'center',
    alignItems: 'center',
  },

  gridIconText: {
    fontSize: 22,
  },

  gridLabel: {
    marginTop: 6,
    fontSize: 13,
    textAlign: 'center',
    color: '#333',
  },

  banner: {
    marginTop: 25,
    marginHorizontal: 0,
    borderRadius: 20,
    backgroundColor: '#F59E0B',
    flexDirection: 'row',
    padding: 20,
    alignItems: 'center',
  },

  bannerImage: {
    width: 90,
    height: 110,
    resizeMode: 'contain',
  },

  bannerContent: {
    flex: 1,
    paddingLeft: 15,
  },

  bannerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },

  orderButton: {
    marginTop: 12,
    backgroundColor: '#FFFFFF',
    paddingVertical: 8,
    paddingHorizontal: 18,
    borderRadius: 8,
    alignSelf: 'flex-start',
  },

  orderText: {
    color: '#F59E0B',
    fontWeight: '600',
  },

  bottomRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 0,
    marginTop: 30,
    marginBottom: 40,
    // gap: 0,
  },

  card: {
  width: width * 0.42,
  backgroundColor: "#FFFFFF",
  borderRadius: 18,
  padding: 15,
  alignItems: "center",
  borderWidth: 1,
  borderColor: "#E5E7EB",

  elevation: 6,

  shadowColor: "#000",
  shadowOffset: { width: 0, height: 4 },
  shadowOpacity: 0.08,
  shadowRadius: 8,
  },

  cardImage: {
    top: 15,
    width: 100,
    height: 60,
    resizeMode: 'contain',
  },
   cardImage3: {
    width: 170,
    height: 60,
    // top:-10,
    resizeMode: 'contain',
  },
    cardImage2: {
    position: 'absolute',
    top: 10,
    left: 15,
    width: 100,
    height: 60,
    resizeMode: 'contain',
  },

  cardText: {
    marginTop: 10,
    fontSize: 15,
    fontWeight: '500',
    textAlign: 'center',
    color: '#222',
  },
});
