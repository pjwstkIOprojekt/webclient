import { post } from "./basicCalls";

export interface LoginRequest {
  // Email
  email: string,

  // Password
  password: string
}

export interface SignupRequest extends LoginRequest {
  // Not blank
  firstName: string,

  // Not blank
  lastName: string,

  // Phone
  phoneNumber: string,

  // Past
  birthDate: string
}

export interface JwtResponse {
  token: string,
  email: string,
  type: string,
  userId: number,
  roles: string[]
}

const authBase = "auth";
export const loginUser = (req: Readonly<LoginRequest>, abort: AbortController) => post(`${authBase}/login`, req, abort);
export const registerUser = (req: Readonly<SignupRequest>, abort: AbortController) => post(`${authBase}/signup`, req, abort);
