// app/screens/BookingsListScreen.js

import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
// import { fetchBookings } from '../services/mockServices';
import { fetchBookings } from '../services/mockService';

const BookingsListScreen = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const loadBookings = async () => {
      const data = await fetchBookings();
      setBookings(data);
    };
    loadBookings();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Bookings</Text>
      <FlatList
        data={bookings}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.bookingItem}>
            <Text>Pickup: {item.pickupLocation}</Text>
            <Text>Dropoff: {item.dropoffLocation}</Text>
            <Text>Vehicle: {item.vehicleType}</Text>
            <Text>Status: {item.status}</Text>
            <Text>ETA: {item.estimatedArrival}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f8f9fa',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  bookingItem: {
    padding: 15,
    marginVertical: 10,
    backgroundColor: '#ffffff',
    borderRadius: 5,
    elevation: 2,
  },
});

export default BookingsListScreen;