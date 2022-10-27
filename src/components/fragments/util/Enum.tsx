import { EnumType } from "../../../api/enumCalls";
import { useTranslation } from "react-i18next";

export interface EnumParams {
  enum: EnumType,
  value: string
}

const Enum = (props: Readonly<EnumParams>) => {
  const { t } = useTranslation();
  return <>{t(`${props.enum.name}.${props.value}`)}</>;
};

export default Enum;
