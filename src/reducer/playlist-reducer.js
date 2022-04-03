export const playlistReducer = (state, action) => {
  switch (action.type) {
    case "CREATE_PLAYLIST": {
      return { ...state, playlistList: action.payload };
    }
    case "DELETE_PLAYLIST": {
      return { ...state, playlistList: action.payload };
    }
    case "ADDED_VIDEO_TO_PLAYLIST": {
      return {
        ...state,
        playlistList: updatPlaylistList(
          [...state.playlistList],
          action.payload
        ),
      };
    }
    case "REMOVE_VIDEO_FROM_PLAYLIST": {
      return {
        ...state,
        playlistList: updatPlaylistList(
          [...state.playlistList],
          action.payload
        ),
      };
    }
    default: {
      return { ...state };
    }
  }
};

const updatPlaylistList = (state, playlist) => {
  if (state.length !== 0) {
    const index = state.findIndex((obj) => obj._id === playlist._id);
    state[index] = playlist;
    return [...state];
  } else {
    return [playlist];
  }
};
