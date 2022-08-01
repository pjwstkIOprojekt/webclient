import { get, post, put, del } from "./basicCalls";
import { ReportSurvey } from "../helpers/apiTypes";

// Get all surveys
export const getSurveys = () => get("reportSurvey");

// Get survey by id
export const getSurveyById = (id: number) => get(`reportSurvey/${id}`);

// Creates new survey
export const createSurvey = (data: Readonly<ReportSurvey>) => post("reportSurvey", JSON.stringify(data));

// Modify survey
export const updateSurvey = (id: number, data: Readonly<ReportSurvey>) => put(`reportSurvey/${id}`, JSON.stringify(data));

// Delete survey
export const deleteSurvey = (id: number) => del(`reportSurvey/${id}`);
