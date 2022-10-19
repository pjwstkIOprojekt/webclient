import { get, post, put, del } from "./basicCalls";

interface AllergyBase {
  // Enum - AllergyType
  allergyType: string,

  // Not blank
  allergyName: string,

  // Not blank
  other: string
}

export interface AllergyRequest extends AllergyBase {
  // Email
  userEmail: string
}

export interface AllergyResponse extends AllergyBase {
  allergyId: number
}

const allergyBase = "allergy";
export const getAllergies = () => get(allergyBase);
export const getAllergyById = (id: number) => get(`${allergyBase}/${id}`);
export const createAllergy = (req: Readonly<AllergyRequest>) => post(allergyBase, JSON.stringify(req));
export const updateAllergy = (id: number, req: Readonly<AllergyRequest>) => put(`${allergyBase}/${id}`, JSON.stringify(req));
export const deleteAllergy = (id: number) => del(`${allergyBase}/${id}`);
