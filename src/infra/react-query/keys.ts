import { QueryKey } from "react-query";

export const keyFetchEmployees = (): QueryKey => ["employees"];

export const keySearchEmployees = (query: string): QueryKey => [
  "searchEmployees",
  query,
];
