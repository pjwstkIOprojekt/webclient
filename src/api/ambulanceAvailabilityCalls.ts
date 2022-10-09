import { get, post, put, del } from "./basicCalls";

export interface AmbulanceAvailability {

}

// Get all availabilities
export const getAvailabilities = () => get("ambulanceAvailability");

// Get availability by id
export const getAvailabilityById = (id: number) => get(`ambulanceAvailability/${id}`);

// Creates new availability
export const createAvailability = (data: Readonly<AmbulanceAvailability>) => post("ambulanceAvailability", JSON.stringify(data));

// Modify availability
export const updateAvailability = (id: number, data: Readonly<AmbulanceAvailability>) => put(`ambulanceAvailability/${id}`, JSON.stringify(data));

// Delete availability
export const deleteAvailability = (id: number) => del(`ambulanceAvailability/${id}`);
