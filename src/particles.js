const ref = React.useRef();
ref={ref}

<form className="form-display" onSubmit={handleSubmit}>             
<input
 type="text"
 name="username"
 className="form-line"
 placeholder="Name"
 value={values.username}
 onChange={handleChange}
 />

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
    
    <input className="submit-btn" type="submit" value="Submit" />
</form>