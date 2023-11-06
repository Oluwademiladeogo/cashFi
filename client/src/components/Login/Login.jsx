import React from 'react';
import './Login.css';

const Login = () => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    const response = await fetch('http://localhost:3000/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    if (response.status === 200) {
      // Login successful
    } else {
      // Login failed
    }
  };

  return (
    <div className="login-page">
      <form className="login-form" onSubmit={handleSubmit}>
        <div className="title"><h1>CashFI</h1></div>
        <div className="form-input">
          <input className='input email' type="email" placeholder="email" name="email" onChange={(e) => setEmail(e.target.value)} />
          <input className='input password' type="password" placeholder="password" name="password" onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button>login</button>
        <div className='grid'>
          <p className="haveText ">Don't have an account?</p>
          <a href="/signup" className="signup">
            Sign up
          </a>
        </div>
      </form>
    </div>
  );
};

export default Login;
