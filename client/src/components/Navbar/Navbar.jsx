import React from 'react';
import './Navbar.css'
import { useState, useEffect } from 'react';
const Navbar = () => {
  // Fetch the user's name and balance from the backend
  const [name, setName] = useState('Name');
  const [balance, setBalance] = useState(0.0);
  useEffect(() => {
    const getDetails = async()=>{
        const response = fetch('localhost:3000/user');
    if (response.ok) {
      const user = await response.json();
      setName(user.name);
      setBalance(user.balance);
    }
    }
    getDetails()
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