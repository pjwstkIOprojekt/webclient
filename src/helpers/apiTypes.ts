// Base url for requests, change to 'localhost:8080' if you want to test with local backend
export const baseUrl = "http://172.21.40.111:8080";

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