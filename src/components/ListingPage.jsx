import React, { useState } from 'react';
import { Link } from "react-router-dom"; // ✅ Fixed import (use react-router-dom)

const itemsData = [
  { id: 1, title: "Dorm Mini Fridge", price: 80, category: "electronics", condition: "Good", image: "img/Dorm_mini.jpg"},
  { id: 2, title: "Gaming Laptop", price: 500, category: "electronics", condition: "Like New", image: "img/GamingLap.jpeg"},
  { id: 3, title: "Microwave Oven", price: 50, category: "electronics", condition: "New", image: "img/Microwave.jpg"},
  { id: 4, title: "Study Desk", price: 120, category: "furniture", condition: "Fair", image: "img/Desk.jpg" },
  { id: 5, title: "Noise-Canceling Headphones", price: 150, category: "electronics",  condition: "New", image: "img/Headphones.jpg"},
  { id: 6, title: "Used Textbooks", price: 20, category: "books",  condition: "Fair", image: "img/Textbook.jpg"},
  { id: 7, title: "Coffee Maker", price: 35, category: "other",  condition: "Good", image: "img/CoffeeMaker.jpeg" },
  { id: 8, title: "Pillows", price: 15, category: "other",  condition: "New", image: "img/Pillow.jpg"},
  { id: 9, title: "Storage Bins", price: 10, category: "other",  condition: "Fair", image: "img/StorageBin.jpg"},
  { id: 10, title: "Long-sleeve shirt", price: 20, category: "clothing", condition: "Good", image: "img/Shirt.jpg"}
];

const ListingPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [category, setCategory] = useState("all");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  // Function to add an item to the wishlist
  const addToWishlist = (item) => {
    let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    
    if (!wishlist.some(wishItem => wishItem.id === item.id)) {
      wishlist.push(item);
      localStorage.setItem("wishlist", JSON.stringify(wishlist));
      alert(`${item.title} added to wishlist!`);
    } else {
      alert(`${item.title} is already in your wishlist!`);
    }
  };

  // Filtering Logic
  const filteredItems = itemsData.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = category === "all" || item.category === category;
    const matchesMinPrice = minPrice === "" || item.price >= Number(minPrice);
    const matchesMaxPrice = maxPrice === "" || item.price <= Number(maxPrice);

    return matchesSearch && matchesCategory && matchesMinPrice && matchesMaxPrice;
  });

  return (
    <div className="content-wrapper">
      <div className="search-container">
        <form>
          <label htmlFor="search">Search for an item:</label>
          <input
            type="text"
            id="search"
            name="search"
            placeholder="Enter item name..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />

          <label htmlFor="filter-category">Filter by Category:</label>
          <select
            id="filter-category"
            name="filter-category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="all">All</option>
            <option value="electronics">Electronics</option>
            <option value="furniture">Furniture</option>
            <option value="clothing">Clothing</option>
            <option value="books">Books</option>
            <option value="other">Other</option>
          </select>
          <label htmlFor="price-range">Price Range:</label>
          <input
            type="number"
            id="min-price"
            name="min-price"
            placeholder="Min Price"
            value={minPrice}
            onChange={(e) => setMinPrice(e.target.value)}
          />
          <input
            type="number"
            id="max-price"
            name="max-price"
            placeholder="Max Price"
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
          />

        </form>
      </div>

      {/* Filtered Listings */}
      <div className="container-box">
        {filteredItems.length > 0 ? (
          filteredItems.map(item => (
            <div className="item" key={item.id}>
              <Link to={`/item/${item.id}`}>
                <img src={item.image} alt={item.title} />
              </Link>
              <div className="info">
                <div className="title">{item.title}</div>
                <div className="price">${item.price}</div>
                <div className="condition">Condition: {item.condition}</div>
                <button onClick={() => addToWishlist(item)} className="add-to-wishlist">
                Add to Wishlist
              </button>

              </div>
            </div>
          ))
        ) : (
          <p>No items match your search criteria.</p>
        )}
      </div>
    </div>
  );
};

export default ListingPage;
