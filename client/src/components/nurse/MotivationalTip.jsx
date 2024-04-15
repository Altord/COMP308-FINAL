import React, { useState } from 'react';
import axios from "axios";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";


function SendMotivationalTipForm(){
    const [tipText, setTipText] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          await axios.post("http://localhost:4000/tips", { tipText });
          alert("Motivational tip sent successfully");
        } catch (error) {
          console.error("Error sending tip:", error.message);
          alert("Failed to send motivational tip");
        }
    };

    const handleChange = (e) => {
        setTipText(e.target.value);
    };
    

    return (
        <div style={{ marginTop: '20px' }}>
        <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formTipText">
                <Form.Label>Tip Text:</Form.Label>
                <Form.Control
                    as="textarea"
                    rows={3}
                    value={tipText}
                    onChange={handleChange}
                    placeholder="Enter your motivational tip here..."
                />
            </Form.Group>
            <Button variant="primary" type="submit">
                Send
            </Button>
        </Form>
        </div>
    );
};

export default SendMotivationalTipForm;

