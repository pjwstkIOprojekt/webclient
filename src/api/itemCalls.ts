import { get, post } from "./basicCalls";

export interface AbstractItemRequest {
  // Enum - ItemType
  itemType: string | null
}

export interface SingleUseItemRequest extends AbstractItemRequest {
  name: string | null,
  description: string | null
}

export interface MedicineItemRequest extends SingleUseItemRequest {
  manufacturer: string | null,
  expiration_date: Date | null
}

export interface AbstractItemResponse {
  itemId: number,
  itemType: string
}

export interface SingleUseItemResponse extends AbstractItemResponse {
  name: string,
  description: string
}

export interface ItemContainer {
  count: number,
  unit: string,
  updatedAt: Date
}

export interface MedicineItemResponse extends SingleUseItemResponse {
  manufacturer: string,
  expirationDate: Date
}

export interface EquipmentResponse<T extends AbstractItemResponse> {
  item: T,
  itemData: ItemContainer
}

const itemBase = "item";
export const getItems = () => get(itemBase);
export const getItemById = (id: number) => get(`${itemBase}/${id}`);
export const createItem = <T extends AbstractItemRequest>(req: Readonly<T>) => post(`${itemBase}/create`, req);
