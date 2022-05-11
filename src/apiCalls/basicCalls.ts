import { baseUrl } from "../helpers/apiTypes";
import { getToken } from "../helpers/authHelper";

// Basic GET request
export const get = (path: string) => {
  return fetch(`${baseUrl}/${path}`, {
    headers: {
      "Authorization": "Bearer " + getToken()
    }
  });
};

// Basic POST request
export const post = (path: string, body?: string) => {
  return fetch(`${baseUrl}/${path}`, {
    method: "POST",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
      "Authorization": "Bearer " + getToken()
    },
    body: body
  });
};

// Basic PUT request
export const put = (path: string, body?: string) => {
  return fetch(`${baseUrl}/${path}`, {
    method: "PUT",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
      "Authorization": "Bearer " + getToken()
    },
    body: body
  });
};

// Basic DELETE request
export const del = (path: string) => {
  return fetch(`${baseUrl}/${path}`, {
    method: "DELETE",
    headers: {
      "Authorization": "Bearer " + getToken()
    }
  });
};
