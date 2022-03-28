export const getCategorisedVideos = (data, categoryBy) => {
  if (categoryBy && categoryBy === "BY_CRAFT_IDEAS") {
    return data.filter((video) => video.categoryName === "Craft Ideas");
  }
  if (categoryBy && categoryBy === "BY_PAINTINGS") {
    return data.filter((video) => video.categoryName === "Paintings");
  }
  if (categoryBy && categoryBy === "BY_BEST_OUT_OF_WASTE") {
    return data.filter((video) => video.categoryName === "Best Out of Waste");
  }
  return data;
};
