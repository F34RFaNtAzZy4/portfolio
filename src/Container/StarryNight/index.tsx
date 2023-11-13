'use client';
import AnimatedStars from "@/components/Three/AnimatedStars";
import Star from "@/components/Three/Star";
import { animate, renderer } from "@/three/scene";
import { Canvas } from "@react-three/fiber";
import { useEffect } from "react";

type StarryNightProps = {
    starCount:number
}

export default function StarryNight({starCount}: StarryNightProps) {
    return (
        <Canvas
        camera={{
            position: [0,0,0],
        }}
        >
            {Array.from({ length: starCount }).map((_, index) => (
                <AnimatedStars key={index} distance={3}>
                    <Star key={index} distance={3}/>
                    <Star key={index} distance={3}/>
                </AnimatedStars>
            )
            )}
        </Canvas>
    )
}