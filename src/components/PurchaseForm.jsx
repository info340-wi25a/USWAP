import React, { useState } from 'react';

function PurchaseForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    paymentMethod: 'cash',
    deliveryOption: 'pickup',
    shippingAddress: '',
    additionalNotes: ''
  });

  // Handles form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handles form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Purchase Submitted:', formData);
    alert('Purchase request submitted successfully! Check your email for details.');

    // Reset form
    setFormData({
      name: '',
      phone: '',
      email: '',
      paymentMethod: 'cash',
      deliveryOption: 'pickup',
      shippingAddress: '',
      additionalNotes: ''
    });
  };

  return (
    <div className="purchase-form">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />

        <label htmlFor="contact">Contact Information:</label>
        <input type="text" id="phone" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} required />
        <input type="text" id="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />

        <label htmlFor="paymentMethod">Payment Method:</label>
        <select id="paymentMethod" name="paymentMethod" value={formData.paymentMethod} onChange={handleChange} required>
          <option value="cash">Cash</option>
          <option value="credit card">Credit Card</option>
          <option value="venmo">Venmo</option>
          <option value="paypal">PayPal</option>
        </select>

        <label htmlFor="deliveryOption">Delivery Option:</label>
        <select id="deliveryOption" name="deliveryOption" value={formData.deliveryOption} onChange={handleChange} required>
          <option value="pickup">Pickup</option>
          <option value="shipping">Shipping</option>
        </select>

        {formData.deliveryOption === 'shipping' && (
          <>
            <label htmlFor="shippingAddress">Shipping Address:</label>
            <input 
              type="text" 
              id="shippingAddress" 
              name="shippingAddress" 
              placeholder="Enter your shipping address" 
              value={formData.shippingAddress} 
              onChange={handleChange} 
              required
            />
          </>
        )}

        <label htmlFor="additionalNotes">Additional Notes (Optional):</label>
        <textarea id="additionalNotes" name="additionalNotes" rows="4" value={formData.additionalNotes} onChange={handleChange}></textarea>

        <div className="button-container">
          <button type="submit">Submit Purchase</button>
        </div>
      </form>
    </div>
  );
}

export default PurchaseForm;