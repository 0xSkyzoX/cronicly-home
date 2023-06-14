import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import "../css/register.css"
import Navbar from "../navbar"
import Footer from "../footer"
function Register() {
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [isSlashEye, setIsSlashEye] = useState(false)
  const [strongPasswordMessage, setStrongPasswordMessage] = useState(false)
  const [usernameMessage, setUsernameMessage] = useState(false)
  const [emailMessage, setEmailMessage] = useState(false)
  const [alreadyRegistredAccount, setAlreadyRegistredAccount] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
const [isLoading, setIsLoading] = useState(false)
  const handleSignup = async (e) => {
    e.preventDefault();
setIsLoading(true)
    if (password.length < 8 || username.length < 2 || email.length < 2) {
      setIsLoading(false)
      if (password.length < 8) {
        setStrongPasswordMessage(true)
      } else {
        setStrongPasswordMessage(false)
      }
      if (email.length < 2) {
        setEmailMessage(true)
      } else {
        setEmailMessage(false)
      }
      if (username.length < 2) {
        setUsernameMessage(true)
      } else {
        setUsernameMessage(false)
      }
      return 0;
    }

    const signupData = { username, email, password };
    try {
      const response = await fetch('https://api-cronicly-server.onrender.com/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(signupData)
      })
        
    
      
      if (response.status === 409) {
        console.log("This account is already registred.")
        setIsLoading(false)
        setTimeout(() => {
          setAlreadyRegistredAccount(false)
        }, 10000)
        setStrongPasswordMessage(false)
        setUsernameMessage(false)
        setEmailMessage(false)
        return setAlreadyRegistredAccount(true)
      } else {
        setAlreadyRegistredAccount(false)
      }
      
      if (response.ok) {
        // Signup successful
        setIsLoading(false)
        console.log('Signup successful');
        setIsSuccess(true)
        setEmail("")
        setPassword("")
        setUsername("")
        setUsernameMessage(false)
        setEmailMessage(false)
        setStrongPasswordMessage(false)
        setTimeout(() => {
          setIsSuccess(false)
        }, 10000)
      } else {
        setIsSuccess(false)
        // Signup failed
        console.error('Signup failed');
      }
    } catch (error) {
      console.error('Error occurred during signup:', error);
    }


  };

  return (
    <div>
      
      <Navbar id="register-navbar" />
      <div className='signup-container'>
        <img alt="" src='./images/logo-h.png' className='cronicly-logo' />
        <div className='signup-form-inside' style={isLoading ? {opacity: ".5", userSelect: "none", cursor: "wait"}: {opacity: ".9"}}>
          <div className='signup-form-top'>
            <h2>Register your account</h2>
            <p>Already have an account? <a href='/login'>Sign in</a></p>
          </div>
          {
            alreadyRegistredAccount && <p style={{ color: "white", backgroundColor: "red", padding: "5px 7px", paddingTop: "6px", fontSize: "15px", outlineColor: "orange", outlineWidth: "1px", outlineOffset: "1px", borderRadius: "4px", marginBottom: "-38px", marginTop: "10px", display: "flex", opacity: "0.85" }}>This account is already registred.</p>
          }
          {
            isSuccess && <p style={{ color: "white", backgroundColor: "green", padding: "6px 10px", paddingTop: "6px", fontSize: "15px", outlineColor: "orange", outlineWidth: "1px", outlineOffset: "1px", borderRadius: "4px", marginBottom: "-38px", marginTop: "10px", display: "flex", opacity: "0.8" }}>Registred successfully!</p>
          }

      
          <div className='loading-container' style={isLoading ? {display: "flex"} : {display: "none"}}>
          <img src="./images/34338d26023e5515f6cc8969aa027bca_w200.gif" className='loading-gif'/>
          </div>
          
          <form onSubmit={handleSignup} className="signup-form">
            <div>
              <label >Full Name</label>
              <input
                type="text"
                placeholder="What's your full name?"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                style={usernameMessage ? { border: "solid 1px red", outlineColor: "red" } : { border: "solid 1px rgb(0, 0, 0, .4)" }}
              />
              {
                usernameMessage && <p style={{ color: "red", opacity: ".6", fontSize: "15px", position: "relative", top: "3px", marginBottom: "-17px" }}>Enter a valid name.</p>
              }
            </div>

            <div>
              <label >Email address</label>
              <input
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={emailMessage ? { border: "solid 1px red", outlineColor: "red" } : { border: "solid 1px rgb(0, 0, 0, .4)" }}
              />
              {
                emailMessage && <p style={{ color: "red", opacity: ".6", fontSize: "15px", position: "relative", top: "3px", marginBottom: "-17px" }}>Enter a valid email.</p>
              }
            </div>
            <div>
              <label style={{ marginBottom: "-8px" }}>Password</label>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", maxWidth: "700px" }}>
                <input
                  type={isSlashEye ? "text" : "password"}
                  placeholder="What's your password?"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  style={strongPasswordMessage ? { border: "solid 1px red", outlineColor: "red" } : { border: "solid 1px rgb(0, 0, 0, .4)" }}
                />
                <FontAwesomeIcon icon={isSlashEye ? faEye : faEyeSlash} onClick={() => { setIsSlashEye(!isSlashEye) }} style={{ display: "flex", marginLeft: "-50px", position: "relative", right: "10px", marginTop: "10px", zIndex: "1000", cursor: "pointer", userSelect: "none" }} />
              </div>
              {
                strongPasswordMessage && <p style={{ color: "red", opacity: ".6", fontSize: "15px", position: "relative", top: "3px", marginBottom: "-17px" }}>Enter a password more than 8 letter</p>
              }

            </div>

            <button className='btn-primary' type='submit' id='register-btn' style={isLoading ? {cursor: "wait"}: {cursor: "pointer"}} disabled={isLoading ? true : false}> Register</button>
          </form>

        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Register