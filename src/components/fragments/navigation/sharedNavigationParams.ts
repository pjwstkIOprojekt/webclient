import { ParentComponentParams } from "../sharedParams";
import { To } from "react-router-dom";

export interface NavBaseParams extends ParentComponentParams {
  to: To
}
