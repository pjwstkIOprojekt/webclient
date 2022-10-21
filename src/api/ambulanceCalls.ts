import { get, post, put, del } from "./basicCalls";

interface LicensePlate {
  // Length = 8
  licensePlate: string
}

interface AmbulanceBase extends LicensePlate {
  // Enum - AmbulanceClass
  ambulanceClass: string,

  // Enum - AmbulanceType
  ambulanceType: string
}

export interface AddAmbulanceRequest extends AmbulanceBase {
  // Integer, Min = 1
  seats: number,

  // Not blank
  longitude: string,

  // Not blank
  latitude: string
}

export interface AmbulanceResponse extends AmbulanceBase {
  ambulanceStateType: string
}

export interface UpdateAmbulanceStateRequest {
  // Enum - AmbulanceState
  ambulanceState: string,

  // Datetime
  start: string,

  // Datetime
  end: string
}

export interface AmbulanceStateResponse {
  type: string,
  timeWindow: Map<string, Date>
}

export interface AmbulanceHistoryResponse extends LicensePlate {
  ambulanceHistory: AmbulanceStateResponse[]
}

const ambulanceBase = "ambulance";
export const getAmbulances = () => get(ambulanceBase);
export const getAmbulanceByLicensePlate = (licensePlate: string) => get(`${ambulanceBase}/${licensePlate}`);
export const getAmbulanceHistory = (licensePlate: string) => get(`${ambulanceBase}/${licensePlate}/history`);
export const getAmbulanceState = (licensePlate: string) => get(`${ambulanceBase}/${licensePlate}/state`);
export const updateAmbulanceState = (licensePlate: string, req: Readonly<UpdateAmbulanceStateRequest>) => post(`${ambulanceBase}/${licensePlate}/state`, req);
export const createAmbulance = (req: Readonly<AddAmbulanceRequest>) => post(ambulanceBase, req);
export const updateAmbulances = (req: Readonly<AddAmbulanceRequest>) => put(ambulanceBase, req);
export const deleteAmbulance = (licensePlate: string) => del(`${ambulanceBase}/${licensePlate}`);
