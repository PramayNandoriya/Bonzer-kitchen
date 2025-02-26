import React from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Clients from './components/Clients';
import Products from './components/Products';
import About from './components/About';
import Location from './components/Location';
import Contact from './components/Contact';
import { ToastContainer } from 'react-toastify';
import { BrowserRouter as Router } from 'react-router-dom';


const App = () => {
  const key=process.env.REACT_APP_KEY
  return (
    <div>
          <Router>

      <Header/>
      <Main/>
      <Clients/>
      <Products/>
      <About/>
      {/* <Reviews/> */}
      <Location/>
      <Contact contact_key={key}/>
      <ToastContainer/>
      </Router>

    </div>
  );
}

export default App;
