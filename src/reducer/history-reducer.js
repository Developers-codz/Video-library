export const historyReducer = (state, { type, payload }) => {
  switch (type) {
    case "ADD_IN_HISTORY":
      return { ...state, historyList: payload };

    case "REMOVE_FROM_HISTORY":
      return { ...state, historyList: payload };

    case "CLEAR_ALL_HISTORY":
      return { ...state, historyList: payload };
    case "LOGOUT" : 
    return {...state,historyList:[]}

    default:
      return state;
  }
};
