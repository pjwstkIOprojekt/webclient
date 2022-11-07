import { EnumType } from "../../../api/enumCalls";
import { useTranslation } from "react-i18next";

export interface EnumParams {
  enum: EnumType,
  value: string
}

const Enum = (props: Readonly<EnumParams>) => {
  const { t } = useTranslation();
  return <span style={{
    color: props.enum.colors ? props.enum.colors[props.value] : undefined
  }}>{t(`${props.enum.name}.${props.value}`)}</span>;
};

export default Enum;
