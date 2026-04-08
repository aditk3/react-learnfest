import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { expect, it } from "vitest";

import Navbar from "../components/Navbar";
import AuthContext from "../contexts/auth";

it("should render appropriate 'logged OUT' state links", () => {
  // Arrange
  render(
    // We are wrapping our navbar in a browser router and context provider, as it relies
    // on both of these to function.
    <BrowserRouter>
      <AuthContext.Provider value={{ isLoggedIn: false }}>
        <Navbar />
      </AuthContext.Provider>
    </BrowserRouter>,
  );

  // Act
  const homeLink = screen.getByText(/home/i); // home Home HOME hOme homE
  const loginLink = screen.getByText(/login/i);
  const developersLink = screen.getByText(/developers/i);

  // Assert
  // Test whether the Home link is present in the Navbar and it navigates to the correct path
  expect(homeLink).toBeInTheDocument();
  expect(homeLink.getAttribute("href")).toBe("/");
  expect(homeLink.getAttribute("href")).not.toBe("/developer");

  // Test whether the Login link is present in the Navbar and it navigates to the correct path
  expect(loginLink).toBeInTheDocument();
  expect(loginLink.getAttribute("href")).toBe("/login");
  expect(loginLink.getAttribute("href")).not.toBe("/");

  // Test whether the Developers link is present in the Navbar and it navigates to the correct path
  expect(developersLink).toBeInTheDocument();
  expect(developersLink.getAttribute("href")).toBe("/developers");
  expect(developersLink.getAttribute("href")).not.toBe("/");
});

it("should render appropriate 'logged IN' state links", () => {
  render(
    <BrowserRouter>
      <AuthContext.Provider value={{ isLoggedIn: true }}>
        <Navbar />
      </AuthContext.Provider>
    </BrowserRouter>,
  );
  const homeLink = screen.getByText(/home/i); // home Home HOME hOme homE
  expect(homeLink).toBeInTheDocument();

  const developersLink = screen.getByText(/developers/i);
  expect(developersLink).toBeInTheDocument();

  const logoutLink = screen.getByText(/logout/i);
  expect(logoutLink).toBeInTheDocument();

  const addDevLink = screen.getByText(/add developer/i);
  expect(addDevLink).toBeInTheDocument();
  expect(addDevLink.getAttribute("href")).toBe("/add-developer");
  expect(addDevLink.getAttribute("href")).not.toBe("/");
});

it("should call setIsLoggedIn if the user is logged IN and clicks on Logout button", () => {
  const mockSetIsLoggedIn = vi.fn();
  const fakeContext = { isLoggedIn: true, setIsLoggedIn: mockSetIsLoggedIn };

  render(
    <AuthContext.Provider value={fakeContext}>
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    </AuthContext.Provider>,
  );

  const logoutLink = screen.getByText(/logout/i);
  expect(logoutLink).toBeInTheDocument();
  fireEvent.click(logoutLink);
  expect(mockSetIsLoggedIn).toHaveBeenCalledWith(false);
});
