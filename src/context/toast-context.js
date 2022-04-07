import { createContext, useContext, useState, useEffect } from "react";

const ToastContext = createContext();

const ToastProvider = ({ children }) => {
  const [toastVal, setToastVal] = useState({
    msg: "",
    isOpen: false,
    bg: "",
  });
  // for modal

  const [isModalOpen, setModalOpen] = useState({
    modalState: false,
    videoData: null,
  });
  const value = {
    toastVal,
    setToastVal,
    isModalOpen,
    setModalOpen,
  };
  return (
    <ToastContext.Provider value={value}>{children}</ToastContext.Provider>
  );
};
const useToast = () => useContext(ToastContext);

export { useToast, ToastProvider };
