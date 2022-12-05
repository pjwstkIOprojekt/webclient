import { get, post } from "./basicCalls";

export interface ItemRequest {
  // Enum - ItemType
  itemType: string,

  // Not blank
  name?: string,

  // Not blank
  description?: string,

  // Not blank
  manufacturer?: string,

  // Datetime
  expiration_date?: Date
}

export interface ItemResponse extends ItemRequest {
  itemId: number
}

export interface ItemContainer {
  count: number,
  unit: string,
  updatedAt: Date
}

export interface EquipmentResponse {
  item: ItemResponse,
  itemData: ItemContainer
}

const itemBase = "item";
export const getItems = () => get(itemBase);
export const getItemById = (id: number) => get(`${itemBase}/${id}`);
export const createItem = (req: Readonly<ItemRequest>) => post(`${itemBase}/create`, req);
