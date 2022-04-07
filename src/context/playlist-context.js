import axios from "axios";
import { useContext, createContext } from "react";
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

  const addPlaylistHandler = async (title) => {
    const encodedToken = localStorage.getItem("token");
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

      const { playlists } = response.data;
      playlistDispatch({ type: "CREATE_PLAYLIST", payload: playlists });
    } catch (err) {
      console.log(err);
    }
  };

  const deletePlaylistHandler = async (_id) => {
    const encodedToken = localStorage.getItem("token");
    try {
      const response = await axios.delete(`${POST_PLAYLIST_API}/${_id}`, {
        headers: {
          authorization: encodedToken,
        },
      });
      const { playlists } = response.data;
      playlistDispatch({ type: "DELETE_PLAYLIST", payload: playlists });
      console.log(response);
      setToastVal((prevVal) => ({
        ...prevVal,
        msg: "Playlist Deleted",
        isOpen: "true",
        bg: "red",
      }));
    } catch (err) {
      console.log(err);
    }
  };
  const addToPlaylistHandler = async (video, _id, title) => {
    const encodedToken = localStorage.getItem("token");
    try {
      const response = await axios.post(
        `${POST_PLAYLIST_API}/${_id}`,
        {
          video,
        },
        {
          headers: {
            authorization: encodedToken,
          },
        }
      );
      setToastVal((prevVal) => ({
        ...prevVal,
        msg: `Added in ${title} playlist`,
        isOpen: "true",
        bg: "green",
      }));
      const { playlist } = response.data;
      playlistDispatch({
        type: "ADDED_VIDEO_TO_PLAYLIST",
        payload: playlist,
      });
    } catch (err) {
      console.log(err);
    }
  };

  const deleteFromPlaylistHandler = async (playlistId, videoId, title) => {
    const encodedToken = localStorage.getItem("token");
    try {
      const response = await axios.delete(
        `${POST_PLAYLIST_API}/${playlistId}/${videoId}`,
        {
          headers: {
            authorization: encodedToken,
          },
        }
      );
      setToastVal((prevVal) => ({
        ...prevVal,
        msg: `Removed from ${title} playlist`,
        isOpen: "true",
        bg: "red",
      }));
      const { playlist } = response.data;
      playlistDispatch({
        type: "REMOVE_VIDEO_FROM_PLAYLIST",
        payload: playlist,
      });
    } catch (err) {
      console.log(err);
    }
  };
  const value = {
    playlistState,
    addPlaylistHandler,
    deletePlaylistHandler,
    addToPlaylistHandler,
    deleteFromPlaylistHandler,
  };

  return (
    <PlaylistContext.Provider value={value}>
      {children}
    </PlaylistContext.Provider>
  );
};

const usePlaylist = () => useContext(PlaylistContext);

export { usePlaylist, PlaylistProvider };
