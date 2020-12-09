import { render } from "@testing-library/react";
import React from "react";
import Recommend from "./Recommend.jsx";

describe("AddingMachineHooks tests", () => {
  it("renders correctly", () => {
    const { container } = render(<Recommend />);
    expect(container).toMatchSnapshot();
  });
});