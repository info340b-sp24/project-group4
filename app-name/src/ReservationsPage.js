import React, { useState } from 'react';
import './ReservationsPage.css';

export function ReservationsPage() {
  const [reservationStatus, setReservationStatus] = useState('');

  const validateForm = (formData) => {
    const { date, time, people, fname, email, phone } = formData;
    if (!date || !time || !people || !fname || !email || !phone) {
      displayError('Please fill in all required fields.');
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      displayError('Please enter a valid email address.');
      return false;
    }

    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(phone)) {
      displayError('Please enter a valid phone number (10 digits).');
      return false;
    }

    return true;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const reservationData = Object.fromEntries(formData.entries());

    if (validateForm(reservationData)) {
      const reservationConfirmation = `Thank you, ${reservationData.fname}! Your reservation for ${reservationData.people} guests on ${reservationData.date} at ${reservationData.time} has been confirmed.`;
      setReservationStatus(reservationConfirmation);
      event.target.reset();
    }
  };

  const displayError = (message) => {
    setReservationStatus(message);
  };

  return (
    <div className="reservation-form">
      <h1>Make a Reservation</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="fname">First name:</label>
        <input type="text" id="fname" name="fname" placeholder="Tim" required />
        <label htmlFor="lname">Last name:</label>
        <input type="text" id="lname" name="lname" placeholder="Carlson" />
        <label htmlFor="date">Date:</label>
        <input type="text" id="date" name="date" placeholder="04/21/2024" required />
        <label htmlFor="time">Time:</label>
        <input type="text" id="time" name="time" placeholder="12:00" required />
        <label htmlFor="people">Number of People:</label>
        <input type="number" id="people" name="people" placeholder="2" required />
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" placeholder="txxxxx@uw.edu" required />
        <label htmlFor="phone">Phone Number:</label>
        <input type="tel" id="phone" name="phone" placeholder="xxx-xxx-xxxx" required />
        <button type="submit">Submit</button>
      </form>
      {reservationStatus && <div className="reservation-status">{reservationStatus}</div>}
    </div>
  );
}