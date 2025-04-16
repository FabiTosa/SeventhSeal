import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, Image } from 'react-native'
import { useEffect, useState } from 'react';
import { useRouter } from 'expo-router'
import { useLocalSearchParams, useNavigation } from 'expo-router';
import clothing from "../clothing.js";
import CustomHeader from '../../components/CustomHeader.jsx';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function DetailScreen() {

  const router = useRouter()
  const { id } = useLocalSearchParams();
  // const navigation = useNavigation();
  const item = clothing[id];

  const addToCart = async () => {
    try {
      const stored = await AsyncStorage.getItem('bag'); const bag = stored ? JSON.parse(stored) : []; bag.push(item);
      await AsyncStorage.setItem('bag', JSON.stringify(bag)); router.push('/screens/tabs/bag');
    } catch (error) { console.error('Fout bij toevoegen aan bag:', error); }
  };

  // useEffect(() => {
  //   if (item) {
  //     navigation.setOptions({ title: item.title });
  //   }
  // }, [item]);

  // if (!item) {
  //   return (
  //     <View style={styles.container}>
  //       <Text>Product not found!</Text>
  //     </View>
  //   );
  // }

  return (
    <SafeAreaView style={styles.main}>
      <CustomHeader />
      <View style={styles.container}>
        <TouchableOpacity onPress={() => router.replace("/screens/uppertabs/stock")}>
          <Text style={styles.backButton}>⟨ BACK</Text>
        </TouchableOpacity>
        <Image source={item.fullmage} style={styles.image} />
        <View style={styles.textBox}>
          <Text style={styles.title}>{item.price}</Text>
          <Text style={styles.description}>{item.desc}</Text>
          <Text style={styles.color}>Color:</Text>
          <View style={styles.colorContainer}>
            <Text style={styles.text}>{item.color}</Text>
            <Text style={styles.text2}>SIZE</Text>
          </View>
          <TouchableOpacity style={styles.button} onPress={addToCart}>
            <Text style={styles.textCart}>ADD TO SHOPPING CART</Text>
            <Text style={styles.bottomTextCart}>Just add it, broke ahhh..</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    height: '65%',
    width: '100%'
  },
  image: {
    height: 220,
    width: 375,
    borderColor: 'black',
    borderWidth: 1,
    marginHorizontal: 'auto',
    marginTop: 'auto'
  },
  backButton: {
    fontSize: 21,
    fontWeight: 'bold',
    marginLeft: 10,
    marginVertical: 20,
    fontFamily: 'Anton-Regular'
  },
  textBox: {
    marginLeft: 10,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: 'black',
    fontFamily: 'Anton-Regular'
  },
  description: {
    fontSize: 15,
    color: 'black',
    fontFamily: 'Poppins-Regular',
    fontWeight: 400,
  },
  color: {
    marginTop: 10,
    fontWeight: '800',
    fontSize: 15,
    fontFamily: 'Poppins-Regular'
  },
  colorContainer: {
    flexDirection: 'row',
    gap: 150,
    paddingVertical: 10,
    borderColor: '#D0D0D0',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    width: 375,
    marginVertical: 10
  },
  text: {
    fontFamily: 'Anton-Regular',
    color: '#D0D0D0',
    fontSize: 25
  },
  text2: {
    fontFamily: 'Anton-Regular',
    fontSize: 25
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
    color: 'white',
    width: 375,
    padding: 6,
  },
  textCart: {
    fontFamily: 'Anton-Regular',
    color: 'white',
    fontSize: 20
  },
  bottomTextCart: {
    color: '#B7B7B7',
    fontSize: 10
  }
})