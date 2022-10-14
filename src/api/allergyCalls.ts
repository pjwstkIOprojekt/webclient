import { MedicalInfo } from "./medicalInfoCalls";
import { get, post, put, del } from "./basicCalls";

interface AllergyBase {
  allergyType: string,
  allergyName: string,
  other: string
}

export interface Allergy extends AllergyBase {
  allergyId: number,
  medicalInfos: Set<MedicalInfo>
}

export interface AllergyRequest extends AllergyBase {
  medicalInfoId: number,
  userId: number
}

const allergyBase = "allergy";
export const getAllergies = () => get(allergyBase);
export const getAllergyById = (id: number) => get(`${allergyBase}/${id}`);
export const createAllergy = (req: Readonly<AllergyRequest>) => post(allergyBase, JSON.stringify(req));
export const updateAllergy = (id: number, req: Readonly<AllergyRequest>) => put(`${allergyBase}/${id}`, JSON.stringify(req));
export const deleteAllergy = (id: number) => del(`${allergyBase}/${id}`);
