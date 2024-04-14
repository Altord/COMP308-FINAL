import React from 'react';
import { Link } from 'react-router-dom';

const PatientDashboard = () => {
  return (
    <div className="patient-dashboard">
      <h1>Patient Dashboard</h1>
      <ul>
        <li>
          <Link to="/emergency-alert">Create Emergency Alert</Link>
        </li>
        <li>
          <Link to="/fitness-games">Access Fitness Games</Link>
        </li>
        <li>
          <Link to="/daily-info">Enter Daily Information</Link>
        </li>
        <li>
          <Link to="/symptoms-checklist">Symptoms Checklist</Link>
        </li>
      </ul>
    </div>
  );
};

export default PatientDashboard;
