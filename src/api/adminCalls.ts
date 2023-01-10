import { SignupRequest } from "./authCalls";
import { post } from "./basicCalls";

export interface ScheduleDto {
  // Pattern - ^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$
  start: string,

  // Pattern - ^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$
  end: string
}

export type ScheduleKey = "MONDAY" | "TUESDAY" | "WEDNESDAY" | "THURSDAY" | "FRIDAY";
export type Schedule = Record<ScheduleKey, ScheduleDto>;

export const scheduleKeyFromNum: Record<number, ScheduleKey> = {
  1: "MONDAY",
  2: "TUESDAY",
  3: "WEDNESDAY",
  4: "THURSDAY",
  5: "FRIDAY"
};

export const formatSchedule = (x: Readonly<Schedule>) => {
  const copy: Record<string, ScheduleDto> = { ...x };

  for (const index in x) {
    const tmp = copy[index];

    if (!tmp.start || !tmp.end) {
      delete copy[index];
    }
  }

  return copy as Schedule;
};

export interface RegisterEmployeeRequest extends SignupRequest {
  workSchedule: Schedule
}

const adminBase = "admin";
export const registerEmployee = (employeeType: string, req: Readonly<RegisterEmployeeRequest>, abort: AbortController) => post(`${adminBase}/register/employee/${employeeType}`, req, abort);
