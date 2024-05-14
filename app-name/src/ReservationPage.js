import './index.css';

document.addEventListener('DOMContentLoaded', function() {
    const reservationForm = document.getElementById('reservationForm');
    const reservationStatus = document.getElementById('reservationStatus');
  
    reservationForm.addEventListener('submit', function(event) {
      event.preventDefault();
  
      if (validateForm()) {
        const formData = new FormData(reservationForm);
        const reservationData = {};
        formData.forEach((value, key) => {
          reservationData[key] = value;
        });
  
        setTimeout(() => {
          const reservationConfirmation = `Thank you, ${reservationData.name}! Your reservation for ${reservationData.guests} guests on ${reservationData.date} at ${reservationData.time} has been confirmed.`;
          reservationStatus.textContent = reservationConfirmation;
          reservationForm.reset();
        }, 100);
      }
    });
  
    function validateForm() {
      const dateInput = document.getElementById('date');
      const timeInput = document.getElementById('time');
      const guestsInput = document.getElementById('guests');
      const nameInput = document.getElementById('name');
      const emailInput = document.getElementById('email');
      const phoneInput = document.getElementById('phone');
  
      if (!dateInput.value || !timeInput.value || !guestsInput.value || !nameInput.value || !emailInput.value || !phoneInput.value) {
        displayError('Please fill in all required fields.');
        return false;
      }
  
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(emailInput.value)) {
        displayError('Please enter a valid email address.');
        return false;
      }
  
      const phoneRegex = /^\d{10}$/;
      if (!phoneRegex.test(phoneInput.value)) {
        displayError('Please enter a valid phone number (10 digits).');
        return false;
      }
  
      // Additional validation for date and time can be added if needed
      return true;
    }
  
    function displayError(message) {
      reservationStatus.textContent = message;
      reservationStatus.style.color = 'red';
    }
  });