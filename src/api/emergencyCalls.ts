import { get, post } from "./basicCalls";

export interface CreateEmergencyRequest {

}

export interface ApproveEmergencyRequest {

}

// Creates new emergency
export const createEmergency = (data: Readonly<CreateEmergencyRequest>) => post("emergency/new", JSON.stringify(data));

// Approve emergency
export const approveEmergency = (id: number, data: Readonly<ApproveEmergencyRequest>) => post(`emergency/approve/${id}`, JSON.stringify(data));

// Get unapproved emergencies
export const getUnapproved = () => get("emergency/unapproved");

// Get approved emergencies
export const getApproved = () => get("emergency/approved");
