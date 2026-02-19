import React, { useRef, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
  Animated,
} from 'react-native';

const { width } = Dimensions.get('window');

const slides = [
  {
    id: '1',
    image: require('../../../../assets/OnboadingScreen1.png'),
    backgroundImage: require('../../../../assets/OnboadingScreen1.jpg'),
    title: 'Get your Favourite Food!',
    desc: 'Exclusive coupons, specials and rewards',
  },
  {
    id: '2',
    image: require('../../../../assets/OnboardingScreen2.png'),
    backgroundImage: require('../../../../assets/OnboardingScreen2up.jpg'),
    title: 'Get or Share a Ride',
    desc: 'Receive delivery credits for every order',
  },
  {
    id: '3',
    image: require('../../../../assets/OnboardingScreen3.png'),
    backgroundImage: require('../../../../assets/OnboardingScreen3up.jpg'),
    title: 'Fast Delivery to your home',
    desc: 'Simple and fast ordering system',
  },
];

export default function OnboardingScreen({ navigation }: any) {
  const flatListRef = useRef<any>(null);
  const scrollX = useRef(new Animated.Value(0)).current;
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

      {/* 🔥 Animated Backgrounds */}
      <View
        style={StyleSheet.absoluteFillObject}
        pointerEvents="none" // IMPORTANT: allows scrolling
      >
        {slides.map((slide, index) => {
          const opacity = scrollX.interpolate({
            inputRange: [
              (index - 1) * width,
              index * width,
              (index + 1) * width,
            ],
            outputRange: [0, 1, 0],
            extrapolate: 'clamp',
          });

          return (
            <Animated.Image
              key={slide.id}
              source={slide.backgroundImage}
             style={[
                  {
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    opacity,
                  },
                ]}
                resizeMode="cover"
            />
          );
        })}
      </View>

      {/* 🔥 Slides */}
      <Animated.FlatList
        ref={flatListRef}
        data={slides}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={16}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: false }
        )}
        onMomentumScrollEnd={(e) => {
          const index = Math.round(
            e.nativeEvent.contentOffset.x / width
          );
          setCurrentIndex(index);
        }}
      />

      {/* 🔥 Pagination Dots */}
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

      {/* 🔥 Buttons */}
      <View style={styles.buttonRow}>
        <TouchableOpacity onPress={() => navigation.replace('Main')}>
          <Text style={styles.skip}>Skip</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.nextBtn} onPress={handleNext}>
          <Text style={styles.nextText}>
            {currentIndex === slides.length - 1 ? 'Start' : 'Next'}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  slide: {
    width,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 30,
  },
  image: {
    width: width * 0.8,
    height: 300,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#777',
    textAlign: 'center',
  },
  desc: {
    fontSize: 16,
    color: '#777',
    textAlign: 'center',
    marginTop: 10,
  },
  dots: {
    position: 'absolute',
    bottom: 150,
    flexDirection: 'row',
    alignSelf: 'center',
  },
  dot: {
    width: 8,
    height: 8,
    backgroundColor: '#777',
    borderRadius: 4,
    marginHorizontal: 5,
  },
  activeDot: {
    backgroundColor: '#C2543C',
    width: 22,
  },
  buttonRow: {
    position: 'absolute',
    bottom: 60,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 30,
    alignItems: 'center',
  },
  skip: {
    fontSize: 16,
    color: '#777',
  },
  nextBtn: {
    backgroundColor: '#C2543C',
    paddingHorizontal: 40,
    paddingVertical: 14,
    borderRadius: 10,
  },
  nextText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
