import React from 'react';
import { Routes, Route, Navigate } from 'react-router';
import Header from './components/Header';
import Footer from './components/Footer';
import ListingPage from './components/ListingPage';
import AddItem from './components/AddItem';
import Purchase from './components/Purchase';
import ItemDetail from "./components/ItemDetail";
import USWAPHomePage from "./components/USWAPHomePage"; // ✅ Import your homepage component


function App(props) {
  return (
        <div>
    <Header />
    <Routes>
    <Route path="/" element={<USWAPHomePage />} />
      <Route path="/purchase" element={<Purchase />} />
      <Route path="/listings" element={<ListingPage items={props.items} />} />
      <Route path="/add-item" element={<AddItem />} />
      <Route path="*" element={<Navigate to="/" />} />
      <Route path="/item/:id" element={<ItemDetail />} />
    </Routes>
    <Footer />
  </div>
  );
};
export default App;



