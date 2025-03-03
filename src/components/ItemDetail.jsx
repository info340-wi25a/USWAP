import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import Footer from "../components/Footer";

const ItemDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const itemsData = [
        { id: 1, title: "Dorm Mini Fridge", price: 80, category: "electronics", condition: "Used - Like New", seller: "John Doe", location: "Seattle, WA", image: "/project-draft/img/Dorm_mini.jpg", description: "A compact dorm mini fridge, perfect for small spaces. Keeps your drinks and snacks cool at all times." },
        { id: 2, title: "Gaming Laptop", price: 500, category: "electronics", condition: "Used - Good", seller: "Sarah Lee", location: "Bellevue, WA", image: "/project-draft/img/GamingLap.jpeg", description: "High-performance gaming laptop with a powerful GPU, perfect for gaming and productivity." },
        { id: 3, title: "Microwave Oven", price: 50, category: "electronics", condition: "Used - Fair", seller: "Tom Smith", location: "Redmond, WA", image: "/project-draft/img/Microwave.jpg", description: "Reliable microwave oven, great for dorms and apartments. Heats your food quickly and efficiently." },
        { id: 4, title: "Study Desk", price: 120, category: "furniture", condition: "Like New", seller: "Emily Johnson", location: "Seattle, WA", image: "/project-draft/img/Desk.jpg", description: "A sturdy study desk with a modern design, perfect for working or studying comfortably." },
        { id: 5, title: "Noise-Canceling Headphones", price: 150, category: "electronics", condition: "New", seller: "David Kim", location: "Tacoma, WA", image: "/project-draft/img/Headphones.jpg", description: "Premium noise-canceling headphones for distraction-free studying and immersive audio." },
        { id: 6, title: "Used Textbooks", price: 20, category: "books", condition: "Used - Good", seller: "Michael Scott", location: "Everett, WA", image: "/project-draft/img/Textbook.jpg", description: "A variety of used textbooks at affordable prices. Great for students looking to save money." },
        { id: 7, title: "Coffee Maker", price: 35, category: "other", condition: "Like New", seller: "Jennifer Wilson", location: "Bellevue, WA", image: "/project-draft/img/CoffeeMaker.jpeg", description: "Convenient coffee maker to keep you energized for long study sessions." },
        { id: 8, title: "Pillows", price: 15, category: "other", condition: "New", seller: "Brian Lee", location: "Seattle, WA", image: "/project-draft/img/Pillow.jpg", description: "Soft and comfortable pillows for a good night’s sleep." },
        { id: 9, title: "Storage Bins", price: 10, category: "other", condition: "Used - Good", seller: "Sophia Martinez", location: "Kent, WA", image: "/project-draft/img/StorageBin.jpg", description: "Durable storage bins for organizing your space efficiently." },
        { id: 10, title: "Long-sleeve Shirt", price: 20, category: "clothing", condition: "New", seller: "Daniel Nguyen", location: "Seattle, WA", image: "/project-draft/img/Shirt.jpg", description: "A comfortable long-sleeve shirt, perfect for casual wear or layering." }
    ];

    const item = itemsData.find(item => item.id === Number(id));

    if (!item) {
        return <h2 style={{ textAlign: "center", marginTop: "20px" }}>Item not found</h2>;
    }

    const handleAddToCart = () => {
        if (item.id) {
            navigate(`/purchase`);
        }
    };

    return (
        <div className="content-wrapper">
            {/* 🔹 Item Card */}
            <div className="form-card">
                <div className="purchase-card">
                    <img src={item.image} alt={item.title} className="item-image" />
                    <div className="item-info">
                        <h3 className="item-title">{item.title}</h3>
                        <p className="item-price"><strong>Price:</strong> ${item.price}</p>
                        <p className="item-category"><strong>Category:</strong> {item.category}</p>
                        <p className="item-condition"><strong>Condition:</strong> {item.condition}</p>
                        <p className="item-seller"><strong>Seller:</strong> {item.seller}</p>
                        <p className="item-location"><strong>Location:</strong> {item.location}</p>
                        <p className="item-description">{item.description}</p>

                        {/* 🔹 "Add to Cart" Button */}
                        <button onClick={handleAddToCart} className="confirm">
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>

            {/* 🔹 Additional Item Details */}
            <div className="purchase-blurb">
                <h2>About This Item:</h2>
                <p>Use this page to view detailed information about an item. If you're interested in purchasing, simply click the "Add to Cart" button to proceed.</p>
            </div>

            {/* 🔹 Footer */}
            <Footer />
        </div>
    );
};

export default ItemDetail;
