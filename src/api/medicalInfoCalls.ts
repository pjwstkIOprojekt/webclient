import { get, post, put, del } from "./basicCalls";

export interface BloodRequest {
  // Email
  userEmail: string,

  // Enum - RhType
  rhType: string,

  // Enum - BloodType
  bloodType: string
}

const medicalInfoBase = "medical_info";
export const getMedicalInfos = () => get(medicalInfoBase);
export const getMedicalInfoByEmail = (email: string) => get(`${medicalInfoBase}/user/${email}`);
export const getMedicalInfoById = (id: number) => get(`${medicalInfoBase}/${id}`);
export const deleteMedicalInfo = (id: number) => del(`${medicalInfoBase}/${id}`);
export const getBloodById = (id: number) => get(`${medicalInfoBase}/blood/${id}`);
export const createBlood = (req: Readonly<BloodRequest>) => post(`${medicalInfoBase}/blood`, JSON.stringify(req));
export const updateBlood = (id: number, req: Readonly<BloodRequest>) => put(`${medicalInfoBase}/blood/${id}`, JSON.stringify(req));
export const deleteBlood = (id: number) => del(`${medicalInfoBase}/blood/${id}`);
