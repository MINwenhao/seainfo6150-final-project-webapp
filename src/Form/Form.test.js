import { render } from "@testing-library/react";
import React from "react";
import Form from "./Form.jsx";

describe("AddingMachineHooks tests", () => {
  it("renders correctly", () => {
    const { container } = render(<Form />);
    expect(container).toMatchSnapshot();
  });
});