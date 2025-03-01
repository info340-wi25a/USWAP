import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <h1>HyperLocal UW Student Ebay</h1>
      <p className="app-name"><Link to="/">USWAP</Link></p>
      <p>A secure and convenient marketplace for UW students to buy, sell, and trade items.</p>
    </header>
  );
}