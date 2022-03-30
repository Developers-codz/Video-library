import { useContext, createContext, useState, useReducer } from "react";
import { userInitialState, authReducer } from "reducer/auth-reducer";
import { useToast } from "context/toast-context";
import axios from "axios";

const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [authState, authDispatch] = useReducer(authReducer, userInitialState);
  const { setToastVal } = useToast();

  //   SignUp Functionality

  const signupHandler = async (formData, setFormData, formObj) => {
    try {
      const response = await axios.post(
        "api/auth/signup",
        JSON.stringify(formData)
      );
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
      setTimeout(
        () => setToastVal((prevVal) => ({ ...prevVal, isOpen: false })),
        1500
      );
    } catch (err) {
      console.log(err);
      setToastVal((prevVal) => ({
        ...prevVal,
        bg: "red",
        msg: "error signing up",
        isOpen: true,
      }));
      setTimeout(
        () => setToastVal((prevVal) => ({ ...prevVal, isOpen: false })),
        1500
      );
    }
    setFormData(formObj);
  };

  return (
    <AuthContext.Provider value={{ authState, authDispatch, signupHandler }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

export { useAuth, AuthProvider };
