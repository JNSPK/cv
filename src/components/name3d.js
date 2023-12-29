import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Center, Text3D, Float } from '@react-three/drei';
import { useRef } from 'react';

const CustomMesh = () => {
  const ref = useRef();
  const { pointer } = useThree();

  useFrame(() => {
    if (pointer) {
      const { x, y } = pointer;
      ref.current.rotation.x = y / -15;
      ref.current.rotation.y = x / 15;
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
                bevelSegments={1}
                bevelThickness={0.3}
                bevelEnabled
                curveSegments={10}
                size={2.5}
                lineHeight={1}
                letterSpacing={0.1}
                font={'./JHreverse.json'}>
                {`Johan Nilsson`}
                <meshPhysicalMaterial
                  roughness={0.1}
                  transmission={0.05}
                  thickness={5}
                />
              </Text3D>
            </mesh>
            <mesh position={[9.5, -3, -1.5]}>
              <Text3D
                bevelSegments={1}
                bevelThickness={0.3}
                bevelEnabled
                curveSegments={10}
                size={1}
                lineHeight={0.5}
                letterSpacing={0.1}
                font={'./Payback.json'}>
                {`Portfolio`}
                <meshPhysicalMaterial
                  roughness={0.1}
                  transmission={0.05}
                  thickness={5}
                />
              </Text3D>
            </mesh>
          </Float>
        </group>
      </Center>
    </>
  );
};

const Scene = () => {
  const lightColour = '#ffb649'; //orange
  const spotLightIntensity = 1.3;
  const spotLightRadius = 1.57;
  const spotLightColour2 = '#4C3B4D'; //violet

  return (
    <>
      <ambientLight intensity={3} color={spotLightColour2} />
      <spotLight position={(0, 0, 9)} intensity={5} angle={9} decay={0.05} />
      <spotLight
        position={[-2, 2, -3]}
        intensity={spotLightIntensity}
        color={lightColour} //orange
        angle={9}
        decay={0}
      />
      <Float
        speed={2} // Animation speed, defaults to 1
        rotationIntensity={4} // XYZ rotation intensity, defaults to 1
        floatIntensity={2} // Up/down float intensity, works like a multiplier with floatingRange,defaults to 1
        floatingRange={[0, 2]} // Range of y-axis values the object will float within, defaults to [-0.1,0.1]
      >
        <spotLight
          position={[-2, 2, 0]}
          intensity={1.57}
          color={'red'} //rouge
          angle={spotLightRadius}
          decay={0}
        />
      </Float>

      <CustomMesh />
    </>
  );
};

const Name3d = () => {
  return (
    <>
      <Canvas orthographic camera={{ position: [-1, 0, 5], zoom: 50 }}>
        <Scene />
      </Canvas>
    </>
  );
};

export default Name3d;
