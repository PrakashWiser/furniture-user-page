"use client";

import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Container } from "react-bootstrap";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const Signup = () => {
  const navigate = useNavigate();

  const validationSchema = Yup.object().shape({
    num: Yup.string().required("Number is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
    repassword: Yup.string()
      .oneOf([Yup.ref("password")], "Passwords must match")
      .required("Confirm Password is required"),
  });

  const handleSubmit = (values, { resetForm }) => {
    const { num, email, password } = values;

    axios
      .post("https://66f0f85341537919154f06e7.mockapi.io/signup", {
        num,
        email,
        password,
      })
      .then(() => {
        toast.success("Signup successful");
        resetForm();
        navigate("/Signin");
      })
      .catch(() => toast.error("Error signing up"));
  };

  const deleteData = (id) => {
    axios
      .delete(`https://66f0f85341537919154f06e7.mockapi.io/signup/${id}`)
      .then(() => toast.success("Data deleted successfully"))
      .catch(() => toast.error("Error deleting data"));
  };

  return (
    <Container>
      <div className="d-flex flex-column justify-content-center align-items-center vh-100 text_white">
        <h1 className="fw-bold text-danger">Sign Up</h1>

        <Formik
          initialValues={{
            num: "",
            email: "",
            password: "",
            repassword: "",
          }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {() => (
            <Form className="with_tybe">
              <div className="mb-3">
                <label htmlFor="Number" className="form-label">
                  Number
                </label>
                <Field
                  type="text"
                  className="form-control"
                  id="Number"
                  name="num"
                  placeholder="Enter Number"
                />
                <ErrorMessage
                  name="num"
                  component="div"
                  className="text-danger"
                />
              </div>

              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <Field
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  placeholder="Enter Email"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-danger"
                />
              </div>

              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <Field
                  type="password"
                  className="form-control"
                  id="password"
                  name="password"
                  placeholder="Enter Password"
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="text-danger"
                />
              </div>

              <div className="mb-3">
                <label htmlFor="repassword" className="form-label">
                  Confirm Password
                </label>
                <Field
                  type="password"
                  placeholder="Re-Enter Password"
                  className="form-control"
                  id="repassword"
                  name="repassword"
                />
                <ErrorMessage
                  name="repassword"
                  component="div"
                  className="text-danger"
                />
              </div>

              <div className="d-flex justify-content-between my-4">
                <button
                  type="submit"
                  className="btn btn-warning fw-bold px-4 text-white"
                >
                  Sign up
                </button>
                <button
                  type="button"
                  onClick={() => deleteData(1)} // Replace "1" with the appropriate ID
                  className="btn btn-danger fw-bold px-4"
                >
                  Delete
                </button>
              </div>
            </Form>
          )}
        </Formik>

        <ToastContainer
          position="top-left"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </div>
    </Container>
  );
};

export default Signup;
