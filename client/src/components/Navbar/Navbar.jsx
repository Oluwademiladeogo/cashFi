import React from 'react';
import './Navbar.css'
import { useState, useEffect } from 'react';
const Navbar = () => {
  const [name, setName] = useState('name');
  const [balance, setBalance] = useState(0);
  const authToken = localStorage.getItem('authorization');
  useEffect(() => {
    const getDetails = async () => {
      const response = await fetch('https://cashfi.onrender.com/dashboard', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          authorization: authToken,
        },
      });
      const data = await response.json();
      if(!data) throw new Error;
      setName(data.name);
      setBalance(data.balance);
    };

    getDetails();
  }, []);

  return (
    <nav className="navbar">
      <div className="navbar-title">
        <h1>CashFI</h1>
      </div>
      <div className="navbar-links">
        <ul>
          <li><a href="/dashboard">Dashboard</a></li>
          <li><a href="/deposit">Deposit</a></li>
          <li><a href="/withdraw">Withdraw</a></li>
          <li><a href="/transfer">Transfer</a></li>
          <li><a href="/history">History</a></li>
        </ul>
      </div>
      <div className="navbar-user">
        <span>{name}</span>
        <span>{balance} NGN</span>
      </div>
    </nav>
  );
};

export default Navbar;