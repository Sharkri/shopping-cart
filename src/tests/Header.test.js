import Header from "../components/Header";
import { MemoryRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";

it("should have translucent background in homepage", () => {
  render(
    <MemoryRouter initialEntries={[{ pathname: "/" }]}>
      <Header />
    </MemoryRouter>
  );

  const header = screen.getByRole("banner");
  expect(header.style.backgroundColor).toBe("rgba(0, 0, 0, 0.4)");
});

it("should have not have translucent background in any other page", () => {
  render(
    <MemoryRouter initialEntries={[{ pathname: "/shop" }]}>
      <Header />
    </MemoryRouter>
  );

  const header = screen.getByRole("banner");
  expect(header.style.backgroundColor).not.toBe("rgba(0, 0, 0, 0.4)");
});
