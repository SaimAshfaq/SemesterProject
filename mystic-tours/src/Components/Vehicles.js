import React, { Component } from 'react';
import {Animated} from 'react-animated-css';
import q from '../Images/Honda-city_2008.jpg';
import w from '../Images/Honda_Civic_Facelift_2019.jpg';
import e from '../Images/Toyota_Corolla_Facelift_2017__(3).jpg';
import r from '../Images/Suzuki_Cultus_2017_(1).jpg';
import t from '../Images/fortuner-trd.jpg';
import companies from '../Images/Partner Companies.PNG';
import u from '../Images/sportage-cover.jpg';
import i from '../Images/swift.jpg';
import o from '../Images/Toyota_Yaris_2019_phantom-brown1.jpg';
class Vehicles extends Component {
    state = {  }
    render() { 
        return ( 
            <React.Fragment>
            <Animated animationIn='fadeInRight' animationOut="fadeOut" isVisible={true}>
            <div className='vehicles'>
                
                    <div className='outerDiv w-100'>
                        <div className='vehicleImage w-60 float-left'>                  
                            <img src={u}></img>
                        </div>
                        
                        <div className='vehicleInfo w-25 float-right mt-5'>                   
                            <h4 className='Outercont'>
                            Company Name:<span className='Innercont'><h5 className='d-inline-flex'> KIA</h5></span>
                            </h4>
                            <h4 className='Outercont'>
                            Model Name:<span className='Innercont'><h5 className='d-inline-flex'> KIA Sportage</h5></span>
                            </h4>
                            <h4 className='Outercont'>
                            Model:<span className='Innercont'><h5 className='d-inline-flex' style={{fontStyle:'italic'}}> Sports Edition 2020</h5></span>
                            </h4>
                            <h4 className='Outercont'>
                            Per Day Rent:<span className='Innercont'><h5 className='d-inline-flex'> 10000</h5></span>
                            </h4>
                            <h4 className='Outercont'>
                            Per KM Rent:<span className='Innercont'><h5 className='d-inline-flex'> 80</h5></span>
                            </h4>                 
                        </div>
                    </div>
                    <div className='outerDiv w-100'>
                    
                        <div className='vehicleImage w-60 float-left '>
                            <img src={t}></img>
                        </div>
                        <div className='vehicleInfo w-25 float-right mt-5'>                   
                            <h4 className='Outercont'>
                            Company Name:<span className='Innercont'><h5 className='d-inline-flex'> TOYOTA</h5></span>
                            </h4>
                            <h4 className='Outercont'>
                            Model Name:<span className='Innercont'><h5 className='d-inline-flex'> TOYOTA Fortuner</h5></span>
                            </h4>
                            <h4 className='Outercont'>
                            Model:<span className='Innercont'><h5 className='d-inline-flex' style={{fontStyle:'italic'}}>New Edition 2020</h5></span>
                            </h4>
                            <h4 className='Outercont'>
                            Per Day Rent:<span className='Innercont'><h5 className='d-inline-flex'> 9500</h5></span>
                            </h4>
                            <h4 className='Outercont'>
                            Per KM Rent:<span className='Innercont'><h5 className='d-inline-flex'> 80</h5></span>
                            </h4>               
                        </div>
                    </div>
                    
               
                    <div className='outerDiv w-100'>
                        <div className='vehicleImage w-60 float-left '>
                            <img src={q}></img>
                        </div>
                        <div className='vehicleInfo w-25 float-right mt-5'>                   
                            <h4 className='Outercont'>
                            Company Name:<span className='Innercont'><h5 className='d-inline-flex'> HONDA</h5></span>
                            </h4>
                            <h4 className='Outercont'>
                            Model Name:<span className='Innercont'><h5 className='d-inline-flex'> HONDA City</h5></span>
                            </h4>
                            <h4 className='Outercont'>
                            Model:<span className='Innercont'><h5 className='d-inline-flex' style={{fontStyle:'italic'}}> Oriel 2020</h5></span>
                            </h4>
                            <h4 className='Outercont'>
                            Per Day Rent:<span className='Innercont'><h5 className='d-inline-flex'> 7000</h5></span>
                            </h4>
                            <h4 className='Outercont'>
                            Per KM Rent:<span className='Innercont'><h5 className='d-inline-flex'> 60</h5></span>
                            </h4>               
                        </div>
                    </div>


                    <div className='outerDiv w-100'>
                        <div className='vehicleImage w-60 float-left '>
                            <img src={w}></img>
                        </div>
                        <div className='vehicleInfo w-25 float-right mt-5'>                   
                            <h4 className='Outercont'>
                            Company Name:<span className='Innercont'><h5 className='d-inline-flex'> HONDA</h5></span>
                            </h4>
                            <h4 className='Outercont'>
                            Model Name:<span className='Innercont'><h5 className='d-inline-flex'> HONDA Civic</h5></span>
                            </h4>
                            <h4 className='Outercont'>
                            Model:<span className='Innercont'><h5 className='d-inline-flex' style={{fontStyle:'italic'}}> Turbo Edition 2020</h5></span>
                            </h4>
                            <h4 className='Outercont'>
                            Per Day Rent:<span className='Innercont'><h5 className='d-inline-flex'> 8000</h5></span>
                            </h4>
                            <h4 className='Outercont'>
                            Per KM Rent:<span className='Innercont'><h5 className='d-inline-flex'> 70</h5></span>
                            </h4>               
                        </div>
                    </div>

                    <div className='outerDiv w-100'>
                        <div className='vehicleImage w-60 float-left '>
                            <img src={e}></img>
                        </div>
                        <div className='vehicleInfo w-25 float-right mt-5'>                   
                            <h4 className='Outercont'>
                            Company Name:<span className='Innercont'><h5 className='d-inline-flex'> TOYOTA</h5></span>
                            </h4>
                            <h4 className='Outercont'>
                            Model Name:<span className='Innercont'><h5 className='d-inline-flex'> TOYOTA Corolla</h5></span>
                            </h4>
                            <h4 className='Outercont'>
                            Model:<span className='Innercont'><h5 className='d-inline-flex' style={{fontStyle:'italic'}}> Grande 2020</h5></span>
                            </h4>
                            <h4 className='Outercont'>
                            Per Day Rent:<span className='Innercont'><h5 className='d-inline-flex'> 7500</h5></span>
                            </h4>
                            <h4 className='Outercont'>
                            Per KM Rent:<span className='Innercont'><h5 className='d-inline-flex'> 65</h5></span>
                            </h4>               
                        </div>
                    </div>

                    <div className='outerDiv w-100'>
                        <div className='vehicleImage w-60 float-left '>
                            <img src={o}></img>
                        </div>
                        <div className='vehicleInfo w-25 float-right mt-5'>                   
                            <h4 className='Outercont'>
                            Company Name:<span className='Innercont'><h5 className='d-inline-flex'> TOYOTA</h5></span>
                            </h4>
                            <h4 className='Outercont'>
                            Model Name:<span className='Innercont'><h5 className='d-inline-flex'> TOYOTA Yaris</h5></span>
                            </h4>
                            <h4 className='Outercont'>
                            Model:<span className='Innercont'><h5 className='d-inline-flex' style={{fontStyle:'italic'}}> New Edition 2020</h5></span>
                            </h4>
                            <h4 className='Outercont'>
                            Per Day Rent:<span className='Innercont'><h5 className='d-inline-flex'> 6000</h5></span>
                            </h4>
                            <h4 className='Outercont'>
                            Per KM Rent:<span className='Innercont'><h5 className='d-inline-flex'> 60</h5></span>
                            </h4>               
                        </div>
                    </div>

                    <div className='outerDiv w-100'>
                        <div className='vehicleImage w-60 float-left '>
                            <img src={i}></img>
                        </div>
                        <div className='vehicleInfo w-25 float-right mt-5'>                   
                            <h4 className='Outercont'>
                            Company Name:<span className='Innercont'><h5 className='d-inline-flex'> SUZUKI</h5></span>
                            </h4>
                            <h4 className='Outercont'>
                            Model Name:<span className='Innercont'><h5 className='d-inline-flex'> SUZUKI Swift</h5></span>
                            </h4>
                            <h4 className='Outercont'>
                            Model:<span className='Innercont'><h5 className='d-inline-flex' style={{fontStyle:'italic'}}> Oriel 2020</h5></span>
                            </h4>
                            <h4 className='Outercont'>
                            Per Day Rent:<span className='Innercont'><h5 className='d-inline-flex'> 5000</h5></span>
                            </h4>
                            <h4 className='Outercont'>
                            Per KM Rent:<span className='Innercont'><h5 className='d-inline-flex'> 55</h5></span>
                            </h4>               
                        </div>
                    </div>

                    <div className='outerDiv w-100'>
                        <div className='vehicleImage w-60 float-left '>
                            <img src={r}></img>
                        </div>
                        <div className='vehicleInfo w-25 float-right mt-5'>                   
                            <h4 className='Outercont'>
                            Company Name:<span className='Innercont'><h5 className='d-inline-flex'> SUZUKI</h5></span>
                            </h4>
                            <h4 className='Outercont'>
                            Model Name:<span className='Innercont'><h5 className='d-inline-flex'> SUZUKI Cultus</h5></span>
                            </h4>
                            <h4 className='Outercont'>
                            Model:<span className='Innercont'><h5 className='d-inline-flex' style={{fontStyle:'italic'}}>New Edition 2020</h5></span>
                            </h4>
                            <h4 className='Outercont'>
                            Per Day Rent:<span className='Innercont'><h5 className='d-inline-flex'> 4500</h5></span>
                            </h4>
                            <h4 className='Outercont'>
                            Per KM Rent:<span className='Innercont'><h5 className='d-inline-flex'> 40</h5></span>
                            </h4>               
                        </div>
                    </div>

                <div>
                    <img src={companies}></img>
                </div>
                
            </div>
            </Animated>
            </React.Fragment>
         );
    }
}
 
export default Vehicles;