import React, { useEffect, useState } from "react";

function App() {
  const [products, setProducts] = useState([]);

useEffect(() => {
  fetch("http://localhost:5000/api/products")
    .then((response) => response.json())
    .then((data) => {
      console.log("Fetched products:", data);
      setProducts(data);
    })
    .catch((err) => console.error("Error fetching products:", err));
}, []);


  return (
    <div style={{ padding: "20px" }}>
      <h1>Products</h1>
      <ul>
        {products.length === 0 ? (
          <li>Loading products...</li>
        ) : (
          products.map((p) => (
            <li key={p._id}>
              {p.name} - ${p.price}
            </li>
          ))
        )}
      </ul>
    </div>
  );
}

export default App;
