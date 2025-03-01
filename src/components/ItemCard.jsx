import React from 'react';
//import { Link } from 'react-router';

function ItemCard({ item }) {
    return (
        <div className="item-card">
            <Link to={`/item/${item.id}`} className="item-link"></Link>
            <img src={item.image} alt={item.name} className="item-image" />
            <div className="item-details">
                <h3 className="item-name">{item.name}</h3>
                <p className="item-price">${item.price}</p>
                <p className="item-category">{item.category}</p>
            </div>
        </div>
    )
}

export default ItemCard;