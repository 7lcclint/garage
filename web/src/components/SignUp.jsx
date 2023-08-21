import {Link, useNavigate } from 'react-router-dom'
import Validation from '../../../api-gateway/SignUpValidation'
import { useState } from 'react'


function SignUp() {

  const  navigateTo = useNavigate();
  const [values, setValues] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  })
  const [errors, setErrors] = useState({})

  const handleInput = (event) => {
    setValues(prev => ({...prev, [event.target.name]: [event.target.value]}))
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    setErrors(Validation(values));

    try{
      const response = await fetch('http://localhost:3456/register',{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(values)
      });
      if(response.ok){
        console.log("Register successful")
        navigateTo('/login')
      }else{
        const errorData = await response.json();
        console.log(errorData)
      }
    } catch (error) {
      console.log('An error occurred:', error);
    }
  }

  return (
    <div className='d-flex justify-content-center align-items-center bg-secondary vh-100'>
      <div className='bg-white p-3 rounded w-25'>
        <h2>Sign Up</h2>
        <form action="" onSubmit={handleSubmit}>
          <div className='mb-3'>
            <label htmlFor="name"><strong>First Name</strong></label>
            <input type="text" placeholder='Enter First Name' name='fname'
            onChange={handleInput} className='form-control rounded-1'/>
            {errors.firstName && <span className='text-danger'>{errors.firstName}</span>}
          </div>
          <div className='mb-3'>
            <label htmlFor="name"><strong>Last Name</strong></label>
            <input type="text" placeholder='Enter Last Name' name='lname'
            onChange={handleInput} className='form-control rounded-1'/>
            {errors.lastName && <span className='text-danger'>{errors.lastName}</span>}
          </div>
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
          <button type='submit' className='btn btn-success w-100 rounded-0'>Sign Up</button>
          <p>You are agree to your terms and  policies </p>
          <Link to="/login" className='btn btn-default border w-100 bg-light rounded-0'>Login</Link>
        </form>
      </div>
    </div>
  )
}

export default SignUp
