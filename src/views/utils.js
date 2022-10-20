import * as THREE from 'three';

export function makeGeometry(path, depth = 10) {
  const shape = new THREE.Shape();

  shape.moveTo(path[0][0], path[0][1]);

  path.forEach((e, i) => {
    if (i !== 0) {
      shape.lineTo(e[0], e[1]);
    }
  });

  const geometry = new THREE.ExtrudeGeometry(shape, { depth });
  geometry.rotateX(-0.5 * Math.PI);

  return geometry;
}
