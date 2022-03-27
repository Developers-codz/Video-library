import {
  createContext,
  useContext,
  useReducer,
  useState,
  useEffect,
} from "react";
import axios from "axios";
import { videoReducer } from "reducer";

const VideoContext = createContext([]);

const VideoProvider = ({ children }) => {
  const [videos, setVideos] = useState([]);
  const [videoState, videoDispatch] = useReducer(videoReducer, {
    categoryBy: null,
  });

  useEffect(async () => {
    try {
      const response = await axios.get("/api/videos");
      setVideos(response.data.videos);
    } catch (err) {
      console.log(err);
    }
  }, []);
  return (
    <VideoContext.Provider value={{ videos, videoState, videoDispatch }}>
      {children}
    </VideoContext.Provider>
  );
};

const useVideo = () => useContext(VideoContext);
export { VideoProvider, useVideo };
