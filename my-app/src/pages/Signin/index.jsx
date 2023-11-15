
import React from 'react'
import { useState } from 'react'
import './styles.css'
import google_logo from '../../public/img/google-icon.png';
import Header from '../../components/Header/header'
const Signin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // const [message, setMessage]= useState('');
    // const handleOnchangeEmail = (value) => {
    //     setEmail(value);
    // };

    // const handleOnchangePassword = (value) => {
    //     setPassword(value);
    // };

    // const handleChange = (event) => {
    //     setMessage(event.target.value);
    // };
    // const InputForm = (props) => {
    //     const { placeholder = 'Enter  ', ...rests } = props
    //     const handleOnchangeInput = (e) => {
    //         props.onChange(e.target.value)
    //     }
    //     return (
    //         <input placeholder={placeholder} value={props.value} {...rests} onChange={handleOnchangeInput} />
    //     )
    // }

    const handleSignin = () => {
        console.log('Signin', email, password);
    };

    return (
        <div>
            <Header />
            <div className='form'>
            {/* Signin
            <input placeholder="Leave a review..." value={message} onChange={handleChange}/>
            <input style={{ marginBottom: '10px' }}  placeholder="abc@gmail.com" value={email} onChange={(e) => setEmail(e.target.value)}/>
            <div style={{ position: 'relative' }}>
                <span style={{ zIndex: 10, position: 'absolute', top: '4px', right: '8px' }} >? </span>
                <InputForm placeholder="password" type="password" value={password} onChange={handleOnchangePassword} />
            </div>
            <div className="Auth-form-container">
                <button type="submit" className="btn btn-primary" onClick={handleSignin}> Submit </button>
            </div> */}
            <div className="Auth-form-container">
                <form className="Auth-form">
                    <div className="Auth-form-content">
                        <h3 className="Auth-form-title">Sign In</h3>
                        <button className='google'>
                            <img src={google_logo} alt=""/>
                            Sign In with Google
                        </button>
                        <div className="form-group mt-3">
                            <label>Email address</label>
                            <input type="email" className="form-control mt-1" placeholder="Enter email" 
                            value={email} onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="form-group mt-3">
                            <label>Password</label>
                            <input type="password" className="form-control mt-1" placeholder="Enter password" 
                            value={password} onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <div className="d-grid gap-2 mt-3">
                            <button type="submit" className="btn btn-primary"
                            onClick={handleSignin}
                            >
                                Submit
                            </button>
                        </div>
                        <p className="notice text-right mt-2">
                            Do not have an account? <a href="../signin">  Sign up now! </a>
                        </p>
                        <p className="notice forgot-password text-right mt-2">
                             <a href="?">Forgot password?</a>
                        </p>
                    </div>
                </form>
            </div>
        </div>
        </div>
    )
}

export default Signin;