import React, { Component,useState } from 'react';
import img from '../Images/bookings.jpg';
import {Animated} from "react-animated-css";
import DatePicker from 'react-datepicker';
import axios from 'axios';
import { Link } from 'react-router-dom';
import 'react-datepicker/dist/react-datepicker.css'
import { Form, Col, Button } from "react-bootstrap";

class Bookings extends React.Component {

  constructor(props) {
    super(props);
    this.state = {name: '',carname:'',days:'',address:'', trig: false};

    this.handleChange = this.handleChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
  }

  // state = {
  //   carName: '',
  //   orders: [],
  // }

  // componentDidMount = () => {
  //   this.getOrderData();
  // };

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
          <div className='bookings' style={{backgroundImage:`url(${img})`, width:'100vw',height:'90vh' }}>
          <Animated animationIn="bounceInLeft" animationOut="fadeOut" isVisible={true}>
          <div className = 'form'>
            <div className=''>
                     <br></br>
                         <Form.Group controlId="formBasicCarType">
                             <Form.Label style={{color:'white', fontSize:'15px'}}>Car Model</Form.Label>
                             <Form.Control onChange={(e) => {this.setState({carname: e.target.value})}} id='cName' type="text" name="carName"  placeholder="" as="select" style ={{backgroundColor:'black',color:'whitesmoke'}} custom>
                               
                                    <option>KIA Sportage</option>
                                     <option>TOYOTA Fortuner</option>
                                     <option>HONDA City</option>
                                     <option>HONDA Civic</option>
                                     <option>TOYOTA Corolla</option>
                                     <option>TOYOTA Yaris</option>
                                     <option>SUZUKI Swift</option>
                                     <option>SUZUKI Cultus</option>
                             
                             </Form.Control>

                             <Form.Text className="text-muted" style={{fontStyle:'italic',fontSize:'12px'}}>
                             This field is mandatory.
                             </Form.Text>
                         </Form.Group>
                     </div>
                     <Form.Group controlId="daysCount">
                            <Form.Label style={{color:'white', fontSize:'15px'}}>No. of Days(For Rent)</Form.Label>
                            <Form.Control onChange={(e) => {this.setState({days: e.target.value})}} type="number" name="days" placeholder="e.g. 1,2,3"  style={{color:'white'}} />
                        
                            <Form.Text className="text-muted" style={{fontStyle:'italic',fontSize:'12px'}} >
                            This field is mandatory.
                            </Form.Text>
                        </Form.Group>
                        
                        
                        <Form.Group controlId="formBasicName">
                            <Form.Label  style={{color:'white', fontSize:'15px'}}>Name</Form.Label>
                            <Form.Control onChange={(e) => {this.setState({name: e.target.value})}} type="text" name="clientName"  placeholder="e.g. Saim Ashfaq"  style={{color:'white'}} />
                            
                        </Form.Group>

                        <Form.Group controlId="formBasicName">
                            <Form.Label  style={{color:'white', fontSize:'15px'}}>Address</Form.Label>
                            <Form.Control onChange={(e) => {this.setState({address: e.target.value})}} type="text" name="address"  placeholder="e.g. H#2,Street#1,MT,Lahore"  style={{color:'white'}}/>
                            
                        </Form.Group>

              <br></br>          
        {this.state.trig && <Link to='/orderInfo'>
          <button className='mr-2' >View Receipt</button>
        </Link>}
       
        <input className='button' type="submit" value="Submit" onClick={(event)=>{
            
            event.preventDefault();
            const fetchedCar=()=>{
    
           
        let name = axios.get('http://localhost:5000/api/products/')
        .then(response=>{
            let nameA;
            nameA=response;
        // console.log(response);
        let carName;
        console.log(this.state.carname)
        console.log(response)
        let selectedCar;
        // carName = response.data.products.filter(car => car.name == this.state.carname)
        let cars=response.data.products;
        cars.forEach((car) =>{
         if(car.name===this.state.carname){
             selectedCar=car;  
         }   
        });
        if(selectedCar.descriptionRegardingAvailability===false){
            alert("Car is already booked.")
        }else{
        const order = {
            name: selectedCar.name,
            days: this.state.days,
            productId: selectedCar._id   
        }

        axios.post('http://localhost:5000/api/orders/', order);
        
    

    }
       
    })}

    fetchedCar();

        const trig = true;           
            this.setState({trig});
            console.log(this.state.trig);

        }} />
        {/* </Link> */}
        </div>
        </Animated>
      </div>
      </form>
    );
  }
}

 
export default Bookings;