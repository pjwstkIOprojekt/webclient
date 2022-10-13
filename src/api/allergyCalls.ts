import { MedicalInfo } from "./medicalInfoCalls";
import { get } from "./basicCalls";

// Defines allergy model
export interface Allergy {
  allergyId?: number,
  allergyType?: string,
  allergyName?: string,
  other?: string,
  medicalInfos?: Set<MedicalInfo>
}

// Contains base allergy controller path
const allergyBase = "allergy";

// Get all allergies
export const getAllergies = () => get(allergyBase);

// Get allergy by id
export const getAllergyById = (id: number) => get(`${allergyBase}/${id}`);
