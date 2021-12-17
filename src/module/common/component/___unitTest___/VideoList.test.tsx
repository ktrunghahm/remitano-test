import { render, screen } from "@testing-library/react";
import React from "react";
import VideoList from "../VideoList";

test("empty list", () => {
  render(<VideoList list={[]} />);
  const descElement = screen.queryByText("Description");
  expect(descElement).toBeNull();
});

test("singleton list", () => {
  render(<VideoList list={["https://www.youtube.com/watch?v=Rk5rXOzReio"]} />);
  const descElement = screen.queryAllByText("Description");
  expect(descElement.length).toBe(1);
});

test("multi-item list", () => {
  render(
    <VideoList
      list={[
        "https://www.youtube.com/watch?v=Rk5rXOzReio",
        "https://www.youtube.com/watch?v=Rk5rXOzReio",
        "https://www.youtube.com/watch?v=Rk5rXOzReio",
      ]}
    />
  );
  const linkElement = screen.queryAllByText("Description");
  expect(linkElement.length).toBe(3);
});
