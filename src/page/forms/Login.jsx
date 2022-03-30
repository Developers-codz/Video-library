import styles from "./form.module.css";
import { Link } from "react-router-dom";
import { useState } from "react";

export const Login = () => {
  const formObj = {
    email: "",
    password: "",
  };
  const [formData, setFormData] = useState(formObj);
  const [type, setType] = useState("password");
  const formDataHandler = (e) => {
    setFormData((data) => ({ ...data, [e.target.name]: e.target.value }));
  };
  var classNames = require("classnames");
  return (
    <div className={styles.formWrapper}>
      <h2 className="mb-lg">Login Now:</h2>
      <form className={styles.formContainer}>
        <input
          type="email"
          name="email"
          value={formData.email}
          id="email"
          placeholder="janeDoe@gmail.com"
          onInput={(e) => formDataHandler(e)}
        />
        <div className={styles.passInputWrapper}>
          <input
            className={styles.passInput}
            type={type}
            name="password"
            value={formData.password}
            id="password"
            placeholder="Password"
            onInput={(e) => formDataHandler(e)}
          />
          {type === "password" ? (
            <i className="fa fa-eye eye" onClick={() => setType("text")}></i>
          ) : (
            <i
              className="fa fa-eye-slash eye"
              onClick={() => setType("password")}
            ></i>
          )}
        </div>

        <button className={styles.submitBtn}>Login with credentials</button>
        <button className={styles.submitBtn}>Login</button>
        <div className={styles.linkWrapper}>
          Don't have an account{" "}
          <Link to="/signup" className="light-text">
            Signup now🤗
          </Link>
        </div>
      </form>
    </div>
  );
};
