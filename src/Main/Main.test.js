import { render } from "@testing-library/react";
import React from "react";
import Main from "./Main.jsx";

describe("AddingMachineHooks tests", () => {
  it("renders correctly", () => {
    const { container } = render(<Main />);
    expect(container).toMatchSnapshot();
  });
});