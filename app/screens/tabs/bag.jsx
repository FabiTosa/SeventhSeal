import { StyleSheet, Text, View, SafeAreaView, ScrollView, Image, TouchableOpacity, FlatList } from 'react-native'
import React from 'react'
import CustomHeader from '../../../components/CustomHeader'
import { Link } from "expo-router";
import clothing from '../../clothing.js'

export default function ShoppingCart() {
  return (
    <SafeAreaView style={styles.main}>
      <CustomHeader />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.titleText}>CART</Text>
        <View style={styles.itemCard}>
          <FlatList
            data={clothing}
            keyExtractor={(item) => item.id.toString()}
            contentContainerStyle={{ paddingBottom: 20 }}
            scrollEnabled={false}
            renderItem={({ item }) => (
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
                <Image style={styles.trash} source={require("../../../assets/images/trash.png")} />
              </View>
            )}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  main: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  titleText: {
    textWeight: 'bold',
    fontSize: 24
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
  textContainer: {
    marginLeft: 20,
  },
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
    marginLeft: 20,
    gap: 50
  },
  trash: {
    position: 'absolute',
    right: 0,
    top: 15
  }
});