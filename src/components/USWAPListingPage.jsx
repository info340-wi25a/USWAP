import React from 'react';
import Header from './Header';
import Footer from './Footer';
import ItemCard from './ItemCard';
import SearchForm from './SearchForm';

const sampleListings = [
    {
      id: 1,
      title: 'Dorm Mini Fridge',
      price: 80,
      description: 'Compact dorm mini fridge, perfect for small spaces.',
      image: 'img/Dorm_mini.jpg',
      altText: 'Dorm Mini Fridge',
    },
    {
      id: 2,
      title: 'Gaming Laptop',
      price: 500,
      description: 'High-performance gaming laptop with powerful GPU.',
      image: 'img/GamingLap.jpeg',
      altText: 'Gaming Laptop',
    },
    {
      id: 3,
      title: 'Microwave Oven',
      price: 50,
      description: 'Reliable microwave oven, great for dorms and apartments.',
      image: 'img/Microwave.jpg',
      altText: 'Microwave Oven',
    },
    {
      id: 4,
      title: 'Study Desk',
      price: 120,
      description: 'Sturdy study desk with a modern design.',
      image: 'img/Desk.jpg',
      altText: 'Study Desk',
    },
    {
      id: 5,
      title: 'Noise-Canceling Headphones',
      price: 150,
      description: 'Premium noise-canceling headphones for distraction-free studying.',
      image: 'img/Headphones.jpg',
      altText: 'Noise-Canceling Headphones',
    },
    {
      id: 6,
      title: 'Used Textbooks',
      price: 20,
      description: 'A variety of used textbooks at affordable prices.',
      image: 'img/Textbook.jpg',
      altText: 'Used Textbooks',
    },
    {
      id: 7,
      title: 'Coffee Maker',
      price: 35,
      description: 'Convenient coffee maker to keep you energized.',
      image: 'img/CoffeeMaker.jpeg',
      altText: 'Coffee Maker',
    },
    {
      id: 8,
      title: 'Pillows',
      price: 15,
      description: 'Soft and comfortable pillows for a good night’s sleep.',
      image: 'img/Pillow.jpg',
      altText: 'Pillows',
    },
    {
      id: 9,
      title: 'Storage Bins',
      price: 10,
      description: 'Durable storage bins for organizing your space.',
      image: 'img/StorageBin.jpg',
      altText: 'Storage Bins',
    }
  ];
  

function USWAPListingPage() {
    return (
        <div className="listing-page">
            <Header />
            <main>
                <h1>Marketplace Listings</h1>
                <div class="listing-blurb">
                    <h3>About the Listing Page</h3>
                    <p>Browse a variety of items listed by college students just like you. Whether you're looking for textbooks, furniture, or electronics, our listing page helps you find what you need at great prices.</p>
                    <p>Use the search and filter options to quickly locate items that fit your needs. Once you find an item, contact the seller to arrange the purchase.</p>
                    <p>Our platform is designed to make buying and selling easy and convenient for students. Listings are constantly updated, ensuring a fresh selection of items at affordable prices.</p>
                    <p>By using this marketplace, you're not only finding great deals but also contributing to a sustainable student community where resources are shared and reused.</p>
        </div>
        <SearchForm />

        <div className="listings-container">
          {sampleListings.map((item) => (
            <a key={item.id} href={`/item/${item.id}`} className="listing-link">
              <ItemCard 
                title={item.title} 
                price={item.price} 
                description={item.description} 
                image={item.image} 
                altText={item.altText} 
              />
            </a>
          ))}
        </div>
        </main>
        <Footer />
        </div>
    )
}

export default USWAPListingPage;