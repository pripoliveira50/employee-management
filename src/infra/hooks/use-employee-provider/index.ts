import { useCallback } from "react";
import { useQuery, UseQueryOptions } from "@tanstack/react-query";

import { EmployeeDataProp } from "@infra/react-query/model";
import { keyFetchEmployees } from "@infra/react-query/keys";
import api from "@infra/axios";

export const useEmployeeProvider = () => {
  const fetchEmployees = useCallback(async (): Promise<EmployeeDataProp[]> => {
    try {
      const response = await api.get("/raw");

      if (!response.data || !response.data.employees) {
        console.error("Erro: API retornou dados inválidos");
        return [];
      }

      return response.data.employees;
    } catch (error) {
      console.error("Erro ao buscar funcionários:", error);
      return [];
    }
  }, []);

  const useFetchEmployees = (
    options?: UseQueryOptions<EmployeeDataProp[], Error>
  ) =>
    useQuery<EmployeeDataProp[], Error>({
      queryKey: [keyFetchEmployees()],
      queryFn: fetchEmployees,
      retry: 3,
      ...options,
    });

  return { useFetchEmployees };
};
