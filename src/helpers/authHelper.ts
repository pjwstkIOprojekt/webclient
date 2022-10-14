import { getCookieValue, setCookieValue } from "./cookieHelper";

export enum UserRole {
  NONE,
  USER,
  DISPOSITOR,
  DIRECTOR
}

let role = parseInt(getCookieValue("usr"));

export const setRole = (x: UserRole) => {
  setCookieValue("usr", x.toString());
  role = x;
};

// Returns current session token
export const getToken = () => "";

// Returns true if user is authenticated
export const isAuth = () => {
  //return keycloakClient.authenticated;
  return role !== UserRole.NONE;
};

// Returns true if user is a dispositor
export const isDispositor = () => role === UserRole.DISPOSITOR;

// Returns true if user is a director
export const isDirector = () => role === UserRole.DIRECTOR;
