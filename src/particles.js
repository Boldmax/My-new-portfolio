<Form onSubmit= {handleSubmit(onSubmit)}>
<Form.Row style={{ width: "25rem", display: "grid", paddingTop: "4rem" }} className="m-auto" >
    <Row >
        <Form.Control name= "Name" ref={register}  className="form-line text-light" placeholder="Name" />
        <Form.Text className="error-message"></Form.Text> 
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




<input
 type="email" 
 name="email" 
 className="form-line"
 placeholder="Email"
 value={values.email} 
 onChange={handleChange} 
 />
<input 
type="number" 
name="PhoneNo" 
className="form-line"
placeholder="Phone Number"
value={values.phoneNo} 
onChange={handleChange}                
/>
<input 
type="text" 
name="subject" 
className="form-line"
placeholder="Subject"
value={values.subject} 
onChange={handleChange}                
/>
    
   
