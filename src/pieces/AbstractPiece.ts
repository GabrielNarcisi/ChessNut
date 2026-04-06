import { BOARD_SIZE } from "../Constant";
enum Color {
  WHITE = "white",
  BLACK = "black"
}

interface Position {
  x: number,
  y: number
}

abstract class AbstractPiece {
  color: Color;
  position: Position;
  image: string;
  constructor(color: Color, position: Position, image: string) {
    this.color = color;
    this.position = position;
    this.image = image;
  }

  abstract getPossibleMoves(piece? : AbstractPiece[]): Position[];

  static isInBound(position: Position): boolean {
    return position.x >= 0 && position.x < BOARD_SIZE
     && position.y >= 0 && position.y < BOARD_SIZE;
  }
}

export { Color, AbstractPiece };
export type { Position };
