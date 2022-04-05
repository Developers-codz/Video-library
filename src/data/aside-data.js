import {
  Home,
  PlaylistIcon,
  LikedIcon,
  HistoryIcon,
  WatchlaterIcon,
} from "Assets/icons";
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
    name: "Liked",
    linkTo: "liked",
    icon: <LikedIcon width="32" height="32" />,
  },
  {
    id: 4,
    name: "Watch Later",
    linkTo: "/watchlater",
    icon: <WatchlaterIcon width="32" height="32" />,
  },
  {
    id: 5,
    name: "History",
    linkTo: "/history",
    icon: <HistoryIcon width="32" height="32" />,
  },
];
