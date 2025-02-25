import React from "react";
import { screen, render, fireEvent } from "@testing-library/react-native";
import App from "./App";
import STIRNGS from "./strings";
import { employeeMock } from "../../test/mock-api";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useEmployeeProvider } from "@infra/hooks/use-employee-provider";

// Mock do hook useEmployeeProvider
jest.mock("@infra/hooks/use-employee-provider", () => ({
  useEmployeeProvider: jest.fn(),
}));

const mockUseEmployeeProvider = {
  useFetchEmployees: jest.fn(),
};

// Configura um QueryClient para os testes
const queryClient = new QueryClient();

const setup = (employees = []) => {
  mockUseEmployeeProvider.useFetchEmployees.mockReturnValue({
    data: employees,
    isLoading: false,
  });

  (useEmployeeProvider as jest.Mock).mockReturnValue(mockUseEmployeeProvider);

  render(
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  );
};

describe("App Component", () => {
  it("deve renderizar corretamente o header", () => {
    setup();

    screen.getByText(STIRNGS.INITIALS);
  });

  it("deve renderizar o campo de busca", () => {
    setup();

    screen.getByPlaceholderText(STIRNGS.PLACEHOLDER);
  });

  it("deve exibir a lista de funcionários quando houver dados", () => {
    setup([employeeMock]);

    screen.getByText(employeeMock.name);
    screen.getByText(employeeMock.job);
  });

  it("deve exibir o loader enquanto os funcionários estão carregando", () => {
    mockUseEmployeeProvider.useFetchEmployees.mockReturnValue({
      data: [],
      isLoading: true,
    });

    setup();

    screen.getByTestId("loading-indicator");
  });

  it("deve filtrar a lista de funcionários com base no input de busca", () => {
    setup([employeeMock]);

    const searchInput = screen.getByPlaceholderText(STIRNGS.PLACEHOLDER);
    fireEvent.changeText(searchInput, employeeMock.name);

    screen.getByText(employeeMock.name);
  });

  it("não deve exibir funcionários que não correspondem ao filtro", () => {
    setup([employeeMock]);

    const searchInput = screen.getByPlaceholderText(STIRNGS.PLACEHOLDER);
    fireEvent.changeText(searchInput, "Nome Inexistente");

    expect(screen.queryByText(employeeMock.name)).toBeNull();
  });
});
