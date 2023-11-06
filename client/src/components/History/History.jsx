import { useEffect, useState } from 'react';
import './History.css';
import Navbar from '../Navbar/Navbar';

const History = () => {
  const [transactions, setTransactions] = useState([
    { id: 12222222333, type: 'Intra-Bank', amount: 50000, status: 'success' },
  ]);

  useEffect(() => {
    const fetchTransactions = async () => {
      const response = await fetch('localhost:3000/history');
      const data = await response.json();
      setTransactions(data);
    };

    fetchTransactions();
  }, []);

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
                <th>Date</th>
                <th>Type</th>
                <th>Amount</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((transaction) => (
                <tr key={transaction.id}>
                  <td>{transaction.date}</td>
                  <td>{transaction.type}</td>
                  <td>{transaction.amount}</td>
                  <td>{transaction.status}</td>
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
