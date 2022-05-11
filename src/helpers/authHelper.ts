import { getCookieValue, setCookieValue, removeCookieValue } from "./cookieHelper";
import { LoginRequest } from "../helpers/apiTypes";
import { login } from "../apiCalls/authCalls";
import { acceptCookies } from "../components/CookieConsent";

// Returns current user
export const getCurrentUser = () => {
  const data = getCookieValue("user");
  return data ? JSON.parse(data) : null;
};

// Handles user login
export const handleLogin = (user: Readonly<LoginRequest>, callback: () => void) => {
  let response: Response;

  login(user).then(res => {
    response = res;
    return res.text();
  }).then(data => {
    if (response.status === 200 && data) {
      acceptCookies();

      setCookieValue("user", JSON.stringify({
        token: data
      }));

      callback();
    }
  }).catch(err => console.log(err));
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
