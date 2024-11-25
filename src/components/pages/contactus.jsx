import React, { useState } from "react";
import { Lottie } from "../hooks/lottie/lottie";
import emailjs from "emailjs-com";
import RegistrationForm from "./RegistrationForm";
const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceID = "service_r1dvjqg"; 
    const templateID = "template_ochgjah";
    const userID = "eUMkHS1YtRueH6YcM"; 

    emailjs
      .send(serviceID, templateID, formData, userID)
      .then(
        (response) => {
          setStatus("Message Delivered Successfully!");
          setFormData({
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            message: "",
          });
        },
        (error) => {
          setStatus("Failed to Contact. Please try again.");
        }
      );
  };

  return (
    <>
   
      <RegistrationForm/>
    </>
  );
};

export default ContactForm;
