import React from 'react';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import Hero from './Hero';

const App = () => {
  return (
    <div className='app-container'>
      <Header />
      <Hero />
      <main className='main-content'></main>
      <Footer />
    </div>
  );
};

export default App;