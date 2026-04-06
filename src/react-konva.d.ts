import type { NodeConfig } from 'konva/lib/Node';

declare module 'react-konva' {
  interface StageProps extends NodeConfig {}
}
