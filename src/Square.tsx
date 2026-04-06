import "./Square.css"
import { Rect } from 'react-konva';
import { useState } from 'react';
import { SQUARE_SIZE } from './Constant';

const Square = ({ x, y, selected, setSelected }: {
  x: number,
  y: number,
  selected: { x: number, y: number } | null,
  setSelected: (position: { x: number, y: number }) => void
}) => {
  const [mouseOver, setMouseOver] = useState(false);
  const color = (x + y) % 2 === 0 ? "silver" : "olive";

  const handleMouseEnter = () => {
    setMouseOver(true);
  };

  const handleMouseLeave = () => {
    setMouseOver(false);
  };

  const handleClick = () => {
    setSelected({ x, y });
  };

  return (
    <>
      <Rect
        x={x * SQUARE_SIZE}
        y={y * SQUARE_SIZE}
        width={SQUARE_SIZE}
        height={SQUARE_SIZE}
        fill={color}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick}
        opacity={mouseOver ? 0.5 : 1}
      />
      {selected && <Rect
        x={selected.x * SQUARE_SIZE}
        y={selected.y * SQUARE_SIZE}
        width={SQUARE_SIZE}
        height={SQUARE_SIZE}
        fill="red"
        opacity={0.1}
      />}
    </>
  )
}

export default Square;