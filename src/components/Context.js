import React, { useContext, useState } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [navLink, setNavLink] = useState(false);
  const [navbar, setNavbar] = useState(false);

  return (
    <AppContext.Provider value={{ navLink, setNavLink, navbar, setNavbar }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
