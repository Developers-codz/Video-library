import axios from "axios";
import { useContext, createContext, useReducer } from "react";
import { POST_WATCHLATER_API } from "utils/apis";
import { watchlaterReducer } from "reducer";
import { useToast } from "./toast-context";
import { useAuth } from "./auth-context";

const WatchLaterContext = createContext(null);

const WatchLaterProvider = ({ children }) => {
  const [watchlaterState, watchlaterDispatch] = useReducer(watchlaterReducer, {
    watchlaterList: [],
  });
  const { setToastVal } = useToast();
  const { setLoading } = useAuth();
  const addWatchcLaterHandler = async (video) => {
    const encodedToken = localStorage.getItem("token");
    try {
      setLoading(true);
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
      console.log(err);
    }
    setLoading(false);
  };
  const removeFromWatchLaterHandler = async (_id) => {
    const encodedToken = localStorage.getItem("token");
    try {
      setLoading(true);
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
    setLoading(false);
  };
  const value = {
    watchlaterState,
    addWatchcLaterHandler,
    removeFromWatchLaterHandler,
  };
  return (
    <WatchLaterContext.Provider value={value}>
      {children}
    </WatchLaterContext.Provider>
  );
};

const useWatchLater = () => useContext(WatchLaterContext);
export { WatchLaterProvider, useWatchLater };
