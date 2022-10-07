import { AmbulanceAvailability } from "./ambulanceAvailabilityCalls";
import { get, post, put, del } from "./basicCalls";

export interface Ambulance {

}

// Change ambulance status
export const changeAmbulanceStatus = (id: number, data: Readonly<AmbulanceAvailability>) => post(`ambulances/${id}/availability`, JSON.stringify(data));

// Assign equipment to ambulance
export const assignEquipment = (id: number, eqid: number) => post(`ambulances/${id}/equipment/${eqid}`);

// Get all ambulances
export const getAmbulances = () => get("ambulances");

// Get ambulance by id
export const getAmbulanceById = (id: number) => get(`ambulances/${id}`);

// Get ambulance by seats
export const getAmbulanceBySeats = (seats: number) => get(`ambulances/by/${seats}`);

// Get ambulance by type
export const getAmbulanceByType = (type: string) => get(`ambulances/by/${type}`);

// Get ambulance by kind
export const getAmbulanceByKind = (kind: string) => get(`ambulances/by/${kind}`);

// Get ambulance by license plate
export const getAmbulanceByPlate = (plate: string) => get(`ambulances/plates/${plate}`);

// Get all available ambulances
export const getAvailableAmbulances = () => get("ambulances/available");

// Creates new ambulance
export const createAmbulance = (data: Readonly<Ambulance>) => post("ambulances", JSON.stringify(data));

// Modify ambulance
export const updateAmbulance = (id: number, data: Readonly<Ambulance>) => put(`ambulances/${id}`, JSON.stringify(data));

// Delete ambulance
export const deleteAmbulance = (id: number) => del(`ambulances/${id}`);
