import { User, Roles, getUser, stringsToRoles, login, logout } from "../helpers/authHelper";
import { createContext, useContext, useState } from "react";
import { useNotificationsManager } from "./useNotify";

// Default auth settings
const defaultContext = {
  user: null as User | null,
  login: (token: string, roles: string[], email: string) => {},
  logout: () => {}
};

// Auth hooks
const AuthContext = createContext(defaultContext);
export const useAuth = () => useContext(AuthContext);
export const useLogin = () => useAuth().login;
export const useLogout = () => useAuth().logout;

export const useRoles = () => {
  const user = useAuth().user;
  return user ? user.roles : Roles.None;
};

// Auth hook provider component
export const AuthProvider = (props: Readonly<JSX.ElementChildrenAttribute>) => {
  const [user, setUser] = useState<User | null>(getUser());
  const notifications = useNotificationsManager();

  const handleLogin = (token: string, roles: string[], email: string) => {
    const usr = {
      token: token,
      roles: stringsToRoles(roles),
      email: email
    };

    setUser(usr);
    login(usr);
    notifications.clear("Logowanie", "Pomyślnie zalogowano na konto");
  };

  const handleLogout = () => {
    setUser(null);
    logout();
    notifications.clear("Wylogowanie", "Pomyślnie wylogowano z konta");
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

