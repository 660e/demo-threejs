import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

const innerWidth = window.innerWidth;
const innerHeight = window.innerHeight;

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(45, innerWidth / innerHeight, 1, 5000);
const renderer = new THREE.WebGLRenderer();
const controls = new OrbitControls(camera, renderer.domElement);

renderer.setClearColor(0x333333);
renderer.setSize(innerWidth, innerHeight);

camera.position.set(300, 300, 300);
controls.update();

const axesHelper = new THREE.AxesHelper(1000);
const gridHelper = new THREE.GridHelper(1000, 100);

scene.add(axesHelper);
scene.add(gridHelper);

// floor
const $floor = new THREE.Mesh(new THREE.BoxGeometry(200, 2, 200), new THREE.MeshBasicMaterial({ color: 0x884f22 }));
$floor.position.y = -1;

scene.add($floor);

function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}

function onWindowResize() {
  window.addEventListener('resize', () => {
    const innerWidth = window.innerWidth;
    const innerHeight = window.innerHeight;

    camera.aspect = innerWidth / innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(innerWidth, innerHeight);
  });
}

export function init(el) {
  document.querySelector(el).appendChild(renderer.domElement);
  animate();
  onWindowResize();
}
