import React from "react";
import { render } from "@testing-library/react";
import Home from "./Home";

describe("Page: Home", () => {
  describe("Given no props", () => {
    it("Should render without crashing ", () => {
      const pageHeading = "Home";
      const { getByText } = render(<Home></Home>);

      expect(getByText(pageHeading)).toBeDefined();
    });
  });
});
