import { ReactChild, ReactChildren } from "react";
import { useDarkMode } from "../../../hooks/useDarkMode";

export interface ItemLinkParams {
  to: string,
  className?: string,
  children?: ReactChild | ReactChildren | ReactChild[] | ReactChildren[]
}

const ItemLink = (props: Readonly<ItemLinkParams>) => {
  const darkMode = useDarkMode();
  return <a href={`#${props.to}`} className={`link-${darkMode ? "dark" : "light"} ${props.className}`}>{props.children}</a>;
};

export default ItemLink;
