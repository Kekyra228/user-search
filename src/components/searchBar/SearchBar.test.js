import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import SearchBar from "./SearchBar";

describe("SearchBar Component", () => {
  it("обновление значения поля ввода", () => {
    render(<SearchBar />);

    // Проверка ввода текста в поле поиска
    const input = screen.getByPlaceholderText("Введите имя пользователя");
    fireEvent.change(input, { target: { value: "john_doe" } });

    // Проверяем, что значение поля ввода обновилось
    expect(input.value).toBe("john_doe");
  });

  it("реакция кнопки на клик", () => {
    render(<SearchBar />);

    const searchButton = screen.getByText("Найти");

    fireEvent.click(searchButton);

    expect(searchButton).toBeInTheDocument();
  });
});
