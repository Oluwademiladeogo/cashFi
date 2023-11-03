import { useEffect, useState } from 'react';
import "./Dashboard.css"
const Dashboard = () => {
  //user cant access this page nor the backend service without having some sort of auth where isauth comes in then loading for a while to fetch auth info if not auth display a modal saying user not auth
  const [name, setName] = useState('');
//   useEffect(()=>{
//     fetch("localhost:3000/dashboard", ()=>{

//     })
//   }, [])
  return (
    <>
      <div className="dashboard-page">
        <div className="dashboard-heading">
          <div className="dashboard-heading-title"><h1>CashFi Dashboard</h1></div>
          Hi {name}, what do you want to do today?
        </div>
        <div className="dashboard-body">
          <div className="withdraw">
            <a href="/withdraw">withdraw</a>
          </div>
          <div className="deposit">
            <a href="/deposit">deposit</a>
          </div>
          <div className="history">
            <a href="/history">history</a>
          </div>
        </div>
      </div>
    </>
  );
};
export default Dashboard;
// how do you only allow bootstrap to access one component of your react app