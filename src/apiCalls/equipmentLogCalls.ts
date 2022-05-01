import { get, post, put, del } from "./basicCalls";
import { EquipmentLog } from "../helpers/apiTypes";

// Get all logs
export const getLogs = () => get("equipmentLog");

// Get log by id
export const getLogById = (id: number) => get(`equipmentLog/${id}`);

// Creates new log
export const createLog = (data: Readonly<EquipmentLog>) => post("equipmentLog", JSON.stringify(data));

// Modify log
export const updateLog = (id: number, data: Readonly<EquipmentLog>) => put(`equipmentLog/${id}`, JSON.stringify(data));

// Delete log
export const deleteLog = (id: number) => del(`equipmentLog/${id}`);
