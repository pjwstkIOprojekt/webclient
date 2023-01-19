import { Schedule } from "./adminCalls";
import { get, post } from "./basicCalls";

export interface UpdateScheduleRequest {
  workSchedule: Schedule
}

export interface ScheduleResponse {
  schedule: Schedule
}

interface User {
  lastName: string,
  email: string
}

export interface EmployeeResponse extends User {
  id: number,
  name: string,
  phone: string,
  birthDate: Date,
  bandCode: string,
  employeeType: string,
  workSchedule: ScheduleResponse
}

export interface MedicResponse extends User {
  firstName: string,
  userId: number
}

const employeeBase = "employee";
export const startShift = (abort: AbortController) => get(`${employeeBase}/shift/start`, abort);
export const endShift = (abort: AbortController) => get(`${employeeBase}/shift/end`, abort);
export const updateSchedule = (req: Readonly<UpdateScheduleRequest>, abort: AbortController) => post(`${employeeBase}/schedule/update`, req, abort);
export const getSchedule = (abort: AbortController) => get(`${employeeBase}/schedule`, abort);
export const isDuringShift = (abort: AbortController) => get(`${employeeBase}/schedule/is-working`, abort);
export const getAssignedAmbulance = (abort: AbortController) => get(`${employeeBase}/medic/assigned-to`, abort);

export const getSchedules = (abort: AbortController) => get(`${employeeBase}/all/schedule`, abort);
export const getFreeMedics = (abort: AbortController) => get(`${employeeBase}/medic/free`, abort);
export const getMedics = (abort: AbortController) => get(`${employeeBase}/medic`, abort);
