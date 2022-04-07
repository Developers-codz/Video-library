import { createContext, useContext, useState } from "react";

const AsideContext = createContext(false);

const AsideProvider = ({ children }) => {
  const [activeAside, setActiveAside] = useState(false);
  const value = { activeAside, setActiveAside };
  return (
    <AsideContext.Provider value={value}>{children}</AsideContext.Provider>
  );
};

const useAside = () => useContext(AsideContext);

export { useAside, AsideProvider };
