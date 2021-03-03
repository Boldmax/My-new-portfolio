import React from 'react';
//import { Form, Row, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
//import Validate from "./validateInfo";
import content from "./useForm";
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
        <div className="c-form" id="contact">
            <div className="form">
                <h1>CONTACT ME</h1>
                <div className="form-body">
                    <form className="form-display" onSubmit= {handleSubmit(onSubmit)}>
                        {content.inputs.map((input, key) => {
                            return (
                               <div  key={key}>
                                    <p className="form-line">
                                <input
                                    type="text"
                                    name={input.name}                                   
                                    placeholder={input.placeholder}
                                    ref={register}
                                />
                                </p>
                                <p className="error-message">{errors.[input.name]?.message}</p>
                                </div>
                            )
                        })}
                        <textarea name="message"  ref={register} className="form-line"></textarea>
                        <p className="error-message">{errors.message?.message}</p>
                         <input className="submit-btn" type="submit" value="Submit" />
                         

                    </form>
                </div>
            </div>
        </div>
    )
}
