import { useState } from "react";
import { Vector3 } from "three";

export default function Star({ distance = 3 }: { distance: number }){
    // Random position
    const [position] = useState(() => new Vector3(Math.random() * distance, Math.random() * distance, Math.random() * distance));
    
    return ( 
      <mesh position={position}>
        <sphereGeometry args={[0.05, 24, 24]} />
        <meshStandardMaterial color="white" />
      </mesh>
    );
  };
