import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';

const Home = () => {
  const username = "User"; // Dit kan dynamisch worden geladen
  const recentlyViewed = [
    { id: 1, name: 'Pink Graphic Tee', price: '€14,99', image: require('../../assets/images/pinkthee.png') },
    { id: 2, name: 'Black Sweatshirt', price: '€30,99', image: require('../../assets/images/blackknitted.png') },
    { id: 3, name: 'Black Hoodie', price: '€36,99', image: require('../../assets/images/zipuphoodie.png') }
  ];

  return (
    <ScrollView style={{ flex: 1, backgroundColor: '#fff' }}>
      {/* Welkomstbericht */}
      <Text style={{ fontSize: 24, fontWeight: 'bold', margin: 20 }}>Welcome, {username}.</Text>

      {/* Friday Sale Banner */}
      <View style={{ backgroundColor: 'red', padding: 20, alignItems: 'center' }}>
        <Text style={{ color: 'white', fontSize: 30, fontWeight: 'bold' }}>FRIDAY SALE</Text>
        <Text style={{ color: 'white', fontSize: 18 }}>ALL PIECES 15% OFF</Text>
      </View>

      {/* Recently Viewed */}
      <Text style={{ fontSize: 20, fontWeight: 'bold', margin: 20 }}>Recently Viewed</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ paddingHorizontal: 20 }}>
        {recentlyViewed.map((item) => (
          <TouchableOpacity key={item.id} style={{ marginRight: 15 }}>
            <Image source={item.image} style={{ width: 100, height: 100, borderRadius: 10 }} />
            <Text style={{ fontSize: 14, fontWeight: 'bold' }}>{item.name}</Text>
            <Text>{item.price}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </ScrollView>
  );
};

export default Home;
