import { ScheduleKey, ScheduleDto } from "./adminCalls";
import { get, post } from "./basicCalls";

export interface UpdateScheduleRequest {
  workSchedule: Record<ScheduleKey, ScheduleDto>
}

export interface ScheduleResponse {
  newSchedule: Record<ScheduleKey, ScheduleDto>
}

const employeeBase = "employee";
export const startShift = (abort: AbortController) => get(`${employeeBase}/shift/start`, abort);
export const endShift = (abort: AbortController) => get(`${employeeBase}/shift/end`, abort);
export const updateSchedule = (req: Readonly<UpdateScheduleRequest>, abort: AbortController) => post(`${employeeBase}/schedule/update`, req, abort);
export const getAssignedAmbulance = (abort: AbortController) => get(`${employeeBase}/medic/assigned-to`, abort);
