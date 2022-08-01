import { get, post, put, del } from "./basicCalls";
import { Victim } from "../helpers/apiTypes";

// Get all victims
export const getVictims = () => get("victim");

// Get victim by id
export const getVictimById = (id: number) => get(`victim/${id}`);

// Creates new victim
export const createVictim = (data: Readonly<Victim>) => post("victim", JSON.stringify(data));

// Modify victim
export const updateVictim = (id: number, data: Readonly<Victim>) => put(`victim/${id}`, JSON.stringify(data));

// Delete victim
export const deleteVictim = (id: number) => del(`victim/${id}`);
