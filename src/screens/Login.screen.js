import axios from "axios";
import React, {useState, useEffect} from "react";
import { Redirect } from "react-router-dom";
import { store } from "../store";

export const Login = ()=> {

  const [emailState, setEmailState] = useState('')
  const [passwordState, setPasswordState] = useState('')
  const [dashbardScreenState, setDashbardScreenState] = useState(false)
  const [tokenState, setTokenState] = useState('')
  const [loginState, setLoginState] = useState(false)

  useEffect(() => {
    if (dashbardScreenState)
    <Redirect push to={`${store.APP_URL}/dashbard`} />
  }, [dashbardScreenState])

  
  const loginHandler = async (e)=>{
   e.preventDefault();
   await axios.get(`${store.APP_URL}/login`, {withCredentials: true, credentials: 'include'}, {email: emailState, password: passwordState} )
   .then((payload)=>{
     //if(paylaod)
     const serverToken = (payload.data.token) 
     setTokenState(serverToken)
     //console.log(serverToken)
     setLoginState(true)
    })
    .catch((err)=>{return console.log(`err: ${err}`)})
  }
 if(loginState)
  return <Redirect to={{
    pathname: `/dashboard`,
    token: tokenState
  }} />
  return (
      <div>
    <form onSubmit={
      loginHandler
      }>
  
    <div>
      <label htmlFor="uname"><b>Username</b></label>
      <input onChange={(e)=>setEmailState(e.target.value)} value={emailState} type="text" placeholder="Enter Username" name="uname" required />
      <label htmlFor="password"><b>Password</b></label>
      <input onChange={(e)=>setPasswordState(e.target.value)} value={passwordState} type="password" placeholder="Enter Password" name="psw" required/>
      <button type='submit'>Login</button>
    </div>
  
    <div>
      <button type="button">Cancel</button>
      <span>Forgot <a href="#">password?</a></span>
    </div>
  </form>
  </div>
  )
}