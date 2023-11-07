import { useEffect, useState } from 'react';
import './History.css';
import Loading from '../Loading/Loading';
import Error from '../Error/Error';
import Navbar from '../Navbar/Navbar';
const History = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [access, setAccess] = useState(true);
  const [transactions, setTransactions] = useState([]);
  const [err, setError] = useState({
    status: '200',
    message: 'Success',
  });

  const authToken = localStorage.getItem('authorization');

  useEffect(() => {
    const getDetails = async () => {
      const response = await fetch('http://localhost:3000/history', {
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
      } else {
        setTransactions(data);
      }

      setIsLoading(false);
    };

    getDetails();
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  if (!access) {
    return <Error status={err.status} message={err.message} />;
  }

  return (
    <>
      <Navbar />
      <div className="history-page">
        <div className="history-heading">
          <h1>Transaction History</h1>
        </div>

        <div className="history-body">
          <table className="history-table">
            <thead>
              <tr>
                <th>Message</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((transaction) => (
                <tr key={transaction}>
                  <td>{transaction}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default History;
