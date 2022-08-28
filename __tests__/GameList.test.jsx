import { render, screen } from "@testing-library/react";
import GameList from "../src/components/GameList";
import "@testing-library/jest-dom";

describe("Game List Component", () => {
  it("renders game list component", () => {
    render(<GameList />);

    const gameListTitle = screen.getByRole("heading", { name: /Game List/i });
    const gameListImage = screen.getByRole("img", {
      name: /rock paper scissors img/i,
    });
    const gameListButton = screen.getByRole("button", { name: /PLAY GAME/i });

    expect(gameListTitle).toBeInTheDocument();
    expect(gameListImage).toBeInTheDocument();
    expect(gameListButton).toBeInTheDocument();
  });
});
