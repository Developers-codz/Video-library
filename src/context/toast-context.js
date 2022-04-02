import { createContext, useContext, useState, useEffect } from "react";

const ToastContext = createContext();

const ToastProvider = ({ children }) => {
  const [toastVal, setToastVal] = useState({
    msg: "",
    isOpen: false,
    bg: "",
  });
  // for modal

  const [isModalOpen, setModalOpen] = useState(false);
  return (
    <ToastContext.Provider
      value={{
        toastVal,
        setToastVal,
        isModalOpen,
        setModalOpen,
      }}
    >
      {children}
    </ToastContext.Provider>
  );
};
const useToast = () => useContext(ToastContext);

export { useToast, ToastProvider };
