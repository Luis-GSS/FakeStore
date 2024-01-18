import { useState } from "react";
import { ProductList } from "./components/ProductList";
import { Navbar } from "./components/Navbar";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <ProductList />
    </>
  );
}

export default App;
