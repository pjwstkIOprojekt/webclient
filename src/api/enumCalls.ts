import { get } from "./basicCalls";

export interface EnumType {
  getter: () => Promise<Response>,
  name: string,
  colors?: Record<string, string>
}

const enumBase = "enum";

export const AllergyType = {
  getter: () => get(`${enumBase}/allergy_type`),
  name: "AllergyType"
};

export const RhType = {
  getter: () => get(`${enumBase}/rh_type`),
  name: "RhType"
};

export const BloodType = {
  getter: () => get(`${enumBase}/blood_type`),
  name: "BloodType"
};

export const AmbulanceState = {
  getter: () => get(`${enumBase}/ambulance_states`),
  name: "AmbulanceStateType",
  colors: {
    "FAILURE": "#ff0000",
    "MAINTENANCE": "#dd9900",
    "AVAILABLE": "#00aa00",
    "IN_ACTION": "#447700",
    "CREW_BRAKE": "#777777"
  },
  available: "AVAILABLE"
};

export const AmbulanceClass = {
  getter: () => get(`${enumBase}/ambulance_classes`),
  name: "AmbulanceClass"
};

export const AmbulanceType = {
  getter: () => get(`${enumBase}/ambulance_types`),
  name: "AmbulanceType"
};

export const EmergencyType = {
  getter: () => get(`${enumBase}/emergency_type`),
  name: "EmergencyType",
  colors: {
    "CAR_ACCIDENT": "#ff0000",
    "FLOOD": "#dd9900",
    "FIRE": "#00aa00",
    "UNKNOWN": "#447700",
    "HEART_ATTACK": "#777777",
    "SUICIDE": "#777777",
    "COVID": "#777777"
  }
};

// To fix
export const FacilityType = {
  getter: () => get(`${enumBase}/facility_type`),
  name: "FacilityType"
};

export const RoleName = {
  getter: () => get(`${enumBase}/roles`),
  name: "RoleName"
};
