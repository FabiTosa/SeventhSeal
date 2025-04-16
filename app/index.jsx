
import { View, Text, StyleSheet, Pressable, ImageBackground, SafeAreaView } from 'react-native';
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
})

