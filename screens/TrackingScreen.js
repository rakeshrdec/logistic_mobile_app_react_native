// app/screens/TrackingScreen.js

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';


const TrackingScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Real-time Tracking</Text>
      <Text style={styles.message}>Tracking feature is under development.</Text>
      <MapView
       provider={PROVIDER_GOOGLE} // remove if not using Google Maps
       style={styles.map}
       region={{
         latitude: 37.78825,
         longitude: -122.4324,
         latitudeDelta: 0.015,
         longitudeDelta: 0.0121,
       }}
     >
      <Text>map is not working</Text>
     </MapView>
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
  map: {
    flex: 1
  }
});

export default TrackingScreen;