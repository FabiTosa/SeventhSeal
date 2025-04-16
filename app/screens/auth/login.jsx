import { StyleSheet, Text, View, TextInput, TouchableOpacity, ImageBackground } from 'react-native';
import React, { useState } from 'react';
import { useRouter } from 'expo-router';

export default function Register() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // const handleRegister = () => {
  //   if (!email || !password) {
  //     setError('Please fill in all fields');
  //     return;
  //   }
  //   setError('');
  //   router.replace('/screens/tabs/home1');
  // };

  return (
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
        <TouchableOpacity style={styles.button} onPress={() => router.replace('../tabs/home')}>
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
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  logo: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    marginBottom: 350,
    paddingRight: 220,
  },
  inputContainer: {
    width: '80%',
    marginBottom: 20,
  },
  input: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 25,
    marginBottom: 10,
    textAlign: 'center',
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
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
