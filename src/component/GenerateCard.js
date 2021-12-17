import React, { useState } from "react";
import { Container, Col } from "reactstrap";
import InputForm from "./InputForm";
import ModalPreview from "./ModalView";

function GenerateCard() {
    const [userData, setUserData] = useState([]);
    const [modalShow, setModalShow] = useState(false);
    const [number, setNumber] = useState(0);

    // Gather data from Form component and set modalShow to true
    const handleSubmitData = (userData) => {
        setUserData((prevState) => {
            return [
                ...prevState,
                {
                    ...userData,
                    number: String(number),
                },
            ];
        });
        setNumber(number + 1);
        setModalShow(true);
    };

    const handleResetData = () => {
        setUserData([]);
    };

    console.log(modalShow);
    console.log(userData);

    return (
        <Container fluid className="py-5 bg-light">
            <div
                className="mx-auto my-5 bg-primary rounded-3 border p-5 text-light"
                style={{
                    width: "50%",
                }}
            >
                <InputForm submitData={handleSubmitData} />
                <Col className="text-center">
                    <button className="btn btn-danger w-50 mb-3" onClick={handleResetData}>
                        Reset Data
                    </button>
                </Col>
                {modalShow && <ModalPreview user={userData} />}
            </div>
        </Container>
    );
}

export default GenerateCard;