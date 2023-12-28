import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


// COMPONENTS
import Navbar from './components/homepage/navbar';
import Corousal from './components/homepage/corousal';
import Faqs from "./components/homepage/faqs"
import Cards from './components/homepage/cards';
import About from './components/About/About';
import Form from './components/Contact/Form';
import Footer from './components/homepage/footer';
import Login from './components/authentication/Login'
import Signup from './components/authentication/Signup';
// import First from './components/paymentgtwy/first';
import Psuccess from './components/paymentgtwy/Psuccess';
import Plans from './components/plans/Plans';
import Sec1 from './components/homepage/Sec1';
import Home from './components/cart/Home';
import Cart from './components/cart/Cart';
import Allott from './components/authentication/Allott';
import Amazon from './components/cart/Amazon';
import Hotstar from './components/cart/Hotstar';

const App = () => {
  return (
    <>

      <Router>
        <Routes>
          <Route path="/" element={
            <>
              <Navbar />
              <div className='corsan'>
                <Corousal />
              </div>

              <div className='cardHeading'>
                <Cards />
              </div>
              <div>
                <Sec1 />
              </div>
              <div>
                <Faqs />
              </div>
              <div>
                <Footer />
              </div>
            </>
          }></Route>
          <Route path="/register" element={<Signup />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Form />} />
          <Route path="/login" element={<Login />} />
          {/* <Route path="/pay" element={<First/>} /> */}
          <Route path="/paymentsuccess" element={<Psuccess />} />
          <Route path="/plans" element={<Plans />} />
          <Route path="/netflix" element={<Home />} />
          <Route path="/amazon" element={<Amazon />} />
          <Route path="/hotstar" element={<Hotstar />} />
          <Route path="/cart" exact element={<Cart />} />
          <Route path='/ott' element={<Allott />} />
        </Routes>
      </Router>
    </>
  )
}

export default App;
