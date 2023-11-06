import React from 'react';
import './Transfer.css';
import Navbar from '../../Navbar/Navbar';

const Transfer = () => {
  const [number, setNumber] = React.useState('');
  const [amount, setAmount] = React.useState('');
  const [pin, setPin] = React.useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    const response = await fetch('http://localhost:3000/transfer', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        number,
        amount,
        pin,
      }),
    });

    if (response.status === 200) {
      // Transfer successful
    } else {
      // Transfer failed
    }
  };

  return (
    <>
      <Navbar />
      <div className="transfer-page">
        <form className="transfer-form" onSubmit={handleSubmit}>
          <div className="title">
            <h1>Transfer</h1>
          </div>
          <div className="form-input">
            <input
              className="input to"
              type="number"
              placeholder="To"
              name="number"
              onChange={(e) => setNumber(e.target.value)}
            />
            <input
              className="input pin"
              type="password"
              placeholder="PIN"
              name="pin"
              onChange={(e) => setPin(e.target.value)}
            />
            <input
              className="input amount"
              type="number"
              placeholder="Amount"
              name="amount"
              onChange={(e) => setAmount(e.target.value)}
            />
          </div>
          <button>transfer</button>
        </form>
      </div>
    </>
  );
};

export default Transfer;