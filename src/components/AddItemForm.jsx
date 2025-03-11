import React, { useState, useRef } from "react";
import { database, ref, push } from "../firebaseConfig"; // Import Firebase functions
import { getApp } from "firebase/app";
import { getStorage, ref as storageRef, uploadBytes, getDownloadURL } from "firebase/storage";

function AddItemForm() {
  const [formData, setFormData] = useState({
    title: "",
    price: "",
    description: "",
    condition: "new",
    category: "electronics",
    contact: "",
    image: null,
  });

  const [imagePreview, setImagePreview] = useState(null);
  const fileInputRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData({ ...formData, image: file });
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.image) {
        alert("Please upload an image.");
        return;
    }

    try {
        const storage = getStorage(getApp(), "gs://info340-media.firebasestorage.app"); 
        const imagePath = `group-AB6/uploads/to/${formData.image.name}`;  //setting path for uploading image file to shared folder
        const imageStorageRef = storageRef(storage, imagePath);

        // Upload image
        const uploadResult = await uploadBytes(imageStorageRef, formData.image);
        const imageUrl = await getDownloadURL(uploadResult.ref);

        // Store item details in database with image URL
        const itemsRef = ref(database, "items");
        await push(itemsRef, {
            title: formData.title,
            price: formData.price,
            condition: formData.condition,
            category: formData.category,
            sellername: formData.sellername,
            contact: formData.contact,
            imageUrl: imageUrl, // Store the image URL instead of name
        });

        alert("Item added successfully!");

        // Reset form
        setFormData({
            title: "",
            price: "",
            description: "",
            condition: "new",
            category: "electronics",
            sellername: "",
            contact: "",
            image: null,
        });

        setImagePreview(null);
        if (fileInputRef.current) {
            fileInputRef.current.value = "";
        }
    } catch (error) {
        console.error("Error adding item:", error);
        alert("Failed to add item. Try again.");
    }
};

  return (
    <div className="search-container">
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Item Title:</label>
        <input type="text" id="title" name="title" value={formData.title} onChange={handleChange} required />

        <label htmlFor="price">Price ($):</label>
        <input type="number" id="price" name="price" min="1" value={formData.price} onChange={handleChange} required />

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

        <label htmlFor="sellername">Seller's Name:</label>
      <input type="text" id="sellername" name="sellername" value={formData.sellername} onChange={handleChange} required />

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
