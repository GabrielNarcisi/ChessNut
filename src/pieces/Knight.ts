import { AbstractPiece, Color, Position } from "./AbstractPiece";
import knightW from '../assets/pieces/knight-w.svg';
import knightB from '../assets/pieces/knight-b.svg';

class Knight extends AbstractPiece {
  constructor(color: Color, position: Position) {
    let image = color == Color.WHITE ? knightW : knightB;
    super(color, position, image);
  }

  getPossibleMoves(pieces: AbstractPiece[]): Position[] {
    let result: Position[] = [];
    [-2, -1, 1, 2].forEach(x => {
      [-2, -1, 1, 2].forEach(y => {
        if (Math.abs(x) != Math.abs(y)) {
          let newPosition: Position = { x: this.position.x + x, y: this.position.y + y };
          let piece = pieces?.find(p => p.position.x === newPosition.x && p.position.y === newPosition.y);
          if ((!piece || piece.color !== this.color) && AbstractPiece.isInBound(newPosition)) {
            result.push(newPosition);
          }
        }
      })
    })
    
    return result;
  }
}

export default Knight;