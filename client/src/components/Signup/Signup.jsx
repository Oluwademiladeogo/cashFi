import React from "react";
import "./Signup.css";

const Signup = () => {
  const [username, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [number, setNumber] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [pin, setPin] = React.useState("");
  const [message, setMessage] = React.useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    const getDetails = async () => {
      const response = await fetch('https://cashfi.onrender.com/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username,
          email,
          number,
          password,
          pin,
        }),
      });

      const data = await response.json();
      return [data, response];
    };

    const [data, response] = await getDetails();
    if(response.status !== 201){
      setMessage(`Signup failed. Reason: ${data.message}`)
    }
    else{
      setTimeout(()=>{
        window.location.href = '/login'
      }, 2000)
      setMessage("Signup successful")

    }
  };

  return (
    <div className="signup-page">
      <form className="signup-form" onSubmit={handleSubmit}>
        <h1 className="title">CashFI</h1>
        <div className="form-input">
          <input
            className="name"
            type="text"
            placeholder="Full Name"
            name="username"
            onChange={(e) => setName(e.target.value)}
          />
          <input
            className="input email"
            type="email"
            placeholder="email"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="number"
            placeholder="Phone Number"
            name="number"
            onChange={(e) => setNumber(e.target.value)}
          />
          <input
            className="input password"
            type="password"
            placeholder="password"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            className="input pin"
            type="password "
            placeholder="pin"
            name="pin"
            onChange={(e) => setPin(e.target.value)}
          />
        </div>
        <div>
          <button>sign up</button>
          <div className="grid">
            <p className="haveText ">Already have an account?</p>
            <a href="/login" className="login">
              login
            </a>
          </div>
        </div>
        <div>{message}</div>
      </form>
    </div>
  );
};

export default Signup;
