"use client";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import { useNavigate,Link} from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Container } from "react-bootstrap";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const Login = () => {
  const [apiData, setApiData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("https://66f0f85341537919154f06e7.mockapi.io/signup")
      .then((response) => setApiData(response.data))
      .catch(() => toast.error("Error fetching user data"));
  }, []);

  const validationSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });

  const handleSubmit = (values) => {
    const { email, password } = values;
    const user = apiData.find((item) => item.email === email);
    if (!user) {
      toast.error("Email not found. Please register first.");
      navigate("/Signup");
      return;
    }

    if (password !== user.password) {
      toast.warning("Incorrect password. Please try again.");
      return;
    }

    toast.success("Login successful");
    localStorage.setItem("userData", JSON.stringify(user));
    navigate("/");
  };
 
  
  return (
    <Container>
      <div className="d-flex flex-column justify-content-center align-items-center vh-100 text-white">
        <a href="https://github.com/prakashwiser/"></a>
        <h1 className="fw-bold text-success py-4">Sign in</h1>

        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form className="with_tybe">
              <div className="mb-3">
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

              <div className="d-flex justify-content-between mt-4">
                <button
                  type="submit"
                  className="btn btn-primary fw-bold"
                  disabled={isSubmitting}
                >
                  Sign in
                </button>
                <Link
                  href="/Signup"
                  className="btn btn-primary fw-bold text-white"
                >
                  Create Account
                </Link>
              </div>
            </Form>
          )}
        </Formik>

        <ToastContainer
          position="top-right"
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

export default Login;
