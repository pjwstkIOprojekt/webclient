import { User } from "./authCalls";
import { Allergy } from "./allergyCalls";
import { get, post, put, del } from "./basicCalls";

interface MedicalBase {
  medicalInfoId: number,
  rhType: string,
  bloodType: string
}

export interface BloodRequest extends MedicalBase {
  userId: number
}

export interface MedicalInfo extends MedicalBase {
  user: User,
  allergies: Set<Allergy>
}

const medicalInfoBase = "medical_info";
export const getBloodById = (id: number) => get(`${medicalInfoBase}/blood/${id}`);
export const createBlood = (req: Readonly<BloodRequest>) => post(`${medicalInfoBase}/blood`, JSON.stringify(req));
export const updateBlood = (id: number, req: Readonly<BloodRequest>) => put(`${medicalInfoBase}/blood/${id}`, JSON.stringify(req));
export const deleteBlood = (id: number) => del(`${medicalInfoBase}/blood/${id}`);
