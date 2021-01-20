import React, { Component } from "react";
import qw from "../Images/Honda-city_2008.jpg";
import we from "../Images/Honda_Civic_Facelift_2019.jpg";
import er from "../Images/Toyota_Corolla_Facelift_2017__(3).jpg";
import rt from "../Images/Suzuki_Cultus_2017_(1).jpg";
import ty from "../Images/fortuner-trd.jpg";
import ui from "../Images/sportage-cover.jpg";
import io from "../Images/swift.jpg";
import op from "../Images/Toyota_Yaris_2019_phantom-brown1.jpg";

import ReactDOM from "react-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

class CarouselPage extends Component {
    
  componentDidMount() {
    setInterval(this.reload, 900000);
  }

  reload = () => {
    window.location.reload(true);
  };

  render() {

    const { height } = this.props;

    return (
      <Carousel className='container-fluid'
      
          autoPlay={true}
          showArrows={true}
          infiniteLoop={true}
          interval={2000}
          stopOnHover={true}
          showThumbs={false}
          showStatus={true}
          showIndicators={true}
        
      >
          <div className='img-fluid'>
              <img className='img-fluid' src={qw}></img>
              {/* <h1 className="carousel-caption">HONDA City</h1> */}
                {/* <div className='carousel-caption w-15 mb-5' style={{color:'black', fontSize:'12px'}}>                   
                        <h4 className='Outercont-Carousel'>
                        Name:<span className='Innercont-Carousel'><h5 className='d-inline-flex'> HONDA City</h5></span>
                        </h4>
                        <h4 className='Outercont-Carousel'>
                        Model:<span className='Innercont-Carousel'><h5 className='d-inline-flex' style={{fontStyle:'italic'}}> Oriel 2020</h5></span>
                        </h4>
                        <h4 className='Outercont-Carousel'>
                        Per Day Rent:<span className='Innercont-Carousel'><h5 className='d-inline-flex'> 7000</h5></span>
                        </h4>
                        <h4 className='Outercont-Carousel'>
                        Per KM Rent:<span className='Innercont-Carousel'><h5 className='d-inline-flex'> 60</h5></span>
                        </h4>               
                </div> */}
          </div>
          <div>
              <img className='img-fluid' src={we}/>
              {/* <div className='carousel-caption w-15 mb-5' style={{color:'black', fontSize:'12px'}}>                   
                       
                        <h4 className='Outercont-Carousel'>
                        Name:<span className='Innercont-Carousel'><h5 className='d-inline-flex'> HONDA Civic</h5></span>
                        </h4>
                        <h4 className='Outercont-Carousel'>
                        Model:<span className='Innercont-Carousel'><h5 className='d-inline-flex' style={{fontStyle:'italic'}}>Turbo Edition 2020</h5></span>
                        </h4>
                        <h4 className='Outercont-Carousel'>
                        Per Day Rent:<span className='Innercont-Carousel'><h5 className='d-inline-flex'> 8000</h5></span>
                        </h4>
                        <h4 className='Outercont-Carousel'>
                        Per KM Rent:<span className='Innercont-Carousel'><h5 className='d-inline-flex'> 70</h5></span>
                        </h4>               
                </div> */}
          </div>
          <div>
              <img className='img-fluid' src={er}/>
              {/* <div className='carousel-caption w-15 mb-5' style={{color:'black', fontSize:'12px'}}>                   
                       
                        <h4 className='Outercont-Carousel'>
                        Name:<span className='Innercont-Carousel'><h5 className='d-inline-flex'> TOYOTA Corolla</h5></span>
                        </h4>
                        <h4 className='Outercont-Carousel'>
                        Model:<span className='Innercont-Carousel'><h5 className='d-inline-flex' style={{fontStyle:'italic'}}> Grande 2020</h5></span>
                        </h4>
                        <h4 className='Outercont-Carousel'>
                        Per Day Rent:<span className='Innercont-Carousel'><h5 className='d-inline-flex'> 7500</h5></span>
                        </h4>
                        <h4 className='Outercont-Carousel'>
                        Per KM Rent:<span className='Innercont-Carousel'><h5 className='d-inline-flex'> 65</h5></span>
                        </h4>               
                </div> */}
          </div>
          <div>
              <img className='img-fluid' src={rt}/>
              {/* <div className='carousel-caption w-15 mb-5' style={{color:'black', fontSize:'12px'}}>                   
                       
                        <h4 className='Outercont-Carousel'>
                        Name:<span className='Innercont-Carousel'><h5 className='d-inline-flex'> SUZUKI Cultus</h5></span>
                        </h4>
                        <h4 className='Outercont-Carousel'>
                        Model:<span className='Innercont-Carousel'><h5 className='d-inline-flex' style={{fontStyle:'italic'}}> New Edition 2020</h5></span>
                        </h4>
                        <h4 className='Outercont-Carousel'>
                        Per Day Rent:<span className='Innercont-Carousel'><h5 className='d-inline-flex'> 4500</h5></span>
                        </h4>
                        <h4 className='Outercont-Carousel'>
                        Per KM Rent:<span className='Innercont-Carousel'><h5 className='d-inline-flex'> 40</h5></span>
                        </h4>               
                </div> */}
          </div>
          <div>
              <img className='img-fluid' src={ty}/>
              {/* <div className='carousel-caption w-15 mb-5' style={{color:'black', fontSize:'12px'}}>                   
                      
                        <h4 className='Outercont-Carousel'>
                        Name:<span className='Innercont-Carousel'><h5 className='d-inline-flex'> TOYOTA Fortuner</h5></span>
                        </h4>
                        <h4 className='Outercont-Carousel'>
                        Model:<span className='Innercont-Carousel'><h5 className='d-inline-flex' style={{fontStyle:'italic'}}>TX 2020</h5></span>
                        </h4>
                        <h4 className='Outercont-Carousel'>
                        Per Day Rent:<span className='Innercont-Carousel'><h5 className='d-inline-flex'> 9500</h5></span>
                        </h4>
                        <h4 className='Outercont-Carousel'>
                        Per KM Rent:<span className='Innercont-Carousel'><h5 className='d-inline-flex'> 80</h5></span>
                        </h4>               
                </div> */}
          </div>
          <div>
              <img className='img-fluid' src={ui}/>
              {/* <div className='carousel-caption w-15 mb-5' style={{color:'black', fontSize:'12px'}}>                   
                       
                        <h4 className='Outercont-Carousel'>
                        Name:<span className='Innercont-Carousel'><h5 className='d-inline-flex'>KIA Sportage</h5></span>
                        </h4>
                        <h4 className='Outercont-Carousel'>
                        Model:<span className='Innercont-Carousel'><h5 className='d-inline-flex' style={{fontStyle:'italic'}}> Sports Edition 2020</h5></span>
                        </h4>
                        <h4 className='Outercont-Carousel'>
                        Per Day Rent:<span className='Innercont-Carousel'><h5 className='d-inline-flex'> 10000</h5></span>
                        </h4>
                        <h4 className='Outercont-Carousel'>
                        Per KM Rent:<span className='Innercont-Carousel'><h5 className='d-inline-flex'> 80</h5></span>
                        </h4>               
                </div> */}
          </div>
          <div>
              <img className='img-fluid' src={io}/>
              {/* <div className='carousel-caption w-15 mb-5' style={{color:'black', fontSize:'12px'}}>                   
                      
                        <h4 className='Outercont-Carousel'>
                        Name:<span className='Innercont-Carousel'><h5 className='d-inline-flex'> SUZUKI Swift</h5></span>
                        </h4>
                        <h4 className='Outercont-Carousel'>
                        Model:<span className='Innercont-Carousel'><h5 className='d-inline-flex' style={{fontStyle:'italic'}}> Oriel 2020</h5></span>
                        </h4>
                        <h4 className='Outercont-Carousel'>
                        Per Day Rent:<span className='Innercont-Carousel'><h5 className='d-inline-flex'> 5000</h5></span>
                        </h4>
                        <h4 className='Outercont-Carousel'>
                        Per KM Rent:<span className='Innercont-Carousel'><h5 className='d-inline-flex'> 55</h5></span>
                        </h4>               
                </div> */}
          </div>
          <div>
              <img className='img-fluid' src={op}/>
              {/* <div className='carousel-caption w-15 mb-5' style={{color:'black', fontSize:'12px'}}>                   
                     
                        <h4 className='Outercont-Carousel'>
                        Name:<span className='Innercont-Carousel'><h5 className='d-inline-flex'> TOYOTA Yaris</h5></span>
                        </h4>
                        <h4 className='Outercont-Carousel'>
                        Model:<span className='Innercont-Carousel'><h5 className='d-inline-flex' style={{fontStyle:'italic'}}> New Edition 2021</h5></span>
                        </h4>
                        <h4 className='Outercont-Carousel'>
                        Per Day Rent:<span className='Innercont-Carousel'><h5 className='d-inline-flex'> 6000</h5></span>
                        </h4>
                        <h4 className='Outercont-Carousel'>
                        Per KM Rent:<span className='Innercont-Carousel'><h5 className='d-inline-flex'> 60</h5></span>
                        </h4>               
                </div> */}
              
          </div>
      </Carousel>
    //   <Carousel>
    //   <Carousel.Item>
    //     <img
    //       className="d-block w-100"
    //       src="holder.js/800x400?text=First slide&bg=373940"
    //       alt="First slide"
    //     />
    //     <Carousel.Caption>
    //       <h3>First slide label</h3>
    //       <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    //     </Carousel.Caption>
    //   </Carousel.Item>
    //   <Carousel.Item>
    //     <img
    //       className="d-block w-100"
    //       src="holder.js/800x400?text=Second slide&bg=282c34"
    //       alt="Third slide"
    //     />
    
    //     <Carousel.Caption>
    //       <h3>Second slide label</h3>
    //       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    //     </Carousel.Caption>
    //   </Carousel.Item>
    //   <Carousel.Item>
    //     <img
    //       className="d-block w-100"
    //       src="holder.js/800x400?text=Third slide&bg=20232a"
    //       alt="Third slide"
    //     />
    
    //     <Carousel.Caption>
    //       <h3>Third slide label</h3>
    //       <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    //     </Carousel.Caption>
    //   </Carousel.Item>
    // </Carousel>
    );
  }
}
export default CarouselPage;
