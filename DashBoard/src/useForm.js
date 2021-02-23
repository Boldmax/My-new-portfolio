import  { useState } from 'react';


export default function useForm(validate) {
const [ values, setValues] = useState({
    username: "",
    email: "",
    phonoNo: "",
    subject: "",
    messages: ""
})
const [error, setErrors] = useState({})

function handleChange(e){
    const { name, value } = e.target;
    setValues({
        ...values,
        [name] : value
    })
};
const handleSubmit = e => {
    e.preventDefault();

    setErrors(validate(values));
}
    return { handleChange, values, handleSubmit, error }
}
