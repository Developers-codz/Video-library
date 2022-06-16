export const watchlaterReducer = (state, { type, payload }) => {
  switch (type) {
    case "ADD_TO_WATCHLATER": {
      return { ...state, watchlaterList: payload };
    }
    case "REMOVE_FROM_WATCHLATER": {
      return { ...state, watchlaterList: payload };
    }
    case "LOGOUT" : {
      return {...state,watchlaterList:[]}
    }
    default: {
      return state;
    }
  }
};
