import React from "react";
import { render } from "@testing-library/react";
import ThemeWrapper from "./ThemeWrapper";

describe("ThemeWrapper", () => {
  describe("Given no props", () => {
    it("Should render without crashing", () => {
      render(<ThemeWrapper></ThemeWrapper>);
    });
  });
  describe("Given child nodes", () => {
    it("Should render the child nodes", () => {
      const ChildOne = () => <div>Child one</div>;
      const ChildTwo = () => <div>Child two</div>;
      const { getByText } = render(
        <ThemeWrapper>
          <ChildOne></ChildOne>
          <ChildTwo></ChildTwo>
        </ThemeWrapper>
      );

      expect(getByText("Child one")).toBeDefined();
      expect(getByText("Child two")).toBeDefined();
    });
  });
});
