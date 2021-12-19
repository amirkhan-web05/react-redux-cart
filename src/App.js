import React from 'react';
import { Cart } from './pages/Cart';
import { Home } from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Details } from './components/Details';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<Cart />} path="/cart" />
        <Route element={<Details />} path="/details/:id" />
      </Routes>
    </Router>
  );
};

export default App;
