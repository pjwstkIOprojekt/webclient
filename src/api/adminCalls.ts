import { SignupRequest } from "./authCalls";
import { post } from "./basicCalls";

const adminBase = "admin";
export const registerEmployee = (employeeType: string, req: Readonly<SignupRequest>) => post(`${adminBase}/register/employee/${employeeType}`, req);
