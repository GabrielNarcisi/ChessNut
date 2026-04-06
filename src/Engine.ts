const BOARD_SIZE = 8;

interface Position {
  x: number,
  y: number
}

function readPosition(position: Position): String {
  let yLine = "abcdefgh";
  return position.x + yLine.charAt(position.y - 1);
}

interface Piece {
  position: Position,
  type: "pawn" | "rook" | "knight" | "queen" | "king" | "bishop"
  color: "white" | "black"
}

function describePiece(piece: Piece): void {
  console.log(`${piece.color} ${piece.type} in ${readPosition(piece.position)}`);
}

function isInBound({ x, y }: Position): boolean {
  return x > 0 && x <= BOARD_SIZE && y > 0 && y <= BOARD_SIZE;
}

function getpossibleCase(piece: Piece): Position[] {
  let result: Position[] = [];
  switch (piece.type) {
    case "pawn":
      if (piece.color == "white") {
        result = [{ x: piece.position.x, y: piece.position.y + 1 }];
        if (piece.position.y == 2) {
          result.push({ x: piece.position.x, y: piece.position.y + 2 });
        }
      } else {
        result = [{ x: piece.position.x, y: piece.position.y - 1 }];
        if (piece.position.y == BOARD_SIZE - 1) {
          result.push({ x: piece.position.x, y: piece.position.y - 2 });
        }
      }
      break;
    case "rook":
      [-1, 0, 1].forEach(x => {
        [-1, 0, 1].forEach(y => {
          for (let i = 1; i < BOARD_SIZE; i++) {
            if ((x == 0 && y != 0) || (x != 0 && y == 0)) {
              result.push({ x: piece.position.x + x * i, y: piece.position.y + y * i })
            }
          }
        })
      })
      break;
    case "bishop":
      [-1, 0, 1].forEach(x => {
        [-1, 0, 1].forEach(y => {
          for (let i = 1; i < BOARD_SIZE; i++) {
            if (x != 0 && y != 0) {
              result.push({ x: piece.position.x + x * i, y: piece.position.y + y * i })
            }
          }
        })
      })
      break;
    case "queen":
      [-1, 0, 1].forEach(x => {
        [-1, 0, 1].forEach(y => {
          for (let i = 1; i < BOARD_SIZE; i++) {
            if (x != 0 || y != 0) {
              result.push({ x: piece.position.x + x * i, y: piece.position.y + y * i })
            }
          }
        })
      })
      break;
    case "king":
      [-1, 0, 1].forEach(x => {
        [-1, 0, 1].forEach(y => {
          if (x != 0 || y != 0) {
            result.push({ x: piece.position.x + x, y: piece.position.y + y })
          }
        })
      })
      break;
    case "knight":
      [-2, -1, 1, 2].forEach(x => {
        [-2, -1, 1, 2].forEach(y => {
          if (Math.abs(x) != Math.abs(y)) {
            result.push({ x: piece.position.x + x, y: piece.position.y + y })
          }
        }
        )
      })
      break;
  }
  return result.filter(isInBound);
}

let pawn1: Piece = {
  position: {
    x: 1, y: 2
  },
  type: "pawn",
  color: "black"
};
let king1: Piece = {
  position: {
    x: 2, y: 1
  },
  type: "king",
  color: "black"
}
let knight1: Piece = {
  position: {
    x: 5, y: 5
  },
  type: "knight",
  color: "black"
}
let bishop1: Piece = {
  position: {
    x: 5, y: 5
  },
  type: "bishop",
  color: "black"
}

describePiece(pawn1);
describePiece(pawn1);
console.log(getpossibleCase(king1))
console.log(getpossibleCase(knight1))
console.log(getpossibleCase(bishop1))

export default null;
