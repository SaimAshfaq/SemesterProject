import React,{ useState, useContext, Component } from 'react';
import {Formik, useFormik} from "formik";
import {Animated} from 'react-animated-css';
import * as emailValidator from "email-validator";
import bg from '../Images/New/john-towner-3Kv48NS4WUU-unsplash.jpg';
import * as Yup from "yup";
import avatar from '../Images/login_avatar.png';
import { useForm } from './form-hooks';
import {AuthContext} from './login-Context';
import "../Styles/loginForm.css"

const initialValues = {
  initialValues: {
    email:'',
    password:''
  }
}

// const onSubmit = event => {
//   //console.log(values)
//   event.preventDefault();
//   //console.log(formState.inputs);
//   /auth.login();
// }

// const validationSchema = Yup.object({
//     email: Yup.string()
//     .email('Invalid Email')
//     .required("A valid email is required"),
//     password: Yup.string()
//     .required("A valid password is required")
//     .min(8,"Password must be minimum 8 characters long.")
//   })

const validate = values => {
  let errors = {}

  if(!values.email) {
    errors.email = 'Required'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid Email Address'
  }

  if(!values.password) {
    errors.password = 'Required'
  }

  return errors;

}

const ValidatedLoginForm = () => {

  const formik = useFormik({
    initialValues,
    //onSubmit,
    validate
    // validationSchema
  })
  

   const auth = useContext(AuthContext);
  
  const [formState, inputHandler] = useForm(
    {

      email: {
        value: '',
        isValid: false
      },
      password: {
        value: '',
        isValid: false
      }
    },
    false
  );

  const formSubmitHandler = event => {
    event.preventDefault();
    console.log(formState.inputs);
    auth.login();
  };

  return (
    <div className='loginForm' style={{backgroundImage:`url(${bg})`, width:'100%', height: '80vh'}}>
    <div className='' style={{marginLeft:'120px'}}>
    <Formik
    //     initialValues={{email: "", password: ""}}
    //     onSubmit={formik.SubmitHandler}
       
    //     validationSchema = { Yup.object().shape({
    //       email: Yup.string()
    //       .email()
    //       .required("A valid email is required"),
    //       password: Yup.string()
    //       .required("A valid password is required")
    //       .min(8,"Password must be minimum 8 characters long.")
    //     })

    //     }
    >
    {
     
        props => {
            const {values, touched, errors, isSubmitting, handleChange, handleBlur, handleSubmit} = props;
            return (
    
        <form onSubmit={formSubmitHandler}>
         
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              
      <div className='signIn-form'>
          
    <Animated animationIn="fadeInLeft" animationOut="fadeOut" isVisible={true}>
      <img src={avatar} className='avatar'></img>
      <br></br>
      <h4 className='' style={{marginLeft:'50px',fontSize:'30px', fontWeight:'bolder', fontStyle:'normal', color:'cornflowerblue'}}>LOG IN REQUIRED</h4>
      <hr ></hr>
      <br></br>
        <label className='' style={{fontSize:'20px', fontWeight:'bold', fontStyle:'oblique', color:'cornflowerblue'}} htmlFor="email">Email</label>
      <input className='' style={{color:'whitesmoke'}}
        name="email"
        type="email"
        placeholder="Enter your email"
        value={formik.values.email}
        //onInput={inputHandler}       
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        className={errors.email && touched.email && "error"}
      />
      {/* {errors.email && touched.email &&(
          <div className='input-feedback'><br></br><h5>Must be a valid email</h5></div>
      )} */}
        {formik.errors.email && formik.touched.email ? <div className='input.error' style={{color:'yellow'}}>A valid email is required</div> : null}
      
      <label  className='' style={{fontSize:'20px', fontWeight:'bold', fontStyle:'oblique', color:'cornflowerblue'}} htmlFor="email">Password</label>
      <input className='' style={{color:'whitesmoke'}}
        name="password"
        type="password"
        placeholder="Enter your password"
        value={formik.values.password }
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
        //onInput={inputHandler}
        className={errors.password && touched.password && "error"}
      />
        <br></br> 
       {/* {errors.password && touched.password &&(
          <div className='input-feedback'><br></br>{errors.password}</div>
      )} */}
      {formik.errors.password && formik.touched.password ? <div className='error' style ={{color:'yellow'}}>Password must contain (a-z),(A-Z),(0-9) and special characters</div> : null}
        <br></br>
      
      <button className='' style={{marginLeft:'140px',fontSize:'20px', fontWeight:'bold', fontStyle:'normal'}} type="submit" disabled={(formik.touched.email || formik.errors.email || formik.touched.password || formik.setFieldTouched) && !formik.dirty}>
            Login
      </button>
      </Animated>
      </div>

        </form>
      );
    }} 

    </Formik>
    </div>
    </div>
    );
}

export default ValidatedLoginForm;