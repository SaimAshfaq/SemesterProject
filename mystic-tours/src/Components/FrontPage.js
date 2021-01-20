import React, { Component } from 'react';
import {Animated} from 'react-animated-css';
import A from '../Images/fpage1.jpg';
import {Carousel} from 'react-bootstrap';
class FrontPage extends Component {
    render() {
        return (
            <div className='Container'>
                
                <header>
                <Animated animationIn="fadeInLeft" animationOut="fadeOut" isVisible={true}>
                        <div>
                            <h1 className='ml-0 mb-3  float-left fpage'>
                                WELCOME <br/>
                                TO <br/> 
                                MYSTIC TOURS
                            </h1>
                        </div>
                <Animated /></Animated>
                
                </header>
            </div>
        )
    }
}

export default FrontPage;