import { useState } from "react";
import { ProductList } from "./components/ProductList";
import { Navbar } from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import { Product } from "./components/Product";
import Cart from "./components/Cart";
import { Login } from "./components/Login";
function App() {
  const [token, setToken] = useState(localStorage.getItem("userToken") ?? null);

  return (
    <>
      {token ? (
        <>
          <Navbar setToken={setToken} />
          <Routes>
            <Route path="/" element={<ProductList />} />
            <Route path="/products" element={<ProductList />} />
            <Route path="/products/:id" element={<Product />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </>
      ) : (
        <Login token={token} setToken={setToken} />
      )}
    </>
  );
}

export default App;
