import { get } from "./basicCalls";

export interface EnumColor {
  dark: string,
  light: string
}

export interface EnumType {
  getter: () => Promise<Response>,
  name: string,
  colors?: Record<string, EnumColor>
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
    "FAILURE": {
      dark: "#ff0000",
      light: "#ff0000"
    },
    "MAINTENANCE": {
      dark: "#dd9900",
      light: "#dd9900"
    },
    "AVAILABLE": {
      dark: "#00aa00",
      light: "#00aa00"
    },
    "IN_ACTION": {
      dark: "#447700",
      light: "#447700"
    },
    "CREW_BRAKE": {
      dark: "#777777",
      light: "#777777"
    }
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

export const EmergencyType: EnumType = {
  getter: () => get(`${enumBase}/emergency_type`),
  name: "EmergencyType",
  colors: {
    "CAR_ACCIDENT": {
      dark: "#00aa00",
      light: "#00aa00"
    },
    "FLOOD": {
      dark: "#dd9900",
      light: "#dd9900"
    },
    "FIRE": {
      dark: "#ff0000",
      light: "#ff0000"
    },
    "UNKNOWN": {
      dark: "#777777",
      light: "#777777"
    },
    "HEART_ATTACK": {
      dark: "#447700",
      light: "#447700"
    },
    "SUICIDE": {
      dark: "#777777",
      light: "#777777"
    },
    "COVID": {
      dark: "#777777",
      light: "#777777"
    }
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
