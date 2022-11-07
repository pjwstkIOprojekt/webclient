
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
    "FAILURE": "red",
    "MAINTENANCE": "orange",
    "AVAILABLE": "green",
    "IN_ACTION": "blue",
    "CREW_BRAKE": "grey"
  }
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
  name: "EmergencyType"
};
