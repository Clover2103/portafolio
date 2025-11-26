import React, { createContext, useContext, useState } from "react";

const NavigationContext = createContext();

export const NavigationProvider = ({ children }) => {
  const [activeSection, setActiveSection] = useState(0);

  // goTo helper (opcional)
  const goTo = (index) => {
    setActiveSection(index);
  };

  return (
    <NavigationContext.Provider value={{ activeSection, setActiveSection, goTo }}>
      {children}
    </NavigationContext.Provider>
  );
};

export const useNavigation = () => useContext(NavigationContext);
