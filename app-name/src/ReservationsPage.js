import './index.css';

export function ReservationsPage() {
  return (
    <div class="reservation-form">
    <h1>Make a Reservation</h1>
    <form action="/action_page.php">
       <label for="fname">First name: </label>
       <input type="text" id="fname" name="fname" placeholder="Tim"></input>
       <label for="lname">Last name: </label>
       <input type="text" id="lname" name="lname" placeholder="Carlson"></input>
       <label for="date">Date</label>
       <input type="text" id="date" name="date" placeholder="04/21/2024"></input>
       <label for="time">Time</label>
       <input type="text" id="time" name="time" placeholder="12:00"></input>
       <label for="people">Number of People</label>
       <input type="number" id="people" name="people" placeholder="2"></input>
       <label for="email">Email:</label>
       <input type="email" id="email" name="email" placeholder="txxxxx@uw.edu"></input>
       <label for="phone">Phone Number:</label>
       <input type="tel" id="phone" name="phone" placeholder="xxx-xxx-xxxx"></input>
       <button type="submit">Submit</button>
    </form>
  </div>
  )
}

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
        return true;
    }
  
    function displayError(message) {
      reservationStatus.textContent = message;
      reservationStatus.style.color = 'red';
    }
  });