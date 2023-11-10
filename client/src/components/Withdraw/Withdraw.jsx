import { useState, useEffect } from 'react';
import './Withdraw.css';
import Navbar from '../Navbar/Navbar';

import Error from '../Error/Error';
const Withdraw = () => {
  const [amount, setAmount] = useState('');
  const [access, setAccess] = useState(true);
  const [pin, setPin] = useState('');
  const [fetchMessage, setFetchMessage] = useState('');
  const [err, setError] = useState({
    status: '200',
    message: 'Success',
  });
  const authToken = localStorage.getItem('authorization');

  useEffect(() => {
    if (!authToken) {
      setAccess(false);
      setError({
        status: 401,
        message: 'Unauthorised',
      });
    }
  }, [authToken]);

  if (!access) {
    return <Error status={err.status} message={err.message} />;
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(typeof amount);
    const response = await fetch(`https://cashfi.onrender.com/withdraw`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        authorization: authToken,
      },
      body: JSON.stringify({
        amount,
        pin,
      }),
    });
    const data = await response.json();
    if (data.status === 200) {
      setTimeout(() => {
        window.location.href = '/dashboard';
      }, 3000);
      setFetchMessage(data.message);
    } else {
      setFetchMessage(`Transfer failed, Reason: ${data.message}`);
    }
  };

  return (
    <>
      <Navbar />

      <div className="withdraw-page">
        <form className="withdraw-form" onSubmit={handleSubmit}>
          <div className="title">
            <h1>Withdraw</h1>
          </div>
          <div className="form-input"></div>
          <div className="form-input">
            <input
              className="input pin"
              type="password"
              placeholder="PIN"
              name="pin"
              onChange={(e) => setPin(e.target.value)}
            />
          </div>
          <div className="form-input">
            <input
              className="input amount"
              type="number"
              placeholder="Amount"
              name="amount"
              onChange={(e) => setAmount(e.target.value)}
            />
          </div>
          <button>withdraw</button>
          <span className="fetch-message">{fetchMessage}</span>
        </form>
      </div>
    </>
  );
};

export default Withdraw;
