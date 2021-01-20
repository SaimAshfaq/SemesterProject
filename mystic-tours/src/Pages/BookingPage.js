import React, { Component } from 'react';
import Bookings from '../Components/Bookings'
import NavBar from '../Components/NavBar'
class BookingPage extends Component {
    state = {  }
    render() { 
        return (
            <div className='bg-black'>
            <NavBar />
            <Bookings />
            </div>
        );
    }
}
 
export default BookingPage;