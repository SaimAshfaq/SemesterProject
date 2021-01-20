import React, { Component } from 'react';
import {Animated} from 'react-animated-css';
import {Carousel} from 'react-bootstrap';
import cont from '../Images/contact-us.jpg';
import NavBar from './NavBar';
class About extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
               <NavBar/>
                <div className='AboutPage'>
                 <Animated animationIn="fadeInDown" animationOut="fadeOut" isVisible={true}>
                    <div className='d-inline-flex m-5 pt-5 pl-5 w-100'>
                        <h5 className='Outercont m-5 pl-5 text-white-50 '>
                            Email: <span className='Innercont'><h5 className='d-inline-flex'>abc@gmail.com</h5></span> 
                        </h5>
                        <h5 className='Outercont m-5 pl-5 text-white-50'>
                            Contact No: <span className='Innercont'><h5 className='d-inline-flex'>0423-5435321</h5></span> 
                        </h5>
                        <h5 className='Outercont m-5 pl-5 text-white-50'>
                            Whatsapp: <span className='Innercont'><h5 className='d-inline-flex'>0331-3245324</h5></span> 
                        </h5>
                        <h5 className='Outercont m-5 pl-5 text-white-50'>
                            PostalAddress: <span className='Innercont'><h5 className='d-inline-flex'>House#1, Street#2,MT,Lahore</h5></span> 
                        </h5>
                    </div>
                 </Animated>
                </div>
            </div>
         
           
        );
    }
}
 
export default About;