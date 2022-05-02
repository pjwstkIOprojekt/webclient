import { baseUrl } from "../helpers/apiTypes";

// Basic GET request
export const get = (path: string) => {
  return fetch(`${baseUrl}/${path}`);
};

// Basic POST request
export const post = (path: string, body?: string) => {
  return fetch(`${baseUrl}/${path}`, {
    method: "POST",
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    },
    body: body
  });
};

// Basic PUT request
export const put = (path: string, body?: string) => {
  return fetch(`${baseUrl}/${path}`, {
    method: "PUT",
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    },
    body: body
  });
};

// Basic DELETE request
export const del = (path: string) => {
  return fetch(`${baseUrl}/${path}`, {
    method: "DELETE"
  });
};
