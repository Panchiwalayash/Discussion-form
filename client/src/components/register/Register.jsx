import React, { useRef } from 'react'
import './register.css'
import { Link, useHistory } from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from "react-router-dom";

export default function Register() {
    const username = useRef();
    const email = useRef();
    const password = useRef();
    let navigate = useNavigate();

    const handleClick = async (e) => {
        e.preventDefault()


        const user = {
            username: username.current.value,
            email: email.current.value,
            password: password.current.value
        }
        try {
            await axios.post("http://localhost:5000/api/auth/register", user)
            navigate("/login")
        } catch (error) {
            console.log(error);
        }

    }
    return (
        <div className='register'>
            <div className="registerWrapper">
                <div className="registerLeft">
                    <Link to='/' style={{ 'textDecoration': "none" }}>
                        <div className="registerLogo">Discussion form</div>
                    </Link>
                    <div className="registerText">Share your doubt to the community</div>
                </div>
                <form className="registerRight" onSubmit={handleClick}>
                    <input placeholder='UserName' type="text" className="registerUsername" ref={username} required />
                    <input placeholder='Email' type="email" className="registerEmail" ref={email} required />
                    <input placeholder='Password' type="password" className="registerPassword" ref={password} required />

                    <div className='registerButtonDiv'>
                        <button className="registerButton">Sign Up</button>
                    </div>
                    <Link to="/login">
                        <button className="logInto">Log Into Your Account</button>
                    </Link>
                </form>
            </div>
        </div>
    )
}
