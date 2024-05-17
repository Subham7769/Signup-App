import React, { useState } from "react";
import { Button, TextField } from "@mui/material";
import Header from "../Header/Header";
import { Link, useNavigate } from "react-router-dom";

function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [tnc, setTnc] = useState(false);

  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [userNameError, setUserNameError] = useState("");
  const [phoneNoError, setPhoneNoError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");

  const navigate = useNavigate();

  const validateName = (name) => /^[A-Za-z]+$/.test(name);
  const validateUserName = (userName) => /^[A-Za-z0-9!@#\$%\^\&*\)\(+=._-]+$/.test(userName);
  const validatePassword = (password) => /^[A-Za-z0-9!@#\$%\^\&*\)\(+=._-]+$/.test(password);
  const validateEmail = (email) => /^[a-zA-Z0-9._%+-]+@gmail\.com$/.test(email);
  const validatePhoneNo = (phoneNo) => /^\+\d{1,4}\s\d{6,14}$/.test(phoneNo);

  const handleOnSubmit = (e) => {
    e.preventDefault();
    let isValid = true;

    if (!name.trim() || !validateName(name)) {
      setNameError("Name is required and should contain only alphabets");
      isValid = false;
    } else {
      setNameError("");
    }

    if (!userName.trim() || !validateUserName(userName)) {
      setUserNameError("Username is required and should contain alphanumeric and special characters");
      isValid = false;
    } else {
      setUserNameError("");
    }

    if (!email.trim() || !validateEmail(email)) {
      setEmailError("Email is required and should be a valid Gmail address");
      isValid = false;
    } else {
      setEmailError("");
    }

    if (!phoneNo.trim() || !validatePhoneNo(phoneNo)) {
      setPhoneNoError("Phone No. is required and should be in the format +CountryCode PhoneNumber");
      isValid = false;
    } else {
      setPhoneNoError("");
    }

    if (!password.trim() || !validatePassword(password) || password === userName) {
      setPasswordError("Password is required and should not be the same as the username");
      isValid = false;
    } else {
      setPasswordError("");
    }

    if (!confirmPassword.trim() || confirmPassword !== password) {
      setConfirmPasswordError("Confirm Password must match the Password");
      isValid = false;
    } else {
      setConfirmPasswordError("");
    }

    if (isValid) {
      // Reset form
      setName("");
      setUserName("");
      setEmail("");
      setPhoneNo("");
      setPassword("");
      setConfirmPassword("");
      setTnc(false);
      navigate('/');
    }
  };

  return (
    <div className="main-container">
      <Header heading={'Sign Up'} subHeading={'Create new account'} />
      <div className="form-container">
        <form onSubmit={handleOnSubmit}>
          <TextField
            id="outlined-basic"
            label="Name"
            variant="standard"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
              setNameError("");
            }}
            error={!!nameError}
            helperText={nameError}
            sx={{
              width: "45%",
              marginBottom: "1.5rem",
              "@media (max-width: 600px)": {
                width: "95%",
              },
            }}
          />
          <TextField
            id="outlined-basic"
            label="Username"
            variant="standard"
            value={userName}
            onChange={(e) => {
              setUserName(e.target.value);
              setUserNameError("");
            }}
            error={!!userNameError}
            helperText={userNameError}
            sx={{
              width: "45%",
              marginBottom: "1.5rem",
              "@media (max-width: 600px)": {
                width: "95%",
              },
            }}
          />
          <TextField
            id="outlined-basic"
            label="Email"
            variant="standard"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setEmailError("");
            }}
            error={!!emailError}
            helperText={emailError}
            sx={{
              width: "45%",
              marginBottom: "1.5rem",
              "@media (max-width: 600px)": {
                width: "95%",
              },
            }}
          />
          <TextField
            id="outlined-basic"
            label="Phone No."
            variant="standard"
            value={phoneNo}
            onChange={(e) => {
              setPhoneNo(e.target.value);
              setPhoneNoError("");
            }}
            error={!!phoneNoError}
            helperText={phoneNoError}
            sx={{
              width: "45%",
              marginBottom: "1.5rem",
              "@media (max-width: 600px)": {
                width: "95%",
              },
            }}
          />
          <TextField
            id="outlined-basic"
            label="Password"
            variant="standard"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              setPasswordError("");
            }}
            error={!!passwordError}
            helperText={passwordError}
            sx={{
              width: "45%",
              marginBottom: "1.5rem",
              "@media (max-width: 600px)": {
                width: "95%",
              },
            }}
          />
          <TextField
            id="outlined-basic"
            label="Confirm Password"
            variant="standard"
            value={confirmPassword}
            onChange={(e) => {
              setConfirmPassword(e.target.value);
              setConfirmPasswordError("");
            }}
            error={!!confirmPasswordError}
            helperText={confirmPasswordError}
            sx={{
              width: "45%",
              marginBottom: "1.5rem",
              "@media (max-width: 600px)": {
                width: "95%",
              },
            }}
          />
          <Button
            type="submit"
            variant="contained"
            style={{ width: "45%" }}
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
