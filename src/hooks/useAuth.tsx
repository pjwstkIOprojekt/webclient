import { User, getUser, login, logout } from "../helpers/authHelper";
import { createContext, useContext, useState } from "react";
import { useNotificationsManager } from "./useNotify";
import { useNavigate } from "react-router-dom";

// Default auth settings
const defaultContext = {
  user: null as User | null,
  login: (token: string, roles: string[]) => {},
  logout: () => {}
};

// Auth hooks
const AuthContext = createContext(defaultContext);
export const useAuth = () => useContext(AuthContext);
export const useLogin = () => useAuth().login;
export const useLogout = () => useAuth().logout;

// Additional auth hooks for handling app updates, use authHelper functions instead
const useCheckRole = (role: string) => {
  const user = useAuth().user;
  return user ? user.roles.includes(role) : false;
};

export const useUser = () => useCheckRole("USER");
export const useDispositor = () => useCheckRole("USER");
export const useDirector = () => useCheckRole("USER");

// Auth hook provider component
export const AuthProvider = (props: Readonly<JSX.ElementChildrenAttribute>) => {
  const [user, setUser] = useState<User | null>(getUser());
  const notifications = useNotificationsManager();
  const navigate = useNavigate();

  const handleLogin = (token: string, roles: string[]) => {
    const usr = {
      token: token,
      roles: roles
    };

    setUser(usr);
    login(usr);
    notifications.clear("Logowanie", "Pomyślnie zalogowano na konto");
    navigate("/");
  };

  const handleLogout = () => {
    setUser(null);
    logout();
    notifications.clear("Wylogowanie", "Pomyślnie wylogowano z konta");
    navigate("/");
  };

  return (
    <AuthContext.Provider value={{
      user: user,
      login: handleLogin,
      logout: handleLogout
    }}>
      {props.children}
    </AuthContext.Provider>
  );
};

