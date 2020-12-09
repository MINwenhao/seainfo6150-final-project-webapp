import { render } from "@testing-library/react";
import React from "react";
import Detail from "./Detail.jsx";

describe("AddingMachineHooks tests", () => {
  it("renders correctly", () => {
    const { container } = render(<Detail />);
    expect(container).toMatchSnapshot();
  });
});