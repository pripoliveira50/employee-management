import React from "react";
import { screen, render, fireEvent } from "@testing-library/react-native";
import TableRow from "./index";
import STRINGS from "./strings";
import { employeeMock } from "../../../test/mock-api";
import { formatPhoneNumber } from "@utils/format-phone-number";

const setup = () => {
  render(<TableRow {...employeeMock} />);
};

it("should render the employee's name correctly", () => {
  setup();

  screen.getByText("João");
});

it("should expand and display details when tapped", () => {
  setup();

  expect(screen.queryByText(STRINGS.ROLE)).toBeNull();

  fireEvent.press(screen.getByRole("button"));

  screen.getByText(STRINGS.ROLE);
  screen.getByText(employeeMock.job);
  screen.getByText(STRINGS.ADMISSION_DATE);

  screen.getByText(
    new Date(employeeMock.admission_date).toLocaleDateString("pt-BR")
  );

  screen.getByText(STRINGS.PHONE);
  screen.getByText(formatPhoneNumber(employeeMock.phone));
});

it("should collapse details when tapped again", () => {
  setup();

  const button = screen.getByRole("button");

  fireEvent.press(button);
  screen.getByText(STRINGS.ROLE);

  fireEvent.press(button);
  expect(screen.queryByText(STRINGS.ROLE)).toBeNull();
});

it("should display the correct profile image", () => {
  setup();

  const image = screen.getByTestId("profile-image");
  expect(image.props.source.uri).toBe(employeeMock.image);
});

it("should display the correct job title", () => {
  setup();

  fireEvent.press(screen.getByRole("button"));

  screen.getByText(employeeMock.job);
});

it("should display the correct admission date", () => {
  setup();

  fireEvent.press(screen.getByRole("button"));

  screen.getByText(
    new Date(employeeMock.admission_date).toLocaleDateString("pt-BR")
  );
});

it("should display the correct phone number", () => {
  setup();

  fireEvent.press(screen.getByRole("button"));

  screen.getByText(formatPhoneNumber(employeeMock.phone));
});
