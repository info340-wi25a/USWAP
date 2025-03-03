import React, { useState, useRef } from 'react';

function AddItemForm() {
  const [formData, setFormData] = useState({
    title: '',
    price: '',
    description: '',
    condition: 'new',
    category: 'electronics',
    contact: '',
    image: null
  });

  const [imagePreview, setImagePreview] = useState(null);
  const fileInputRef = useRef(null); // Create a ref for the file input

  // Handles form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handles image upload
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData({ ...formData, image: file });
      setImagePreview(URL.createObjectURL(file));
    }
  };

  // Handles form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Item Submitted:', formData);
    alert('Item added successfully!');

    // Reset the form fields
    setFormData({
      title: '',
      price: '',
      description: '',
      condition: 'new',
      category: 'electronics',
      contact: '',
      image: null
    });

    setImagePreview(null);

    // Reset file input manually
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <div className="search-container">
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Item Title:</label>
        <input type="text" id="title" name="title" value={formData.title} onChange={handleChange} required />

        <label htmlFor="price">Price ($):</label>
        <input type="number" id="price" name="price" min="1" value={formData.price} onChange={handleChange} required />

        <label htmlFor="description">Description:</label>
        <textarea id="description" name="description" rows="4" value={formData.description} onChange={handleChange} required></textarea>

        <label htmlFor="condition">Condition:</label>
        <select id="condition" name="condition" value={formData.condition} onChange={handleChange} required>
          <option value="new">New</option>
          <option value="like new">Like New</option>
          <option value="good">Good</option>
          <option value="fair">Fair</option>
          <option value="needs repair">Needs Repair</option>
        </select>

        <label htmlFor="image">Upload Image:</label>
        <input type="file" id="image" name="image" accept="image/*" ref={fileInputRef} onChange={handleImageChange} required />
        {imagePreview && <img src={imagePreview} alt="Preview" style={{ width: '100%', maxHeight: '200px', marginTop: '10px', borderRadius: '5px' }} />}

        <label htmlFor="category">Category:</label>
        <select id="category" name="category" value={formData.category} onChange={handleChange} required>
          <option value="electronics">Electronics</option>
          <option value="furniture">Furniture</option>
          <option value="clothing">Clothing</option>
          <option value="books">Books</option>
          <option value="other">Other</option>
        </select>

        <label htmlFor="contact">Contact Information:</label>
        <input type="text" id="contact" name="contact" placeholder="Enter phone number" value={formData.contact} onChange={handleChange} required />

        <div className="button-container">
          <button type="submit">Add Item</button>
        </div>
      </form>
    </div>
  );
}

export default AddItemForm;
