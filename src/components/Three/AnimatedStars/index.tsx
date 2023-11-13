import { GroupProps, useFrame } from '@react-three/fiber';
import Star from '../Star/index';
import { MutableRefObject, Ref, useRef } from 'react';
import { Group, Object3DEventMap } from 'three';

type AnimatedStarsProps = {
    children : typeof Star[]
}

export default function AnimatedStars({children}: AnimatedStarsProps) {
  // Reference to the star group
  const ref = useRef<Group<Object3DEventMap>>() as MutableRefObject<Group<Object3DEventMap> | null>;
  useFrame(() => {
    if(!ref?.current) return
    // Rotate or move the star group
    ref.current.rotation.y += 0.001;
  });

  return (
    <group ref={ref}>
      {children.map((Star, index) => (
        <Star key={index} distance={3} />
      ))}
    </group>
  );
};