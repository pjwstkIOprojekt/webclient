export interface TableViewParams<T> {
  data: T[],
  isLoading: boolean,
  onRemove?: (x: Readonly<T>) => void
}
