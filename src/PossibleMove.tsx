import "./Square.css"
import { Circle } from 'react-konva';
import { SQUARE_SIZE } from './Constant';

const PossibleMove = ({ x, y }: { x: number, y: number }) => {
  return (
    <Circle
      x={x * SQUARE_SIZE + SQUARE_SIZE / 2}
      y={y * SQUARE_SIZE + SQUARE_SIZE / 2}
      radius={SQUARE_SIZE / 2}
      fill="red"
      opacity={0.4}
      listening={false}
        />
  )
}

export default PossibleMove;