import { get } from "./basicCalls";

const employeeBase = "employee";
export const startShift = () => get(`${employeeBase}/shift/start`);
export const endShift = () => get(`${employeeBase}/shift/end`);
