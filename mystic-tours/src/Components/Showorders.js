import React, { Component, useState } from 'react';
import axios from 'axios';
import img from '../Images/orderData.jpg';

const Showorders = () => {
    

    const fetchedData = {
        carName: '',
        daysCount: '',
        perDayRent: '',
        totalRent: '',
    }

    const [carName, setCarName] = useState();
    const [daysCount, setDaysCount] = useState();
    const [perDayRent, setPerDayRent] = useState();
    const [totalRent, setTotalRent] = useState();

    const getOrderData = async ()=>{
        let getData;
        let orderData = await axios.get('http://localhost:5000/api/orders/')
        .then(response=>{
            // console.log(response);
            getData = response.data.orders[response.data.orders.length-1];
            // console.log(response[response.length-1]);
            console.log(getData);
            setCarName(getData.name);
            setDaysCount(getData.days);
            setPerDayRent(getData.price);
            setTotalRent(getData.totalRent);
            console.log(carName);
        })
    };


    getOrderData();

        return (
            <React.Fragment>
                <div className='orderData' style={{ width:'100vw',height:'75vh'}}>
                    <br></br>
                    <h2 className ='orderHeader' style={{marginLeft:'430px',fontSize:'40px',fontFamily:'sans-serif',fontStyle:'oblique', color: 'green'}}>Order Placed Successfully!</h2>
                    <hr></hr>
                    <br></br>
                    <br></br>
                    {/* <h4>Car Name: {carName}</h4> */}
                    <h5 className='orderC1' style={{color:'white'}}>
                            CAR NAME:<span className='orderC2'><h4 className='d-inline-flex'> {carName}</h4></span>
                    </h5><hr></hr>
                    <h5 className='orderC1'>
                            Renting For:<span className='orderC2'><h4 className='d-inline-flex'> {daysCount} days</h4></span>
                    </h5><hr></hr>
                    <h5 className='orderC1'>
                            Per Day RENT:<span className='orderC2'><h4 className='d-inline-flex'> {perDayRent}</h4></span>
                    </h5><hr></hr>
                    <h5 className='orderC1'>
                            TOTAL BILL:<span className='orderC2'><h4 className='d-inline-flex'> {totalRent}</h4></span>
                    </h5><hr></hr>
                    {/* <a ref=''>Return to home page</a> */}
                </div>
            </React.Fragment>
                 
        );
}
 
export default Showorders;