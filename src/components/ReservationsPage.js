import React, { useState, useEffect } from 'react';
import { getDatabase, ref, get, set } from 'firebase/database';

const useReservations = (date) => {
  const [reservations, setReservations] = useState([]);

  useEffect(() => {
    const fetchReservations = async () => {
      if (date) {
        try {
          const db = getDatabase();
          const reservationsRef = ref(db, `Reservations/${date}`);
          const snapshot = await get(reservationsRef);
          if (snapshot.exists()) {
            setReservations(snapshot.val());
          } else {
            setReservations([]);
          }
        } catch (error) {
          console.error('Error getting reservations:', error);
        }
      }
    };

    fetchReservations();
  }, [date]);

  return reservations;
};

export function ReservationsPage() {
  const [reservationStatus, setReservationStatus] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [date, setDate] = useState('');
  const [people, setPeople] = useState(0);

  const reservations = useReservations(date);

  const db = getDatabase();

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

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const reservationData = Object.fromEntries(formData.entries());

    if (validateForm(reservationData)) {
      try {
        const reservationConfirmation = `Thank you, ${reservationData.fname}! Your reservation for ${reservationData.people} guests on ${reservationData.date} at ${reservationData.time} has been confirmed.`;
        setReservationStatus(reservationConfirmation);
        setFormSubmitted(true);

        const newReservationKey = reservations.length;
        const reservationsRef = ref(db, `Reservations/${reservationData.date}/${newReservationKey}`);
        await set(reservationsRef, reservationData);
        console.log('Reservation data saved successfully');
        event.target.reset();
      } catch (error) {
        console.error('Error saving reservation data:', error);
        displayError('There was an error processing your reservation. Please try again.');
        setFormSubmitted(false);
      }
    }
  };

  const displayError = (message) => {
    setReservationStatus(message);
  };

  const availableTimes = ['12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00'].filter(time => (
    !reservations.some(res => res.time === time && res.people >= people)
  ));

  if (formSubmitted) {
    return <div className="reservation-success-message">{reservationStatus}</div>;
  }

  return (
    <div className="reservation-form">
      <h1>Make a Reservation</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="fname">First name:</label>
        <input type="text" id="fname" name="fname" placeholder="Tim" required />
        <label htmlFor="lname">Last name:</label>
        <input type="text" id="lname" name="lname" placeholder="Carlson" />
        <label htmlFor="date">Date:</label>
        <input
          type="date"
          id="date"
          name="date"
          onChange={(e) => setDate(e.target.value)}
          required
        />
        <label htmlFor="people">Number of People:</label>
        <input
          type="number"
          id="people"
          name="people"
          onChange={(e) => setPeople(Number(e.target.value))}
          required
        />
        <label htmlFor="time">Time:</label>
        <select id="time" name="time" required>
          <option value="">Select a time</option>
          {availableTimes.map(time => (
            <option key={time} value={time}>{time}</option>
          ))}
        </select>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" placeholder="txxxxx@uw.edu" required />
        <label htmlFor="phone">Phone Number:</label>
        <input type="tel" id="phone" name="phone" placeholder="1234567890" required />
        <button type="submit">Submit</button>
      </form>
      {reservationStatus && !formSubmitted && <div className="reservation-status">{reservationStatus}</div>}
    </div>
  );
}
