import { get, post, put, del } from "./basicCalls";

export interface AdditionalServices {

}

// Get all services
export const getServices = () => get("additionalServices");

// Get service by id
export const getServiceById = (id: number) => get(`additionalServices/${id}`);

// Creates new service
export const createService = (data: Readonly<AdditionalServices>) => post("additionalServices", JSON.stringify(data));

// Modify service
export const updateService = (id: number, data: Readonly<AdditionalServices>) => put(`additionalServices/${id}`, JSON.stringify(data));

// Delete service
export const deleteService = (id: number) => del(`additionalServices/${id}`);
