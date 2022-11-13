import { ValueViewParams } from "../sharedParams";
import { EnumType } from "../../../api/enumCalls";
import { useTranslation } from "react-i18next";

export interface EnumParams extends ValueViewParams {
  enum: EnumType
}

const Enum = (props: Readonly<EnumParams>) => {
  const { t } = useTranslation();
  
  return <span style={{
    color: props.enum.colors ? props.enum.colors[props.value] : undefined
  }}>{t(`${props.enum.name}.${props.value}`)}</span>;
};

export default Enum;
