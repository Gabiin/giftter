import React, { useState, useEffect } from "react";

//services
import { getUser } from "../services/getUser";
import { getUserFavs } from "../services/getUserFavs";

//context
const Context = React.createContext({});

//provider
export const UserContextProvider = ({ children }) => {
  /*   const tokenItem = localStorage.getItem("token")
    ? localStorage.getItem("token")
    : null;

  const userIdItem = localStorage.getItem("userId")
    ? localStorage.getItem("userId")
    : null; */

  const [user, setUser] = useState({});
  const [favs, setFavs] = useState([]);

  const [token, setToken] = useState(() =>
    window.sessionStorage.getItem("token")
  );
  const [userId, setUserId] = useState(() =>
    window.sessionStorage.getItem("userId")
  );

  useEffect(() => {
    if (!token) {
      setFavs([]);
      setUser({});
    } else {
      getUser({ token, userId }).then(setUser);
      getUserFavs({ token, userId }).then(setFavs);
    }
  }, [token, userId]);

  return (
    <Context.Provider
      value={{
        token,
        user,
        userId,
        favs,
        setToken,
        setUserId,
        setUser,
        setFavs,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default Context;
