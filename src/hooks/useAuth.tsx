import { useNotificationsManager } from "./useNotify";
import { useNavigate } from "react-router-dom";
import { login, logout } from "../helpers/authHelper";

// Auth hooks
export const useLogin = () => {
  const notifications = useNotificationsManager();
  const navigate = useNavigate();

  return (token: string, roles: Set<string>) => {
    login(token, roles);
    navigate("/");
    notifications.renotify("Logowanie", "Pomyślnie zalogowano na konto");
  };
};

export const useLogout = () => {
  const notifications = useNotificationsManager();
  const navigate = useNavigate();

  return () => {
    logout();
    navigate("/");
    notifications.renotify("Wylogowanie", "Wylogowano z konta");
  };
};
