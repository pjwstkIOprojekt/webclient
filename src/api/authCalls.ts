import { post, put } from "./basicCalls";

export interface PasswordTokenRequest {
  // Email
  email: string
}

export interface LoginRequest extends PasswordTokenRequest {
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

export interface JwtResponse extends PasswordTokenRequest {
  token: string,
  type: string,
  userId: number,
  roles: string[]
}

export interface ResetPasswordRequest {
  // Password
  newPassword: string
}

export interface ChangePasswordRequest extends ResetPasswordRequest {
  // Password
  oldPassword: string
}

const authBase = "auth";
export const loginUser = (req: Readonly<LoginRequest>, abort: AbortController) => post(`${authBase}/login`, req, abort);
export const registerUser = (req: Readonly<SignupRequest>, abort: AbortController) => post(`${authBase}/signup`, req, abort);
export const changePassword = (req: Readonly<ChangePasswordRequest>, abort: AbortController) => put(`${authBase}/password/change`, req, abort);
export const passwordToken = (req: Readonly<PasswordTokenRequest>, abort: AbortController) => post(`${authBase}/password/reset`, req, abort);
export const resetPassword = (token: string, req: Readonly<ResetPasswordRequest>, abort: AbortController) => put(`${authBase}/password/reset?token=${token}`, req, abort);
