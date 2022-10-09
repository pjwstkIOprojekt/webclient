import { getToken } from "../helpers/authHelper";

// Base url for requests, change to 'http://localhost:8080' if you want to test with local backend
const baseUrl = "http://172.21.40.111:8080";

// Basic GET request
export const get = (path: string) => {
  const token = getToken();

  return fetch(`${baseUrl}/${path}`, {
    headers: token ? {
      "Authorization": "Bearer " + token
    } : {}
  });
};

// Basic POST request
export const post = (path: string, body?: string) => {
  const token = getToken();

  return fetch(`${baseUrl}/${path}`, {
    method: "POST",
    headers: token ? {
      "Content-type": "application/json; charset=UTF-8",
      "Authorization": "Bearer " + token
    } : {
      "Content-type": "application/json; charset=UTF-8"
    },
    body: body
  });
};

// Basic PUT request
export const put = (path: string, body?: string) => {
  const token = getToken();

  return fetch(`${baseUrl}/${path}`, {
    method: "PUT",
    headers: token ? {
      "Content-type": "application/json; charset=UTF-8",
      "Authorization": "Bearer " + token
    } : {
      "Content-type": "application/json; charset=UTF-8"
    },
    body: body
  });
};

// Basic DELETE request
export const del = (path: string) => {
  const token = getToken();

  return fetch(`${baseUrl}/${path}`, {
    method: "DELETE",
    headers: token ? {
      "Authorization": "Bearer " + token
    } : {}
  });
};
