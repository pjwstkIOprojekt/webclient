import { getToken } from "../helpers/authHelper";

// Base url for requests, change to 'http://localhost:8080' if you want to test with local backend
const baseUrl = "http://172.21.40.111:8080";

const addToken = (x: Record<string, string>) => {
  const token = getToken();

  if (token) {
    x["Authorization"] = "Bearer " + token;
  }

  return x;
};

// Basic GET request
export const get = (path: string) => fetch(`${baseUrl}/${path}`, {
  headers: addToken({})
});

// Basic POST request
export const post = (path: string, body?: string) => fetch(`${baseUrl}/${path}`, {
  method: "POST",
  headers: addToken({
    "Content-type": "application/json; charset=UTF-8"
  }),
  body: body
});

// Basic PUT request
export const put = (path: string, body?: string) => fetch(`${baseUrl}/${path}`, {
  method: "PUT",
  headers: addToken({
    "Content-type": "application/json; charset=UTF-8"
  }),
  body: body
});

// Basic DELETE request
export const del = (path: string) => fetch(`${baseUrl}/${path}`, {
  method: "DELETE",
  headers: addToken({})
});
