import { StyleSheet, Text, SafeAreaView, View, FlatList } from 'react-native'
import React from 'react'
import clothing from "../clothing.js";

export default function Stock() {

  return (
    <SafeAreaView>
      <Text>CLOTHING ITEM</Text>
      <Text>NEW RELEASES</Text>

      {/* CLOTHING CARDS. */}
      <View>
      <FlatList
        data={clothing}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <View>
            <Text>{item.price}</Text>
            <Text>{item.desc}</Text>
          </View>
        )}
      />

    </View>


    </SafeAreaView>
  )
}
