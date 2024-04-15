import React from "react";
import CovidChecklist from "../../components/patient/CovidChecklist";
import PatientNavbar from "../../components/patient/PatientNavbar";
import "bootstrap/dist/css/bootstrap.min.css";

const PatientDashboard = () => {
  return (
    <div className="patient-dashboard">
      <PatientNavbar />
      <CovidChecklist />
    </div>
  );
};

export default PatientDashboard;
