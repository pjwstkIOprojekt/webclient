import { getCookieValue, setCookieValue, removeCookieValue } from "./cookieHelper";

// Returns current user
export const getCurrentUser = () => {
  return JSON.parse(getCookieValue("user"));
};

// Handles user login
export const handleLogin = (user: string) => {
  setCookieValue("user", user);
};

// Handles logout
export const handleLogout = () => {
  removeCookieValue("user");
};