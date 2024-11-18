import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer } from "react-toastify";
import MainLayOut from "../../Layout/MainLayOut";
import { Container } from "react-bootstrap";

function Contact() {
  const [value, setValue] = useState();
  const forms = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_2cer1wn", "template_xpburnt", forms.current, {
        publicKey: "U0vN6ww9BrU7Y_JSF",
      })
      .then(
        () => {
          toast.success("Your message has been sent successfully!");
        },
        (error) => {
          toast.error("Failed to send message. Please try again.");
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <>
      <MainLayOut>
        <Container>
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
          <div className="text-center h3">Ask Me Any Questions</div>
          <Form ref={forms} onSubmit={sendEmail}>
            <Form.Group className="mb-3" controlId="user_name">
              <Form.Control
                name="user_name"
                type="text"
                className="my-3 p-3"
                placeholder="Enter Name"
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="user_email">
              <Form.Control
                name="user_email"
                type="email"
                placeholder="Enter email"
                className="p-3"
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="user_password">
              <Form.Control
                name="user_password"
                type="password"
                placeholder="Password"
                className="my-3 p-3"
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="user_phone">
              <PhoneInput
                placeholder="Enter phone number"
                className="my-3 w-100"
                name="user_phone"
                value={value}
                defaultCode="IN"
                defaultCountry="IN"
                keyboardType="phone-pad"
                onChange={setValue}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="message">
              <Form.Control
                name="message"
                as="textarea"
                rows={5}
                placeholder="Your Message"
                className="my-3 p-3"
                required
              />
            </Form.Group>

            <Button variant="success px-4 py-2 fs-5 " type="submit">
              Submit
            </Button>
          </Form>
        </Container>
      </MainLayOut>
    </>
  );
}

export default Contact;
