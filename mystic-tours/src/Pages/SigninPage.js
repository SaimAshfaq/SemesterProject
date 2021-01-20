import React, { Component } from 'react';
import ValidatedLoginForm from '../Components/ValidatedLoginForm'
import NavBar from '../Components/NavBar'
class BookingPage extends Component {
    state = {  }
    render() { 
        return (
            <div>
            <NavBar />
            <ValidatedLoginForm />
            </div>
        );
    }
}
 
export default BookingPage;