'use client';
import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Environment, Float, Sphere, Stars } from '@react-three/drei';
import * as THREE from 'three';

const FloatingElements = () => {
    const group = useRef();

    // Create random spheres
    const spheres = useMemo(() => {
        return Array.from({ length: 15 }, (_, i) => ({
            position: [
                (Math.random() - 0.5) * 20,
                (Math.random() - 0.5) * 10 + 2,
                (Math.random() - 0.5) * 10 - 5
            ],
            scale: Math.random() * 1.5 + 0.5,
            color: new THREE.Color().setHSL(Math.random() * 0.2 + 0.5, 0.8, 0.6) // Blue/Purple gradient
        }));
    }, []);

    useFrame((state) => {
        if (group.current) {
            group.current.rotation.y = state.clock.elapsedTime * 0.05;
        }
    });

    return (
        <group ref={group}>
            {spheres.map((props, i) => (
                <Float key={i} speed={2} rotationIntensity={1} floatIntensity={2}>
                    <Sphere position={props.position} scale={props.scale}>
                        <meshPhysicalMaterial
                            color={props.color}
                            roughness={0.1}
                            metalness={0.8}
                            transmission={0.5}
                            ior={1.5}
                            envMapIntensity={2}
                            clearcoat={1}
                        />
                    </Sphere>
                </Float>
            ))}
        </group>
    );
};

const HeroScene = () => {
    return (
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0, pointerEvents: 'none' }}>
            <Canvas
                camera={{ position: [0, 0, 10], fov: 45 }}
                dpr={[1, 2]} // Limit DPR on mobile to max 2 for performance
                gl={{ antialias: false, powerPreference: 'high-performance' }}
            >
                <color attach="background" args={['#0a0f1a']} />

                <ambientLight intensity={0.5} />
                <directionalLight position={[10, 10, 5]} intensity={1} color="#60a5fa" />
                <directionalLight position={[-10, -10, -5]} intensity={0.5} color="#c084fc" />

                <Stars radius={100} depth={50} count={2000} factor={4} saturation={0} fade speed={1} />

                <React.Suspense fallback={null}>
                    <Environment preset="city" />
                    <FloatingElements />
                </React.Suspense>
            </Canvas>
        </div>
    );
};

export default HeroScene;
