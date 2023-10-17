import React from 'react'
import { Link } from 'react-router-dom'

function Login() {
  return (
    <div className='container'>
        <form action="">
            <h1>Login</h1>
            <label htmlFor="email">
                email : <input type="email" id='email' />
            </label>
            <label htmlFor="password">
                password : <input type="text" id='password' />
            </label>
            <button type='submit'>Login</button>
        </form>
        <p>not a user ? <Link to={'/register'}>Register Here</Link></p>
    </div>
  )
}

export default Login