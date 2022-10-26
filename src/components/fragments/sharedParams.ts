import { ReactChild, ReactChildren } from "react";

export type ChildrenType = ReactChild | ReactChildren | ReactChild[] | ReactChildren[];

export interface ClassNameParam {
  className?: string
}

export interface InnerClassParam extends ClassNameParam {
  innerClass?: string
}

export interface ParentComponentParams extends ClassNameParam {
  children?: ChildrenType
}
