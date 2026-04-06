import Square from './Square';
import React from 'react';
import { useState } from 'react';
import Piece from './Piece';
import { BOARD_SIZE } from './Constant';
import Pawn from './pieces/Pawn';
import Queen from './pieces/Queen';
import Bishop from './pieces/Bishop';
import Rook from './pieces/Rook';
import King from './pieces/King';
import Knight from './pieces/Knight';
import { Color, AbstractPiece } from './pieces/AbstractPiece';
import PossibleMove from './PossibleMove';

const Board = ({playingColor, setPlayingColor}: {
  playingColor: Color,
  setPlayingColor: (color: Color) => void
}) => {
  interface Position {
    x: number,
    y: number
  }

  const [selected, setSelected] = useState<Position | null>(null)
  const [pieces, setPieces] = useState<AbstractPiece[]>([
    new Rook(Color.WHITE, { x: 0, y: 7 }),
    new Knight(Color.WHITE, { x: 1, y: 7 }),
    new Bishop(Color.WHITE, { x: 2, y: 7 }),
    new Queen(Color.WHITE, { x: 3, y: 7 }),
    new King(Color.WHITE, { x: 4, y: 7 }),
    new Bishop(Color.WHITE, { x: 5, y: 7 }),
    new Knight(Color.WHITE, { x: 6, y: 7 }),
    new Rook(Color.WHITE, { x: 7, y: 7 }),
    ...[0, 1, 2, 3, 4, 5, 6, 7].map((x) => new Pawn(Color.WHITE, { x, y: 6 })),
    new Rook(Color.BLACK, { x: 0, y: 0 }),
    new Knight(Color.BLACK, { x: 1, y: 0 }),
    new Bishop(Color.BLACK, { x: 2, y: 0 }),
    new Queen(Color.BLACK, { x: 3, y: 0 }),
    new King(Color.BLACK, { x: 4, y: 0 }),
    new Bishop(Color.BLACK, { x: 5, y: 0 }),
    new Knight(Color.BLACK, { x: 6, y: 0 }),
    new Rook(Color.BLACK, { x: 7, y: 0 }),
    ...[0, 1, 2, 3, 4, 5, 6, 7].map((x) => new Pawn(Color.BLACK, { x, y: 1 })),
  ]);

  function getBoard() {
    let board: React.ReactNode[][] = [];
    for (let i = 0; i < BOARD_SIZE; i++) {
      board.push([]);
      for (let j = 0; j < BOARD_SIZE; j++) {
        board[i].push(<Square key={`${i}-${j}`} x={i} y={j} selected={selected} setSelected={handleClick} />);
      }
    }
    return board;
  }

  function handleClick(position: { x: number, y: number }) {
    let selectedPiece = pieces.filter(p => selected?.x == p.position.x && selected?.y == p.position.y)[0];
    let clickedPiece = pieces.filter(p => position.x == p.position.x && position.y == p.position.y)[0];
    if (selectedPiece) {
      let target = selectedPiece.getPossibleMoves(pieces).find(p => p.x === position.x && p.y === position.y);
      if (target) {
        setPlayingColor(playingColor === Color.WHITE ? Color.BLACK : Color.WHITE)
        selectedPiece.position.x = position.x;
        selectedPiece.position.y = position.y;
        if (clickedPiece) {
          setPieces(pieces.filter(p => p !== clickedPiece))
        }
      }
      setSelected(null);
    } else if (clickedPiece && clickedPiece.color === playingColor) {
      setSelected(position);
    }
  }

  function renderPieces() {
    return pieces.map((piece) =>
      <Piece
        key={`${piece.position.x}-${piece.position.y}`} piece={piece} />);
  }

  function renderPossibleMove() {
    let selectedPiece = pieces.filter(p => selected?.x == p.position.x && selected?.y == p.position.y)[0];
    if (selectedPiece) {
      return selectedPiece.getPossibleMoves(pieces).map((position) =>
        <PossibleMove x={position.x} y={position.y} />)
    }
  }

  return (
    <>
      {getBoard()}
      {renderPieces()}
      {renderPossibleMove()}
    </>
  )
}

export default Board;