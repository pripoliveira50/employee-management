import React from "react";
import {
  SafeAreaView,
  ActivityIndicator,
  StyleSheet,
  View,
} from "react-native";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useForm, Controller } from "react-hook-form";
import { useEmployeeProvider } from "../infra/hooks/use-employee-provider";
import SearchInput from "../components/search-input";
import EmployeeTable from "../components/employee-table";
import Header from "../components/header";

const queryClient = new QueryClient();

const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <AppContent />
    </QueryClientProvider>
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
      <Header initials="GS" notifications={2} />
      <View style={styles.space} />
      <Controller
        control={control}
        name="search"
        render={({ field: { onChange } }) => (
          <SearchInput
            onSearch={onChange}
            placeholder="Pesquisar por Nome, Cargo ou Telefone"
          />
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#FFFFFF",
  },
  space: {
    marginVertical: 10,
  },
});

export default App;
