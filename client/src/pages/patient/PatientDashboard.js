import React from "react";
import CovidChecklist from "../../components/patient/CovidChecklist";
import PatientNavbar from "../../components/patient/PatientNavbar";
import "bootstrap/dist/css/bootstrap.min.css";
import EmergencyAlert from "../../components/patient/EmergencyAlert";
import DailyChecklist from "../../components/patient/DailyChecklist";
import FitnessGames from "../../components/patient/FitnessGames";

const PatientDashboard = () => {
  return (
    <div className="patient-dashboard">
      <PatientNavbar />
      <CovidChecklist />
      {/* <EmergencyAlert /> */}
      {/* <DailyChecklist /> */}
      {/* <FitnessGames /> */}
    </div>
  );
};

export default PatientDashboard;
