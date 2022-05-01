import { get, post, put, del } from "./basicCalls";
import { User } from "../helpers/apiTypes";

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
