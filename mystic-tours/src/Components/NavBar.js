import React, { useContext } from 'react';
import {AuthContext} from './login-Context';
import {Animated} from 'react-animated-css';
import { Link,Navlink } from 'react-router-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import CR from '../Images/logov2.png'
import {useHistory} from 'react-router-dom'

export default function NavBar (){

        const context = useContext(AuthContext)
   
        const history=useHistory()
        return (
            <Animated animationIn="fadeInDown" animationOut="fadeOut" isVisible={true}>
            <div className='navClass w-100 d-sm-inline-flex bg-black shadow-lg sticky-top'>
                <img className='w-25' src={CR}></img>
                <div className='d-sm-inline-flex items'>
                    <h2 className='m-5 text-light'>
                        <h2 onClick={()=>history.push('/')}>Home</h2>
                    </h2>
                    <h2 className='m-5 text-light'>
                        <h2 onClick={()=>history.push('/Vehicles')}>Vehicles</h2>
                    </h2>
                    {context.isLoggedIn && (
                    <h2 className='m-5 text-light'>
                        <h2  onClick={()=>history.push('/Bookings')}>Bookings</h2> 
                    </h2>)}
                    <h2 className='m-5 text-light'>     
                        <h2 onClick={()=>history.push('/About')}>About</h2>
                    </h2>
                </div>
                <div>
                    {!context.isLoggedIn && (
                    <h5 className='btn btn-success text-light m-5 h-25 w-55'>
                        <h5 onClick={()=>history.push('/ValidatedLoginForm')}>Sign In</h5>
                    </h5>)}
                </div>
                    
                 <div>   
                    {context.isLoggedIn && (
                    <h5 className='btn btn-success text-light m-5 h-25 w-55'>
                        <h6 className='' style={{fontSize: 'bold'}} onClick={context.logout}>Log Out</h6>

                    </h5>)}

                </div>
            </div>
            </Animated>
      
         );
    }

 