import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; 
import { getDatabase, ref, onValue } from "firebase/database";
import addToWishlist from "./WishList";

const ListingPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [category, setCategory] = useState("all");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [items, setItems] = useState([]); // State for storing fetched items

  const navigate = useNavigate();

  useEffect(() => {
    const database = getDatabase();
    const itemsRef = ref(database, "items");

    // Fetch items from Firebase
    onValue(itemsRef, (snapshot) => {
      if (snapshot.exists()) {
        const data = snapshot.val();
        const itemList = Object.keys(data).map((key) => ({
          id: key,
          ...data[key],
        }));
        setItems(itemList);
      } else {
        setItems([]);
      }
    });
  }, []);

  // Filtering Logic
  const filteredItems = items.filter((item) => {
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = category === "all" || item.category === category;
    const matchesMinPrice = minPrice === "" || item.price >= Number(minPrice);
    const matchesMaxPrice = maxPrice === "" || item.price <= Number(maxPrice);

    return matchesSearch && matchesCategory && matchesMinPrice && matchesMaxPrice;
  });

  // Function to handle "Add to Cart" button click, navigates to purchase page
  const handleAddToCart = (item, event) => {
    event.stopPropagation(); 
    navigate("/purchase", { state: { item } });
  };

  return (
    <div className="content-wrapper">
      <div className="content-wr">
        <div className="listing-blurb">
          <h3>About the Listing Page</h3>
          <p>Browse a variety of items listed by college students just like you. Whether you're looking for textbooks, furniture, or electronics, our listing page helps you find what you need at great prices.
            Use the search and filter options to quickly locate items that fit your needs. Once you find an item, click "Add to Cart" to proceed to purchase.
          </p>
          <p>Our platform is designed to make buying and selling easy and convenient for students. Listings are constantly updated, ensuring a fresh selection of items at affordable prices.
            By using this marketplace, you're not only finding great deals but also contributing to a sustainable student community where resources are shared and reused.</p>
        </div>

        {/* Search & Filter Form */}
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
            <select id="filter-category" name="filter-category" value={category} onChange={(e) => setCategory(e.target.value)}>
              <option value="all">All</option>
              <option value="electronics">Electronics</option>
              <option value="furniture">Furniture</option>
              <option value="clothing">Clothing</option>
              <option value="books">Books</option>
              <option value="other">Other</option>
            </select>

            <label htmlFor="price-range">Price Range:</label>
            <input type="number" id="min-price" name="min-price" placeholder="Min Price" value={minPrice} onChange={(e) => setMinPrice(e.target.value)} />
            <input type="number" id="max-price" name="max-price" placeholder="Max Price" value={maxPrice} onChange={(e) => setMaxPrice(e.target.value)} />
          </form>
        </div>
      </div>

      {/* Filtered Listings */}
      <div className="container-box">
        {filteredItems.length > 0 ? (
          filteredItems.map((item) => (
            <div className="item" key={item.id}>
              <img src={item.imageUrl || "img/default.jpg"} alt={item.title} />
              <div className="info">
                <div className="title">{item.title}</div>
                <div className="price">${item.price}</div>
                <div className="condition"><strong>Condition:</strong> {item.condition}</div>
                <div className="description"><strong>Description:</strong> {item.description || "No description available."}</div>

                {/* Buttons for adding to cart and wishlist, properly spaced */}
                <div className="button-container">
                  <button onClick={(e) => handleAddToCart(item, e)} className="add-to-cart">
                    Buy Now
                  </button>

                  <button onClick={(e) => { e.stopPropagation(); addToWishlist(item); }} className="add-to-wishlist">
                    Add to Wishlist
                  </button>
                </div>
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
