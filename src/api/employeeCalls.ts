import { ScheduleKey, ScheduleDto } from "./adminCalls";
import { get, post } from "./basicCalls";

export interface UpdateScheduleRequest {
  workSchedule: Record<ScheduleKey, ScheduleDto>
}

export interface ScheduleResponse {
  newSchedule: Record<ScheduleKey, ScheduleDto>
}

const employeeBase = "employee";
export const startShift = () => get(`${employeeBase}/shift/start`);
export const endShift = () => get(`${employeeBase}/shift/end`);
export const updateSchedule = (req: Readonly<UpdateScheduleRequest>) => post(`${employeeBase}/schedule/update`, req);
export const getAssignedAmbulance = () => get(`${employeeBase}/medic/assigned-to`);
