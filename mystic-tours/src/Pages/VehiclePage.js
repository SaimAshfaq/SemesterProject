import React, { Component } from 'react';
import NavBar from '../Components/NavBar';
import Vehicles from '../Components/Vehicles'
import Footer from '../Components/Footer'
class VehiclePage extends Component {
    state = {  }
    render() { 
        return ( 
            <div><NavBar />
            <Vehicles />
            </div>
        );
    }
}
 
export default VehiclePage;