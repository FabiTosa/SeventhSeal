import { StyleSheet, Text, SafeAreaView, View, FlatList, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { Link } from 'expo-router';
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
            keyExtractor={(item) => item.id.toString()}
            numColumns={2}
            contentContainerStyle={{ paddingBottom: 20 }}
            scrollEnabled={false} 
            renderItem={({ item }) => (
              <Link href={`/screens/detailScreen?id=${item.id}`} asChild>
                <TouchableOpacity style={styles.card}>
                  <Image source={item.image} style={styles.image} />
                  <View style={styles.text}>
                    <Text style={styles.Anton}>{item.price}</Text>
                    <Text style={styles.PoppinsRegular}>{item.desc}</Text>
                  </View>
                </TouchableOpacity>
              </Link>
            )}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  Anton: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
    fontFamily: 'Anton-Regular'
  },
  PoppinsRegular: {
    color: 'white',
    fontSize: 12,
  },
  main: {
    flex: 1,
    backgroundColor: 'white',
  },
  scrollContainer: {
    paddingHorizontal: 12.5,
    paddingBottom: 20,
  },
  titleText: {
    fontWeight: 'bold',
    fontSize: 50,
    textAlign: 'center',
    marginVertical: 10,
    fontFamily: 'Anton-Regular'
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
