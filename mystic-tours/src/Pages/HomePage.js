import React, { Component } from 'react';
import NavBar from '../Components/NavBar';
import FrontPage from '../Components/FrontPage'
import Slider from '../Components/Slider'
import Footer from '../Components/Footer'
import ValidatedLoginForm from '../Components/ValidatedLoginForm';
import CarouselPage from '../Components/CarouselPage';

class HomePage extends Component {
    state = {  }
    render() { 
        return ( 
            <div className='bg-black'><NavBar />
                <FrontPage />
                <CarouselPage />
            </div>
        );
    }
}
 
export default HomePage ;