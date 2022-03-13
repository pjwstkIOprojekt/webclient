const baseUrl = "https://jsonplaceholder.typicode.com/posts";

// User API type
export interface User {
  userId?: number,
  title: string,
  body: string
}

// Downloads all users
export function getUsers() {
  return fetch(baseUrl);
}

// Downloads a specific user
export function getUserById(id: Readonly<number>) {
  return fetch(`${baseUrl}/${id}`);
}

// Adds a new user
export function addUser(user: Readonly<User>) {
  return fetch(baseUrl, {
    method: "POST",
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    },
    body: JSON.stringify(user)
  });
}

// Edits a specific user
export function editUser(user: Readonly<User>, id: Readonly<number>) {
  return fetch(`${baseUrl}/${id}`, {
    method: "PUT",
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    },
    body: JSON.stringify(user)
  });
}

// Deletes a specific user
export function deleteUser(id: Readonly<number>) {
  return fetch(`${baseUrl}/${id}`, {
    method: "DELETE"
  });
}