import React, { useState } from 'react';
import './PassengerDetails.css'; // Import the CSS file for styling
import { Link } from 'react-router-dom';


const PassengerDetailsForm = () => {
  const [passengerName, setPassengerName] = useState('');
  const [passengerAge, setPassengerAge] = useState('');
  const [passengerGender, setPassengerGender] = useState('');
  const [passengerMobile, setPassengerMobile] = useState('');
  const [passengerEmail, setPassengerEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can implement the logic to handle form submission here
    console.log('Passenger Details:', {
      name: passengerName,
      age: passengerAge,
      gender: passengerGender,
      mobile: passengerMobile,
      email: passengerEmail,
    });
  };

  return (
    <div className="passenger-details-form-container">
      <h2>Passenger Details</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={passengerName}
            onChange={(e) => setPassengerName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="age">Age:</label>
          <input
            type="number"
            id="age"
            value={passengerAge}
            onChange={(e) => setPassengerAge(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="gender">Gender:</label>
          <select
            id="gender"
            value={passengerGender}
            onChange={(e) => setPassengerGender(e.target.value)}
            required
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="mobile">Mobile Number:</label>
          <input
            type="text"
            id="mobile"
            value={passengerMobile}
            onChange={(e) => setPassengerMobile(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email (Gmail):</label>
          <input
            type="email"
            id="email"
            value={passengerEmail}
            onChange={(e) => setPassengerEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
            <Link to="/Pay">
          <button type="submit">Submit</button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default PassengerDetailsForm;