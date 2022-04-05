import ThumbUpTwoToneIcon from "@mui/icons-material/ThumbUpTwoTone";
export const getIcon = (flag) =>
  flag === "liked" ? <ThumbUpTwoToneIcon /> : <i className="fa fa-trash"></i>;
