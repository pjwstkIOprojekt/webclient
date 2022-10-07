import { get, post, put, del } from "./basicCalls";

export interface AccidentReport {

}

// Get all reports
export const getReports = () => get("accidentReport");

// Get report by id
export const getReportById = (id: number) => get(`accidentReport/${id}`);

// Creates new report
export const createReport = (data: Readonly<AccidentReport>) => post("accidentReport", JSON.stringify(data));

// Modify report
export const updateReport = (id: number, data: Readonly<AccidentReport>) => put(`accidentReport/${id}`, JSON.stringify(data));

// Delete report
export const deleteReport = (id: number) => del(`accidentReport/${id}`);
