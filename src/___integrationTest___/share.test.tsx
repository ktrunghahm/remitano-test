import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import App from "../App";
import TestContextProvider from "./component/TestContextProvider";

test("Click on share button and fail", async () => {
  render(
    <TestContextProvider>
      <App />
    </TestContextProvider>
  );

  const emailInput: HTMLInputElement =
    screen.getByPlaceholderText("Enter email");
  fireEvent.change(emailInput, { target: { value: "abc@test.com" } });

  const passwordInput: HTMLInputElement =
    screen.getByPlaceholderText("Enter password");
  fireEvent.change(passwordInput, { target: { value: "123" } });

  const loginButton = screen.getByText("Login/Register");
  fireEvent.click(loginButton);

  await screen.findByText("Logged in");

  const shareButtonLink = screen.getByText("Share a movie");
  fireEvent.click(shareButtonLink);

  const instructionElement = screen.queryByText("Share a Youtube movie");
  expect(instructionElement).not.toBeNull();

  const shareButton = screen.getByText("Share");
  fireEvent.click(shareButton);

  const noti = await screen.findByText("Invalid input");
  expect(noti).not.toBeNull();
});

test("Share a link successfully", async () => {
  render(
    <TestContextProvider>
      <App />
    </TestContextProvider>
  );

  const instructionElement = screen.queryByText("Share a Youtube movie");
  expect(instructionElement).not.toBeNull();

  const urlInput: HTMLInputElement = screen.getByPlaceholderText("Enter link");
  fireEvent.change(urlInput, {
    target: { value: "https://www.youtube.com/watch?v=Rk5rXOzReio" },
  });

  const shareButton = screen.getByText("Share");
  fireEvent.click(shareButton);

  const noti = await screen.findByText("URL shared");
  expect(noti).not.toBeNull();
});
