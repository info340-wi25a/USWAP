import React, { useEffect, useState } from 'react';
import { Routes, Route, Navigate } from 'react-router';
import Header from './components/Header';
import Footer from './components/Footer';
import ListingPage from './components/ListingPage';
import AddItem from './components/AddItem';
import Purchase from './components/Purchase';
import ItemDetail from "./components/ItemDetail";
import LoginPage from "./components/LoginPage";
import USWAPHomePage from "./components/USWAPHomePage";
import WishlistPage from "./components/WishlistPage";
import PurchaseHistoryPage from "./components/PurchaseHistoryPage";
import ForgotPasswordPage from "./components/ForgotPasswordPage";


const Dashboard = () => {
  const loggedInUser = localStorage.getItem("loggedInUser");
  return loggedInUser ? <h2>Welcome, {loggedInUser}!</h2> : <Navigate to="/login" />;
};


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
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/wishlist" element={<WishlistPage />} />
        <Route path="/purchase-history" element={<PurchaseHistoryPage />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;

