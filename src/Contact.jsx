import React, { useState }  from 'react';




const Contact=()=> {
  const[data,setData]=useState({
    firstname:'',
    lastname:'',
    mobilenumber:'',
    email:'',
    msg:'',
  });
  
    const InputEvent=(event)=>{
      const {name,value}=event.target;
      setData((preVal)=>{
        return {
          ...preVal,
          [name]:value,
        };
      });
    }; 
    const formSubmit=(e)=>{
      e.preventDefault();
      alert(`My First Name is ${data.firstname}.My Last name is ${data.lastname}. My Mobile Number is ${data.mobilenumber}`);
      }
  return (
    <>

    
  <div className="my-5">
  <h1 className="text-center">Contact Us</h1>
  </div>
  <div className="container contact_div">
    <div className="row">
     <div className="col-md-6 col-10 mx-auto">
     <form>
     <div class="mb-2">
       <label for="exampleFormControlInput1" class="form-label">First Name</label>
       <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="First Name"
         name="firstname"
         value={data.firstname}
         onChange={InputEvent}
       />
     </div>
     <div class="mb-2">
       <label for="exampleFormControlInput1" class="form-label">Last Name</label>
       <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Last Name"
         name="lastname"
         value={data.lastname}
         onChange={InputEvent}
       />
     </div>
     <div class="mb-2">
       <label for="exampleFormControlInput1" class="form-label">Mobile Number</label>
       <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Type Your Number "
         name="mobilenumber"
         value={data.mobilenumber}
         onChange={InputEvent}
       />
     </div>
     <div class="mb-2">
       <label for="exampleFormControlInput1" class="form-label">Email address</label>
       <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Email Id"
         name="email"
         value={data.email}
         onChange={InputEvent}
       />
     </div>
     <div class="mb-2">
       <label for="exampleFormControlTextarea1" class="form-label">Message</label>
       <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"
       name="message"
         value={data.message}
         onChange={InputEvent}
       ></textarea>
     </div>
     <div class="col-12 mb-4">
    <button onClick={formSubmit} class="btn btn-outline-primary" type="submit">Submit form</button>
     </div>

     </form>




      </div>
    </div>
  </div>
</>
    
  )
}
export default Contact;
