import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Center, Text3D, Float } from '@react-three/drei';
import { useRef } from 'react';

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
    <Center>
      <Float
        speed={3} // Animation speed, defaults to 1
        rotationIntensity={0.8} // XYZ rotation intensity, defaults to 1
        floatIntensity={0.3} // Up/down float intensity, works like a multiplier with floatingRange,defaults to 1
        floatingRange={[1, 6]} // Range of y-axis values the object will float within, defaults to [-0.1,0.1]
      >
        <group ref={ref}>
          <mesh position={[5.5, -2, 2.5]}>
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
              <meshStandardMaterial color={'#E0FBFC'} />
            </Text3D>
          </mesh>
          <mesh position={[-2, 0, 3]}>
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
              <meshStandardMaterial color={'#E0FBFC'} />
            </Text3D>
          </mesh>
        </group>
      </Float>
    </Center>
  );
};

const Scene = () => {
  const directionalLightRef = useRef();
  const spotLightref = useRef();
  const spotLightref2 = useRef();

  const lightColour = '#ffb649';
  const lightIntensity = 3.1;
  const spotLightColour = '#ffbfd2';
  const spotLightIntensity = 1.7;
  const spotLightRadius = 90;
  const spotLightColour2 = '#739000';
  const spotLightIntensity2 = 1.8;
  const spotLightRadius2 = 130;

  return (
    <>
      <spotLight
        position={[5, 2, 15]}
        ref={spotLightref}
        intensity={spotLightIntensity}
        color={spotLightColour}
        angle={spotLightRadius}
        decay={0}
      />
      <spotLight
        position={[-5, -10, 10]}
        ref={spotLightref2}
        intensity={spotLightIntensity2}
        color={spotLightColour2}
        angle={spotLightRadius2}
        decay={0}
      />
      <directionalLight
        position={[-2, 3, 3]}
        intensity={lightIntensity}
        ref={directionalLightRef}
        color={lightColour}
      />
      <directionalLight position={[0, 0, 5]} intensity={3.5} color={'white'} />
      <CustomMesh />
    </>
  );
};
const Name3d = () => {
  return (
    <>
      <Canvas camera={{ position: [-3, -1, 12] }}>
        <Scene />
      </Canvas>
    </>
  );
};

export default Name3d;
