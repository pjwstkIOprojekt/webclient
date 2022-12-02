import { PathElement } from "../../api/basicCalls"

export interface TableViewParams<T> {
  data: T[],
  isLoading: boolean,
  onRemove?: (x: Readonly<T>) => void
}

export interface MapViewHelperParams {
  update: (x: [number, number]) => void,
  lat: number,
  lng: number
}

export interface MapDataHelperParams<T> extends MapViewHelperParams {
  data: T,
  setData: (x: T) => void
}
