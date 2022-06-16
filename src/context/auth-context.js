import { useContext, createContext, useState, useReducer } from "react";
import { userInitialState, authReducer } from "reducer/auth-reducer";
import { useToast } from "context/toast-context";
import { LOGIN_API, SIGNUP_API } from "utils/apis";
import axios from "axios";

const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [authState, authDispatch] = useReducer(authReducer, userInitialState);
  const { setToastVal } = useToast();
  const [isLoading, setLoading] = useState(false);

  //   SignUp Functionality

  const signupHandler = async (formData, setFormData, formObj) => {
    try {
      setLoading(true);
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
    setLoading(false);
  };

  const loginHandler = async (e, formData) => {
    try {
      setLoading(true);
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
    setLoading(false);
  };

const checkTokenHandler = async () =>{
  const encodedToken = localStorage.getItem("token")
  console.log(encodedToken)
  if(encodedToken) {
    try{
      const response = await axios.post("/api/auth/verify",{
        encodedToken,
      });
      console.log(response.data.user)
      authDispatch({type:"SET_USER",payload:response.data.user})
    }
    catch(err){
      console.log(err)
    }
  }
  

}
  const logoutHandler = () => {
    setLoading(true);
    setToastVal((prevVal) => ({
      ...prevVal,
      msg: "logged out successfully",
      isOpen: true,
      bg: "red",
    }));

    authDispatch({ type: "LOGOUT" });
    setTimeout(() => setLoading(false), 1000);
  };
  const value = {
    authState,
    authDispatch,
    signupHandler,
    loginHandler,
    logoutHandler,
    isLoading,
    setLoading,
    checkTokenHandler
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

const useAuth = () => useContext(AuthContext);

export { useAuth, AuthProvider };
