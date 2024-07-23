import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <Router basename="/events">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
