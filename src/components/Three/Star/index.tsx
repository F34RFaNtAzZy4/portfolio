import { MeshProps, useFrame } from "@react-three/fiber";
import { MutableRefObject, Ref, useEffect, useRef, useState } from "react";
import { Group, Mesh, Object3DEventMap, Vector3 } from "three";

export interface StarProps extends MeshProps{
  distance: number
}

export default function Star({ distance = 3, ...props }: StarProps){
    const ref = useRef<Mesh>() as MutableRefObject<Mesh>;

    const [position] = useState(() => new Vector3(Math.random() * distance, Math.random() * distance, Math.random() * distance));
    useFrame(() => {
      if(!ref?.current) return
      ref.current.rotation.y += 0.001;
    });
    useEffect(()=>{
      console.log(position)
    },[])
    return ( 
      <mesh ref={ref} {...props} position={position}>
        <sphereGeometry args={[0.05, 24, 24]} />
        <meshStandardMaterial color="white" />
      </mesh>
    );
  };
