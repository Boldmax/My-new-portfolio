export default function ValidateInfo(values){
    let error = {}

    if(!values.username) {
        error.username = "Name required"
    }

    if(!values.email.trim()) {
        error.email = "Email required"
    }else if(!/^[A-Z0-9._%-+]+@[A-Z0-9-]+\.[A-Z]{2,}$/i.test(values.email)){
        error.email = "Invalid Email"
    }

    if(!values.phoneNo){
        error.phoneNo = "Phone number required"
    }

    if(!values.subject){
        error.subject = "subject required"
    }

    if(!values.message){
        error.message = "message required"
    }
}