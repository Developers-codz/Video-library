export const userInitialState = {
  id: null,
  firstName: "",
  lastName: "",
  isAuthTokenPresent: false,
  authToken: "",
  msg: "",
  likes: [],
  history: [],
  playlists: [],
};

export const authReducer = (state, action) => {
  switch (action.type) {
    case "LOGGED_IN": {
      const { firstName, lastName, _id } = action.payload;
      const token = action.token;
      return {
        ...state,
        id: _id,
        firstName: firstName,
        lastName: lastName,
        isAuthTokenPresent: true,
        authToken: token,
      };
    }
    case "SIGNUP": {
      const { firstName, lastName, _id } = action.payload;
      const token = action.token;
      return {
        ...state,
        id: _id,
        firstName: firstName,
        lastName: lastName,
        isAuthTokenPresent: true,
        authToken: token,
      };
    }
    case "ERROR":
      return { ...state, msg: action.payload };

    case "LOGOUT": {
      localStorage.setItem("token", "");
      return userInitialState;
    }

    default:
      return state;
  }
};
