import "./toast.css";
import { useToast } from "context/toast-context";
import { useEffect } from "react";

export const Toast = () => {
  const {
    toastVal: { isOpen, bg, msg },
    setToastVal,
  } = useToast();
  useEffect(() => {
    setTimeout(
      () => setToastVal((prevVal) => ({ ...prevVal, isOpen: false })),
      1500
    );
  }, [isOpen]);
  return isOpen ? (
    <div className="snackbar show" style={{ backgroundColor: bg }}>
      {msg}
    </div>
  ) : (
    <div className="snackbar hide">{msg}</div>
  );
};
