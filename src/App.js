import React from 'react';
import Header from './Header/Header'
import Homepage from './Homepage/Homepage'
import About from './About/About'
import Projects from './Projects/Projects'
import Contact from './Contact/Contact'
import Footer from './Footer/Footer'
import './App.css';

const App = () => {

  return (
    <div className="App">
      <Header />
      <Homepage />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
