import React from 'react';
import { Form, Row, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
//import Validate from "./validateInfo";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
    Name: yup.string().required(),
    email: yup.string().required("please enter a valid Email Address").email(),
    PhoneNo: yup.number(),
    subject: yup.string().required(),
    message: yup.string().required("kindly enter your messages"),
})

export default function ContactForm() {
const { register, errors, handleSubmit } = useForm({
    resolver: yupResolver(schema),
});
const onSubmit = (data) => console.log(data);
console.log(errors)
    return (
        <div className="footer" id="contact">
            <div className="form">
                <h1>CONTACT ME</h1>
                <div className="form-body">
                <Form onSubmit= {handleSubmit(onSubmit)}>
<Form.Row style={{ width: "25rem", display: "grid", paddingTop: "4rem" }} className="m-auto" >
    <Row >
        <Form.Control name= "Name" ref={register}  className="form-line text-light" placeholder="Name" />
        <Form.Text className="error-message">{errors.Name?.message}</Form.Text> 
    </Row>
    
    <Row>
        <Form.Control name= "email" ref={register}  className="form-line text-light" placeholder="Email"  />
        <Form.Text className="error-message">{errors.email?.message}</Form.Text>
    </Row>
    <Row>
        <Form.Control name= "PhoneNo" ref={register}  className="form-line text-light" placeholder="Phone No."  />
        <Form.Text className="error-message">{errors.PhoneNo?.message}</Form.Text>
    </Row>
    <Row>
        <Form.Control name= "subject" ref={register}  className="form-line text-light" placeholder="Subject"  />
        <Form.Text className="error-message">{errors.subject?.message}</Form.Text>
    </Row>
    <Row>
        <Form.Control style={{ height: "5rem" }} name= "messages" ref={register}  className="form-line text-light" placeholder="Messages" />
        <Form.Text className="error-message">{errors.message?.message}</Form.Text>
    </Row>
    <Button className="submit-btn" variant="primary" type="submit">CONTACT ME</Button>
</Form.Row>

</Form>

            </div>
            </div>
        </div>
    )
}
