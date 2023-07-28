import React, { useState, useEffect } from 'react';
import { Image } from '@mui/icons-material';

// const App = () => {
//   return (
//     <div>
//       {/* Other components or content */}
//       <PaymentTiming />
//     </div>
//   );
// };

// e

const PaymentTiming = () => {
  // State to keep track of the remaining time for payment
  const [remainingTime, setRemainingTime] = useState(300); // 300 seconds (5 minutes) as an example

  // useEffect hook to start the countdown timer when the component mounts
  useEffect(() => {
    const interval = setInterval(() => {
      setRemainingTime((prevTime) => prevTime - 1);
    }, 1000);

    // Clean up the interval when the component unmounts
    return () => {
      clearInterval(interval);
    };
  }, []);

  // Function to convert remaining time (in seconds) to a human-readable format (e.g., mm:ss)
  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <h2>Payment Timing</h2>
      <p>Time remaining for payment: {formatTime(remainingTime)}</p>
      <img
          src="https://www.investopedia.com/thmb/hJrIBjjMBGfx0oa_bHAgZ9AWyn0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/qr-code-bc94057f452f4806af70fd34540f72ad.png" // Replace this with the actual image URL
          alt="Description of the image"
          style={{ width: '300px', height: '300px' }} // Adjust the width and height as needed
        />
      {/* Add your payment form here */}
    </div>
  );
};

export default PaymentTiming;