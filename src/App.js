import React from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Clients from './components/Clients';
import Products from './components/Products';
import About from './components/About';
import Location from './components/Location';
import Contact from './components/Contact';
import Reviews from './components/Reviews';
import { ToastContainer } from 'react-toastify';


const App = () => {
  return (
    <div>
      <Header/>
      <Main/>
      <Clients/>
      <Products/>
      <About/>
      {/* <Reviews/> */}
      <Location/>
      <Contact/>
      <ToastContainer/>
    </div>
  );
}

export default App;
