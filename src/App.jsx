import { useState } from "react";
import { ProductList } from "./components/ProductList";
import { Navbar } from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import { Product } from "./components/Product";
import Cart from "./components/Cart";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/products" element={<ProductList />} />
        <Route path="/products/:id" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </>
  );
}

export default App;
