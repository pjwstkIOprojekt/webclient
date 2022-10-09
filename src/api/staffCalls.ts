import { get, post, put, del } from "./basicCalls";

export interface Staff {

}

// Get all staff
export const getStaff = () => get("staff");

// Get staff by id
export const getStaffById = (id: number) => get(`staff/${id}`);

// Creates new staff
export const createStaff = (data: Readonly<Staff>) => post("staff", JSON.stringify(data));

// Modify staff
export const updateStaff = (id: number, data: Readonly<Staff>) => put(`staff/${id}`, JSON.stringify(data));

// Delete staff
export const deleteStaff = (id: number) => del(`staff/${id}`);
