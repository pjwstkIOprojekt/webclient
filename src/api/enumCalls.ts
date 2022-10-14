import { get } from "./basicCalls";

const enumBase = "enum";
export const getAllergyType = () => get(`${enumBase}/allergy_type`);
export const getRhType = () => get(`${enumBase}/rh_type`);
export const getBloodType = () => get(`${enumBase}/blood_type`);
