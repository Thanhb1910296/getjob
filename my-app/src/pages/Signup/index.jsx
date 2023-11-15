
import React, { }  from 'react'
import './styles.css'
import Header from '../../components/Header/header'
const Signup = () => {
    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');

    // const [message, setMessage]= useState('');
    // // const handleOnchangeEmail = (value) => {
    // //     setEmail(value);
    // // };

    // const handleOnchangePassword = (value) => {
    //     setPassword(value);
    // };

    // const handleChange = (event) => {
    //     setMessage(event.target.value);
    //   };
    // const InputForm = (props) => {
    //     const { placeholder = 'Enter  ', ...rests } = props
    //     const handleOnchangeInput = (e) => {
    //         props.onChange(e.target.value)
    //     }
    //     return (
    //         <input placeholder={placeholder} value={props.value} {...rests} onChange={handleOnchangeInput} />
    //     )
    // }

    // const handleSignin = () => {
    //     console.log('Signin', email, password, message);
    // };

    return (
        <div>
            <Header />
            <div className='form'>
            {/* Signin
            <input placeholder="Leave a review..." value={message} onChange={handleChange}/>
            <input style={{ marginBottom: '10px' }} placeholder="abc@gmail.com" value={email} onChange={(e) => setEmail(e.target.value)} />
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
                        <h3 className="Auth-form-title">Sign Up</h3>
                        <div className="form-group mt-3">
                            <label> Full Name </label>
                            <input type="text" className="form-control mt-1" placeholder="Enter your full name" />
                        </div>
                        <div className="form-group mt-3">
                            <label>Email address</label>
                            <input type="email" className="form-control mt-1" placeholder="Enter email" />
                        </div>
                        <div className="form-group mt-3">
                            <label>Password</label>
                            <input type="password" className="form-control mt-1" placeholder="Enter password" />
                        </div>
                        
                        <div className="d-grid gap-2 mt-3">
                            <button type="submit" className="btn btn-primary">
                                Submit
                            </button>
                        </div>
                        <p className="notice text-right mt-2">
                            <input type="checkbox" />
                            I have read and agree to JobGet 
                            <a href="?"> Terms & Conditions </a> 
                            and Privacy Policy in relation to my privacy information.
                        </p>
                        <p className="notice text-right mt-2">
                            Already have an account? <a href="../signin"> Sign In Now ! </a>
                        </p>
                    </div>
                </form>
            </div>
        </div>
        </div>
    )
}

export default Signup;