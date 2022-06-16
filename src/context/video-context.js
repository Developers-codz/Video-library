import {
  createContext,
  useContext,
  useReducer,
  useState,
  useEffect,
} from "react";
import { VIDEO_API } from "utils/apis";
import { videoReducer } from "reducer";
import axios from "axios";
import { useAuth } from "./auth-context";

const VideoContext = createContext();

const VideoProvider = ({ children }) => {
  const { setLoading } = useAuth();
  const [videos, setVideos] = useState([]);

  useEffect(async () => {
    try {
      setLoading(true);
      const response = await axios.get(VIDEO_API);
      setVideos(response.data.videos);
    } catch (err) {
      console.error(err);
    }
    setLoading(false);
  }, []);

  const [videoState, videoDispatch] = useReducer(videoReducer, {
    categoryBy: null,
    searchBy:""
  });
  const value = { videos, setVideos, videoState, videoDispatch };

  return (
    <VideoContext.Provider value={value}>{children}</VideoContext.Provider>
  );
};

const useVideo = () => useContext(VideoContext);
export { VideoProvider, useVideo };
