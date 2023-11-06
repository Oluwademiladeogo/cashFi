import { useState } from 'react';
import './Deposit.css';
import Navbar from '../Navbar/Navbar';

const Deposit = () => {
  const [amount, setAmount] = useState('');
  const [number, setNumber] = useState('');
  const handleSubmit = async (event) => {
    event.preventDefault();

    const response = await fetch('http://localhost:3000/deposit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        amount,
        number,
      }),
    });

    if (response.status === 200) {
      // Deposit successful
    } else {
      // Deposit failed
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
            <input
              className="input number"
              type="number"
              placeholder="Phone Number"
              name="number"
              onChange={(e) => setNumber(e.target.value)}
            />
            <input
              className="input amount"
              type="number"
              placeholder="Amount"
              name="amount"
              onChange={(e) => setAmount(e.target.value)}
            />
          </div>
          <button>deposit</button>
        </form>
      </div>
    </>
  );
};

export default Deposit;
