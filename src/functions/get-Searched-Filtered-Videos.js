export const getSearchedFilteredVideos = (videos, itemToSearch) => {
  if (itemToSearch === "") {
    return videos;
  } else {
    const filteredVideos = videos.filter((video) => {
      return (
        video.title.toLowerCase().includes(itemToSearch) ||
        video.categoryName.toLowerCase().includes(itemToSearch)
      );
    });
    return filteredVideos;
  }
};
