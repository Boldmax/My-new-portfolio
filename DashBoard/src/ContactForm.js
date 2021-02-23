import React from 'react';
import { Form, Row, Button } from "react-bootstrap";
import useForm from "./useForm";
import Validate from "./validateInfo";

export default function ContactForm() {
const { handleChange, values, handleSubmit } = useForm(Validate);

    return (
        <div className="footer" id="contact">
            <div className="form">
                <h1>CONTACT ME</h1>
                <div className="form-body">
                <Form onSubmit= {handleSubmit}>
<Form.Row style={{ width: "25rem", display: "grid", paddingTop: "4rem" }} className="m-auto" onChange={handleChange} >
    <Row >
        <Form.Control name= "Name" value={values.name} className="form-line" placeholder="Name" onChange={handleChange} />
    </Row>
    
    <Row>
        <Form.Control name= "email" value={values.email} className="form-line" placeholder="Email" onChange={handleChange} />
    </Row>
    <Row>
        <Form.Control name= "PhoneNo" value={values.phoneNo} className="form-line" placeholder="Phone No." onChange={handleChange} />
    </Row>
    <Row>
        <Form.Control name= "subject" value={values.subject} className="form-line" placeholder="Subject" onChange={handleChange} />
    </Row>
    <Row>
        <Form.Control style={{ height: "5rem" }} name= "messages" value={values.messages} className="form-line" placeholder="Messages" onChange={handleChange} />
    </Row>
    <Button className="submit-btn" variant="primary" type="submit">CONTACT ME</Button>
</Form.Row>

</Form>

            </div>
            </div>
        </div>
    )
}
