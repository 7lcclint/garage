import { useState } from 'react'
import './LoginPage.css'
import {Link, useNavigate} from 'react-router-dom'
import Validation from '../../../api-gateway/LoginValidation'
import 'whatwg-fetch';

function Login() {
  const  navigateTo = useNavigate();
  const [values, setValues] = useState({
    fname: '',
    lname: '',
    email: '',
    password: ''
  })
 
  const [errors, setErrors] = useState({})

  const handleInput = (event) => {
    setValues(prev => ({...prev, [event.target.name]: [event.target.value]}))
    console.log(values)
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    setErrors(Validation(values));

    try{
      const response = await fetch('http://localhost:3456/logedIn',{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values)
      });
      if(response.ok){
        const getData = await response.json();
        window.localStorage.setItem("isLoggedIn",true);
        console.log(values.email,values.fname,values.lname);
        console.log(getData)
        console.log('Login successful');
        navigateTo('/user/:accountsettings');
      }else{
        const errorData = await response.json();
        console.log(errorData)
        console.log("Login failed");
      }
    } catch (error) {
      console.log('An error occurred:', error);
    }
  }

  return (
    <div className='d-flex justify-content-center align-items-center bg-primary vh-100'>
      <div className='bg-white p-3 rounded w-25'>
      <h2>Sign In</h2>
        <form action="" onSubmit={handleSubmit}>
          <div className='mb-3'>
            <label htmlFor="email"><strong>Email</strong></label>
            <input type="email" placeholder='Enter Email' name='email'
            onChange={handleInput} className='form-control rounded-0'/>
            {errors.email && <span className='text-danger'>{errors.email}</span>}
          </div>
          <div className='mb-3'>
            <label htmlFor="password"><strong>Password</strong></label>
            <input type="password" placeholder='Enter password' name='password'
            onChange={handleInput} className='form-control rounded-0'/>
            {errors.password && <span className='text-danger'>{errors.password}</span>}
          </div>
          <button type='submit' className='btn btn-success w-100 rounded-0'>Login</button>
          <p>You are agree to your terms and  policies </p>
          <Link to="/signup" className='btn btn-default border w-100 bg-light rounded-0'>Create Account</Link>
        </form>
      </div>
    </div>
  )
}

export default Login