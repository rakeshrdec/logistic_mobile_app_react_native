// app/screens/BookingScreen.js

import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import Popup from '../components/Popup';


const BookingScreen = () => {
  const [pickupLocation, setPickupLocation] = useState('');
  const [dropoffLocation, setDropoffLocation] = useState('');
  const [vehicleType, setVehicleType] = useState('');
  const [isPopupVisible, setIsPopupVisible] = useState(false);


  const handleBooking = () => {
    // Alert.alert("Booking SuccessFully !")
    setIsPopupVisible(true)
    // Here you would typically call a service to create a booking
    console.log('Booking created:', { pickupLocation, dropoffLocation, vehicleType });
    // Reset form after booking
    setPickupLocation('');
    setDropoffLocation('');
    setVehicleType('');
  };

  const handlePrimaryAction = () =>{

    console.log("Primary Btn Pressed");
    setIsPopupVisible(false);
  }

  const handleSecondaryAction = () => {
    console.log("secondary btn pressed");
    setIsPopupVisible(false);
    
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Book Transportation</Text>
      <TextInput
        style={styles.input}
        placeholder="Pickup Location"
        value={pickupLocation}
        onChangeText={setPickupLocation}
      />
      <TextInput
        style={styles.input}
        placeholder="Dropoff Location"
        value={dropoffLocation}
        onChangeText={setDropoffLocation}
      />
      <TextInput
        style={styles.input}
        placeholder="Vehicle Type"
        value={vehicleType}
        onChangeText={setVehicleType}
      />
      <Button title="Confirm Booking" onPress={handleBooking} />
      <Popup
        visible={isPopupVisible}
        title="error" // 'info' | 'warning' | 'error'
        message="Are you sure you want to proceed?"
        type="warning"
        singleButton={false}
        primaryButtonText="Yes"
        secondaryButtonText="No"
        onPrimaryButtonPress={handlePrimaryAction}
        onSecondaryButtonPress={handleSecondaryAction}
        onClose={() => setIsPopupVisible(false)}
      />
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
});

export default BookingScreen;