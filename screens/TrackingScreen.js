// app/screens/TrackingScreen.js

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const TrackingScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Real-time Tracking</Text>
      <Text style={styles.message}>Tracking feature is under development.</Text>
      {/* You can integrate a map component here for real-time tracking */}
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
  message: {
    fontSize: 16,
    textAlign: 'center',
  },
});

export default TrackingScreen;