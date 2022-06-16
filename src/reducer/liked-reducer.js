export const likedReducer = (state, action) => {
  switch (action.type) {
    case "SET_LIKED": {
      return { ...state, likedList: action.payload };
    }
    case "LOGOUT" : {
      return {...state,likedList:[]}
    }
    default: {
      return { ...state };
    }
  }
};
