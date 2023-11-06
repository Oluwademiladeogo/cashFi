import { useEffect, useState } from 'react';
import './Dashboard.css';
const Dashboard = () => {
  //user cant access this page nor the backend service without having some sort of auth where isauth comes in then loading for a while to fetch auth info if not auth display a modal saying user not auth
  const [name, setName] = useState('name');
  const [balance, setBalance] = useState(0);
  useEffect(() => {
   const getDetails = async()=>{
    const response = fetch('localhost:3000/dashboard', () => {
      if (!response.ok) throw new Error('Failed to fetch data');
      setName(name);
      setBalance(balance);
    });
    getDetails()
   }
  }, []);
  return (
    <>
      <div className="dashboard-page">
        <div className="dashboard-heading">
          <div className="dashboard-heading-title">
            <h1>CashFi</h1>
          </div>
          <div className="dashboard-heading-body">
            <h1>
              Hi {name}, your current balance is {balance} NGN
            </h1>
            <span id="dashboard-heading-body-min">
              <h2> what do you want to do today?</h2>
            </span>
          </div>
        </div>

        <div className="dashboard-body">
          <div className="dashboard-link deposit">
            <a href="/deposit">deposit</a>
          </div>
          <div className="dashboard-link withdraw">
            <a href="/withdraw">withdraw</a>
          </div>

          <div className="dashboard-link transfer">
            <a href="/transfer">transfer</a>
          </div>
          <div className="dashboard-link history">
            <a href="/history">history</a>
          </div>
        </div>
      </div>
    </>
  );
};
export default Dashboard;
