import React from 'react'
import './index.css'
import {Link} from 'react-router-dom'

function Welcome() {
  return (
    <div className='main-container'>
      <h2>Welcome to Banking Information Management</h2> 
      <div className='navigation-container'>
        <div className='inner-container'>
          <Link to='/h'><h3>Admin Panel</h3> </Link> 
        </div>
        <div className='inner-container'>
           <Link to='/login'> <h3>User Panel</h3> </Link>
        </div>
      </div>
    </div>
  )
}

export default Welcome
