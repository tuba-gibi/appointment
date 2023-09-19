import Container from "react-bootstrap/Container";
import { doctorData } from "../helper/data";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import AppModal from "./AppModal";
import { useState } from "react";
const Doctors = () => {
  const [show, setShow] = useState(false);
 
  return (
    <Container className="p-2">
      <h3 className="display-6 mb-3" style={{ color: "rgb(166, 18, 189)" }}>
        Our Doctors
      </h3>
      <Row>
        {doctorData.map(({ id, name, dep, img }) => {
          return (
            <Col xs={6} sm={4} md={3} lg={2} key={id}>
              <img
                onClick={()=> setShow(true)}
                className="img-thumbnail doctor-img"
                src={img}
                alt={name}
              />
              <h5 className="mt-2">{name}</h5>
              <h6>{dep}</h6>
            </Col>
          );
        })}
      </Row>
      <AppModal show={show} handleClose={()=> setShow(false)} />
    </Container>
  );
};

export default Doctors;
