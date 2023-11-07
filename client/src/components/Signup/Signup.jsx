import React from "react";
import "./Signup.css";

const Signup = () => {
  const [username, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [number, setNumber] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [pin, setPin] = React.useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    const response = await fetch("http://localhost:3000/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        email,
        number,
        password,
        pin,
      }),
    });

    if (response.status === 200) {
      window.location.href = "/login";
    } else {
      // Create a span with a red background color to indicate failure
      const span = document.createElement("span");
      span.textContent = "Signup failed";
      span.style.backgroundColor = "red";
      span.classList.add("signup-failed");
      document.body.appendChild(span);
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
            type="pin"
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
      </form>
    </div>
  );
};

export default Signup;
