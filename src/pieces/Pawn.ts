import { AbstractPiece, Color, Position } from "./AbstractPiece";
import { BOARD_SIZE } from "../Constant";
import pawnW from '../assets/pieces/pawn-w.svg';
import pawnB from '../assets/pieces/pawn-b.svg';

class Pawn extends AbstractPiece {
  constructor(color: Color, position: Position) {
    let image = color == Color.WHITE ? pawnW : pawnB;
    super(color, position, image);
  }

  getPossibleMoves(pieces: AbstractPiece[]): Position[] {
    let result: Position[] = [];
    let direction = this.color === Color.WHITE ? -1 : 1;
    //Move
    let piece = pieces.find(p => p.position.x === this.position.x && p.position.y === this.position.y + direction)
    if (!piece) {
      result.push({ x: this.position.x, y: this.position.y + direction });
      if ((direction === -1 && this.position.y === BOARD_SIZE - 2) || (direction === 1 && this.position.y === 1)) {
        let piece = pieces.find(p => p.position.x === this.position.x && p.position.y === this.position.y + direction * 2)
        if (!piece) {
          result.push({ x: this.position.x, y: this.position.y + 2 * direction });
        }
      }
    }
    //Take
    piece = pieces.find(p => p.position.x === this.position.x + 1 && p.position.y === this.position.y + direction)
    if (piece && piece.color != this.color) {
      result.push(piece.position);
    }
    piece = pieces.find(p => p.position.x === this.position.x - 1 && p.position.y === this.position.y + direction)
    if (piece && piece.color != this.color) {
      result.push(piece.position);
    }
    return result;
  }
}

export default Pawn;