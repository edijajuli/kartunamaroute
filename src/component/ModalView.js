import React, { useState } from "react";
import { Button, Modal, ModalBody, Row, Col, CardImg } from "reactstrap"


const ModalView = (props) => {
  const [modal, setModal] = useState(props.modalShow);
  const datalength = props.user.length;
  const toggle = () => {
    setModal(!modal);
  }
  if (modal === true) {
    console.log(props.user);
  }

  return (
    <div>
      <Col className="text-center">
        <Button color="success" className="w-50 text-center" onClick={toggle}> Preview </Button>
      </Col>
      <Modal centered size="md" isOpen={modal} toggle={toggle} className={props.className}
        length={datalength} style={{ backgroundColor: "transparant" }}>

        {props.user.map((user) => (
          <ModalBody number={user.number} length={datalength} style={{ background: "transparant" }}>
            <Row className="p-3">
              <Col sm={4} className="align-self-center">
                <CardImg alt="avatar" className="img-fluid" src={user.photo} />
              </Col>
              <Col sm={8} className="bg-light p-3">
                <Row>
                  <Col sm={12} className="mb-4 text-center">
                    <h5 className="fw-bold mb-2">{user.name}</h5>
                    <p className="mb-0">{user.job}</p>
                  </Col>
                  <Col sm={4} className="mb-3">
                    <p className="mb-0">Birthdate</p>
                  </Col>
                  <Col sm={8} className="mb-3">
                    <p className="mb-0">: {user.birthdate}</p>
                  </Col>
                  <Col sm={4} className="mb-3">
                    <p className="mb-0">Gender</p>
                  </Col>
                  <Col sm={8} className="mb-3">
                    <p className="mb-0">: {user.gender}</p>
                  </Col>
                  <Col sm={4} className="mb-3">
                    <p className="mb-0">Religion</p>
                  </Col>
                  <Col sm={8} className="mb-3">
                    <p className="mb-0">: {user.religion}</p>
                  </Col>
                  <Col sm={4} className="mb-3">
                    <p className="mb-0">Phone</p>
                  </Col>
                  <Col sm={8} className="mb-3">
                    <p className="mb-0">: {user.phone}</p>
                  </Col>
                  <Col sm={4} className="mb-3">
                    <p className="mb-0">Email</p>
                  </Col>
                  <Col sm={8} className="mb-3">
                    <p className="mb-0">: {user.email}</p>
                  </Col>
                </Row>
              </Col>
            </Row>
          </ModalBody>
        ))}
      </Modal>
    </div>

  )
}
export default ModalView;