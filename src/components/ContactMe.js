import React, { useState, useEffect } from "react";
import "./ContactMe.css";
import { db } from "../firebase";

// Visit https://console.firebase.google.com/project/goa-porto-contact-form/firestore to check Contact Us Entries

const Contact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
  
    const [loader, setLoader] = useState(false);
  
    const handleSubmit = (e) => {
      e.preventDefault();
      setLoader(true);
  
      db.collection("contacts")
        .add({
          name: name,
          email: email,
          message: message,
        })
        .then(() => {
        
          alert("Your message has been submitted👍");
          setLoader(false);
        })
        .catch((error) => {
          alert(error.message);
          setLoader(false);
        });
  
      setName("");
      setEmail("");
      setMessage("");
    };
  
    return (
      <form className="form" onSubmit={handleSubmit}>
        <h1>Reach Out To Us!</h1>
  
        <label>Name</label>
        <input
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
  
        <label>Email</label>
        <input
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
  
        <label>Message</label>
        <textarea
          placeholder="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
  
        <button
          type="submit"
      
        >
          Submit
        </button>
      </form>
    );
  };
  
  export default Contact;