import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import User from "./User";

describe("User Component", () => {
  it("рендерится аватар и логин пользователя", () => {
    // Тестовые данные пользователя
    const user = {
      login: "john_doe",
      avatar_url: "https://example.com/avatar.jpg",
    };

    render(<User user={user} />);

    const avatar = screen.getByAltText("john_doe");
    expect(avatar).toBeInTheDocument();
    expect(avatar).toHaveAttribute("src", "https://example.com/avatar.jpg");

    const login = screen.getByText("john_doe");
    expect(login).toBeInTheDocument();
  });
});
