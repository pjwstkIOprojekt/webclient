import { getCookieValue, setCookieValue, removeCookieValue } from "./cookieHelper";
import { User } from "../helpers/apiTypes";
import { login } from "../apiCalls/authCalls";
import { acceptCookies } from "../components/CookieConsent";

// Returns current user
export const getCurrentUser = () => {
  return JSON.parse(getCookieValue("user"));
};

// Handles user login
export const handleLogin = (user: Readonly<User>) => {
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
    }

    console.log(response);
    console.log(data);
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