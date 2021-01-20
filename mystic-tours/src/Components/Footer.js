import React, { Component } from 'react';
import fb from '../Images/fblogo.png';
import Twitter from '../Images/twitterlogo.png';
import Insta from '../Images/instalogo.png'

class Footer extends Component {
    state = {  }
    render() { 
        return ( 
            <React.Fragment>
            
            <div className="Footer bg-black">
                <div className='map float-right mt-3'>
                    <iframe className='ml-3' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1984.5954945502285!2d74.2940644691834!3d31.481154634207854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xa08ca6bb0ddb1885!2sCapital%20car%20rent%20(pvt)%20ltd!5e0!3m2!1sen!2s!4v1608527082320!5m2!1sen!2s" width={1350} height={350} frameBorder={0} style={{border: 0}} allowFullScreen aria-hidden="false" tabIndex={0} />
                </div>
                
                <div className='mb-5'>
                    <div className='d-inline-flex float-right justify-content-center '>
                        {/* <h4 className='mt-3 mr-1'>Facebook</h4> */}
                        <img className='social' src={fb} alt=""/>
                        
                        {/* <h4 className='mt-3 mr-4'>Twitter  </h4> */}
                        <img className='social' src={Twitter} alt=""/>
                        
                        {/* <h4 className='mt-3'>Instagram</h4> */}
                        <img className='social' src={Insta} alt=""/>
                        
                    </div>
                    <div className='justify-content-center'>
                        <h6 className='text-center'>@2020 Copyright © MYSTIC TOURS</h6>
                        <h6 className='text-center'> All right reserved. PRIVACY | Terms and Conditions </h6>
                    </div>
                </div>

            </div>
            </React.Fragment>
         );
    }
}
 
export default Footer;