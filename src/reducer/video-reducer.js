const videoReducer = (state, action) => {
  switch (action.type) {
    case "ALL": {
      return { ...state, categoryBy: null };
    }
    case "CATEGORY": {
      return { ...state, categoryBy: action.payload };
    }

    default:
      return { ...state };
  }
};
export { videoReducer };
