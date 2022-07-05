import { createContext, useContext, useReducer,useState } from "react";
import { likedReducer } from "reducer/liked-reducer";
import axios from "axios";
import { POST_LIKED_API } from "utils/apis";
import { useToast } from "./toast-context";

const LikeContext = createContext();

const LikeProvider = ({ children }) => {

  const [likedState, likedDispatch] = useReducer(likedReducer, {
    likedList: [],
  });
  const [isDisabled,setDisabled] = useState(false)
  const { setToastVal } = useToast();

  const getLikedVideos = async ()=>{
    const encodedToken = localStorage.getItem("token");
    try {
      const response = await axios.get("/api/user/likes",{headers: {
        authorization: encodedToken,
      }})
      likedDispatch({
        type: "SET_LIKED",
        payload: response.data.likes,
      });

    }
    catch(err) {
      console.log(err)
    }
  }

  const addToLikeHandler = async (item) => {
    const encodedToken = localStorage.getItem("token");
    try {
      setDisabled(true);
      const response = await axios.post(
        POST_LIKED_API,
        {
          video: item,
        },
        {
          headers: {
            authorization: encodedToken,
          },
        }
      );
      const { likes } = response.data;
      setToastVal((prevVal) => ({
        ...prevVal,
        msg: "Added in liked videos",
        isOpen: "true",
        bg: "green",
      }));
      likedDispatch({
        type: "SET_LIKED",
        payload: likes,
      });
    } catch (err) {
      const { status } = err.response;

      if (status === 500) {
        setToastVal((prevVal) => ({
          ...prevVal,
          msg: "Please login first",
          isOpen: "true",
          bg: "Red",
        }));
      } else {
        setToastVal((prevVal) => ({
          ...prevVal,
          msg: "Already in liked videos",
          isOpen: "true",
          bg: "Red",
        }));
      }
    }
    setDisabled(false);
  };
  const removeFromLikeHandler = async (_id) => {
    const encodedToken = localStorage.getItem("token");
    try {
      setDisabled(true);
      const response = await axios.delete(
        `${POST_LIKED_API}/${_id}`,

        {
          headers: {
            authorization: encodedToken,
          },
        }
      );
      const { likes } = response.data;
      setToastVal((prevVal) => ({
        ...prevVal,
        msg: "Removed from  liked videos",
        isOpen: "true",
        bg: "red",
      }));
      likedDispatch({ type: "SET_LIKED", payload: likes });
    } catch (err) {
      console.log(err);
    }
    setDisabled(false);
  };
  const likeLogoutHandler = () => {
    likedDispatch({ type: "LOGOUT" });
  };
  const value = {
    likedState,
    addToLikeHandler,
    removeFromLikeHandler,
    likeLogoutHandler,
    getLikedVideos,
    isDisabled
  };
  return <LikeContext.Provider value={value}>{children}</LikeContext.Provider>;
};

const useLike = () => useContext(LikeContext);

export { LikeProvider, useLike };
