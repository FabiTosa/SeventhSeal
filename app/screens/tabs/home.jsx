import React from 'react';
import { View, Text, Image, StyleSheet, FlatList, SafeAreaView } from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';

const recentlyViewed = [
  { id: '1', price: '€14,99', image: { uri: 'https://via.placeholder.com/100' } },
  { id: '2', price: '€30,99', image: { uri: 'https://via.placeholder.com/100' } },
  { id: '3', price: '€36,99', image: { uri: 'https://via.placeholder.com/100' } },
];

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.welcome}>WELCOME, USER.</Text>

      <LinearGradient colors={['#ff0000', '#b30000']} style={styles.saleBanner}>
        <Text style={styles.saleText}>FRIDAY SALE</Text>
        <Text style={styles.saleDiscount}>ALL PIECES 15% OFF</Text>
      </LinearGradient>

      <Text style={styles.sectionTitle}>RECENTLY VIEWED</Text>
      <FlatList
        horizontal
        data={recentlyViewed}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Image source={item.image} style={styles.image} />
            <Text style={styles.price}>{item.price}</Text>
          </View>
        )}
      />

      <LinearGradient colors={['#ff0000', '#b30000']} style={styles.upcomingDrops}>
        <Text style={styles.upcomingText}>UPCOMING DROPS</Text>
        <Image source={{ uri: 'https://via.placeholder.com/120' }} style={styles.hoodieImage} />
      </LinearGradient>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', padding: 15 },
  welcome: { fontSize: 22, fontWeight: 'bold', marginBottom: 10 },
  saleBanner: { padding: 20, alignItems: 'center', borderRadius: 10 },
  saleText: { fontSize: 24, fontWeight: 'bold', color: '#fff' },
  saleDiscount: { fontSize: 18, color: '#fff', marginTop: 5 },
  sectionTitle: { fontSize: 20, fontWeight: 'bold', marginTop: 20 },
  item: { marginRight: 10, alignItems: 'center' },
  image: { width: 100, height: 100, borderRadius: 10 },
  price: { fontSize: 16, fontWeight: 'bold', marginTop: 5 },
  upcomingDrops: { marginTop: 30, padding: 20, alignItems: 'center', borderRadius: 10 },
  upcomingText: { fontSize: 20, fontWeight: 'bold', color: '#fff' },
  hoodieImage: { width: 120, height: 120, marginTop: 10 },
});

export default HomeScreen;
