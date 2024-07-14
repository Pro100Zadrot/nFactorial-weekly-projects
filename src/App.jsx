import React, { useEffect } from 'react';
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: document.querySelector('[data-scroll-container]'),
      smooth: true,
      direction: 'vertical',
      gestureDirection: 'both',
      reloadOnContextChange: true,
    });

    const handleScroll = () => {
      scroll.update();
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      if (scroll) scroll.destroy();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div data-scroll-container>
      <Header />
      <div className="main-content">
        <section id="home"><Home /></section>
      </div>
      <Footer />
    </div>
  );
}

export default App;
