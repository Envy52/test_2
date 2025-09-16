import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import AquaboxShop from './pages/AquaboxShop';
import ProductPage from './pages/ProductPage'; 

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="shop" element={<AquaboxShop />} />
          <Route path="product" element={<ProductPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;