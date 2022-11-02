export interface TableViewParams<T> {
  data: T[],
  isLoading: boolean,
  onRemove?: (x: Readonly<T>) => void
}

export interface MapViewHelperParams {
  update: (lat: number, lng: number) => void,
  lat: number,
  lng: number
}
