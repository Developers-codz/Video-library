export const likedReducer = (state, action) => {
  switch (action.type) {
    case "SET_LIKED": {
      return { ...state, likedList: action.payload };
    }
    default: {
      return { ...state };
    }
  }
};
