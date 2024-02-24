import React from 'react'
import { useState } from 'react'
import './trail.css';
function Register() {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [otp, Setotp] = useState(true);
  const [val, setVal] = useState();
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(true);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const passwordMatch = password === confirmPassword;
  return (
    <div>
      {/* <p>Username,mail,pass,confirmpass,next,verify mail(otp sent to mail)</p> */}
      {otp &&
        <form onSubmit={() => Setotp(false)}>
          <input type='text' placeholder='Username' required /><br /><br />
          <input type='email' placeholder='Gmail' required /><br /><br />
          <input type='password' value={password} placeholder='password' onChange={handlePasswordChange} required /><br /><br />
          <input type='password' value={confirmPassword} placeholder='confirm password' onChange={handleConfirmPasswordChange} required /><br /><br />
          {!passwordMatch && <p style={{ color: 'red' }}>Passwords do not match</p>}
          <button type='submit' >Sign Up</button>
        </form>
        }

      {!otp && <div>
        <p>Otp send to your email</p>
        <input type='text' value={val} placeholder='OTP' />
        <button
          className={clicked ? 'clicked' : ''}
          onClick={handleClick}
        >
          Submit
        </button>
        {clicked && <p className="success-message">Account registered successfully</p>}
        <p onClick={() => Setotp(true)}>back</p>
      </div>}
    </div>
  )
}

export default Register