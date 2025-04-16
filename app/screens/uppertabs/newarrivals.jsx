import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, Dimensions } from 'react-native';

const newArrivals = () => {
  const items = [
    { id: 1, image: 'https://via.placeholder.com/150' },
    { id: 2, image: 'https://via.placeholder.com/150' },
    { id: 3, image: 'https://via.placeholder.com/150' },
    { id: 4, image: 'https://via.placeholder.com/150' },
    { id: 5, image: 'https://via.placeholder.com/150' },
    { id: 6, image: 'https://via.placeholder.com/150' },
    { id: 7, image: 'https://via.placeholder.com/150' },
  ];

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Logo */}
        <View style={styles.logoContainer}>
          <Text style={styles.logo}>SEAT</Text>
        </View>

        {/* Tabs (alleen tekst, geen functionaliteit) */}
        <View style={styles.tabContainer}>
          <Text style={styles.tab}>HOME</Text>
          <Text style={styles.tab}>IN STOCK</Text>
          <Text style={[styles.tab, styles.activeTab]}>NEW ARRIVALS</Text>
          <Text style={styles.tab}>INSPO PAGE</Text>
        </View>

        {/* Product grid */}
        <View style={styles.grid}>
          {items.map((item) => (
            <Image
              key={item.id}
              source={{ uri: item.image }}
              style={styles.imageBox}
            />
          ))}
        </View>

        {/* Big Text Overlay */}
        <View style={styles.centerText}>
          <Text style={styles.bigText}>NEW</Text>
          <Text style={styles.bigText}>RELEASES</Text>
        </View>
      </ScrollView>

      {/* Bottom Black Bar */}
      <View style={styles.bottomBar} />
    </View>
  );
};

export default newArrivals;

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollContent: {
    paddingBottom: 60, // space for bottom bar
  },
  logoContainer: {
    alignItems: 'center',
    marginTop: 10,
  },
  logo: {
    fontSize: 32,
    fontWeight: 'bold',
    letterSpacing: 4,
  },
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
  },
  tab: {
    fontSize: 12,
    fontWeight: '600',
  },
  activeTab: {
    textDecorationLine: 'underline',
    color: 'red',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    padding: 5,
  },
  imageBox: {
    width: width / 3.2,
    height: 130,
    margin: 5,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  centerText: {
    position: 'absolute',
    top: '40%',
    alignSelf: 'center',
    alignItems: 'center',
  },
  bigText: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#000',
    textShadowColor: '#ff0000',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 5,
  },
  bottomBar: {
    height: 50,
    backgroundColor: '#000',
    width: '100%',
    position: 'absolute',
    bottom: 0,
  },
});
