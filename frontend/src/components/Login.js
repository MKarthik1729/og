import React from 'react'
import { useState } from 'react'
function Login() {
  const [fp, Setfp] = useState(true);
  const [otp, Setotp] = useState(false);
  return (
    <div>
      {fp && <form>
        <input type='email' placeholder='Gmail' /><br /><br />
        <input type='password' placeholder='password' /><br /><br />
        <p onClick={() => { Setfp(false) }}>Forgot Password</p>
        <a>        Sign Up</a>
      </form>}
      {!fp && <div>
        <input type='email' placeholder='Gmail'/>
        <button onClick={() => Setotp(true)}>submit</button>
        {otp && <div>
          <p>Check your mail for otp</p>
          <label>
            please enter your otp:
            <input type='text' />
          </label>
          <button onClick={() => {
            alert("password updated successfully")
            Setfp(true)
          }}>Submit</button>
        </div>}

        <p onClick={() => Setfp(true)}>back</p>
      </div>}
    </div>
  )
}

export default Login