import { AccidentReportResponse } from "./accidentReportCalls";
import { get, put, del } from "./basicCalls";

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
export const getIncidents = () => get(incidentBase);
export const getIncidentById = (id: number) => get(`${incidentBase}/${id}`);
export const updateIncident = (id: number, req: Readonly<IncidentRequest>) => put(`${incidentBase}/${id}`, req);
export const deleteIncident = (id: number) => del(`${incidentBase}/${id}`);
export const addAmbulances = (id: number, licensePlates: string[]) => put(`${incidentBase}/${id}/ambulance`, licensePlates);
