import { get, post, put, del } from "./basicCalls";
import { AmbulanceDto, AmbulanceType, AmbulanceKind } from "../helpers/apiTypes";

// Get all ambulances
export const getAmbulances = () => get("ambulances");

// Get ambulance by id
export const getAmbulanceById = (id: number) => get(`ambulances/${id}`);

// Get ambulance by seats
export const getAmbulanceBySeats = (seats: number) => get(`ambulances/by/${seats}`);

// Get ambulance by type
export const getAmbulanceByType = (type: Readonly<AmbulanceType>) => get(`ambulances/by/${type}`);

// Get ambulance by kind
export const getAmbulanceByKind = (kind: Readonly<AmbulanceKind>) => get(`ambulances/by/${kind}`);

// Get ambulance by license plate
export const getAmbulanceByPlate = (plate: string) => get(`ambulances/plates/${plate}`);

// Get all available ambulances
export const getAvailableAmbulances = () => get("ambulances/available");

// Creates new ambulance
export const createAmbulance = (data: Readonly<AmbulanceDto>) => post("ambulances", JSON.stringify(data));

// Modify ambulance
export const updateAmbulance = (id: number, data: Readonly<AmbulanceDto>) => put(`ambulances/${id}`, JSON.stringify(data));

// Delete ambulance
export const deleteAmbulance = (id: number) => del(`ambulances/${id}`);
