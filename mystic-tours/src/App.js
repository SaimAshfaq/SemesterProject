import React, {Component, useState, useCallback} from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import NavBar from './Components/NavBar';
import FrontPage from './Components/FrontPage';
import Footer from './Components/Footer';
import Home from './Components/Home';
import Vehicles from './Components/Vehicles';
import VehiclePage from './Pages/VehiclePage';
import Showorders from './Components/Showorders';
import OrderPage from './Pages/OrderPage';
import SigninPage from './Pages/SigninPage';
import Bookings from './Components/Bookings';
import About from './Components/About';
import AboutPage from './Pages/AboutPage'
import BookingPage from './Pages/BookingPage'
import HomePage from './Pages/HomePage';
import { AuthContext } from './Components/login-Context'
import "./Styles/style.css";
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';

// const mongoose = require('mongoose');
// const express = require('express');

const App = () => {

  // mongoose.connect('mongodb+srv://SaimAshfaq:lithotripsy@carrentalapp.srkn1.mongodb.net/<dbname>?retryWrites=true&w=majority', 
  // { useNewUrlParser: true },
  // () =>
  //   console.log('Connected')
  // );

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const login = useCallback(() => {
    setIsLoggedIn(true);
  }, []);

  const logout = useCallback(() => {
    setIsLoggedIn(false);
  }, []);

  let routes;

  if (isLoggedIn) {
    routes = (
      <Switch>
        <Route path='/' component={HomePage} exact/>
        <Route path='/Vehicles' component={VehiclePage}/>
        <Route path='/Bookings' component={BookingPage}/>
        <Route path='/About' component={AboutPage}/>
        <Route path='/OrderInfo' component={OrderPage}/>
        <Redirect to="/" />
      </Switch>
    );
  } else {
    routes = (
      <Switch>
       <Route path='/' component={HomePage} exact/>
        <Route path='/Vehicles' component={VehiclePage}/>
        <Route path='/About' component={AboutPage}/> 
        <Route path='/ValidatedLoginForm' component={SigninPage}/>
        <Redirect to="/ValidatedLoginForm" />
      </Switch>
    );
  }
  
  return (
       <div>
    
        <AuthContext.Provider value={{ isLoggedIn: isLoggedIn, login: login, logout: logout }}>
        {/* <Switch>
        <Route path='/' component={HomePage} exact/>
        <Route path='/Vehicles' component={VehiclePage}/>
        <Route path='/Bookings' component={BookingPage}/>
        <Route path='/About' component={AboutPage}/>  
        <Route path='/ValidatedLoginForm' component={SigninPage}/>
        </Switch> */}
        {routes}
        </AuthContext.Provider>
      {/* </div> */}
    {/* </BrowserRouter> */}
      <Footer />
      </div> 
  );
}
export default App;
