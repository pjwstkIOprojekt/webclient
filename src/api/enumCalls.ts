import L from "leaflet";
import { get } from "./basicCalls";
import { accidentIcon, fireIcon } from "../components/content/map/MapIcons";

export interface EnumValues {
  dark?: string,
  light?: string,
  markType?: MarkTypes,
  icon?: L.Icon<L.IconOptions> | L.DivIcon
}

export interface EnumType {
  getter: () => Promise<Response>,
  name: string,
  values?: Record<string, EnumValues>
}

export enum MarkTypes {
  None = 0,
  Ambulance = 1,
  CarAccident = 2,
  Flood = 4,
  Fire = 8,
  Unknown = 16,
  HeartAttack = 32,
  Suicide = 64,
  Covid = 128,
  All = 255
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
  values: {
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
    "ON_ACTION": {
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
  values: {
    "CAR_ACCIDENT": {
      dark: "#00aa00",
      light: "#00aa00",
      markType: MarkTypes.CarAccident,
      icon: accidentIcon
    },
    "FLOOD": {
      dark: "#dd9900",
      light: "#dd9900",
      markType: MarkTypes.Flood,
      icon: accidentIcon
    },
    "FIRE": {
      dark: "#ff0000",
      light: "#ff0000",
      markType: MarkTypes.Fire,
      icon: accidentIcon
    },
    "UNKNOWN": {
      dark: "#777777",
      light: "#777777",
      markType: MarkTypes.Unknown,
      icon: accidentIcon
    },
    "HEART_ATTACK": {
      dark: "#ff0000",
      light: "#ff0000",
      markType: MarkTypes.HeartAttack,
      icon: accidentIcon
    },
    "SUICIDE": {
      dark: "#447700",
      light: "#447700",
      markType: MarkTypes.Suicide,
      icon: accidentIcon
    },
    "COVID": {
      dark: "#777777",
      light: "#777777",
      markType: MarkTypes.Covid,
      icon: accidentIcon
    }
  }
};

export const FacilityType = {
  getter: () => get(`${enumBase}/facility_type`),
  name: "FacilityType"
};

export const RoleName = {
  getter: () => get(`${enumBase}/roles`),
  name: "RoleName"
};
