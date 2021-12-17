import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import App from "../App";
import TestContextProvider from "./component/TestContextProvider";

test("Invalid login", async () => {
  render(
    <TestContextProvider>
      <App />
    </TestContextProvider>
  );

  const input: HTMLInputElement = screen.getByPlaceholderText("Enter email");
  fireEvent.change(input, { target: { value: "abc@test.com" } });

  const loginButton = screen.getByText("Login/Register");
  fireEvent.click(loginButton);

  await screen.findByText("Invalid login");
});

test("Successful login and go to share page", async () => {
  render(
    <TestContextProvider>
      <App />
    </TestContextProvider>
  );

  const emailInput: HTMLInputElement = screen.getByPlaceholderText("Enter email");
  fireEvent.change(emailInput, { target: { value: "abc@test.com" } });

  const passwordInput: HTMLInputElement = screen.getByPlaceholderText("Enter password");
  fireEvent.change(passwordInput, { target: { value: "123" } });

  const loginButton = screen.getByText("Login/Register");
  fireEvent.click(loginButton);

  await screen.findByText("Logged in");

  const shareButtonLink = screen.getByText("Share a movie");
  fireEvent.click(shareButtonLink);

  const instructionElement = screen.queryByText("Share a Youtube movie");
  expect(instructionElement).not.toBeNull();
});
