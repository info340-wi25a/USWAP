import React, { useState, useEffect } from "react";
import { Link } from "react-router";
import { getDatabase, ref, onValue } from "firebase/database";

const ListingPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [category, setCategory] = useState("all");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [items, setItems] = useState([]); // State for storing fetched items

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

  
  const addToWishlist = (item) => {
    let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

    if (!wishlist.some((wishItem) => wishItem.id === item.id)) {
        wishlist.push({
            id: item.id,
            title: item.title,
            price: item.price,
            condition: item.condition,
            imageUrl: item.imageUrl || "img/default.jpg", // Ensure correct image URL
        });

        localStorage.setItem("wishlist", JSON.stringify(wishlist));
        alert(`${item.title} added to wishlist!`);
        window.location.href = "/wishlist";
    } else {
        alert(`${item.title} is already in your wishlist!`);
        window.location.href = "/wishlist";
    }
};


  // Filtering Logic
  const filteredItems = items.filter((item) => {
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = category === "all" || item.category === category;
    const matchesMinPrice = minPrice === "" || item.price >= Number(minPrice);
    const matchesMaxPrice = maxPrice === "" || item.price <= Number(maxPrice);

    return matchesSearch && matchesCategory && matchesMinPrice && matchesMaxPrice;
  });

  return (
    <div className="content-wrapper">
      <div className="content-wr">
        <div className="listing-blurb">
          <h3>About the Listing Page</h3>
          <p>Browse a variety of items listed by college students just like you. Whether you're looking for textbooks, furniture, or electronics, our listing page helps you find what you need at great prices.
        Use the search and filter options to quickly locate items that fit your needs. Once you find an item, click on it and it will take you to the add to cart page. Once you decide to buy the item, you can buy it through buying page.
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
              <Link to={`/item/${item.id}`}>
                <img src={item.imageUrl || "img/default.jpg"} alt={item.title} />
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
