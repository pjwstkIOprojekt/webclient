import { get, del, put } from "./basicCalls";

export interface EquipmentRequest {
  // Enum - EquipmentType
  equipmentType: string,
  
  // Not blank
  name: string,

  // Datetime
  date: string
}

export interface EquipmentResponse extends EquipmentRequest {
  equipmentId: number
}

const equipmentBase = "equipment";
export const getEquipments = () => get(equipmentBase);
export const getEquipmentById = (id: number) => get(`${equipmentBase}/${id}`);
export const deleteEquipment = (id: number) => del(`${equipmentBase}/${id}`);
export const updateEquipment = (id: number, req: Readonly<EquipmentRequest>) => put(`${equipmentBase}/${id}`, req);
