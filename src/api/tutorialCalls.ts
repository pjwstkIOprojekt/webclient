import { get, post, put, del } from "./basicCalls";

export interface Tutorial {

}

// Get all tutorials
export const getTutorials = () => get("tutorial");

// Get tutorial by id
export const getTutorialById = (id: number) => get(`tutorial/${id}`);

// Creates new tutorial
export const createTutorial = (data: Readonly<Tutorial>) => post("tutorial", JSON.stringify(data));

// Modify tutorial
export const updateTutorial = (id: number, data: Readonly<Tutorial>) => put(`tutorial/${id}`, JSON.stringify(data));

// Delete tutorial
export const deleteTutorial = (id: number) => del(`tutorial/${id}`);
