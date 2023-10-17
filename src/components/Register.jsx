import React from 'react'
import { Link } from 'react-router-dom'

function Register() {
  return (
    <div className='container'>
        <form action="">
            <h1>Register Here</h1>
            <label htmlFor="name">
                Name : <input type="text" id='name' />
            </label>
            <label htmlFor="email">
                Email : <input type="email" id='email' />
            </label>
            <label htmlFor="password">
                Password : <input type="text" id='password'/>
            </label>
            <button type='submit'>Register</button>
        </form>
        <p>all ready have an account ? <Link to={'/'}>Login Here</Link></p>
    </div>
  )
}

export default Register