import styles from "./form.module.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "context/auth-context";
import { useToast } from "context/toast-context";
import { useDocumentTitle } from "functions";
export const Signup = () => {
  useDocumentTitle("signup");
  const formObj = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  };
  const [type, setType] = useState("password");
  const [formData, setFormData] = useState(formObj);
  const [confirmPassword, setConfirmPassword] = useState("");
  const { setToastVal } = useToast();
  const { signupHandler } = useAuth();
  const submitHandler = (e) => {
    e.preventDefault();
    if (formData.password === confirmPassword) {
      signupHandler(formData, setFormData, formObj);
    }
  };

  const changeHandler = (e) =>
    setFormData((data) => ({ ...data, [e.target.name]: e.target.value }));
  return (
    <div className={styles.formWrapper}>
      <h2 className="mb-lg">Signup Now:</h2>
      <form className={styles.formContainer}>
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          placeholder="Enter First Name"
          onChange={(e) => changeHandler(e)}
        />
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          placeholder="Enter Last Name"
          onChange={(e) => changeHandler(e)}
        />

        <input
          type="email"
          name="email"
          value={formData.email}
          id="email"
          placeholder="Enter your Email"
          onChange={(e) => changeHandler(e)}
        />
        <div className={styles.passInputWrapper}>
          <input
            type={type}
            name="password"
            value={formData.password}
            id="password"
            placeholder="Password "
            onChange={(e) => changeHandler(e)}
          />
          {type === "password" ? (
            <i
              className="fa fa-eye eye pass"
              onClick={() => setType("text")}
            ></i>
          ) : (
            <i
              className="fa fa-eye-slash eye pass"
              onClick={() => setType("password")}
            ></i>
          )}
        </div>
        <div className={styles.passInputWrapper}>
          <input
            type="password"
            name="confirmmPassword"
            value={confirmPassword}
            id="confirmPassword"
            placeholder="Confirm Password "
            onClick={() => setType("password")}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>

        <button className={styles.submitBtn} onClick={(e) => submitHandler(e)}>
          Sign up
        </button>
        <div className={styles.linkWrapper}>
          Already a user😺{" "}
          <Link to="/login" className="light-text">
            Login Now
          </Link>
        </div>
      </form>
    </div>
  );
};
