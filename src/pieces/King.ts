import { AbstractPiece, Color, Position } from "./AbstractPiece";
import kingW from '../assets/pieces/king-w.svg';
import kingB from '../assets/pieces/king-b.svg';

class King extends AbstractPiece {
  constructor(color: Color, position: Position) {
    let image = color == Color.WHITE ? kingW : kingB;
    super(color, position, image);
  }

  getPossibleMoves(pieces: AbstractPiece[]): Position[] {
    let result: Position[] = [];
    [-1, 0, 1].forEach(x => {
      [-1, 0, 1].forEach(y => {
        if (x != 0 || y != 0) {
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

export default King;