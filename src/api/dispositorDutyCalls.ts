import { get, post, put, del } from "./basicCalls";
import { DispositorDutyEntry } from "../helpers/apiTypes";

// Get all entries
export const getEntries = () => get("dispositorDutyEntry");

// Get entry by id
export const getEntryById = (id: number) => get(`dispositorDutyEntry/${id}`);

// Creates new entry
export const createEntry = (data: Readonly<DispositorDutyEntry>) => post("dispositorDutyEntry", JSON.stringify(data));

// Modify entry
export const updateEntry = (id: number, data: Readonly<DispositorDutyEntry>) => put(`dispositorDutyEntry/${id}`, JSON.stringify(data));

// Delete entry
export const deleteEntry = (id: number) => del(`dispositorDutyEntry/${id}`);
