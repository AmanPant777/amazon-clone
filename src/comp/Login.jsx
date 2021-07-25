import React, { useState } from 'react'
import { auth } from '../firebase'
import history from 'history'
import { useHistory } from 'react-router-dom'
import './Login.css'
import { Link } from 'react-router-dom'
const Login = () => {
    const history = useHistory()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const signIn = (e) => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(email, password)
            .then(auth => {
                return history.push('/')
            })
            .catch((error => console.log(error.message)))
    }
    const register = (e) => {
        auth.createUserWithEmailAndPassword(email, password).then((auth) => {
            if (auth) {
                history.push('/')
            }
        }).catch(error => alert(error.message))
    }
    return (
        <div className="login">
            <Link to='/'>
                <img src="/images/amazonlogo.png" alt="" className="login_logo" />
            </Link>

            <div className="login_container">
                <h1>Sign In</h1>
                <form >
                    <h5>Email</h5>
                    <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <h5>Password</h5>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    <button onClick={(e) => signIn(e)} type='submit'>Sign In</button>
                </form>
                <p>Amazon.in: Online Shopping India - Buy mobiles, laptops, cameras, books, watches, apparel, shoes and e-Gift Cards.</p>
                <button onClick={(e) => register(e)}>Create Your Account</button>
            </div>
        </div>
    )
}
export default Login
