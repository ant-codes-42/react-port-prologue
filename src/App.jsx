import './App.css'
import Header from './components/Header';
import Footer from './components/Footer';
import { Outlet } from 'react-router';
import React, { useEffect } from 'react';

function App() {

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      document.body.classList.remove('is-preload');
    }, 100);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <>
        <Header />
        <Outlet />
        <Footer />
    </>
  )
}

export default App
