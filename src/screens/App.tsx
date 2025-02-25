import React from "react";
import { SafeAreaView, ActivityIndicator, View, Text } from "react-native";
import { useForm, Controller } from "react-hook-form";
import { useEmployeeProvider } from "@infra/hooks/use-employee-provider";
import SearchInput from "@components/search-input";
import EmployeeTable from "@components/employee-table";
import Header from "@components/header";
import { QueryProvider } from "../infra/react-query";
import { styles } from "./styles";
import STIRNGS from "./strings";

const App: React.FC = () => {
  return (
    <QueryProvider>
      <AppContent />
    </QueryProvider>
  );
};

const AppContent: React.FC = () => {
  const { control, watch } = useForm<{ search: string }>({
    defaultValues: { search: "" },
  });
  const searchQuery = watch("search");
  const { useFetchEmployees } = useEmployeeProvider();

  const { data: employees, isLoading } = useFetchEmployees();
  const filteredEmployees = searchQuery
    ? employees?.filter(
        (emp) =>
          emp.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          emp.job.toLowerCase().includes(searchQuery.toLowerCase()) ||
          emp.phone.includes(searchQuery)
      )
    : employees;

  return (
    <SafeAreaView style={styles.container}>
      <Header initials={STIRNGS.INITIALS} notifications={2} />
      <View style={styles.space} />
      <Text style={styles.label}>{STIRNGS.LABEL}</Text>
      <View style={styles.space} />
      <Controller
        control={control}
        name="search"
        render={({ field: { onChange } }) => (
          <SearchInput onSearch={onChange} placeholder={STIRNGS.PLACEHOLDER} />
        )}
      />
      <View style={styles.space} />
      {isLoading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <EmployeeTable data={filteredEmployees || []} />
      )}
    </SafeAreaView>
  );
};

export default App;
