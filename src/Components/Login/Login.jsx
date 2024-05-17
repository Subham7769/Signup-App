import { useState } from 'react';
import { Button, TextField } from "@mui/material";
import Header from '../Header/Header';
import './Login.css'
import { Link } from 'react-router-dom';

function Login() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [userNameError, setUserNameError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const handleOnSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    // Check if username is empty
    if (!userName.trim()) {
      setUserNameError(true);
      return;
    }

    // Check if password is empty
    if (!password.trim()) {
      setPasswordError(true);
      return;
    }

    // Reset form
    setUserName("");
    setPassword("");
    setUserNameError(false);
    setPasswordError(false);
  };


  return (
    <div className='main-container'>
      <Header heading={'Login'} subHeading={''} />
      <div className="form-container">
        <form onSubmit={handleOnSubmit}>
          <TextField
            id="username"
            label="Username"
            variant="standard"
            value={userName}
            onChange={(e) => {
              setUserName(e.target.value);
              setUserNameError(false); // Reset error when user types
            }}
            error={userNameError}
            helperText={userNameError ? "Username is required" : ""}
            style={{ width: "50%", marginBottom: "1.5rem" }}
          />
          <TextField
            id="filled-password-input"
            type="password"
            label="Password"
            variant="standard"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              setPasswordError(false); // Reset error when user types
            }}
            error={passwordError}
            helperText={passwordError ? "Password is required" : ""}
            style={{ width: "50%", marginBottom: "1.5rem" }}
          />
          <div className='forgetPassword'>
            <a href="#">Forget your password?</a>
          </div>

          <Button 
          type="submit" 
          variant="contained" 
          style={{ width: "50%"}}>Sign In</Button>

          <div className='forgetPassword'>
            <Link to="/Signup">Don't have an account, Create account !</Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
