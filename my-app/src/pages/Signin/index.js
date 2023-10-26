
import React, { useState }  from 'react'

const Signin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [message, setMessage]= useState('');
    // const handleOnchangeEmail = (value) => {
    //     setEmail(value);
    // };

    const handleOnchangePassword = (value) => {
        setPassword(value);
    };

    const handleChange = (event) => {
        setMessage(event.target.value);
      };
    const InputForm = (props) => {
        const { placeholder = 'Enter  ', ...rests } = props
        const handleOnchangeInput = (e) => {
            props.onChange(e.target.value)
        }
        return (
            <input placeholder={placeholder} value={props.value} {...rests} onChange={handleOnchangeInput} />
        )
    }

    const handleSignin = () => {
        console.log('Signin', email, password, message);
    };

    return (
        <div>
            Signin
            <input
    placeholder="Leave a review..."
    value={message}
    onChange={handleChange}/>



            <input style={{ marginBottom: '10px' }} placeholder="abc@gmail.com" value={email} 
            onChange={(e) => setEmail(e.target.value)} />
          <div style={{ position: 'relative' }}>
            <span
              style={{
                zIndex: 10,
                position: 'absolute',
                top: '4px',
                right: '8px'
              }}
            >?
            </span>
            <InputForm
              placeholder="password"
              type="password"
              value={password}
              onChange={handleOnchangePassword}
            />
          </div>
                <div className="Auth-form-container">
                <button type="submit" className="btn btn-primary" onClick={handleSignin}>
              Submit
            </button>
    </div>

        </div>
        
    )
}

export default Signin;