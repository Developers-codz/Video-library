import {
  createContext,
  useContext,
  useReducer,
  useEffect,
  useState,
} from "react";
import { likedReducer } from "reducer/liked-reducer";

import { useAuth } from "./auth-context";
import axios from "axios";
import { ADD_LIKED_API } from "utils/apis";
import { useToast } from "./toast-context";

const LikeContext = createContext();

const LikeProvider = ({ children }) => {
  const {
    authState: { likes },
  } = useAuth();
  const [likedState, likedDispatch] = useReducer(likedReducer, {
    likedList: [],
  });
  const { setToastVal } = useToast();

  const addToLikeHandler = async (item) => {
    const encodedToken = localStorage.getItem("token");
    try {
      const response = await axios.post(
        ADD_LIKED_API,
        {
          video: item,
        },
        {
          headers: {
            authorization: encodedToken,
          },
        }
      );
      setToastVal((prevVal) => ({
        ...prevVal,
        msg: "Added in liked videos",
        isOpen: "true",
        bg: "green",
      }));
      likedDispatch({ type: "SET_LIKED", payload: response.data.likes });
    } catch (err) {
      console.log(err);
      setToastVal((prevVal) => ({
        ...prevVal,
        msg: "Already in liked videos",
        isOpen: "true",
        bg: "Red",
      }));
    }
  };
  const removeFromLikeHandler = async (_id) => {
    const encodedToken = localStorage.getItem("token");
    try {
      const response = await axios.delete(
        `/api/user/likes/${_id}`,

        {
          headers: {
            authorization: encodedToken,
          },
        }
      );
      setToastVal((prevVal) => ({
        ...prevVal,
        msg: "Removed from  liked videos",
        isOpen: "true",
        bg: "red",
      }));
      likedDispatch({ type: "SET_LIKED", payload: response.data.likes });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <LikeContext.Provider
      value={{ likedState, addToLikeHandler, removeFromLikeHandler }}
    >
      {children}
    </LikeContext.Provider>
  );
};

const useLike = () => useContext(LikeContext);

export { LikeProvider, useLike };
