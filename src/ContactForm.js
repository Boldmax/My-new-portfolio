/* import { useForm } from "react-hook-form"; */
/* import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup"; */
import content from "./useForm";
import emailjs from 'emailjs-com';

/* const schema = yup.object().shape({
    Name: yup.string().required(),
    email: yup.string().required("please enter a valid Email Address").email(),
    PhoneNo: yup.number(),
    subject: yup.string().required(),
    message: yup.string().required("kindly enter your messages"),
}) */

export default function ContactForm() {
    /*   const { register, errors, handleSubmit } = useForm({
          resolver: yupResolver(schema),
      }); */
    /* const onSubmit = (data) => {       
        console.log(data)
    };
    console.log(errors) */
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm("service_ox22jck", "template_yf7xhit", e.target, "user_UJF0kDRVsV7SVc9uGYvlu")
            .then(res => {
                console.log(res)
            }).catch(err => console.log(err));
    }

    return (
        <div className="c-form" id="contact">
            <h1>CONTACT ME</h1>
            <form className="form-display" onSubmit={sendEmail} /* {handleSubmit(onSubmit)} */>
                {content.inputs.map((input, key) => {
                    return (
                        <div key={key}>
                            <input
                                type="text"
                                name={input.name}
                                placeholder={input.placeholder}
                                /* ref={register} */
                                required='required'
                            />
                            <p className="error-message">{/* {errors[input.name]?.message} */}</p>
                        </div>
                    )
                })}
                <textarea rows="4" maxLength='500' required='required' name="message" /* ref={register} */ placeholder="message" />
                <p className="error-message">{/* {errors.message?.message} */}</p>
                <input className="submit-btn" type="submit" value="Submit" />

            </form>
        </div>
    )
}
