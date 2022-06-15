const videoReducer = (state, action) => {
  switch (action.type) {
    case "ALL": {
      return { ...state, categoryBy: null,searchBy:"" };
    }
    case "CATEGORY": {
      return { ...state, categoryBy: action.payload };
    }
    case "SEARCH" : {
      return {...state,searchBy:action.payload};
    }

    default:
      return { ...state };
  }
};
export { videoReducer };
