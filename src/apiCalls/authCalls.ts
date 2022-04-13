import { baseUrl, User, NewUser } from "../helpers/apiTypes";

// Login request
export function login(user: Readonly<User>) {
  return fetch(`${baseUrl}/login`, {
    method: "POST",
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    },
    body: JSON.stringify(user)
  });
}

// Registers new user
export function registerUser(user: Readonly<NewUser>) {
  return fetch(`${baseUrl}/register/normal`, {
    method: "POST",
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    },
    body: JSON.stringify(user)
  });
}