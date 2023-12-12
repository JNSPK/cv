import { Canvas, useFrame, useThree } from '@react-three/fiber';
import {
  Center,
  Text3D,
  Float,
  useTexture,
  Environment,
} from '@react-three/drei';
import { useRef } from 'react';
import { PointLight } from 'three';

const CustomMesh = () => {
  const ref = useRef();
  const { pointer } = useThree();

  useFrame(() => {
    if (pointer) {
      const { x, y } = pointer;
      ref.current.rotation.x = y / -10;
      ref.current.rotation.y = x / 10;
    }
  });

  return (
    <>
      {' '}
      <Center>
        <group ref={ref} position={(-8, -10, 2)}>
          <Float
            speed={2} // Animation speed, defaults to 1
            rotationIntensity={0.8} // XYZ rotation intensity, defaults to 1
            floatIntensity={0.1} // Up/down float intensity, works like a multiplier with floatingRange,defaults to 1
            floatingRange={[2, 1.5]} // Range of y-axis values the object will float within, defaults to [-0.1,0.1]
          >
            <mesh>
              <Text3D
                bevelSegments={20}
                bevelThickness={1}
                bevelEnabled
                curveSegments={20}
                size={3.5}
                lineHeight={1}
                letterSpacing={0.1}
                font={'/BLASTIMO.json'}>
                {`Johan Nilsson`}
                <meshStandardMaterial />
              </Text3D>
            </mesh>
            <mesh position={[5.5, -2, 1.5]}>
              <Text3D
                bevelSegments={20}
                bevelThickness={0.5}
                bevelEnabled
                curveSegments={20}
                size={1}
                lineHeight={0.5}
                letterSpacing={0.1}
                font={'/Payback.json'}>
                {`Portfolio`}
                <meshStandardMaterial />
              </Text3D>
            </mesh>
          </Float>
        </group>{' '}
      </Center>
    </>
  );
};

const Scene = () => {
  const spotLightref = useRef();
  const spotLightref2 = useRef();

  const lightColour = '#ffb649'; //orange
  const spotLightIntensity = 1.3;
  const spotLightRadius = 90;
  const spotLightColour2 = '#4C3B4D'; //violet
  const spotLightIntensity2 = 8;
  const spotLightRadius2 = 130;
  const texture = useTexture('./textures/marble.jpg');
  const texture2 = useTexture('./textures/marble2.jpg');

  return (
    <>
      {/* <Environment preset='dawn' /> */}
      <ambientLight intensity={3} color={spotLightColour2} />

      <spotLight
        position={[-2, 2, -3]}
        ref={spotLightref}
        intensity={spotLightIntensity}
        color={lightColour} //orange
        angle={spotLightRadius}
        decay={0}
        map={texture}
      />
      <spotLight
        position={[-5, -10, 0]}
        ref={spotLightref2}
        intensity={spotLightIntensity2}
        color={spotLightColour2} //violet
        angle={spotLightRadius2}
        decay={0}
        map={texture}
      />

      <spotLight
        position={[2, 2, -2]}
        ref={spotLightref}
        intensity={1}
        color={'red'} //rouge
        angle={spotLightRadius}
        decay={0}
        map={texture2}
      />

      <spotLight
        position={(10, 0, 7)}
        ref={spotLightref2}
        intensity={3}
        angle={1}
        decay={0}
        map={texture}
      />

      <CustomMesh />
    </>
  );
};

const Name3d = () => {
  return (
    <>
      <Canvas orthographic camera={{ position: [0, 0, 10], zoom: 50 }}>
        <Scene />
      </Canvas>
    </>
  );
};

export default Name3d;
