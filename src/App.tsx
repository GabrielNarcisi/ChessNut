import React, { useState } from 'react';
import './App.css';
import Board from './Board';
import { Stage, Layer } from 'react-konva';
import { Color } from './pieces/AbstractPiece';

const App = () => {
  const [playingColor, setPlayingColor] = useState<Color>(Color.WHITE)

  return (
    <div>
      <div>{`${playingColor} to play`}</div>
      <Stage width={window.innerWidth} height={window.innerHeight}>
        <Layer>
          <Board playingColor={playingColor} setPlayingColor={setPlayingColor} />
        </Layer>
      </Stage>
    </div>
  );
};

export default App;
