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
import { View, Text, StyleSheet, Pressable, ImageBackground } from 'react-native';
import { useRouter } from 'expo-router';

export default function App() {
  const router = useRouter();

  return (
    <ImageBackground

      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.container}>
        <Text style={styles.logo}>OffTrack</Text>




        <Pressable
          style={[styles.button, { top: 350, left: 100 }]}
          onPress={() => router.push("/screens/auth/login")}
        >
          <Text style={styles.buttonText}>Login</Text>
        </Pressable>


        <Pressable
          style={[styles.button, { top: 450, left: 100 }]}
          onPress={() => router.push("/screens/auth/register")}
        >
          <Text style={styles.buttonText}>Register</Text>
        </Pressable>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  container: {
    flex: 1,
  },


  logo: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    marginBottom: 350,
    paddingRight: 220,
  },

  text: {
    position: "absolute",
    fontSize: 40,
    color: "white",
    fontWeight: "bold",
    width: 229

  },
  button: {
    position: "absolute",
    backgroundColor: "black",
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 10,
    width: 200,
    alignItems: "center",
    height: 70,
  },
  buttonText: {
    color: "white",
    fontSize: 30,
    fontWeight: "bold",
  },
});
