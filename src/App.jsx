import React from "react";
import "./index.css";
import { Routes,Route } from "react-router-dom";
import Home from "./pages/Home"
import Signup from "./pages/Signup"
import Login from "./pages/Login"
import CategoryPage from "./pages/CategoryPage";
import ElectronicsCat from "./components/ElectronicsCat";
import Navbar from '../src/components/Navbar';
import Jewellarycat from "./components/Jewellarycat";
import Menclothingcat from "./components/WomenclothingCat";
import WomenclothingCat from "./components/WomenclothingCat";
import ProductDetails from "./components/ProductDetails";
import CartItems from "./components/CartItems";
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
       
          <Route path="/" element={<Home/>} />  
          <Route
            path="/products/category/:Categories"
            element={<CategoryPage />}
          />
          <Route path="/signup" element={<Signup/>} />
          <Route path="/electronics" element={<ElectronicsCat/>} />
          <Route path="/jewelery" element={<Jewellarycat/>} />
          <Route path="/men's clothing" element={<Menclothingcat/>} />
          <Route path="/women's clothing" element={<WomenclothingCat/>} />
         <Route path="/products/detail/:id" element={<ProductDetails/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/cart" element={<CartItems/>} />

      </Routes>
  
    </div>
  );
}

export default App;
