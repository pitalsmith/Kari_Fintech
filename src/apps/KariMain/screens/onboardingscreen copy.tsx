import React, { useRef, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';

const { width } = Dimensions.get('window');

const slides = [
  {
    id: '1',
    image: require('../../../../assets/image2.jpg'),
    title: 'Get your Favourite Food!',
    desc: 'Exclusive coupons, specials and rewards',
  },
  {
    id: '2',
    image: require('../../../../assets/image2.jpg'),
    title: 'Get or Share a Ride',
    desc: 'Receive delivery credits for every order',
  },
  {
    id: '3',
    image: require('../../../../assets/image2.jpg'),
    title: 'Fast Delivery to your home',
    desc: 'Simple and fast ordering system',
  },
];

export default function OnboardingScreen({ navigation }: any) {
  const flatListRef = useRef<any>();
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    if (currentIndex < slides.length - 1) {
      flatListRef.current.scrollToIndex({ index: currentIndex + 1 });
    } else {
      navigation.replace('Main');
    }
  };

  const renderItem = ({ item }: any) => (
    <View style={styles.slide}>
      <Image source={item.image} style={styles.image} />
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.desc}>{item.desc}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        ref={flatListRef}
        data={slides}
        renderItem={renderItem}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onMomentumScrollEnd={(e) => {
          const index = Math.round(
            e.nativeEvent.contentOffset.x / width
          );
          setCurrentIndex(index);
        }}
      />

      {/* Pagination Dots */}
      <View style={styles.dots}>
        {slides.map((_, index) => (
          <View
            key={index}
            style={[
              styles.dot,
              currentIndex === index && styles.activeDot,
            ]}
          />
        ))}
      </View>

      {/* Buttons */}
      <View style={styles.buttonRow}>
        <TouchableOpacity onPress={() => navigation.replace('Main')}>
          <Text style={styles.skip}>Skip</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.nextBtn} onPress={handleNext}>
          <Text style={{ color: '#fff' }}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}




const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  slide: {
    width,
    alignItems: 'center',
    padding: 20,
    marginTop: 60,
  },
  image: {
    width: width * 0.8,
    height: 300,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 20,
    textAlign: 'center',
  },
  desc: {
    fontSize: 14,
    color: '#777',
    textAlign: 'center',
    marginTop: 10,
  },
  dots: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  dot: {
    width: 8,
    height: 8,
    backgroundColor: '#ccc',
    borderRadius: 4,
    marginHorizontal: 5,
  },
  activeDot: {
    backgroundColor: '#C2543C',
    width: 18,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 30,
    marginTop: 30,
    paddingVertical: 60,
    alignItems: 'center',
  },
  skip: {
    fontSize: 16,
    color: '#999',
  },
  nextBtn: {
    backgroundColor: '#C2543C',
    paddingHorizontal: 25,
    paddingLeft: 60,
    paddingRight: 60,
    paddingVertical: 20,
    borderRadius: 8,
  },
});
