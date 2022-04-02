import axios from "axios";
import { useContext, createContext, Children } from "react";
import { useReducer } from "react";
import { playlistReducer } from "reducer";
import { POST_PLAYLIST_API } from "utils/apis";
import { useToast } from "./toast-context";

const PlaylistContext = createContext();

const PlaylistProvider = ({ children }) => {
  const [playlistState, playlistDispatch] = useReducer(playlistReducer, {
    playlistList: [],
  });
  const { setToastVal } = useToast();
  const addToPlaylistHandler = async ({
    title,
    description,
    thumbnail,
    created,
    views,
    gif,
  }) => {
    const encodedToken = localStorage.getItem("token");
    // console.log(item);
    try {
      const response = await axios.post(
        POST_PLAYLIST_API,
        {
          playlist: { title, description, thumbnail, created, views, gif },
        },
        {
          headers: {
            authorization: encodedToken,
          },
        }
      );
      setToastVal((prevVal) => ({
        ...prevVal,
        msg: "Added in Playlist",
        isOpen: "true",
        bg: "green",
      }));
      console.log(response.data.playlists);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <PlaylistContext.Provider value={{ playlistState, addToPlaylistHandler }}>
      {children}
    </PlaylistContext.Provider>
  );
};

const usePlaylist = () => useContext(PlaylistContext);

export { usePlaylist, PlaylistProvider };
