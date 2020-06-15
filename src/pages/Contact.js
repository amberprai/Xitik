import React, { useState, useEffect } from 'react';
import { Input } from 'reactstrap';
import { v4 } from "uuid";
import "../allcss/contactcss.css"
import firebase from "firebase/app"
import { toast } from "react-toastify";

import { useHistory } from 'react-router-dom';
import 'firebase/database'


const Contact =() => {
  const history = useHistory();


  const [name, setName]= useState("")
  const [email, setEmail] = useState("")
  const [message, setmessage] = useState("")
  const [newTime, setnewTime] = useState("")

  //setting message to firebase DB
  const addMessage = async () =>{
    

    try{
      console.log("Hello")
      firebase
      .database()
      .ref("messages/"+ v4())
      .set({
        name,
        email,
        message,
        newTime
       })

      
    }
    catch(error){
      console.log(error)

    }
  }

  const handleSubmit = e => {
    e.preventDefault()
    addMessage();
    
    toast("Enquiry Submitted",{type:"success"});

     history.push("/");
  }
  useEffect(() => {
    const times= new Date();
    var fullTime  = times.getDate()+ "/" + (times.getMonth()+1) +"/" + times.getFullYear() + ", " + times.getHours() + ":" + times.getMinutes() + ":" +times.getSeconds()
    setnewTime(fullTime)

    }, [handleSubmit])



    return(
   <>
  <section id="contact-form" className="pr-5">
    <h2>Contact</h2>
  <form id="contact" name="contact" accept-charset="utf-8" onSubmit={handleSubmit}>
    <label><span>Name</span><input name="name" type="text" placeholder="Name" onChange={e => setName(e.target.value)}/></label>
    <label><span>Email</span><input name="email" type="email" placeholder="Email" onChange={e => setEmail(e.target.value)}/></label>
    <label><span>Message</span><textarea name="message" placeholder="Query" onChange={e => setmessage(e.target.value)}></textarea></label>
    <input name="submit" type="submit" value="Send"/>
  </form>
</section>
        </>
    )
}

export default Contact;