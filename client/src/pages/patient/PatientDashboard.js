import React from "react";
import { Outlet } from "react-router-dom";
import PatientNavbar from "../../components/patient/PatientNavbar";

const PatientDashboard = () => {
  return (
    <div className="patient-dashboard">
      <PatientNavbar />
      <Outlet />
    </div>
  );
};

export default PatientDashboard;
