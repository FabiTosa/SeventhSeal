import { useRouter } from 'expo-router'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'



export default function Index() {
  
  const router = useRouter()

  return (
    <View style={styles.view}>
      <TouchableOpacity style={styles.button} onPress={() => router.replace("/screens/tabs/home")}>
        <Text style={styles.buttonText}>GO TO THE APP</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  view: {
      flex: 1,
      backgroundColor: 'white',
      justifyContent: "center",
      alignItems: "center",
  },
})

