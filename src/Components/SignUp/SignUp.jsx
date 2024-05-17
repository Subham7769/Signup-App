import React, { useState } from "react";
import { Button, Checkbox, FormControlLabel, TextField } from "@mui/material";
import Header  from "../Header/Header";
import { Link, useNavigate } from "react-router-dom";

function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [tnc, setTnc] = useState(false);

  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [userNameError, setUserNameError] = useState(false);
  const [phoneNoError, setPhoneNoError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [confirmPasswordError, setConfirmPasswordError] = useState(false);
  
  const navigate = useNavigate();

  const handleOnSubmit = (e) => {
    e.preventDefault();
    
    // Check if  name is empty
    if (!name.trim()) {
      setNameError(true);
      return;
    }
    
    // Check if username is empty
    if (!userName.trim()) {
      setUserNameError(true);
      return;
    }

    // Check if email is empty
    if (!email.trim()) {
      setEmailError(true);
      return;
    }

    // Check if Phone no. is empty
    if (!phoneNo.trim()) {
      setPhoneNoError(true);
      return;
    }

    // Check if password is empty
    if (!password.trim()) {
      setPasswordError(true);
      return;
    }
    // Check if confirm password is empty
    if (!confirmPassword.trim()) {
      setConfirmPasswordError(true);
      return;
    }





    // Reset form
    setName("");
    setUserName("");
    setEmail("");
    setPhoneNo("");
    setPassword("");
    setConfirmPassword("");
    setNameError(false);
    setEmailError(false);
    setPhoneNoError(false);
    setUserNameError(false);
    setPasswordError(false);
    setConfirmPasswordError(false);
    setTnc(false);
    navigate('/');
  };


  return (
    <div className="main-container">
    <Header heading={'Sign Up'} subHeading={'Create new account'}/>
    <div className="form-container">

      <form onSubmit={handleOnSubmit}>
        <TextField
          id="outlined-basic"
          label="Name"
          variant="standard"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
            setNameError(false); 
          }}
          error={nameError}
          helperText={nameError ? "Name is required" : ""}
          style={{ width: "45%",marginBottom: "1.5rem"}}
        />
        <TextField
          id="outlined-basic"
          label="Username"
          variant="standard"
          value={userName}
          onChange={(e) => {
            setUserName(e.target.value);
            setUserNameError(false); 
          }}
          error={userNameError}
          helperText={userNameError ? "Username is required" : ""}
          style={{ width: "45%",marginBottom: "1.5rem"}}
        />
        <TextField
          id="outlined-basic"
          label="Email"
          variant="standard"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            setEmailError(false); 
          }}
          error={emailError}
          helperText={emailError ? "Email is required" : ""}
          style={{ width: "45%",marginBottom: "1.5rem"}}
        />
        <TextField
          id="outlined-basic"
          label="Phone No."
          variant="standard"
          value={phoneNo}
          onChange={(e) => {
            setPhoneNo(e.target.value);
            setPhoneNoError(false); 
          }}
          error={phoneNoError}
          helperText={phoneNoError ? "Phone No. is required" : ""}
          style={{ width: "45%",marginBottom: "1.5rem"}}
        />
        <TextField
          id="outlined-basic"
          label="Password"
          variant="standard"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
            setPasswordError(false); 
          }}
          error={passwordError}
          helperText={passwordError ? "Password is required" : ""}
          style={{ width: "45%",marginBottom: "1.5rem"}}
        />
        <TextField
          id="outlined-basic"
          label="Confirm Password"
          variant="standard"
          value={confirmPassword}
          onChange={(e) => {
            setConfirmPassword(e.target.value);
            setConfirmPasswordError(false); 
          }}
          error={confirmPasswordError}
          helperText={confirmPasswordError ? "Confirm Password is required" : ""}
          style={{ width: "45%",marginBottom: "1.5rem"}}
        />
        {/* <FormControlLabel required control={<Checkbox />} label="Required" checked={tnc}/> */}

        <Button 
        type="submit" 
        variant="contained"
        style={{ width: "45%"}}
        >Sign Up</Button>
        <div className='forgetPassword'>
            <Link to="/">Already have account !</Link>
          </div>
      </form>
    </div>
    </div>
  );
}

export default SignUp;
