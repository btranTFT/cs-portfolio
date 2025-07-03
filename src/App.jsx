import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Resume from './pages/Resume';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import './App.css';
import { useState, useEffect } from 'react';

function App() {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  const handleToggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <>
      <Navbar theme={theme} onToggleTheme={handleToggleTheme} />
      <div className="container">
        <Home />
        <About />
        <Projects />
        <Resume />
        <Contact />
      </div>
      <Footer />
    </>
  );
}

export default App;
