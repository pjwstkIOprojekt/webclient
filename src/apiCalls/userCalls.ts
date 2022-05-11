import { get, post, put, del } from "./basicCalls";
import { User, MedicalInfo } from "../helpers/apiTypes";

// Get all users
export const getUsers = () => get("user");

// Get user by id
export const getUserById = (id: number) => get(`user/${id}`);

// Creates new user
export const createUser = (data: Readonly<User>) => post("user", JSON.stringify(data));

// Modify user
export const updateUser = (id: number, data: Readonly<User>) => put(`user/${id}`, JSON.stringify(data));

// Delete user
export const deleteUser = (id: number) => del(`user/${id}`);

// Add medical info
export const addMedicalInfo = (id: number, data: Readonly<MedicalInfo>) => post(`user/info/${id}`, JSON.stringify(data));

// Update medical info
export const updateMedicalInfo = (id: number, data: Readonly<MedicalInfo>) => put(`user/info/${id}`, JSON.stringify(data));
