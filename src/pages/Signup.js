"use client";

import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Container, Row, Col, Card } from "react-bootstrap";
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
      <Row className="d-flex justify-content-center align-items-center vh-100">
        <Col xs={12} md={6} lg={4}>
          <Card className="shadow-lg border-0 rounded p-4">
            <Card.Body>
              <div className="text-center">
                <h2 className="fw-bold text-danger mb-4">Sign Up</h2>
              </div>
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
                  <Form>
                    <div className="mb-3">
                      <label htmlFor="num" className="form-label">
                        Number
                      </label>
                      <Field
                        type="text"
                        className="form-control shadow-sm"
                        id="num"
                        name="num"
                        placeholder="Enter Number"
                      />
                      <ErrorMessage
                        name="num"
                        component="div"
                        className="text-danger mt-1"
                      />
                    </div>

                    <div className="mb-3">
                      <label htmlFor="email" className="form-label">
                        Email
                      </label>
                      <Field
                        type="email"
                        className="form-control shadow-sm"
                        id="email"
                        name="email"
                        placeholder="Enter Email"
                      />
                      <ErrorMessage
                        name="email"
                        component="div"
                        className="text-danger mt-1"
                      />
                    </div>

                    <div className="mb-3">
                      <label htmlFor="password" className="form-label">
                        Password
                      </label>
                      <Field
                        type="password"
                        className="form-control shadow-sm"
                        id="password"
                        name="password"
                        placeholder="Enter Password"
                      />
                      <ErrorMessage
                        name="password"
                        component="div"
                        className="text-danger mt-1"
                      />
                    </div>

                    <div className="mb-3">
                      <label htmlFor="repassword" className="form-label">
                        Confirm Password
                      </label>
                      <Field
                        type="password"
                        placeholder="Re-Enter Password"
                        className="form-control shadow-sm"
                        id="repassword"
                        name="repassword"
                      />
                      <ErrorMessage
                        name="repassword"
                        component="div"
                        className="text-danger mt-1"
                      />
                    </div>

                    <div className="d-grid gap-2 mt-4">
                      <button
                        type="submit"
                        className="btn btn-success fw-bold shadow-sm"
                      >
                        Sign Up
                      </button>
                      <button
                        type="button"
                        onClick={() => deleteData(1)}
                        className="btn btn-danger fw-bold shadow-sm"
                      >
                        Delete
                      </button>
                    </div>
                  </Form>
                )}
              </Formik>
            </Card.Body>
          </Card>
        </Col>
      </Row>
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
    </Container>
  );
};

export default Signup;
