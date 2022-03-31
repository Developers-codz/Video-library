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

const VideoContext = createContext();

const VideoProvider = ({ children }) => {
  const [videos, setVideos] = useState([]);
  useEffect(async () => {
    try {
      const response = await axios.get(VIDEO_API);
      setVideos(response.data.videos);
    } catch (err) {
      console.error(err);
    }
  }, []);
  const [videoState, videoDispatch] = useReducer(videoReducer, {
    categoryBy: null,
  });

  return (
    <VideoContext.Provider
      value={{ videos, setVideos, videoState, videoDispatch }}
    >
      {children}
    </VideoContext.Provider>
  );
};

const useVideo = () => useContext(VideoContext);
export { VideoProvider, useVideo };
