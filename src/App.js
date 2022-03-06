import React from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Index from "./Components/Index";
import Login from "./Components/Login";
import Register from "./Components/Register";

import SellerIndex from "./Components/sellers/Index";
import SellerProfile from "./Components/sellers/Profile";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Index />} />
          <Route  path="/login" element={<Login />} />
          <Route  path="/register" element={<Register />} />
        </Routes>
        <Routes>
          <Route exact path="/seller/index" element={<SellerIndex />} />
          <Route exact path="/seller/profile" element={<SellerProfile />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
