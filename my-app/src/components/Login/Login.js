import React, { useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import axios from 'axios'

const Login = () => {

     const [email, setEmail] = useState()
     const [password, setPassword] = useState()

     const navigate = useNavigate()
     const formSubmit = (event) => {
        event.preventDefault();
        axios.post('http://localhost:3002/login', {email, password})
          .then(result => {
            console.log(result)
            if(result.data === "Success"){
              navigate('/h')
            }
          })
          .catch(err => console.log(err))
        }
        
    return (
        <div className='d-flex justify-content-center align-items-center bg-secondary vh-100'>
            <div className='bg-white p-3 rounded w-25'>
                 <h2>Login</h2>
                 <form onSubmit={formSubmit}>
                    <div className='mb-3'>
                        <label htmlFor='email'>
                            <strong>Email</strong>
                        </label>
                        <input onChange={(e) => setEmail(e.target.value)} type="email" placeholder='Enter Email' autoComplete='off' name="email" className='form-control rounded-0' />
                    </div>

                    <div className='mb-3'>
                        <label htmlFor='password'>
                            <strong>Password</strong>
                        </label>
                        <input onChange={(e) => setPassword(e.target.value)} type="password" placeholder='Enter Password' autoComplete='off' name="password" className='form-control rounded-0' />
                    </div>
                  <button type='submit' className='btn btn-success w-100 rounded-0'>Login</button>
                  
                 </form>
                 <p>Not having an Account </p>
                 <Link to="/register" className='btn btn-default border w-100 bg-light rounded-0 text-decoration-none'>
                   Register
                 </Link>
            </div>
        </div>
    )
}

export default Login