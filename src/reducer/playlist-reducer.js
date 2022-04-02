export const playlistReducer = (state, action) => {
  switch (action.type) {
    case "CREATE_PLAYLIST": {
      return { ...state, playlistList: action.payload };
    }
    default: {
      return { ...state };
    }
  }
};
