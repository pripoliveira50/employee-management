import "@testing-library/jest-native/extend-expect";

jest.mock("react-native-safe-area-context", () => {
  const actualSafeAreaContext = jest.requireActual(
    "react-native-safe-area-context"
  );
  return {
    ...actualSafeAreaContext,
    useSafeAreaInsets: jest.fn(() => ({
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
    })),
  };
});

jest.mock("react-native-paper", () => {
  return {
    List: {
      Icon: () => "List.Icon",
    },
  };
});

jest.mock("react-native-vector-icons/MaterialCommunityIcons", () => "Icon");
