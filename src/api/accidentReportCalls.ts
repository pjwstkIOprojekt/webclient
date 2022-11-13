import { get, post, put, del } from "./basicCalls";

interface AccidentReportBase {
  bandCode: string,

  // Enum - EmergencyType
  emergencyType: string,

  // Integer, Min = 1
  victimCount: number,
  breathing: boolean
}

interface AccidentRequestBase extends AccidentReportBase {
  longitude: number,
  latitude: number
}

export interface AccidentReportUpdateRequest extends AccidentRequestBase {
  consciousness: boolean
}

export interface AccidentReportRequest extends AccidentRequestBase {
  // Email
  email: string,
  concious: boolean
}

export interface AccidentLocation {
  longitude: number,
  latitude: number
}

export interface AccidentReportResponse extends AccidentReportBase {
  accidentId: number,
  date: Date,
  location: AccidentLocation,
  consciousness: boolean
}

const accidentBase = "accident_report";
export const getAccidents = () => get(accidentBase);
export const getAccidentById = (id: number) => get(`${accidentBase}/${id}`);
export const getAccidentsByUser = (email: string) => get(`${accidentBase}/user/${email}`);
export const createAccident = (req: Readonly<AccidentReportRequest>) => post(accidentBase, req);
export const updateAccident = (id: number, req: Readonly<AccidentReportUpdateRequest>) => put(`${accidentBase}/${id}`, req);
export const deleteAccident = (id: number) => del(`${accidentBase}/${id}`);
