import React, { useRef } from 'react'
import './login.css'
import { Link } from 'react-router-dom'
import axios from 'axios'

export default function Login() {
    const email = useRef()
    const password = useRef()

    const loginHandler = async (e) => {
        e.preventDefault()
        const userdetail = {
            email: email.current.value,
            password: password.current.value
        }
        try {
            const res = await axios.post("http://localhost:5000/api/auth/login", userdetail)

            localStorage.setItem("user", JSON.stringify(res.data));
            window.location.reload();
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <div className='login'>
            <div className="loginWrapper">
                <div className="loginLeft">

                    <div style={{ 'textDecoration': "none" }}>
                        <span className="loginLogo" >Discussion form</span>
                    </div>

                    <div className="loginText">Share your doubt to the community</div>
                </div>
                <form className="loginRight" >
                    <input placeholder='Email' type="email" className="loginEmail" ref={email} required />
                    <input placeholder='Password' type="password" className="loginPassword" ref={password} minLength="4" required />
                    <div className='loginButtonDiv'>
                        <button className="loginButton" onClick={loginHandler}>Login in</button>
                    </div>
                    <div className="loginPasswordReset">Forgot Password?</div>
                    <Link to="/register">
                        <button className="createNew">Create a New Account</button>
                    </Link>
                </form>
            </div>
        </div>
    )
}
