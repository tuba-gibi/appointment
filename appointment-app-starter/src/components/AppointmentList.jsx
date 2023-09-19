import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/esm/Col";
import { AiOutlineDelete } from "react-icons/ai";
import Row from "react-bootstrap/Row";

const AppointmentList = ({ apps }) => {
  console.log(apps);
  return (
    <Container className="p-2">
      {apps.map(({ id, patient, consulted, doctor, day }) => {
        return(
          <div
          key={id}
          className={consulted ? "appointments consulted" : "appointments"}
        >
          <Row className="justify-content-center align-items-center">
            <Col xs={12} sm={12} md={6}  >
              <h4>{patient}</h4>
              <h4>{doctor} </h4>
            </Col>
            <Col>{day}</Col>
            <Col>
              <AiOutlineDelete className="text-danger fs-4" />
            </Col>
          </Row>
        </div>
        )
      })}
    </Container>
  );
};

export default AppointmentList;
