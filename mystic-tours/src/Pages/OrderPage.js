import React, { Component } from 'react';
import Showorders from '../Components/Showorders'
import NavBar from '../Components/NavBar'
class BookingPage extends Component {
    state = {  }
    render() { 
        return (
            <div className='bg-black'>
            <NavBar />
            <Showorders />
            </div>
        );
    }
}
 
export default BookingPage;