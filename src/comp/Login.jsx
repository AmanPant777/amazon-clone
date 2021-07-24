import React, { useState } from 'react'
import './Login.css'
const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    return (
        <div className="login">
            <img src="/images/amazonlogo.png" alt="" className="login_logo" />
            <div className="login_container">
                <h1>Sign In</h1>
                <form >
                    <h5>Email</h5>
                    <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <h5>Password</h5>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    <button type='submit'>Sign In</button>
                </form>
                <p>Amazon.in: Online Shopping India - Buy mobiles, laptops, cameras, books, watches, apparel, shoes and e-Gift Cards.</p>
                <button>Create Your Account</button>
            </div>
        </div>
    )
}
export default Login
