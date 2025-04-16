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

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // Shared value for breathing animation
  const scale = useSharedValue(1);

  // Breathing animation style
  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: withRepeat(withTiming(1, { duration: 3000 }), -1, true) }],
    };
  });

  return (
<<<<<<< Updated upstream
    <ImageBackground
    source={require('../../../assets/images/loginbg.png')}
      style={styles.background}
    >
      <View style={styles.overlay}>
        <Text style={styles.logo}>OffTrack</Text>
        <View style={styles.inputContainer}>
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
        </View>
        {error ? <Text style={styles.errorText}>{error}</Text> : null}
        <TouchableOpacity style={styles.button} onPress={() => router.replace('/tabs/homeScreen')}>
          <Text style={styles.buttonText}>LOG IN</Text>
        </TouchableOpacity>
        <Text style={styles.signInText}>
          Already have an account?{' '}
          <Text style={styles.signInLink} onPress={() => router.push('/auth/login')}>
            Sign In
          </Text>
        </Text>
      </View>
    </ImageBackground>
=======
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
          </Animated.View>

          {error ? (
            <Animated.Text entering={FadeIn} style={styles.errorText}>
              {error}
            </Animated.Text>
          ) : null}

          <Animated.View entering={FadeInUp.delay(400)} style={{ width: '80%' }}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => router.replace('../tabs/home')}
            >
              <Text style={styles.buttonText}>LOG IN</Text>
            </TouchableOpacity>
          </Animated.View>

          <Animated.Text entering={FadeInUp.delay(600)} style={styles.signInText}>
            Already have an account?{' '}
            <Text
              style={styles.signInLink}
              onPress={() => router.push('..screens/auth/login')}
            >
              Sign In
            </Text>
          </Animated.Text>
        </SafeAreaView>
      </ImageBackground>
    </Animated.View>
>>>>>>> Stashed changes
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
