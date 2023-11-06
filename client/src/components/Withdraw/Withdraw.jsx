import React from 'react';
import './Withdraw.css';
import Navbar from '../Navbar/Navbar';

const Withdraw = () => {
  const [pin, setPin] = React.useState('');
  const [amount, setAmount] = React.useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    const response = await fetch('http://localhost:3000/withdraw', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        pin,
        amount,
      }),
    });

    if (response.status === 200) {
      // Withdrawal successful
    } else {
      // Withdrawal failed
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
        </form>
      </div>
    </>
  );
};

export default Withdraw;
