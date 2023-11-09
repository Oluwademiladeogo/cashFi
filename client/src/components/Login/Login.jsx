import React from 'react';
import './Login.css';

const Login = () => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [message, setMessage] = React.useState('');
  const handleSubmit = async (event) => {
    event.preventDefault();

    const response = await fetch('https://cashfi.onrender.com/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });
    const data = await response.json();
    if (response.ok) {
      const token = data.client_token;
      localStorage.setItem('authorization', `Bearer ${token}`);
      setMessage('Login successful');
    } else {
      setMessage('Incorrect email or password');
    }
  };

  const authToken = localStorage.getItem('authorization');
  if (authToken) {
    setTimeout(() => {
      window.location.href = '/dashboard';
    }, 2000);
  } else {
    setMessage('Something went wrong');
  }

  return (
    <div className="login-page">
      <form className="login-form" onSubmit={handleSubmit}>
        <div className="title">
          <h1>CashFI</h1>
        </div>
        <div className="form-input">
          <input
            className="input email"
            type="email"
            placeholder="email"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="input password"
            type="password"
            placeholder="password"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button>login</button>
        <div className="grid">
          <p className="haveText ">Don't have an account?</p>
          <a href="/signup" className="signup">
            Sign up
          </a>
        </div>
        <div>{message}</div>
      </form>
    </div>
  );
};

export default Login;
