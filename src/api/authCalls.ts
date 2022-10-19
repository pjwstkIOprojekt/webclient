import { post } from "./basicCalls";

export interface LoginRequest {
  // Email
  email: string,

  // Not blank
  password: string
}

export interface SignupRequest extends LoginRequest {
  // Not blank
  firstName: string,

  // Not blank
  lastName: string,

  // Not blank
  phoneNumber: string,

  // Past
  birthDate: string
}

export interface JwtResponse {
  token: string,
  email: string,
  type: string,
  roles: string[]
}

const authBase = "auth";
export const loginUser = (req: Readonly<LoginRequest>) => post(`${authBase}/login`, JSON.stringify(req));
export const registerUser = (req: Readonly<SignupRequest>) => post(`${authBase}/signup`, JSON.stringify(req));
