import React, { useState } from 'react';

function SearchForm() {
  const [searchTerm, setSearchTerm] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [category, setCategory] = useState('all');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle search logic here
    console.log({
      searchTerm,
      minPrice,
      maxPrice,
      category,
    });
    // You can call an API or update the parent component's state here to filter the items
  };

  return (
    <div className="search-container">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="search">Search for an item:</label>
          <input
            type="text"
            id="search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Enter item name..."
          />
        </div>

        <div className="form-group">
          <label htmlFor="filter-category">Filter by Category:</label>
          <select
            id="filter-category"
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
        </div>

        <div className="form-group">
          <label htmlFor="price-range">Price Range:</label>
          <div className="price-inputs">
            <input
              type="number"
              id="min-price"
              value={minPrice}
              onChange={(e) => setMinPrice(e.target.value)}
              placeholder="Min Price"
            />
            <span>-</span>
            <input
              type="number"
              id="max-price"
              value={maxPrice}
              onChange={(e) => setMaxPrice(e.target.value)}
              placeholder="Max Price"
            />
          </div>
        </div>

        <button type="submit">Search</button>
      </form>
    </div>
  );
}

export default SearchForm;
