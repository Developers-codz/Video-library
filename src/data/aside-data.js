import { Home, PlaylistIcon, LikedIcon, HistoryIcon } from "Assets/icons";
export const asideData = [
  {
    id: 1,
    name: "Home",
    linkTo: "/",
    icon: <Home />,
  },
  {
    id: 2,
    name: "Playlist",
    linkTo: "/playlist",
    icon: <PlaylistIcon width="32" height="32" />,
  },

  {
    id: 3,
    name: "History",
    linkTo: "/history",
    icon: <HistoryIcon width="32" height="32" />,
  },

  {
    id: 4,
    name: "Liked",
    linkTo: "liked",
    icon: <LikedIcon width="32" height="32" />,
  },
];
