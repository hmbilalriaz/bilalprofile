// src/App.js
import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './styles/App.css'; // Create this file for styling

function App() {
  return (
      <div className="App">
        <Header />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </div>
  );
}

export default App;