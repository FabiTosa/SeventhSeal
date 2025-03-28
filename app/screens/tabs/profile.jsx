import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import React from 'react'
import CustomHeader from '../../../components/CustomHeader'

export default function Profile() {
  return (
    <SafeAreaView style={styles.main}>
      <CustomHeader />
      <Text>Profile</Text>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({

})