// app/services/mockServices.js

import { mockBookings } from './mockData';

/**
 * Simulates fetching bookings from an API.
 * @returns {Promise<Array>} A promise that resolves to an array of mock bookings.
 */
export const fetchBookings = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockBookings);
    }, 1000); // Simulate a 1-second delay for the API call
  });
};

/**
 * Simulates fetching a single booking by ID.
 * @param {string} id - The ID of the booking to fetch.
 * @returns {Promise<Object|null>} A promise that resolves to the booking object or null if not found.
 */
export const fetchBookingById = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const booking = mockBookings.find((b) => b.id === id);
      resolve(booking || null);
    }, 1000); // Simulate a 1-second delay for the API call
  });
};

/**
 * Simulates creating a new booking.
 * @param {Object} newBooking - The booking data to create.
 * @returns {Promise<Object>} A promise that resolves to the created booking object.
 */
export const createBooking = (newBooking) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const createdBooking = { ...newBooking, id: String(mockBookings.length + 1) };
      mockBookings.push(createdBooking); // Add the new booking to the mock data
      resolve(createdBooking);
    }, 1000); // Simulate a 1-second delay for the API call
  });
};

/**
 * Simulates updating an existing booking.
 * @param {string} id - The ID of the booking to update.
 * @param {Object} updatedData - The updated booking data.
 * @returns {Promise<Object|null>} A promise that resolves to the updated booking object or null if not found.
 */
export const updateBooking = (id, updatedData) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const index = mockBookings.findIndex((b) => b.id === id);
      if (index !== -1) {
        const updatedBooking = { ...mockBookings[index], ...updatedData };
        mockBookings[index] = updatedBooking; // Update the booking in the mock data
        resolve(updatedBooking);
      } else {
        resolve(null); // Booking not found
      }
    }, 1000); // Simulate a 1-second delay for the API call
  });
};

/**
 * Simulates deleting a booking.
 * @param {string} id - The ID of the booking to delete.
 * @returns {Promise<boolean>} A promise that resolves to true if the booking was deleted, false otherwise.
 */
export const deleteBooking = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const index = mockBookings.findIndex((b) => b.id === id);
      if (index !== -1) {
        mockBookings.splice(index, 1); // Remove the booking from the mock data
        resolve(true); // Booking deleted
      } else {
        resolve(false); // Booking not found
      }
    }, 1000); // Simulate a 1-second delay for the API call
  });
};