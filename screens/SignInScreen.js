// app/screens/SignInScreen.js

import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const SignInScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = () => {
    // Here you would typically call a service to sign in the user
    console.log('User  signed in:', { email, password });
    // Navigate to the home screen or show an error message
    navigation.navigate('Home')
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign In</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title="Sign In" onPress={handleSignIn} />
      <Text style={styles.link} onPress={() => {navigation.navigate('SignUp')}}>
        Don't have an account? Sign Up
      </Text>
      <Text style={styles.link} onPress={() => {navigation.navigate('ForgotPassword')}}>
        Forgot Password?
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: '#f8f9fa',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 15,
    paddingHorizontal: 10,
  },
  link: {
    color: 'blue',
    marginTop: 10,
    textAlign: 'center',
  },
});

export default SignInScreen;