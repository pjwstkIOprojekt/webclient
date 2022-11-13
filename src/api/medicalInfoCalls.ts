import { AllergyResponse } from "./allergyCalls";
import { DiseaseResponse } from "./diseaseCalls";
import { get, post, put, del } from "./basicCalls";

interface BloodBase {
  // Enum - RhType
  rhType: string,

  // Enum - BloodType
  bloodType: string
}

export interface BloodRequest extends BloodBase {
  // Email
  userEmail: string
}

export interface MedicalInfoResponse extends BloodBase {
  medicalInfoId: number,
  allergies: AllergyResponse[],
  diseases: DiseaseResponse[]
}

const medicalInfoBase = "medical_info";
export const getMedicalInfoByEmail = (email: string) => get(`${medicalInfoBase}/user/${email}`);
export const deleteMedicalInfo = (id: number) => del(`${medicalInfoBase}/${id}`);
export const getBloodById = (id: number) => get(`${medicalInfoBase}/blood/${id}`);
export const createBlood = (req: Readonly<BloodRequest>) => post(`${medicalInfoBase}/blood`, req);
export const updateBlood = (id: number, req: Readonly<BloodRequest>) => put(`${medicalInfoBase}/blood/${id}`, req);
export const deleteBlood = (id: number) => del(`${medicalInfoBase}/blood/${id}`);
