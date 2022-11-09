import { get, post, put, del } from "./basicCalls";

interface AccidentReportBase {
  bandCode: string,

  // Enum - EmergencyType
  emergencyType: string,

  // Integer, Min = 1
  victimCount: number,
  consciousness: boolean,
  breathing: boolean
}

export interface AccidentReportUpdateRequest extends AccidentReportBase {
  longitude: number,
  latitude: number
}

export interface AccidentReportRequest extends AccidentReportUpdateRequest {
  // Email
  email: string
}

export interface AccidentLocation {
  longitude: number,
  latitude: number
}

export interface AccidentReportResponse extends AccidentReportBase {
  accidentId: number,
  date: string,
  location: AccidentLocation
}

const accidentBase = "accident_report";
export const getAccidents = () => get(accidentBase);
export const getAccidentById = (id: number) => get(`${accidentBase}/${id}`);
export const getAccidentsByUser = (email: string) => get(`${accidentBase}/user/${email}`);
export const createAccident = (req: Readonly<AccidentReportRequest>) => post(accidentBase, req);
export const updateAccident = (id: number, req: Readonly<AccidentReportUpdateRequest>) => put(`${accidentBase}/${id}`, req);
export const deleteAccident = (id: number) => del(`${accidentBase}/${id}`);
