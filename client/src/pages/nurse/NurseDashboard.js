import React from 'react';
import { Link } from 'react-router-dom';

const NurseDashboard = () => {
  return (
    <div className="nurse-dashboard">
      <h1>Nurse Dashboard</h1>
      <ul>
        <li>
          <Link to="/enter-vitals">Enter Vital Signs</Link>
        </li>
        <li>
          <Link to="/previous-visits">Access Previous Visit Information</Link>
        </li>
        <li>
          <Link to="/motivational-tips">Send Motivational Tips</Link>
        </li>
        <li>
          <Link to="/medical-conditions-list">Generate Medical Conditions List</Link>
        </li>
      </ul>
    </div>
  );
};

export default NurseDashboard;
