import { get, post, put, del } from "./basicCalls";

interface DiseaseBase {
  // Not blank
  diseaseName: string,

  // Not blank
  description: string
  shareWithBand: boolean
}

export interface DiseaseRequest extends DiseaseBase {
  // Email
  userEmail: string
}

export interface DiseaseResponse extends DiseaseBase {
  diseaseId: number
}

const diseaseBase = "disease";
export const getDiseases = () => get(diseaseBase);
export const getDiseaseById = (id: number) => get(`${diseaseBase}/${id}`);
export const createDisease = (req: Readonly<DiseaseRequest>) => post(diseaseBase, JSON.stringify(req));
export const updateDisease = (id: number, req: Readonly<DiseaseRequest>) => put(`${diseaseBase}/${id}`, JSON.stringify(req));
export const deleteDisease = (id: number) => del(`${diseaseBase}/${id}`);
