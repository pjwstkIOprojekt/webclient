import { get, post } from "./basicCalls";

export interface ItemRequest {
  // Enum - ItemType
  type: string,

  // Not blank
  // All
  name?: string,

  // Not blank
  // Not in MULTI_USE
  description?: string,

  // Not blank
  // Not in SINGLE_USE and MULTI_USE
  manufacturer?: string,

  // Datetime
  // Only in MEDICAL
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
export const getItems = (abort: AbortController) => get(itemBase, abort);
export const getItemById = (id: number, abort: AbortController) => get(`${itemBase}/${id}`, abort);
export const createItem = (req: Readonly<ItemRequest>, abort: AbortController) => post(`${itemBase}/create`, req, abort);
