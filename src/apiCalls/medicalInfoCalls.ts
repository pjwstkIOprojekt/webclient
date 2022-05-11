import { get, post, put, del } from "./basicCalls";
import { MedicalInfo } from "../helpers/apiTypes";

// Get all info
export const getInfo = () => get("medicalInfo");

// Get info by id
export const getInfoById = (id: number) => get(`medicalInfo/${id}`);

// Creates new info
export const createInfo = (data: Readonly<MedicalInfo>) => post("medicalInfo", JSON.stringify(data));

// Modify info
export const updateInfo = (id: number, data: Readonly<MedicalInfo>) => put(`medicalInfo/${id}`, JSON.stringify(data));

// Delete info
export const deleteInfo = (id: number) => del(`medicalInfo/${id}`);

// Update blood info
export const updateBloodType = (id: number, data: string) => put(`medicalInfo/blood/${id}`, data);

// Update disease info
export const updateChronicDisease = (id: number, data: string) => put(`medicalInfo/chronic/${id}`, data);

// Update allergy info
export const updateAllergies = (id: number, data: string) => put(`medicalInfo/allergies/${id}`, data);
