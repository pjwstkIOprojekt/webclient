import { get, post, put, del } from "./basicCalls";

export interface DiseaseRequest {
  // Email
  userEmail: string,

  // Not blank
  diseaseName: string,

  // Not blank
  description: string
  shareWithBand: boolean
}

const diseaseBase = "disease";
export const getDiseases = () => get(diseaseBase);
export const getDiseaseById = (id: number) => get(`${diseaseBase}/${id}`);
export const createDisease = (req: Readonly<DiseaseRequest>) => post(diseaseBase, JSON.stringify(req));
export const updateDisease = (id: number, req: Readonly<DiseaseRequest>) => put(`${diseaseBase}/${id}`, JSON.stringify(req));
export const deleteDisease = (id: number) => del(`${diseaseBase}/${id}`);
