import { Location, get, del, post, put } from "./basicCalls";

interface FacilityBase {
  // Not blank
  name: string,

  // Enum - FacilityType
  facilityType: string
}

export interface FacilityRequest extends FacilityBase {
  longitude: number,
  latitude: number
}

export interface FacilityResponse extends FacilityBase {
  facilityId: number,
  location: Location
}

const facilityBase = "facility";
export const getFacilities = () => get(facilityBase);
export const getFacilityById = (id: number) => get(`${facilityBase}/${id}`);
export const deleteFacility = (id: number) => del(`${facilityBase}/${id}`);
export const createFacility = (req: Readonly<FacilityRequest>) => post(facilityBase, req);
export const updateFacility = (id: number, req: Readonly<FacilityRequest>) => put(`${facilityBase}/${id}`, req);
