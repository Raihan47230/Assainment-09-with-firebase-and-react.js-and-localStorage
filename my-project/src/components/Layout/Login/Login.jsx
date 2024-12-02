import React, { useContext, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthProvid } from "../../AuthProviders/AuthProviders";

import { auth } from "../../Fire/Fire";
import { sendPasswordResetEmail } from "firebase/auth";
import googleIcon from "../../../assets/Logo-google-icon-PNG.png"


const Login = () => {
const  handleForget =()=>{
 
  const emailForgets=emailRef.current.value
  if(emailForgets){
    sendPasswordResetEmail(auth,emailForgets)
    .then(()=>{
      alert('Reset email sent,pleace check your email')
    })
   
  }
  else{
    alert('pleace input a valid email')
  }
}
  const handleLogin=()=>{
    handleGoogle()
   

  }
  const {handleLoginUSers,handleGoogle}=useContext(AuthProvid)
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const emailRef=useRef()

  const handleFormDatas = (e) => {
    e.preventDefault();
   
    const email = e.target.email.value;
    const password = e.target.password.value;
         e.target.reset()
   
    setSuccess();
    setError();

    handleLoginUSers(email, password)
      .then((result) => {
        
        setSuccess(alert("successfuly "));
      })
      .catch((erorr) => {
      
        setError(erorr.message);
      });
  };
  return (
    <div className="lg:w-4/12 mx-auto bg-gray-100 py-10 px-10 rounded-xl">
     <h1 className="text-center font-bold text-3xl mb-10 text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-purple-600">Login account</h1>
      <form onSubmit={handleFormDatas}>
      <h1>Email</h1>
        <label className="input input-bordered flex items-center gap-2 mb-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-4 w-4 opacity-70"
          >
            <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
            <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
          </svg>
          <input type="text" className="grow" placeholder="Email" name="email" ref={emailRef} required/>
        </label>
        <h1>Password</h1>
        <label className="input input-bordered flex items-center gap-2 mb-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-4 w-4 opacity-70"
          >
            <path
              fillRule="evenodd"
              d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
              clipRule="evenodd"
            />
          </svg>
          <input
            type="password"
            className="grow"
            name="password"
            placeholder="Password"
            required
          />
        </label>
        <button onClick={handleForget} className="underline cursor-pointer"> Forget Password ?</button>
        <p>{error}</p>
        <br />
        <button className="btn bg-stone-400 px-6 py-2 rounded-xl mt-7 w-11/12 mx-auto lg:ml-4">
          Login
        </button>
      </form>
      <p className="text-center">Don't hava an account ? <Link className="underline" to={'/Register'}>Regester</Link></p>

      <div className="divider py-10">or</div>
      <Link  >
      <button  onClick={handleLogin} className="btn btn-block ">
        <img className="h-6 w-6 rounded-full" src={googleIcon}alt="" />
        Login with Google</button>
      </Link>
    </div>
  );
};

export default Login;
