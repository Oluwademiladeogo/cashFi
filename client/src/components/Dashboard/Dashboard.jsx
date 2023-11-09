import { useEffect, useState } from 'react';
import './Dashboard.css';
import Loading from '../Loading/Loading';
import Error from '../Error/Error';
const Dashboard = () => {
  const [name, setName] = useState('name');
  const [balance, setBalance] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [access, setAccess] = useState(true);
  const [err, setError] = useState({
    status: '200',
    message: 'Success',
  });
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
      if (!response.ok) {
        setAccess(false);
        setError({
          status: response.status,
          message: response.statusText,
        });
      }

      setName(data.name);
      setBalance(data.balance);
      setIsLoading(false);
    };

    getDetails();
  }, []);

  if (isLoading) {
    return <Loading />;
  }
  setTimeout(() => {
    if (!access) {
      window.location.href = '/login';
    }
  }, 4000);
  if (!access) {
    return <Error status={err.status} message={err.message} />;
  }

  return (
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
  );
};

export default Dashboard;
