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
  const addToPlaylistHandler = async (title) => {
    const encodedToken = localStorage.getItem("token");
    console.log(title);
    try {
      const response = await axios.post(
        POST_PLAYLIST_API,
        {
          playlist: { title },
        },
        {
          headers: {
            authorization: encodedToken,
          },
        }
      );
      setToastVal((prevVal) => ({
        ...prevVal,
        msg: "Playlist Created",
        isOpen: "true",
        bg: "green",
      }));

      console.log(response.data.playlists);
      const { playlists } = response.data;
      playlistDispatch({ type: "CREATE_PLAYLIST", payload: playlists });
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
