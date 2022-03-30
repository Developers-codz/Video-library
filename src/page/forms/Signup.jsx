import styles from "./form.module.css";
import { useState } from "react";
import { Link } from "react-router-dom";

export const Signup = () => {
  const formObj = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPass: "",
  };
  const [type, setType] = useState("password");
  const [formData, setFormData] = useState(formObj);
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
            name="confirmPass"
            value={formData.confirmPass}
            id="confirmPassword"
            placeholder="Confirm Password "
            onClick={() => setType("password")}
            onChange={(e) => changeHandler(e)}
          />
        </div>

        <button className={styles.submitBtn}>Sign up</button>
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
