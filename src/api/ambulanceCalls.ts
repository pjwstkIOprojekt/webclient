import { PathElement, get, post, put, del } from "./basicCalls";

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
  longitude: number,
  latitude: number
}

export interface AmbulanceResponse extends AmbulanceBase {
  ambulanceStateType: string,
  ambulanceId: number
}

export interface PostAmbulanceLocationRequest {
  longitude: number,
  latitude: number
}

export interface AmbulanceStateResponse {
  type: string,
  timestamp: Date
}

export interface AmbulanceHistoryResponse extends LicensePlate {
  ambulanceHistory: AmbulanceStateResponse[]
}

export interface AmbulancePathResponse {
  path: PathElement[]
}

const ambulanceBase = "ambulance";
export const getAmbulances = () => get(ambulanceBase);
export const getAmbulanceByLicensePlate = (licensePlate: string) => get(`${ambulanceBase}/${licensePlate}`);
export const getAmbulanceHistory = (licensePlate: string) => get(`${ambulanceBase}/${licensePlate}/history`);
export const getAmbulanceState = (licensePlate: string) => get(`${ambulanceBase}/${licensePlate}/state`);
export const getAmbulancePath = (licensePlate: string) => get(`${ambulanceBase}/${licensePlate}/location/path`);
export const getItems = (licensePlate: string) => get(`${ambulanceBase}/${licensePlate}/equipment`);
export const addItem = (licensePlate: string, itemId: number, count?: number) => post(`${ambulanceBase}/${licensePlate}/items/add/${itemId}?count=${count ?? 1}`);
export const changeAmbulanceState = (licensePlate: string, ambulanceState: string)  => post(`${ambulanceBase}/${licensePlate}/state/${ambulanceState}`);
export const createAmbulance = (req: Readonly<AddAmbulanceRequest>) => post(ambulanceBase, req);
export const postAmbulanceLocation = (licensePlate: string, req: Readonly<PostAmbulanceLocationRequest>) => post(`${ambulanceBase}/${licensePlate}/location`, req);
export const updateAmbulance = (req: Readonly<AddAmbulanceRequest>) => put(ambulanceBase, req);
export const deleteAmbulance = (licensePlate: string) => del(`${ambulanceBase}/${licensePlate}`);
export const removeItem = (licensePlate: string, itemId: number, count?: number) => del(`${ambulanceBase}/${licensePlate}/items/remove/${itemId}?count=${count ?? 1}`);
export const removeAllItems = (licensePlate: string, itemId: number) => del(`${ambulanceBase}/${licensePlate}/items/remove/${itemId}/all`);
