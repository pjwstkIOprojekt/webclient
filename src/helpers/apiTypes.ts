// Base url for requests
export const baseUrl = "http://localhost:8080";

// API types definitions
export interface User {
  username: string,
  password: string
}

export interface NewUser extends User {
  firstName: string,
  lastName: string,
  email: string,
  birthDate: Date,
  phoneNumber: string
}