import { get, post, put, del } from "./basicCalls";

export interface Facility {

}

// Get all facilities
export const getFacilities = () => get("facility");

// Get facility by id
export const getFacilityById = (id: number) => get(`facility/${id}`);

// Creates new facility
export const createFacility = (data: Readonly<Facility>) => post("facility", JSON.stringify(data));

// Modify facility
export const updateFacility = (id: number, data: Readonly<Facility>) => put(`facility/${id}`, JSON.stringify(data));

// Delete facility
export const deleteFacility = (id: number) => del(`facility/${id}`);
