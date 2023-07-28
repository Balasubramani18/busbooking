import React, { useState } from 'react';
// Import the CSS file for styling
import { useNavigate } from 'react-router-dom';

const PaymentForm = () => {
    const navigate = useNavigate();
  const [paymentMethod, setPaymentMethod] = useState('');

  const handlePaymentMethodChange = (event) => {
    setPaymentMethod(event.target.value);
  };

  const handlePaymentSubmit = (event) => {
    event.preventDefault();
    // Implement your payment processing logic here
    console.log('Payment method selected:', paymentMethod);
    // Redirect to payment gateway or handle payment details securely
  };

  return (
    <div className="payment-container">
      <h2>Select Payment Method</h2>
      <form onSubmit={handlePaymentSubmit} >
        <div className="payment-options" style={{justifyContent:'left',display:'flex',textAlign:'left',width:'100%'}}>
          <label>
            <input
              type="radio"
              name="paymentMethod"
              value="upi"
              checked={paymentMethod === 'upi'}
              onChange={handlePaymentMethodChange}
             
              
            />
            UPI
          </label>
          <label style={{textAlign:'left',marginRight:'3em'}}>
            <input
              type="radio"
              name="paymentMethod"
              value="debitCard"
              checked={paymentMethod === 'debitCard'}
              onChange={handlePaymentMethodChange}
             

            />
            Debit/credit Card
          </label>
          <label>
            <input
              type="radio"
              name="paymentMethod"
              value="creditCard"
              checked={paymentMethod === 'creditCard'}
              onChange={handlePaymentMethodChange}
            />
            Paypal
          </label>
        </div>
        <button onClick={()=>{navigate('/Paymenttime')}} type="submit">Proceed to Pay</button>
      </form>
    </div>
  );
};

export default PaymentForm;