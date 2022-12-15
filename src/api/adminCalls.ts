import { SignupRequest } from "./authCalls";
import { post } from "./basicCalls";

export interface ScheduleDto {
  // Pattern - ^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$
  start: string,

  // Pattern - ^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$
  end: string
}

export type ScheduleKey = "MONDAY" | "TUESDAY" | "WEDNESDAY" | "THURSDAY" | "FRIDAY";

export interface RegisterEmployeeRequest extends SignupRequest {
  workSchedule: Record<ScheduleKey, ScheduleDto>
}

const adminBase = "admin";
export const registerEmployee = (employeeType: string, req: Readonly<RegisterEmployeeRequest>, abort: AbortController) => post(`${adminBase}/register/employee/${employeeType}`, req, abort);
