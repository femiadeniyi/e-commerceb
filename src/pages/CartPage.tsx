import React, { useState } from 'react';
import { useCart } from '../context/CartContext';

const CartPage: React.FC = () => {
  const { cart, removeFromCart } = useCart();
  const [showCheckoutPopup, setShowCheckoutPopup] = useState(false); // State to control the checkout popup visibility
  const [showPaymentPopup, setShowPaymentPopup] = useState(false); // State for payment method popup
  const [showThankYouPopup, setShowThankYouPopup] = useState(false); // State to control the thank you popup visibility
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState<string>(''); // To hold the selected payment method
  const [cardNumber, setCardNumber] = useState<string>(''); // To hold the card number input
  const [expiryDate, setExpiryDate] = useState<string>(''); // To hold the expiry date input
  const [cvv, setCvv] = useState<string>(''); // To hold the CVV input
  const [cardError, setCardError] = useState<string>(''); // To handle card input errors

  // Calculate the total price of all items in the cart
  const totalPrice = cart.reduce((total, product) => total + product.price, 0);

  // Function to handle removing items from the cart
  const handleRemoveItem = (id: number) => {
    removeFromCart(id);
  };

  // Function to show the checkout popup
  const handleCheckout = () => {
    setShowCheckoutPopup(true);
  };

  // Function to close the checkout popup
  const closeCheckoutPopup = () => {
    setShowCheckoutPopup(false);
  };

  // Function to show the payment method popup after checkout
  const handleProceedToPayment = () => {
    closeCheckoutPopup(); // Close the checkout popup
    setShowPaymentPopup(true); // Show the payment method popup
  };

  // Function to handle confirming the payment and showing the thank you popup
  const handleConfirmPayment = () => {
    // Validate card information
    if (!cardNumber || !expiryDate || !cvv) {
      setCardError('Please fill in all card details.');
      return;
    }

    // Example of further validation you can add for card details (simple checks for the demo)
    if (cardNumber.length !== 16) {
      setCardError('Card number should be 16 digits.');
      return;
    }

    setCardError(''); // Reset error
    setShowPaymentPopup(false); // Close the payment method popup
    setShowThankYouPopup(true); // Show the thank you popup
  };

  // Function to handle selecting a payment method
  const handleSelectPaymentMethod = (method: string) => {
    setSelectedPaymentMethod(method);
    setCardNumber(''); // Reset card details on method change
    setExpiryDate('');
    setCvv('');
    setCardError('');
  };

  // Function to close the thank you popup
  const closeThankYouPopup = () => {
    setShowThankYouPopup(false); // Close the thank you popup
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Your Cart</h1>

      {cart.length === 0 ? (
        <p className="text-xl text-gray-600">Your cart is empty.</p>
      ) : (
        <div>
          <div className="space-y-6">
            {cart.map((product) => (
              <div
                key={product.id}
                className="flex items-center justify-between border-b py-4"
              >
                <div className="flex items-center space-x-4">
                  <img
                    src={product.imageUrl}
                    alt={product.name}
                    className="w-20 h-20 object-cover rounded"
                  />
                  <div>
                    <h3 className="text-xl font-semibold">{product.name}</h3>
                    <p className="text-lg text-gray-500">${product.price}</p>
                  </div>
                </div>
                <button
                  onClick={() => handleRemoveItem(product.id)}
                  className="text-red-500 hover:text-red-700 transition duration-300"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          <div className="mt-6 flex justify-between text-lg font-semibold">
            <span>Total:</span>
            <span>${totalPrice.toFixed(2)}</span>
          </div>

          <div className="mt-6 flex space-x-4">
            <button
              onClick={handleCheckout} // Show checkout popup
              className="bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600 transition duration-300"
            >
              Checkout
            </button>
            <button
              onClick={() => alert('Continue shopping')}
              className="bg-gray-500 text-white py-2 px-6 rounded-lg hover:bg-gray-600 transition duration-300"
            >
              Continue Shopping
            </button>
          </div>
        </div>
      )}

      {/* Checkout popup */}
      {showCheckoutPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-2xl font-semibold mb-4">Proceeding to Checkout</h2>
            <p>Your total is ${totalPrice.toFixed(2)}</p>
            <div className="mt-4 flex justify-end space-x-4">
              <button
                onClick={closeCheckoutPopup} // Close the popup
                className="bg-gray-500 text-white py-2 px-6 rounded-lg hover:bg-gray-600"
              >
                Cancel
              </button>
              <button
                onClick={handleProceedToPayment} // Proceed to payment method
                className="bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600"
              >
                Proceed to Payment
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Payment method selection popup */}
      {showPaymentPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-2xl font-semibold mb-4">Select Payment Method</h2>
            <div className="space-y-4">
              <button
                onClick={() => handleSelectPaymentMethod('Credit Card')}
                className="w-full bg-blue-500 text-white py-2 rounded-lg"
              >
                Credit Card
              </button>
              <button
                onClick={() => handleSelectPaymentMethod('PayPal')}
                className="w-full bg-blue-500 text-white py-2 rounded-lg"
              >
                PayPal
              </button>
              <button
                onClick={() => handleSelectPaymentMethod('Apple Pay')}
                className="w-full bg-blue-500 text-white py-2 rounded-lg"
              >
                Apple Pay
              </button>
            </div>
            <div className="mt-4 flex justify-end space-x-4">
              <button
                onClick={() => setShowPaymentPopup(false)} // Close the popup
                className="bg-gray-500 text-white py-2 px-6 rounded-lg hover:bg-gray-600"
              >
                Cancel
              </button>
              <button
                onClick={handleConfirmPayment} // Confirm payment and show the thank you popup
                className="bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600"
              >
                Confirm Payment
              </button>
            </div>

            {/* Card details form */}
            {selectedPaymentMethod === 'Credit Card' && (
              <div className="mt-6">
                <div>
                  <label htmlFor="cardNumber" className="block text-sm">Card Number</label>
                  <input
                    id="cardNumber"
                    type="text"
                    value={cardNumber}
                    onChange={(e) => setCardNumber(e.target.value)}
                    className="w-full border p-2 mt-2 rounded"
                    placeholder="1234 5678 9876 5432"
                  />
                </div>
                <div className="mt-4">
                  <label htmlFor="expiryDate" className="block text-sm">Expiry Date</label>
                  <input
                    id="expiryDate"
                    type="text"
                    value={expiryDate}
                    onChange={(e) => setExpiryDate(e.target.value)}
                    className="w-full border p-2 mt-2 rounded"
                    placeholder="MM/YY"
                  />
                </div>
                <div className="mt-4">
                  <label htmlFor="cvv" className="block text-sm">CVV</label>
                  <input
                    id="cvv"
                    type="text"
                    value={cvv}
                    onChange={(e) => setCvv(e.target.value)}
                    className="w-full border p-2 mt-2 rounded"
                    placeholder="123"
                  />
                </div>
                {cardError && (
                  <p className="text-red-500 text-sm mt-2">{cardError}</p>
                )}
              </div>
            )}
          </div>
        </div>
      )}

      {/* Thank You popup */}
      {showThankYouPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-2xl font-semibold mb-4">Thank You for Shopping!</h2>
            <p>Your order has been placed successfully.</p>
            <p>Payment Method: {selectedPaymentMethod}</p>
            <div className="mt-4 flex justify-end space-x-4">
              <button
                onClick={closeThankYouPopup} // Close the thank you popup
                className="bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
