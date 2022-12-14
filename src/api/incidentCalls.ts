import { AccidentReportResponse } from "./accidentReportCalls";
import { get, put, del, post } from "./basicCalls";

export interface IncidentRequest {
  // Integer, Min = 1, Max = 10
  dangerScale: number,

  // Enum - IncidentStatusType
  incidentStatusType: string,

  // Not blank
  reactionJustification: string
}

export interface IncidentResponse extends IncidentRequest {
  incidentId: number,
  accidentReport: AccidentReportResponse
}

const incidentBase = "incident";
export const getIncidents = (abort: AbortController) => get(incidentBase, abort);
export const getIncidentById = (id: number, abort: AbortController) => get(`${incidentBase}/${id}`, abort);
export const getIncidentByStatus = (incidentStatusType: string, abort: AbortController) => get(`${incidentBase}/status/${incidentStatusType}`, abort);
export const updateIncident = (id: number, req: Readonly<IncidentRequest>, abort: AbortController) => put(`${incidentBase}/${id}`, req, abort);
export const deleteIncident = (id: number, abort: AbortController) => del(`${incidentBase}/${id}`, abort);
export const addAmbulances = (id: number, licensePlates: Readonly<string[]>, abort: AbortController) => put(`${incidentBase}/${id}/ambulance`, licensePlates, abort);
export const changeIncidentStatus = (id: number, incidentStatusType: string, abort: AbortController) => post(`${incidentBase}/${id}/status/${incidentStatusType}`, undefined, abort);
