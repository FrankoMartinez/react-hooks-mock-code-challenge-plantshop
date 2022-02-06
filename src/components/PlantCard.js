import React, { useState } from "react";

function PlantCard({ plant }) {
  const { id, name, image, price } = plant
  const [isInStock, setisInStock] = useState(true)

  function handleClick() {
    setisInStock(isInStock => !isInStock)
  }
 
  return (
    <li key={id} className="card">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      {isInStock ? (
        <button 
        className="primary"
        onClick={handleClick}
        >
          In Stock
        </button>
      ) : (
        <button
        onClick={handleClick}
        >
          Out of Stock
        </button>
      )}
    </li>
  );
}

export default PlantCard;
