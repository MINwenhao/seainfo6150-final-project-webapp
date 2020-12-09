import { render } from "@testing-library/react";
import React from "react";
import Source from "./Source.jsx";

describe("AddingMachineHooks tests", () => {
  it("renders correctly", () => {
    const { container } = render(<Source />);
    expect(container).toMatchSnapshot();
  });
});