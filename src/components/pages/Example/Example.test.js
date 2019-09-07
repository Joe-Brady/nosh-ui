import React from "react";
import { render } from "@testing-library/react";
import Example from "./Example";

describe("Page: Example", () => {
  describe("Given no props", () => {
    it("Should render without crashing ", () => {
      const pageHeading = "Example";
      const { getByText } = render(<Example></Example>);

      expect(getByText(pageHeading)).toBeDefined();
    });
  });
});
