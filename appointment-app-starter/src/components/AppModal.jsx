import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import Modal from "react-bootstrap/Modal";

const AppModal = ({ show, handleClose }) => {
  const [firstName, setFirstName] = useState("");
  const [date, setDate] = useState(new Date().toISOString().slice(0,10));
// *   toISOString(bu fonksiyon , yıl , ay , gün olarak yazdrıyor. ) 
  console.log(date)
  const handleSubmit = (e)=>{
    e.preventDefault()
    handleClose()

  }

  //  console.log(date);
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Appointment for Dr. </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="name">
              <Form.Label>Patient Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your name"
                onChange={(e) => setFirstName(e.target.value)}
                value={firstName}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="date">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="date"
                placeholder="date"
                onChange={(e) => setDate(e.target.value)}
                value={date}
              />
            </Form.Group>
            <div className="text-center ">
              <Button className="me-2" variant="success" onClick={handleClose}>
                Submit
              </Button>
              <Button variant="danger" onClick={handleClose}>
                Close
              </Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default AppModal;
