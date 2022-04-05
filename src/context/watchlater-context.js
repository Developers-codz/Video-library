import axios from "axios";
import { useContext, createContext, useReducer } from "react";
import { useAuth } from "./auth-context";
import { POST_WATCHLATER_API } from "utils/apis";

const WatchLaterContext = createContext(null);

const WatchLaterProvider = ({ children }) => {
  const {
    authState: { watchlater },
  } = useAuth();
  const [watchlaterState, watchlaterDispatch] = useReducer(() => {},
  watchlater);
  const addWatchcLaterHandler = async (video) => {
    const encodedToken = localStorage.getItem("token");
    try {
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
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  };
  const value = { watchlaterState, addWatchcLaterHandler };
  return (
    <WatchLaterContext.Provider value={value}>
      {children}
    </WatchLaterContext.Provider>
  );
};

const useWatchLater = () => useContext(WatchLaterContext);
export { WatchLaterProvider, useWatchLater };
