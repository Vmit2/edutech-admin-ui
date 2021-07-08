import { SortDirection } from "../../config/constants";

export function parseSort(params, availableSorts, key = "sort") {
  const value = params.get(key);

  const isValid = availableSorts.includes(value);

  return isValid ? value : null;
}

export function parseSortDirection(params, key = "dir") {
  const value = params.get(key);

  const isValid = Object.values(SortDirection).includes(value);

  return isValid ? value : SortDirection.ASCENDING;
}
