import { useContext, createContext, useState, useReducer } from "react";
import { userInitialState, authReducer } from "reducer/auth-reducer";
import { useToast } from "context/toast-context";
import { LOGIN_API, SIGNUP_API } from "utils/apis";
import axios from "axios";

const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [authState, authDispatch] = useReducer(authReducer, userInitialState);
  const { setToastVal } = useToast();

  //   SignUp Functionality

  const signupHandler = async (formData, setFormData, formObj) => {
    try {
      const response = await axios.post(SIGNUP_API, JSON.stringify(formData));
      const { encodedToken, createdUser } = response.data;
      localStorage.setItem("token", encodedToken);
      authDispatch({
        type: "SIGNUP",
        payload: createdUser,
        token: encodedToken,
      });
      setToastVal((prevVal) => ({
        ...prevVal,
        bg: "green",
        msg: "Successfully Signed up",
        isOpen: true,
      }));
    } catch (err) {
      setToastVal((prevVal) => ({
        ...prevVal,
        bg: "red",
        msg: "error signing up",
        isOpen: true,
      }));
    }
    setFormData(formObj);
  };

  const loginHandler = async (e, formData) => {
    console.log(formData);
    try {
      const response = await axios.post(
        LOGIN_API,
        e.target.value === "login"
          ? JSON.stringify(formData)
          : {
              email: "janeDoe@gmail.com",
              password: "janeDoe123",
            }
      );
      const { encodedToken, foundUser } = response.data;
      console.log(foundUser);
      localStorage.setItem("token", encodedToken);
      setToastVal((prevVal) => ({
        ...prevVal,
        msg: "Login SuccessFully",
        isOpen: true,
        bg: "green",
      }));

      authDispatch({
        type: "LOGGED_IN",
        payload: foundUser,
        token: encodedToken,
      });
    } catch (err) {
      setToastVal((prevVal) => ({
        ...prevVal,
        bg: "red",
        msg: "no such user found",
        isOpen: true,
      }));
    }
  };
  const logoutHandler = () => {
    setToastVal((prevVal) => ({
      ...prevVal,
      msg: "logged out successfully",
      isOpen: true,
      bg: "red",
    }));

    authDispatch({ type: "LOGOUT" });
  };

  return (
    <AuthContext.Provider
      value={{
        authState,
        authDispatch,
        signupHandler,
        loginHandler,
        logoutHandler,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

export { useAuth, AuthProvider };
