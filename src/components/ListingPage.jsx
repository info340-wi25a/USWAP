import React, { useState } from 'react';
import { Link } from "react-router";

// Sample hardcoded data for items
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

  const addToWishlist = (item) => {
    let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    
    if (!wishlist.some(wishItem => wishItem.id === item.id)) {
      wishlist.push(item);
      localStorage.setItem("wishlist", JSON.stringify(wishlist));
      alert(`${item.title} added to wishlist!`);
      window.location.href = "/wishlist";
    } else {
      alert(`${item.title} is already in your wishlist!`);
      window.location.href = "/wishlist";
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
      {/* 🔹 Listing Blurb */}
      <div className="content-wr">
      <div class="listing-blurb">
        <h3>About the Listing Page</h3>
        <p>Browse a variety of items listed by college students just like you. Whether you're looking for textbooks, furniture, or electronics, our listing page helps you find what you need at great prices.
        Use the search and filter options to quickly locate items that fit your needs. Once you find an item, click on it and it will take you to the add to cart page. Once you decide to buy the item, you can buy it through buying page.
        </p>
        <p>Our platform is designed to make buying and selling easy and convenient for students. Listings are constantly updated, ensuring a fresh selection of items at affordable prices.
        By using this marketplace, you're not only finding great deals but also contributing to a sustainable student community where resources are shared and reused.</p>
      </div>
      {/* 🔹 Search & Filter Form */}
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
      </div>
  {/* Filtered Listings */}
 <div className="container-box">
        {filteredItems.length > 0 ? (
          filteredItems.map(item => (
            <div className="item" key={item.id}>
              <Link to={`/item/${item.id}`}>
                <img src={item.image} alt={item.title} />
              </Link>
              {/*<img src={item.image} alt={item.title} /> */}
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



    

