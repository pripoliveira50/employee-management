export type EmployeeDataProp = {
  id: number;
  name: string;
  job: string;
  admission_date: string;
  phone: string;
  image: string;
};

export type EmployeesResponse = {
  employees: EmployeeDataProp[];
};

export type EmployeeProviderProps = {
  children: React.ReactNode;
};
