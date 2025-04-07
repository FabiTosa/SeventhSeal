import { StyleSheet, Text, View, TextInput, TouchableOpacity, ImageBackground } from 'react-native';
import React from 'react';
import { useRouter } from 'expo-router';
 
export default function Register() {
  const router = useRouter();
 
  return (
    <ImageBackground

      style={styles.background} 
    >
      <View style={styles.overlay}>
        <Text style={styles.logo}>OffTrack</Text>
        <View style={styles.inputContainer}>
          <TextInput style={styles.input} placeholder="Email Address" placeholderTextColor="#000" />
          <TextInput style={styles.input} placeholder="Password" placeholderTextColor="#000" secureTextEntry />
          <TextInput style={styles.input} placeholder="Confirm Password" placeholderTextColor="#000" secureTextEntry />
        </View>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText} onPress={() => router.replace("/screens/auth/login")}>CREATE ACCOUNT</Text>
        </TouchableOpacity>
        <Text style={styles.signInText}>Already have an account? <Text style={styles.signInLink} onPress={() => router.push("/screens/auth/login")}>LOG IN</Text></Text>
      </View>
    </ImageBackground>
  );
}
 
const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  overlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  logo: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    marginBottom: 350,
    paddingRight: 220,
  },
  inputContainer: {
    width: "80%",
    marginBottom: 20,
  },
  input: {
    backgroundColor: "white",
    padding: 15,
    borderRadius: 25,
    marginBottom: 10,
    textAlign: "center",
  },
  button: {
    backgroundColor: "black",
    padding: 15,
    borderRadius: 25,
    width: "80%",
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
  signInText: {
    color: "white",
    marginTop: 15,
  },
  signInLink: {
    fontWeight: "bold",
    textDecorationLine: "underline",
  },
});
 