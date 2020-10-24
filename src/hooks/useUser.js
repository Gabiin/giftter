import { useCallback, useContext, useState } from "react";
import Context from "../context/userContext";
import { getLogin } from "../services/getLogin";
import { addLike, unLike } from "../services/favServices";
import { getUserFavs } from "../services/getUserFavs";
import { getRegister } from "../services/getRegister";

const useUser = () => {
  const {
    setToken,
    setUser,
    setUserId,
    token,
    userId,
    user,
    favs,
    setFavs,
  } = useContext(Context);

  const [actionState, setActionState] = useState({
    isLoading: false,
    hasError: false,
    isRegistered: false,
  });

  const [errors, setErrors] = useState({});

  const login = useCallback(
    async ({ handler, password }) => {
      setActionState({ isLoading: true, hasError: false });
      try {
        const { token, userId, errors } = await getLogin({
          handler,
          password,
        });
        console.log(errors);
        if (errors) {
          setActionState({ isLoading: false, hasError: true });
          setErrors(errors);
        } else {
          window.sessionStorage.setItem("token", token);
          window.sessionStorage.setItem("userId", userId);
          setUserId(userId);
          setToken(token);

          setActionState({ isLoading: false, hasError: false });
          setErrors({});
        }
      } catch (err) {
        console.log(err);
        window.sessionStorage.removeItem("token");
        window.sessionStorage.removeItem("userId");
        setActionState({ isLoading: false, hasError: true });
      }
    },
    [setToken, setUserId]
  );

  const register = useCallback(
    async ({ handler, name, lastname, email, password, confirmPassword }) => {
      setActionState({ isLoading: true, hasError: false, isRegistered: false });
      console.log({
        handler,
        name,
        lastname,
        email,
        password,
        confirmPassword,
      });
      try {
        const { message, errors } = await getRegister({
          handler,
          name,
          lastname,
          email,
          password,
          confirmPassword,
        });
        console.log(errors);
        if (errors) {
          setActionState({
            isLoading: false,
            hasError: true,
            isRegistered: false,
          });
          setErrors(errors);
        } else {
          if (message === "ok") {
            setActionState({
              isLoading: false,
              hasError: false,
              isRegistered: true,
            });
            setErrors({});
          }
        }
      } catch (err) {
        console.log(err);
        setActionState({
          isLoading: false,
          hasError: true,
          isRegistered: false,
        });
      }
    },
    []
  );

  const logout = useCallback(() => {
    window.sessionStorage.removeItem("token");
    window.sessionStorage.removeItem("userId");
    setToken(null);
    setUserId(null);
    setUser({});
    setFavs([]);
    setActionState({ isLoading: false, hasError: false });
  }, [setToken, setUserId, setUser, setFavs]);

  const likeFav = useCallback(
    async ({ gifId, title, url }) => {
      try {
        const likedFav = await addLike({ token, gifId, userId, title, url });
        if (likedFav) {
          getUserFavs({ token, userId }).then(setFavs);
          return true;
        } else return false;
      } catch (err) {
        return false;
      }
    },
    [token, userId, setFavs]
  );
  const unLikeFav = useCallback(
    async ({ favId }) => {
      try {
        const result = await unLike({ token, favId });
        if (result) {
          let filt = favs.filter((f) => f._id !== favId);
          setFavs(filt);
          return true;
        } else return false;
      } catch (err) {
        return false;
      }
    },
    [token, favs, setFavs]
  );

  return {
    isLoding: actionState.isLoading,
    isLogged: Boolean(token),
    isRegistered: actionState.isRegistered,
    hasError: actionState.hasError,
    errors: errors,
    userProfile: user,
    userId: userId,
    favs,
    login,
    logout,
    register,
    likeFav,
    unLikeFav,
  };
};

export default useUser;
