import React, { useState } from "react";

function NewPlantForm({ onAddPlant }) {
  const [name, setName] = useState("")
  const [image, setImage] = useState("")
  const [price, setPrice] = useState("")

  function handleSubmit(event) {
    event.preventDefault()
    fetch('http://localhost:6001/plants', {
      method: "POST",
      headers: {
        'content-type': "application/json"
      },
      body: JSON.stringify({
        name: name,
        image:image,
        price: price,
      }),
    })
    .then(res => res.json())
    .then(data =>  onAddPlant(data))
  }

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form type="submit" onSubmit={handleSubmit}>
        <input
        type="text"
        name= {name}
        placeholder="Plant name"
        onChange={(event) => setName(event.target.value)}
            />
        <input 
        type="text"
        name={image} 
        placeholder="Image URL" 
        onChange={(event) => setImage(event.target.value)}
        />
        <input
         type="number" 
         name={price}
         step="0.01" 
         placeholder="Price"
         onChange={(event) => setPrice(parseFloat(event.target.value))}
         />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
