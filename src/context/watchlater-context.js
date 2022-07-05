import axios from "axios";
import { useContext, createContext, useReducer,useState } from "react";
import { POST_WATCHLATER_API } from "utils/apis";
import { watchlaterReducer } from "reducer";
import { useToast } from "./toast-context";


const WatchLaterContext = createContext(null);

const WatchLaterProvider = ({ children }) => {
  const [watchlaterState, watchlaterDispatch] = useReducer(watchlaterReducer, {
    watchlaterList: [],
  });
  const [isWatchBtnDisabled,setWatchDisabled] = useState(false)
  const { setToastVal } = useToast();

  const getWatchLaterVideos = async ()=>{
    const encodedToken = localStorage.getItem("token");
    try {
      const response = await axios.get("/api/user/watchlater",{headers: {
        authorization: encodedToken,
      }})
      watchlaterDispatch({
        type: "ADD_TO_WATCHLATER",
        payload: response.data.watchlater,
      });

    }
    catch(err) {
      console.log(err)
    }
  }

  const addWatchcLaterHandler = async (video) => {
    const encodedToken = localStorage.getItem("token");
    try {
      setWatchDisabled(true);
      const response = await axios.post(
        POST_WATCHLATER_API,
        {
          video,
        },
        {
          headers: {
            authorization: encodedToken,
          },
        }
      );
      const { watchlater } = response.data;

      watchlaterDispatch({
        type: "ADD_TO_WATCHLATER",
        payload: watchlater,
      });
      setToastVal((prevVal) => ({
        ...prevVal,
        msg: "Added to watch later",
        bg: "green",
        isOpen: true,
      }));
    } catch (err) {
       const {status} = err.response;
      if(status === 500){
        setToastVal((prevVal) => ({
          ...prevVal,
          msg: "Please login first",
          isOpen: "true",
          bg: "Red",
        }));
      }
      if(status === 409){
        setToastVal((prevVal) => ({
          ...prevVal,
          msg: "Already in watch later",
          isOpen: "true",
          bg: "Red",
        }));
      }
    }
    setWatchDisabled(false);
  };
  const removeFromWatchLaterHandler = async (_id) => {
    const encodedToken = localStorage.getItem("token");
    try {
      setWatchDisabled(true);
      const response = await axios.delete(`${POST_WATCHLATER_API}/${_id}`, {
        headers: {
          authorization: encodedToken,
        },
      });
      const { watchlater } = response.data;
      watchlaterDispatch({
        type: "REMOVE_FROM_WATCHLATER",
        payload: watchlater,
      });
      setToastVal((prevVal) => ({
        ...prevVal,
        msg: "Removed from watch later",
        bg: "red",
        isOpen: true,
      }));
    } catch (err) {
      console.log(err);
    }
    setWatchDisabled(false);
  };

  const watchlaterLogoutHandler = () =>{
    watchlaterDispatch({type:"LOGOUT"})
  }
  const value = {
    watchlaterState,
    addWatchcLaterHandler,
    removeFromWatchLaterHandler,
    watchlaterLogoutHandler,
    getWatchLaterVideos,
    isWatchBtnDisabled
  };
  return (
    <WatchLaterContext.Provider value={value}>
      {children}
    </WatchLaterContext.Provider>
  );
};

const useWatchLater = () => useContext(WatchLaterContext);
export { WatchLaterProvider, useWatchLater };
