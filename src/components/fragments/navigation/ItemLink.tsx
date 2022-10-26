import { ParentComponentParams } from "../sharedParams";
import { useDarkMode } from "../../../hooks/useDarkMode";

export interface ItemLinkParams extends ParentComponentParams {
  to: string,
}

const ItemLink = (props: Readonly<ItemLinkParams>) => {
  const darkMode = useDarkMode();
  return <a href={`#${props.to}`} className={`link-${darkMode ? "dark" : "light"} ${props.className}`}>{props.children}</a>;
};

export default ItemLink;
