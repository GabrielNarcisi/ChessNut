import { AbstractPiece, Color, Position } from "./AbstractPiece";
import bishopW from '../assets/pieces/bishop-w.svg';
import bishopB from '../assets/pieces/bishop-b.svg';
import { BOARD_SIZE } from "../Constant";

class Bishop extends AbstractPiece {
  constructor(color: Color, position: Position) {
    let image = color == Color.WHITE ? bishopW : bishopB;
    super(color, position, image);
  }

  getPossibleMoves(pieces: AbstractPiece[]): Position[] {
    let result: Position[] = [];
    [-1, 0, 1].forEach(x => {
      [-1, 0, 1].forEach(y => {
        if (x !== 0 && y !== 0) {
          let i = 1;
          let newPosition: Position = { x: this.position.x + x * i, y: this.position.y + y * i };
          let piece: AbstractPiece | undefined = pieces?.find(p => p.position.x === newPosition.x && p.position.y === newPosition.y);
          while (AbstractPiece.isInBound(newPosition) && piece === undefined){
            result.push(newPosition)
            i++;
            newPosition = { x: this.position.x + x * i, y: this.position.y + y * i };
            piece = pieces?.find(p => p.position.x === newPosition.x && p.position.y === newPosition.y)
          }
          if (piece && piece.color !== this.color) {
            result.push(piece.position);
          }
        }
      })
    })
    return result
  }
}

export default Bishop;