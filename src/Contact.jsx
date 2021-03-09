import React, { useState } from "react";

const Contact = () => {
    const[item,setItem] = useState({
        fname : "",
        lname : "",
        phone : "",
        email : "",
        message : ""
    });
    const showDetails=()=>{
        alert(` Details Entered Are :- 
                My full name is = ${item.fname} ${item.lname} , 
                My phone number is = ${item.phone} , 
                My E-mail is = ${item.email} , 
                Message is = ${item.message}`
            );
    }
    const inputEvent=(event)=>{
        const{name,value}=event.target;
        setItem((oldval)=>{
            return{
                ...oldval,
                [name]:value  
            };
        });

    }
    const onSubmits=(event)=>{
        event.preventDefault();
    }

    return (
        <>
            <div className="my-3">
                <h1 className="text-center">Contact Us ☎️</h1>
            </div>
            <div className="container contact_div">
                <div className="row">
                    <div className="col-md-6 col-10 mx-auto mb-5">
                        <form onSubmit={onSubmits}>
                            <div className="mb-3">
                                <label for="firstname" className="form-label">First Name</label>
                                <input 
                                name="fname"
                                value={item.fname}
                                onChange={inputEvent}
                                type="text" 
                                className="form-control" 
                                id="firstname" 
                                />
                            </div>
                            <div className="mb-3">
                                <label for="lastname" className="form-label">Last Name</label>
                                <input 
                                name="lname"
                                value={item.lname}
                                onChange={inputEvent}
                                type="text" 
                                className="form-control" 
                                id="lastname" 
                                />
                            </div>
                            <div className="mb-3">
                                <label for="phonenumber" className="form-label">Phone No.</label>
                                <input 
                                name="phone"
                                value={item.phone}
                                onChange={inputEvent}
                                type="tel" 
                                className="form-control" 
                                id="phonenumber"
                                />
                            </div>
                            <div className="mb-3">
                                <label for="email" className="form-label">E-Mail</label>
                                <input 
                                name="email"
                                value={item.email}
                                onChange={inputEvent}
                                type="email" 
                                className="form-control" 
                                id="email" 
                                />
                            </div>
                            <div className="mb-3">
                                <label for="message" className="form-label">Message</label>
                                <textarea 
                                rows="3" 
                                className="form-control"
                                name="message"
                                value={item.message}
                                onChange={inputEvent}
                                >
                                </textarea>
                            </div>
                            <button onClick={showDetails} type="submit" className=" mb-3 btn btn-outline-primary">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Contact;