import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ViewVitals() {
    const [vitals, setVitals] = useState([]);

    useEffect(() => {
        const fetchVitals = async () => {
            try {
                const response = await axios.get('http://localhost:4000/vitalSigns');
                setVitals(response.data);
            } catch (error) {
                console.error('Error fetching vitals:', error);
            }
        };
        fetchVitals();
    }, []);

    return (
        <div>
            <h2>View Vitals</h2>
            {vitals.map(vital => (
                <div key={vital._id} style={{ marginBottom: '20px' }}>
                    <h4>Patient ID: {vital.userId}</h4>
                    <p>Body Temperature: {vital.bodyTemperature}</p>
                    <p>Heart Rate: {vital.heartRate}</p>
                    <p>Blood Pressure: {vital.bloodPressure}</p>
                    <p>Respiratory Rate: {vital.respiratoryRate}</p>
                    <p>Timestamp: {vital.timestamp}</p>
                </div>
            ))}
        </div>
    );
}

export default ViewVitals;
