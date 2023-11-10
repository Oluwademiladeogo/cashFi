import { useState, useEffect } from 'react';
import './Deposit.css';
import Navbar from '../Navbar/Navbar';

import Error from '../Error/Error';
const Deposit = () => {
  const [amount, setAmount] = useState('');
  const [number, setNumber] = useState('');
  const [access, setAccess] = useState(true);
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
    const response = await fetch(`https://cashfi.onrender.com/deposit`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        authorization: authToken,
      },
      body: JSON.stringify({
        amount,
        number,
      }),
    });
    const data = await response.json();
    if (data.status === 200) {
      setTimeout(() => {
        window.location.href = '/dashboard';
      }, 3000);
      setFetchMessage(data.message);
    } else {
      setFetchMessage('Transfer failed, Reason: ', response.message);
    }
  };

  return (
    <>
      <Navbar />
      <div className="deposit-page">
        <form className="deposit-form" onSubmit={handleSubmit}>
          <div className="title">
            <h1>Deposit</h1>
          </div>
          <div className="form-input">
            +
            <input
              className="input number"
              placeholder="Phone Number"
              name="number"
              onChange={(e) => setNumber(e.target.value)}
              required
            />
            <input
              className="input amount"
              type="number"
              placeholder="Amount"
              name="amount"
              onChange={(e) => setAmount(e.target.value)}
              required
            />
          </div>
          <button>deposit</button>
          <span className="fetch-message">{fetchMessage}</span>
        </form>
      </div>
    </>
  );
};

export default Deposit;
