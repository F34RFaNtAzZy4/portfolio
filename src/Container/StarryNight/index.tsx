'use client';
import AnimatedStars from "@/components/Three/AnimatedStars";
import Star from "@/components/Three/Star";
import { Canvas } from "@react-three/fiber";

type StarryNightProps = {
    starCount:number
}
export default function StarryNight({ starCount }: StarryNightProps) {
    return (
      <Canvas camera={{ position: [0, 0, 2] }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <axesHelper args={[5]} />
        <AnimatedStars>
        {Array.from({ length: starCount }).map((_, index) => (
            <Star key={`star-${index}`} distance={3} />
        ))}
        </AnimatedStars>

      </Canvas>
    );
  }
  