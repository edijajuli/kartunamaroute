import "@coreui/coreui/dist/css/coreui.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Col, Form, Input, Label, FormGroup, Container } from "reactstrap";
import React, { useState } from "react";
import "./InputForm.css";

function InputForm(props) {
    const [name, setName] = useState("");
    const handleName = (e) => {
        setName(e.target.value);
    }

    const [job, setJob] = useState("");
    const handleJob = (e) => {
        setJob(e.target.value);
    }

    const [birthdate, setBirthdate] = useState("");
    const handleBirthdate = (e) => {
        setBirthdate(e.target.value);
    }

    const [gender, setGender] = useState("");
    const handleGender = (e) => {
        setGender(e.target.value);
    }

    const [religion, setReligion] = useState("");
    const handleReligion = (e) => {
        setReligion(e.target.value);
    }

    const [phone, setPhone] = useState("");
    const handlePhone = (e) => {
        setPhone(e.target.value);
    }

    const [email, setEmail] = useState("");
    const handleEmail = (e) => {
        setEmail(e.target.value);
    }

    const [photo, setPhoto] = useState("");
    const handlePhoto = (e) => {
        if (e.target.files.length > 0) {
            let src = URL.createObjectURL(e.target.files[0]);
            setPhoto(src);
        }

    }
    function handleSubmit(event) {
        event.preventDefault();

        const user = {
            name: name,
            job: job,
            birthdate: birthdate,
            gender: gender,
            religion: religion,
            phone: phone,
            email: email,
            photo: photo,
        };
        props.submitData(user);
    }

    return (
        <div>
            <Container>
                <Form className="needs-validation mb-2" onSubmit={handleSubmit}>
                    <h4 className="mb-4 text-center">Data Form</h4>
                    <FormGroup row>
                        <Label for="name" sm={4}> Name </Label>
                        <Col sm={8}>
                            <Input id="name" name="name" type="text" placeholder="Enter your name" onChange={handleName} />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="job" sm={4}> Job </Label>
                        <Col sm={8}>
                            <Input id="job" name="job" type="text" placeholder="Enter your job" onChange={handleJob} />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="birthdate" sm={4}> Birthdate </Label>
                        <Col sm={8}>
                            <Input type="date" id="ttl" name="birthdate" onChange={handleBirthdate} />
                        </Col>
                    </FormGroup>
                    <FormGroup row tag="fieldset">
                        <legend className="col-form-label col-sm-4 text-start">Gender</legend>
                        <Col sm={8}>
                            <FormGroup check className="text-start">
                                <Input name="gender" type="radio" value="Male" onChange={handleGender} />
                                <Label check>Male</Label>
                            </FormGroup>
                            <FormGroup check className="text-start">
                                <Input name="gender" type="radio" value="Female" onChange={handleGender} />
                                <Label check> Female</Label>
                            </FormGroup>
                        </Col>
                        <FormGroup row>
                            <Label for="religion" sm={4}> Religion </Label>
                            <Col sm={8}>
                                <Input id="religion" name="religion" type="select" onChange={handleReligion}>
                                    <option value="Budha"> Budha </option>
                                    <option value="Hindu"> Hindu </option>
                                    <option value="Kristen"> Kristen </option>
                                    <option value="Katolik"> Katolik </option>
                                    <option value="Islam"> Islam </option>
                                    <option value="lainnya"> Lainnya </option>
                                </Input>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label for="phone" sm={4}>Phone</Label>
                            <Col sm={8}>
                                <Input id="phone" name="phone" type="integer" placeholder="Enter your number" onChange={handlePhone} />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label for="email" sm={4}> Email </Label>
                            <Col sm={8}>
                                <Input id="email" name="email" type="email" placeholder="Enter your email" onChange={handleEmail} />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label for="foto" sm={4}> Photo </Label>
                            <Col sm={8}>
                                <Input id="foto" name="foto" type="file" onChange={handlePhoto} />
                            </Col>
                        </FormGroup>
                        <Col className="text-center mt-3">
                            <Button color="dark w-50" > Submit </Button>
                        </Col>
                    </FormGroup>
                </Form>
            </Container>
        </div>
    )
}

export default InputForm;