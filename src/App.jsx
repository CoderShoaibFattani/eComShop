import { Route, Routes } from "react-router-dom";
import Products from "./screens/Products";
import SingleProduct from "./screens/SingleProduct";
import "@fontsource/quicksand";
import Home from "./screens/Home";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path="/product/:id" element={<SingleProduct />} />
    </Routes>
  );
};

export default App;
