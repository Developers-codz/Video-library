import { useLike } from "context/like-context";
import { useHistory } from "context/history-context";
import { useWatchLater } from "context/watchlater-context";

export const useDeleteFunction = (flag, _id) => {
  const { removeFromLikeHandler } = useLike();
  const { removeFromHistoryHandler } = useHistory();
  const { removeFromWatchLaterHandler } = useWatchLater();
  const getFunctionName = (flag, _id) => {
    if (flag === "liked") return removeFromLikeHandler(_id);
    if (flag === "history") return removeFromHistoryHandler(_id);
    if (flag === "watchlater") return removeFromWatchLaterHandler(_id);
  };
  return getFunctionName;
};
