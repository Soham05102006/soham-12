import React, { useState } from 'react'
import './Login.css'
//import background_banner from './background_banner.jpg'
import Logo from './logo.png'

const Login = () => {

  const [signState, setSignState] = useState("Sign In")


  return (
    <div className='login'>
      
        <img src={Logo} className='login-logo' alt="" />
        
        <div className="login-from">

        <h1>{signState}</h1>
          <form>
            {signState ==="Sign Up"? <input type="text" placeholder='Your name' />: <></>}
           
           
            <input type="email" placeholder='email' />
            <input type="password" placeholder='password' />
            <button>Sign Up</button>
            <div className="form-help">
              <div className="remember">
                <input type="checkbox" />
                <label htmlFor="">Remember Me</label>
              </div>
              <p>Need Help?</p>
            </div>
          </form>
            <div className="form-switch">
              {signState==="Sign In"? 
                <p>New to Sohamflix? <span onClick={() =>{
                  setSignState("Sign Up")
                }}>Sign Up Now</span></p>: <p>Already have account? <span onClick={() =>{setSignState("Sign In")}}>Sign In Now</span></p>
              }
              
            </div>

        </div>
       </div>
   
  )
}

export default Login