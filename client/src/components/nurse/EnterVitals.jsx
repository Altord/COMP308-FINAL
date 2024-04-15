import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function EnterVitalSigns() {
    const [userId, setUserID] = useState("");
    const [bodyTemperature, setBodyTemperature] = useState('');
    const [heartRate, setHeartRate] = useState('');
    const [bloodPressure, setBloodPressure] = useState('');
    const [respiratoryRate, setRespiratoryRate] = useState('');
    const [users, setUsers] = useState([]);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            const data = {
                userId: userId,
                bodyTemperature: bodyTemperature,
                heartRate: heartRate,
                bloodPressure: bloodPressure,
                respiratoryRate: respiratoryRate
            };
            const response = await axios.post("http://localhost:4000/vitalSigns/add-vital", data);
            console.log("response: ", response);
            if (response.status === 201) {
                alert("Vital Signs added successfully");
                navigate("/pages/nurse/NurseDashboard");
            } else {
                alert("Failed to add");
            }
        } catch (error) {
            console.error("Error:", error.message);
            alert("Failed to add");
        }
    };
    
    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get("http://localhost:4000/user");
                setUsers(response.data);
            } catch (error) {
                console.error("Error fetching users:", error);
            }
        };
        fetchUsers();
    }, []);

    return (
        <div className="assignments-container">
            <h2>Add Vital</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group>
                    <Form.Label>Patient ID</Form.Label>
                    <Form.Control
                        as="select"
                        value={userId}
                        onChange={(e) => setUserID(e.target.value)}
                        required
                    >
                        <option value="">Select Patient</option>
                        {users.map((user) => (
                            <option key={user._id} value={user._id}>
                                {user.username}
                            </option>
                        ))}
                    </Form.Control>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Body Temperature</Form.Label>
                    <Form.Control
                        type="number"
                        value={bodyTemperature}
                        onChange={(e) => setBodyTemperature(e.target.value)}
                        step="1"
                        min="50"
                        max="150"
                        required
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Heart Rate</Form.Label>
                    <Form.Control
                        type="number"
                        value={heartRate}
                        onChange={(e) => setHeartRate(e.target.value)}
                        step="1"
                        min="50"
                        max="150"
                        required
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Blood Pressure</Form.Label>
                    <Form.Control
                        type="number"
                        value={bloodPressure}
                        onChange={(e) => setBloodPressure(e.target.value)}
                        step="1"
                        min="50"
                        max="150"
                        required
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Respiratory Rate</Form.Label>
                    <Form.Control
                        type="number"
                        value={respiratoryRate}
                        onChange={(e) => setRespiratoryRate(e.target.value)}
                        step="1"
                        min="50"
                        max="150"
                        required
                    />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Save
                </Button>
            </Form>
        </div>
    );
}

export default EnterVitalSigns;
