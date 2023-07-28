import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const totalSeats = 20; // Total number of seats in the bus

const BusSeatAvailability = () => {
  const [selectedSeats, setSelectedSeats] = useState([]);

  const handleSeatClick = (seatNumber) => {
    if (selectedSeats.includes(seatNumber)) {
      setSelectedSeats(selectedSeats.filter((seat) => seat !== seatNumber));
    } else {
      setSelectedSeats([...selectedSeats, seatNumber]);
    }
  };

  const handleBookSeat = () => {
    // Implement your booking logic here
    console.log("Selected Seats: ", selectedSeats);
    // Reset the selectedSeats state after booking
    setSelectedSeats([]);
  };

  const seatStyle = {
    width: '40px',
    height: '40px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '14px',
    fontWeight: 'bold',
    borderRadius: '50%',
    cursor: 'pointer',
    position: 'relative',
    color: '#333',
    userSelect: 'none',
  };

  const bookedStyle = {
    backgroundColor: '#ff6b6b',
  };

  const availableStyle = {
    backgroundColor: '#5cdb95',
  };

  const hoverStyle = {
    backgroundColor: '#add8e6',
  };

  const hoverAvailableStyle = {
    backgroundColor: '#59a9ff',
  };

  return (
    <div className="bus-seat-booking-container">
      <h2>Bus Seat Availability</h2>
      <div className="seat-layout">
        <div className="column">
          {Array.from({ length: 5 }, (_, index) => {
            const seatNumber = index + 1;
            const isBooked = selectedSeats.includes(seatNumber);
            return (
              <div
                key={seatNumber}
                style={{
                  ...seatStyle,
                  ...(isBooked ? bookedStyle : availableStyle),
                  ...(isBooked ? {} : { ':hover': hoverAvailableStyle }),
                  ...(!isBooked ? { ':hover': hoverStyle } : {}),
                }}
                onClick={() => handleSeatClick(seatNumber)}
              >
                {seatNumber}
              </div>
            );
          })}
        </div>
        <div className="column">
          {Array.from({ length: 5 }, (_, index) => {
            const seatNumber = index + 6;
            const isBooked = selectedSeats.includes(seatNumber);
            return (
              <div
                key={seatNumber}
                style={{
                  ...seatStyle,
                  ...(isBooked ? bookedStyle : availableStyle),
                  ...(isBooked ? {} : { ':hover': hoverAvailableStyle }),
                  ...(!isBooked ? { ':hover': hoverStyle } : {}),
                }}
                onClick={() => handleSeatClick(seatNumber)}
              >
                {seatNumber}
              </div>
            );
          })}
        </div>
        <div className="gap"></div>
        <div className="column">
          {Array.from({ length: 5 }, (_, index) => {
            const seatNumber = index + 11;
            const isBooked = selectedSeats.includes(seatNumber);
            return (
              <div
                key={seatNumber}
                style={{
                  ...seatStyle,
                  ...(isBooked ? bookedStyle : availableStyle),
                  ...(isBooked ? {} : { ':hover': hoverAvailableStyle }),
                  ...(!isBooked ? { ':hover': hoverStyle } : {}),
                }}
                onClick={() => handleSeatClick(seatNumber)}
              >
                {seatNumber}
              </div>
            );
          })}
        </div>
        <div className="column">
          {Array.from({ length: 5 }, (_, index) => {
            const seatNumber = index + 16;
            const isBooked = selectedSeats.includes(seatNumber);
            return (
              <div
                key={seatNumber}
                style={{
                  ...seatStyle,
                  ...(isBooked ? bookedStyle : availableStyle),
                  ...(isBooked ? {} : { ':hover': hoverAvailableStyle }),
                  ...(!isBooked ? { ':hover': hoverStyle } : {}),
                }}
                onClick={() => handleSeatClick(seatNumber)}
              >
                {seatNumber}
              </div>
            );
          })}
        </div>
      </div>
      <div className="book-button-container">
        <button className="book-button" onClick={handleBookSeat}>
          <Link to="/PassengerDetails">BOOK SEAT</Link>
        </button>
      </div>
    </div>
  );
};

export default BusSeatAvailability;