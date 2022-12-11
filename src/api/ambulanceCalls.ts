import { Location, PathElement, get, post, put, del } from "./basicCalls";

interface LicensePlate {
  // Length = 3-8
  licensePlate: string
}

interface AmbulanceBase extends LicensePlate {
  // Enum - AmbulanceClass
  ambulanceClass: string,

  // Enum - AmbulanceType
  ambulanceType: string,

   // Integer, Min = 1
   seats: number
}

export interface AddAmbulanceRequest extends AmbulanceBase {
  longitude: number,
  latitude: number
}

export interface AmbulanceResponse extends AmbulanceBase {
  ambulanceStateType: string,
  ambulanceId: number,
  currentLocation: Location
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

export interface MedicResponse {
  firstName: string,
  lastName: string,
  email: string,
  userId: number
}

const ambulanceBase = "ambulance";
export const getAmbulances = () => get(ambulanceBase);
export const getAmbulanceByLicensePlate = (licensePlate: string) => get(`${ambulanceBase}/${licensePlate}`);
export const getAmbulanceHistory = (licensePlate: string) => get(`${ambulanceBase}/${licensePlate}/history`);
export const getAmbulanceState = (licensePlate: string) => get(`${ambulanceBase}/${licensePlate}/state`);
export const getAmbulancePath = (licensePlate: string) => get(`${ambulanceBase}/${licensePlate}/location/path`);
export const getItems = (licensePlate: string) => get(`${ambulanceBase}/${licensePlate}/equipment`);
export const getMedics = (licensePlate: string) => get(`${ambulanceBase}/${licensePlate}/crew`);

export const addItem = (licensePlate: string, itemId: number, count?: number) => post(`${ambulanceBase}/${licensePlate}/items/add/${itemId}?count=${count ?? 1}`);
export const changeAmbulanceState = (licensePlate: string, ambulanceState: string)  => post(`${ambulanceBase}/${licensePlate}/state/${ambulanceState}`);
export const createAmbulance = (req: Readonly<AddAmbulanceRequest>) => post(ambulanceBase, req);
export const postAmbulanceLocation = (licensePlate: string, req: Readonly<PostAmbulanceLocationRequest>) => post(`${ambulanceBase}/${licensePlate}/location`, req);
export const addMedics = (licensePlate: string, medics: Readonly<number[]>) => post(`${ambulanceBase}/${licensePlate}/crew`, medics);

export const updateAmbulance = (req: Readonly<AddAmbulanceRequest>) => put(ambulanceBase, req);

export const deleteAmbulance = (licensePlate: string) => del(`${ambulanceBase}/${licensePlate}`);
export const removeItem = (licensePlate: string, itemId: number, count?: number) => del(`${ambulanceBase}/${licensePlate}/items/remove/${itemId}?count=${count ?? 1}`);
export const removeAllItems = (licensePlate: string, itemId: number) => del(`${ambulanceBase}/${licensePlate}/items/remove/${itemId}/all`);
export const clearItems = (licensePlate: string) => del(`${ambulanceBase}/${licensePlate}/items/remove/all`);
