import { post, get } from "./basicCalls";

// Defines login request structure
export interface LoginRequest {
  email?: string,
  password?: string
}

// Defines signup request structure
export interface SignupRequest extends LoginRequest {
  firstName?: string,
  lastName?: string,
  phoneNumber?: string,
  birthDate?: Date
}

// Contains base auth controller path
const authBase = "auth";

// Login request
export const authenticateUser = (req: Readonly<LoginRequest>) => post(`${authBase}/login`, JSON.stringify(req));

// Registers new user
export const registerUser = (req: Readonly<SignupRequest>) => post(`${authBase}/signup`, JSON.stringify(req));

// Temporary test calls, remove it later
export const adminTest = () => get("hello/admin");
export const userTest = () => get("hello/user");
export const enumTest = () => get("enum/allergy_type");
