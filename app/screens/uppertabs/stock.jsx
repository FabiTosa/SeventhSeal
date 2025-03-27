import { StyleSheet, Text, SafeAreaView, View, FlatList, Image, ScrollView } from 'react-native'
import React from 'react'
import clothing from "../../clothing.js";
import CustomHeader from '../../../components/CustomHeader.jsx';

export default function Stock() {
  return (
    <SafeAreaView style={styles.main}>
      <CustomHeader />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.titleText}>NEW RELEASES</Text>
        <View style={styles.itemCard}>
          <FlatList
            data={clothing}
            keyExtractor={(item) => item.id}
            numColumns={2}
            contentContainerStyle={{ paddingBottom: 20 }} // Extra ruimte onderaan
            scrollEnabled={false} // Laat ScrollView het scrollen regelen
            renderItem={({ item }) => (
              <View style={styles.card}>
                <Image source={item.image} style={styles.image} />
                <View style={styles.text}>
                  <Text style={styles.Anton}>{item.price}</Text>
                  <Text style={styles.PoppinsRegular}>{item.desc}</Text>
                </View>
              </View>
            )}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  Anton: {
    fontFamily: "Anton-Regular",
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
  },
  PoppinsRegular: {
    fontFamily: "Poppins-Regular",
    color: 'white',
    fontSize: 12,
    fontWeight: 'thin',
  },
  main: {
    flex: 1,
    backgroundColor: 'white',
  },
  scrollContainer: {
    paddingHorizontal: 12.5
  },
  titleText: {
    fontWeight: 'bold',
    fontSize: 35,
    textAlign: 'center',
    marginVertical: 10,
  },
  itemCard: {
    flex: 1,
  },
  card: {
    flex: 1,
    flexDirection: 'column',
    margin: 5,
    backgroundColor: '#3B3B3B',
    borderColor: 'black',
    borderWidth: 1,
    overflow: 'hidden',
  },
  text: {
    margin: 5,
  },
  image: {
    resizeMode: 'cover',
  },
});
