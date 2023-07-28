import React from 'react';
import './BusAvailability.css'; // Import the CSS file for styling
import { Link } from 'react-router-dom';
const busData = [
    { id: 1, name: 'Krish Travels', availableSeats: 25, timing: '08:00 AM', price: 500, rating: 4.5 },
    { id: 2, name: 'KPN Travels', availableSeats: 10, timing: '09:30 AM', price: 700, rating: 4.0 },
    { id: 3, name: 'Parveen Travels', availableSeats: 5, timing: '10:15 AM', price: 600, rating: 4.2 },
    { id: 4, name: 'City Travels', availableSeats: 5, timing: '11:00 AM', price: 550, rating: 4.7 },
    { id: 5, name: 'Jayam Travels', availableSeats: 5, timing: '12:30 PM', price: 650, rating: 4.8 },
    { id: 6, name: 'Arthi Travels', availableSeats: 5, timing: '02:00 PM', price: 600, rating: 4.2 },
    { id: 7, name: 'Vivegam Travels', availableSeats: 5, timing: '03:45 PM', price: 750, rating: 4.6 },
  ];
  

const BusAvailability = () => {
  return (
    <div className="bus-availability-container">
      <h2>Bus Availability</h2>
      <div className="bus-list">
        {busData.map(bus => (
          <div key={bus.id} className="bus-item">
            <div className="bus-item-header">
              <span className="bus-name">{bus.name}</span>
              <span className="bus-timing">{bus.timing}</span>
            </div>
            <span className="available-seats">
              {bus.availableSeats} seats available
            </span>
            <span className="bus-price">Price: ${bus.price}</span>
            <span className="bus-rating">Rating: {bus.rating}</span>
            <Link to='/Buseat'>book</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BusAvailability;