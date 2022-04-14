import { getCookieValue, setCookieValue, removeCookieValue } from "./cookieHelper";

// Returns current user
export const getCurrentUser = () => {
  return JSON.parse(getCookieValue("user"));
};

interface SessionUser {
  token: string
}

// Handles user login
export const handleLogin = (user: Readonly<SessionUser>) => {
  setCookieValue("user", JSON.stringify(user));
};

// Handles logout
export const handleLogout = () => {
  removeCookieValue("user");
};

// Returns current session token
export const getToken = () => {
  const user = getCurrentUser();
  return user ? user.token : "";
};