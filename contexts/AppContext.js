import { Loading } from "components";
import { createContext, useContext, useEffect, useState } from "react";

const AppContext = createContext();

export const AppWrapper = ({ children }) => {
  const [dataState, setDataState] = useState();

  const setState = (data) => {
    if (typeof data === "function") {
      setDataState((prevState) => ({
        ...prevState,
        ...data(prevState),
      }));
    } else {
      Object.entries(data).forEach(([key, value]) => {
        setDataState((prevState) => {
          return {
            ...prevState,
            [key]: value,
          };
        });
      });
    }
  };

  useEffect(() => {
    dataState && sessionStorage.setItem("dataState", JSON.stringify(dataState));
  }, [dataState]);

  useEffect(() => {
    const sessionData = sessionStorage.getItem("dataState");

    setDataState(JSON.parse(sessionData) || {});
  }, []);

  // if (!dataState) return <Loading show={true} />;

  return (
    <AppContext.Provider value={{ getState: dataState, setState }}>
      {children}
      {/* <Loading show={dataState?.loading} /> */}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
