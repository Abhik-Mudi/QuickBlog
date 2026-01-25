import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../auth.css'
import useLogin from '../hooks/useLogin';
import useSignup from '../hooks/useSignup';
import toast from 'react-hot-toast';


const Login = () => {
  const {loading, loginUser}=useLogin();
  const {signupUser} = useSignup();
  
  const [isSignUpMode, setIsSignUpMode] = useState(false);
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const [usernameSignup, setUsernameSignup] = useState("")
  const [emailSignup, setEmailSignup] = useState("")
  const [passwordSignup, setPasswordSignup] = useState("")


  const toggleMode = () => {
    setIsSignUpMode(!isSignUpMode);
  };

  const handleSubmitLogin =async (e)=>{
    e.preventDefault();    
    if (!username || !password) {
      toast.error("Please fill in all fields");
    }
    await loginUser(username, password)
    setUsername("");
    setPassword("");
  }

  const handleSubmitSignup =async (e)=>{
    e.preventDefault();    
    if (!usernameSignup || !emailSignup || !passwordSignup) {
      toast.error("Please fill in all fields");
    }
    await signupUser(usernameSignup, emailSignup, passwordSignup)
    setUsernameSignup("");  
    setEmailSignup("");
    setPasswordSignup("");
  }

  return (
    <div className={`container ${isSignUpMode ? 'sign-up-mode' : ''}`}>
      <div className="forms-container">
        <div className="signin-signup">
          {/* Sign In Form */}
          <form onSubmit={(e)=>handleSubmitLogin(e)} className={`sign-in-form ${isSignUpMode?'hidden':'block'}`}>
            <h2 className="title">Sign In</h2>
            <div className="input-field">
              <i className="fas fa-user"></i>
              <input type="text" value={username} onChange={(e)=>setUsername(e.target.value)} placeholder="Username" name='username'/>
            </div>
            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Password" name='password'/>
            </div>
            <input type="submit" value="Login" className="btn solid" />
            <div className={`switch-signin ${isSignUpMode?'hidden':'block'}`}>
              Don't have an account? <button type="button" onClick={toggleMode} className='text-[#4d84e2] font-semibold'>Sign Up</button>
            </div>
          </form>

          {/* Sign Up Form */}
          <form className="sign-up-form" onSubmit={(e)=>handleSubmitSignup(e)}>
            <h2 className="title">Sign Up</h2>
            <div className="input-field">
              <i className="fas fa-user"></i>
              <input type="text" value={usernameSignup} onChange={(e)=>setUsernameSignup(e.target.value)} placeholder="Username" name='usernameSignup' />
            </div>
            <div className="input-field">
              <i className="fas fa-envelope"></i>
              <input type="email" value={emailSignup} onChange={(e)=>setEmailSignup(e.target.value)} placeholder="Email" name='emailSignup' />
            </div>
            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input type="password" value={passwordSignup} onChange={(e)=>setPasswordSignup(e.target.value)} placeholder="Password" name='passwordSignup' />
            </div>
            <input type="submit" value="Sign Up" className="btn solid" />
            <div className={`switch-signup ${!isSignUpMode?'hidden':'block'}`}>
              Already have an account? <button type="button" onClick={toggleMode} className={`text-[#4d84e2] font-semibold`}>Sign In</button>
            </div>
          </form>

        </div>
      </div>

      <div className="panels-container">
        <div className="panel left-panel">
          <div className="content">
            <h3>New here?</h3>
            <p>Join us and start sharing your amazing blog posts with the world!</p>
            <button className="btn transparent" onClick={toggleMode}>Sign Up</button>
          </div>
        </div>

        <div className="panel right-panel">
          <div className="content">
            <h3>One of us?</h3>
            <p>Sign in and continue your journey with us!</p>
            <button className="btn transparent" onClick={toggleMode}>Sign In</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
