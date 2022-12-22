import { Schedule } from "./adminCalls";
import { get, post } from "./basicCalls";

export interface UpdateScheduleRequest {
  workSchedule: Schedule
}

export interface ScheduleResponse {
  schedule: Schedule
}

export interface EmployeeResponse {
  id: number,
  name: string,
  lastName: string,
  email: string,
  phone: string,
  birthDate: Date,
  employeeType: string,
  workSchedule: ScheduleResponse
}

const employeeBase = "employee";
export const startShift = (abort: AbortController) => get(`${employeeBase}/shift/start`, abort);
export const endShift = (abort: AbortController) => get(`${employeeBase}/shift/end`, abort);
export const updateSchedule = (req: Readonly<UpdateScheduleRequest>, abort: AbortController) => post(`${employeeBase}/schedule/update`, req, abort);
export const getSchedule = (abort: AbortController) => get(`${employeeBase}/schedule`, abort);
export const getAssignedAmbulance = (abort: AbortController) => get(`${employeeBase}/medic/assigned-to`, abort);
export const getSchedules = (abort: AbortController) => get(`${employeeBase}/all/schedule`, abort);
