import React from 'react';
import { Image } from 'react-konva';
import useImage from 'use-image';
import { SQUARE_SIZE } from './Constant';
import { AbstractPiece } from './pieces/AbstractPiece';

const Piece = ({ piece }: { piece :AbstractPiece }) => {
  const [image] = useImage(piece.image);

  function getPiece() {
    return <Image
      x={piece.position.x * SQUARE_SIZE}
      y={piece.position.y * SQUARE_SIZE}
      width={SQUARE_SIZE}
      height={SQUARE_SIZE}
      image={image}
      listening={false}/>
  }

  return (
    getPiece()
  )
}

export default Piece;