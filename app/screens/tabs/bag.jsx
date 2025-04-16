import { StyleSheet, Text, View, SafeAreaView, Image, TouchableOpacity, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import CustomHeader from '../../../components/CustomHeader'
import { Link } from "expo-router";
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function ShoppingCart() {
  const [bag, setBag] = useState([]);

  useEffect(() => {
    const fetchCart = async () => {
      const data = await AsyncStorage.getItem('bag');
      if (data) setBag(JSON.parse(data));
    };
    fetchCart();
  }, []);

  const handleRemoveItem = async (indexToRemove) => {
    const updatedBag = bag.filter((_, index) => index !== indexToRemove);
    setBag(updatedBag);
    await AsyncStorage.setItem('bag', JSON.stringify(updatedBag));
  };

  const renderItem = ({ item, index }) => (
    <View style={styles.card}>
      <Link href={`/screens/detailScreen?id=${item.id}`} asChild>
        <TouchableOpacity style={styles.linkCard}>
          <Image source={item.image} style={styles.image} />
          <View style={styles.line}></View>
          <View style={styles.containerDetail}>
            <View style={styles.textContainer}>
              <Text style={styles.text1}>{item.price}</Text>
              <Text style={styles.text2}>COLOR: {item.color}</Text>
            </View>
            <View style={styles.valueContainer}>
              <Text style={styles.text3}>Value: </Text>
              <Text style={styles.text3}>Size: </Text>
            </View>
          </View>
        </TouchableOpacity>
      </Link>

      <TouchableOpacity
        onPress={() => handleRemoveItem(index)}
        style={styles.trashTouchable}
      >
        <Image style={styles.trash} source={require("../../../assets/images/trash.png")} />
      </TouchableOpacity>
    </View>
  );

  return (
    <SafeAreaView style={styles.main}>
      <FlatList
        data={bag}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderItem}
        contentContainerStyle={styles.scrollContainer}
        ListHeaderComponent={
          <>
            <CustomHeader />
            <Text style={styles.titleText}>CART</Text>
          </>
        }
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: 'white',
  },
  scrollContainer: {
    alignItems: "center",
    paddingBottom: 20
  },
  titleText: {
    fontWeight: 'bold',
    fontSize: 24,
    marginLeft: 20,
    marginVertical: 10
  },
  card: {
    flexDirection: "row",
    borderTopWidth: 1,
    borderBottomWidth: 1,
    width: 365,
    borderColor: "#B7B7B7",
    alignItems: "center",
    padding: 10,
    marginVertical: 10,
    position: 'relative'
  },
  linkCard: {
    flexDirection: "row",
  },
  image: {
    height: 90,
    width: 125,
  },
  line: {
    height: 70,
    borderLeftWidth: 1,
    borderColor: "#B7B7B7",
    marginLeft: 10
  },
  containerDetail: {
    marginLeft: 20,
  },
  textContainer: {},
  text1: {
    fontFamily: 'Anton-Regular',
    fontWeight: 'bold',
    fontSize: 16
  },
  text2: {
    color: '#B7B7B7',
    fontFamily: 'Anton-Regular',
    marginBottom: 15,
    fontWeight: 'bold'
  },
  text3: {
    color: '#B7B7B7'
  },
  valueContainer: {
    flexDirection: "row",
    gap: 50
  },
  trashTouchable: {
    position: 'absolute',
    right: 0,
    top: 1,
    padding: 10
  },
  trash: {
    height: 15,
    width: 15
  }
});
