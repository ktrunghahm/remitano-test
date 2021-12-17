import { render, screen } from "@testing-library/react";
import React from "react";
import VideoItem from "../VideoItem";

test("Check iframe", () => {
  const id = "abcd";
  render(<VideoItem id={id} />);
  const iframe = screen.getAllByTestId("youtubeIframe");
  expect(iframe.length).toBe(1);
});

test("Check iframe has correct id", () => {
  const id = "abcd";
  render(<VideoItem id={id} />);
  const iframe : HTMLIFrameElement = screen.getByTestId("youtubeIframe");
  expect(iframe).not.toBe(null);
  expect(iframe.src).toContain(id);
});
