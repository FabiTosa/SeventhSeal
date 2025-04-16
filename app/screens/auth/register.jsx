import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  SafeAreaView,
} from 'react-native';
import React, { useState } from 'react';
import { useRouter } from 'expo-router';
import Animated, {
  FadeInDown,
  FadeInUp,
  FadeIn,
  withRepeat,
  withTiming,
  useSharedValue,
  useAnimatedStyle,
} from 'react-native-reanimated';

export default function Register() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const scale = useSharedValue(1);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: withRepeat(withTiming(1, { duration: 3000 }), -1, true) }],
    };
  });

  return (
    <Animated.View style={[StyleSheet.absoluteFillObject, animatedStyle]}>
      <ImageBackground
        source={require('../../../assets/images/sslogo 1.png')}
        style={StyleSheet.absoluteFillObject}
        resizeMode="contain"
      >
        <SafeAreaView style={styles.overlay}>
          <Animated.Text entering={FadeInDown.duration(800)} style={styles.logo}>
            SEVENTH SEAL
          </Animated.Text>

          <Animated.View entering={FadeInUp.delay(200).duration(600)} style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Email Address"
              placeholderTextColor="#000"
              value={email}
              onChangeText={setEmail}
            />
            <TextInput
              style={styles.input}
              placeholder="Password"
              placeholderTextColor="#000"
              secureTextEntry
              value={password}
              onChangeText={setPassword}
            />
            <TextInput
              style={styles.input}
              placeholder="Confirm Password"
              placeholderTextColor="#000"
              secureTextEntry
              value={confirmPassword}
              onChangeText={setConfirmPassword}
            />
          </Animated.View>

          {error ? (
            <Animated.Text entering={FadeIn} style={styles.errorText}>
              {error}
            </Animated.Text>
          ) : null}

          <Animated.View entering={FadeInUp.delay(400)} style={{ width: '80%' }}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => router.replace('/screens/auth/login')}
            >
              <Text style={styles.buttonText}>CREATE ACCOUNT</Text>
            </TouchableOpacity>
          </Animated.View>

          <Animated.Text entering={FadeInUp.delay(600)} style={styles.signInText}>
            Already have an account?{' '}
            <Text
              style={styles.signInLink}
              onPress={() => router.push('/screens/auth/login')}
            >
              LOG IN
            </Text>
          </Animated.Text>
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
  logo: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 300,
    alignSelf: 'flex-start',
    marginTop: 80,
    marginLeft: 80,
  },
  inputContainer: {
    width: '100%',
    alignItems: 'center',
    marginBottom: 20,
  },
  input: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 25,
    marginBottom: 10,
    textAlign: 'center',
    width: '80%',
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
  },
  button: {
    backgroundColor: 'black',
    padding: 15,
    borderRadius: 25,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  signInText: {
    color: 'white',
    marginTop: 15,
  },
  signInLink: {
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
});
