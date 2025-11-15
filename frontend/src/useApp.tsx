import { createContext, useContext } from "react";

const AppContext = createContext({});

interface Props {
  children: React.ReactNode;
}

export const AppProvider = (props: Props) => {
  return <AppContext.Provider value={{}}>{props.children}</AppContext.Provider>;
};

export const useApp = () => {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error("useApp must be inside an AppProvider");
  return ctx;
};
