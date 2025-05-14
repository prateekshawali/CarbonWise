import React, { useState } from "react";
import "../Component/Payments.css";

const Payments = () => {
  const [paymentMethod, setPaymentMethod] = useState("");
  const [showCardDetails, setShowCardDetails] = useState(false);
  const [showUPIField, setShowUPIField] = useState(false);

  const handlePaymentMethodChange = (e) => {
    setPaymentMethod(e.target.value);
    if (e.target.value === "Credit Card") {
      setShowCardDetails(true);
      setShowUPIField(false);
    } else if (e.target.value === "Google Pay") {
      setShowCardDetails(false);
      setShowUPIField(true);
    } else {
      setShowCardDetails(false);
      setShowUPIField(false);
    }
  };

  return (
    <>
    <div className="payments-container">
      <h1 className="checkhead">Checkout</h1>

      <div className="billing-and-payment">
        {/* Billing Section */}
        <form className="payments-form">
          <h2>Billing Information</h2>
          <input type="text" placeholder="First Name" required />
          <input type="text" placeholder="Last Name" required />
          <input type="email" placeholder="Email Address" required />
          <input type="email" placeholder="Confirm Email Address" required />
          <input type="text" placeholder="Address" required />
          <input type="text" placeholder="Apartment, suite, unit, etc." />
          <input type="text" placeholder="Town / City" required />
          <input type="text" placeholder="State / Province" required />
          <input type="text" placeholder="ZIP Code" required />
        </form>

        {/* Payment Section */}
        <div className="payment-section">
          <h3>Payment Method</h3>
          <div className="payment-methods">
            <label>
              <input
                type="radio"
                name="payment"
                value="Credit Card"
                onChange={handlePaymentMethodChange}
              />
              Credit Card
              <img src="images/images/visa.png" alt="Visa Card Icon" />
              <img src="images/images/mastercard.png" alt="MasterCard Icon" />
              <img src="images/images/paypal.png" alt="PayPal Icon" />
              <img src="images/images/discover.png" alt="PayPal Icon" />
            </label>

            {showCardDetails && (
              <div className="credit-card-inputs">
                <input type="text" placeholder="Card Number" required />
                <input type="text" placeholder="MM/YY" required />
                <input type="text" placeholder="CVV" required />
              </div>
            )}

            <label>
              <input
                type="radio"
                name="payment"
                value="Google Pay"
                onChange={handlePaymentMethodChange}
              />
              Google Pay
            </label>

            {showUPIField && (
              <div className="upi-input">
                <input type="text" placeholder="Enter UPI ID" required />
              </div>
            )}
          </div>
        </div>
      </div>

      <button type="submit" className="submit-button">
        Submit Payment
      </button>
    </div>
    
    </>
    
  );
};

export default Payments;