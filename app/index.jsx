<<<<<<< Updated upstream
import { View, Text, StyleSheet, Pressable, ImageBackground } from 'react-native';
=======
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  ImageBackground,
  SafeAreaView,
} from 'react-native';
>>>>>>> Stashed changes
import { useRouter } from 'expo-router';
import React from 'react';
import Animated, {
  FadeInDown,
  FadeInUp,
  withRepeat,
  withTiming,
  useSharedValue,
  useAnimatedStyle,
} from 'react-native-reanimated';

export default function App() {
  const router = useRouter();

  // Breathing animation scale value
  const scale = useSharedValue(1);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: withRepeat(withTiming(1, { duration: 3000 }), -1, true) }],
    };
  });

  return (
    <Animated.View style={[StyleSheet.absoluteFillObject, animatedStyle]}>
      <ImageBackground
        source={require('../assets/images/sslogo 1.png')}
         style={StyleSheet.absoluteFillObject}
                resizeMode="contain"
      >
        <SafeAreaView style={styles.overlay}>
          

          <Animated.View entering={FadeInUp.delay(200).duration(600)} style={styles.buttonContainer}>
            <Pressable style={styles.button} onPress={() => router.push('/screens/auth/login')}>
              <Text style={styles.buttonText}>Login</Text>
            </Pressable>

            <Pressable style={styles.button} onPress={() => router.push('/screens/auth/register')}>
              <Text style={styles.buttonText}>Register</Text>
            </Pressable>
          </Animated.View>
        </SafeAreaView>
      </ImageBackground>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
<<<<<<< Updated upstream
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
=======
  logo: {
    fontSize: 36,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 300,
    alignSelf: 'flex-start',
    marginTop: 80,
    marginLeft: 80,
  },
  buttonContainer: {
    width: '100%',
    alignItems: 'center',
    gap: 20,
  },
  button: {
    backgroundColor: 'black',
    padding: 15,
    borderRadius: 25,
    width: '80%',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
>>>>>>> Stashed changes
  },
});
