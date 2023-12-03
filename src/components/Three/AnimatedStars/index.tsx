import { StarProps } from '../Star/index';
import { ReactElement } from 'react';
import React from 'react';

type AnimatedStarsProps = {
    children : ReactElement<StarProps>[]
}

export default function AnimatedStars({children}: AnimatedStarsProps) {
  return (
    <group>
      {children.map((child, index) => React.cloneElement(child, { key: index, distance: 3 }))}
    </group>
  );
};