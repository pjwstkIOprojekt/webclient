import { MedicalInfo } from "./medicalInfoCalls";
import { post } from "./basicCalls";

export interface LoginRequest {
  email: string,
  password: string
}

export interface SignupRequest extends LoginRequest {
  firstName: string,
  lastName: string,
  phoneNumber: string,
  birthDate: Date
}

export interface User extends SignupRequest {
  userId: number,
  roles: Set<string>,
  medicalInfo: MedicalInfo
}

const authBase = "auth";
export const loginUser = (req: Readonly<LoginRequest>) => post(`${authBase}/login`, JSON.stringify(req));
export const registerUser = (req: Readonly<SignupRequest>) => post(`${authBase}/signup`, JSON.stringify(req));
