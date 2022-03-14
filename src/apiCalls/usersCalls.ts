const baseUrl = "https://localhost:8080";

interface MedicalInfo {
  id?: number,
  bloodType: string,
  chronicDeseases: string,
  allergies: string
}

// User API type
export interface User {
  id?: number,
  name: string,
  password: string,
  salt: string,
  email: string,
  birthDate: Date | null,
  phone: string,
  bandCode: string,
  medicalInfo: MedicalInfo | null
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