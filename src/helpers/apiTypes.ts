// Base url for requests
export const baseUrl = "http://localhost:8080/api/v1";

// API types definitions
export interface User {
  email: string,
  password: string
}

export interface NewUser extends User {
  firstName: string,
  lastName: string,
  birthDate: number
}

export interface LoginResponse {
  sessionToken?: string,
  reason?: string
}

export interface AmbulanceOrder {
  id: string,
  location?: Location,
  victimCount?: number,
  user: string,
  kind?: string,
  additionalInfo?: string,
  isUserVictim?: boolean,
  victims: Array<Victim>
}

export enum BloodType {
  UNKNOWN,
  A_PLUS,
  B_PLUS,
  AB_PLUS,
  O_PLUS,
  A_MINUS,
  B_MINUS,
  AB_MINUS,
  O_MINUS
}

export interface Victim {
  bloodType?: BloodType
  isBreathing?: boolean
  isConcious?: boolean
  isBleeding?: boolean
  visibleWounds?: boolean
  bandNumber?: string
}

export interface Location {
  longitute: number,
  lattitude: number
}