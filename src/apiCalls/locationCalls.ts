import { get, post, put, del } from "./basicCalls";
import { Location } from "../helpers/apiTypes";

// Get all locations
export const getLocations = () => get("location");

// Get location by id
export const getLocationById = (id: number) => get(`location/${id}`);

// Creates new location
export const createLocation = (data: Readonly<Location>) => post("location", JSON.stringify(data));

// Modify location
export const updateLocation = (id: number, data: Readonly<Location>) => put(`location/${id}`, JSON.stringify(data));

// Delete location
export const deleteLocation = (id: number) => del(`location/${id}`);
