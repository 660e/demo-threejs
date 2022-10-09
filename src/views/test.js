import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
const controls = new OrbitControls(camera, renderer.domElement);

renderer.setSize(window.innerWidth, window.innerHeight);

camera.position.set(0, 0, 100);
controls.update();

const geometry = new THREE.BoxGeometry(50, 1, 50);
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
const cube = new THREE.Mesh(geometry, material);

scene.add(cube);

function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}

export function init(el) {
  document.querySelector(el).appendChild(renderer.domElement);
  animate();
}
