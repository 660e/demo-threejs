import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { makeGeometry } from './utils.js';

const innerWidth = window.innerWidth;
const innerHeight = window.innerHeight;

const $scene = new THREE.Scene();
const $camera = new THREE.PerspectiveCamera(100, innerWidth / innerHeight, 1, 2000);
const $renderer = new THREE.WebGLRenderer();
const $controls = new OrbitControls($camera, $renderer.domElement);

$renderer.setClearColor(0x333333);
$renderer.setSize(innerWidth, innerHeight);

$camera.position.set(0, 300, 300);
$controls.update();

const axesHelper = new THREE.AxesHelper(1000);
const gridHelper = new THREE.GridHelper(1000, 100);

$scene.add(axesHelper);
$scene.add(gridHelper);

function buildFloor() {
  const $floor = new THREE.Mesh(new THREE.BoxGeometry(776, 4, 263), new THREE.MeshBasicMaterial({ color: 0x884422 }));
  $floor.position.y = -2;

  $scene.add($floor);
}

function buildColumns() {
  const n = 10;
  const ns = 81;
  const we = 84;

  const nc = [];
  const sc = [];

  for (let i = 0.5; i < n; i++) {
    nc.push([(i - n / 2) * we, -ns * 1.5]);
    sc.push([(i - n / 2) * we, ns * 1.5]);
  }

  const columns = [
    [-we * 4.5, -ns * 0.5],
    [-we * 3.5, -ns * 0.5],
    [-we * 4.5, ns * 0.5],
    [-we * 3.5, ns * 0.5],
    [we * 4.5, -ns * 0.5],
    [we * 3.5, -ns * 0.5],
    [we * 4.5, ns * 0.5],
    [we * 3.5, ns * 0.5],
    [-we * 0.5, -ns * 0.5],
    [we * 0.5, -ns * 0.5]
  ].concat(nc, sc);

  columns.forEach(e => {
    const $column = new THREE.Mesh(new THREE.BoxGeometry(10, 40, 10), new THREE.MeshBasicMaterial({ color: 0xffffff }));

    $column.position.x = e[0];
    $column.position.y = 20;
    $column.position.z = e[1];

    $scene.add($column);
  });
}

function buildWall() {
  const w = 776 / 2;
  const h = 263 / 2;
  const t = 5;

  const wall1 = [
    [w, h],
    [w, -h],
    [-w, -h],
    [-w, h],
    [w - t, h],
    [w - t, h - t],
    [-w + t, h - t],
    [-w + t, -h + t],
    [w - t, -h + t],
    [w - t, h]
  ];

  const $wall1 = new THREE.Mesh(makeGeometry(wall1, 40), new THREE.MeshBasicMaterial({ color: 0x6c87f1 }));

  $scene.add($wall1);
}

buildFloor();
buildColumns();
buildWall();

function animate() {
  requestAnimationFrame(animate);
  $renderer.render($scene, $camera);
}

function onWindowResize() {
  window.addEventListener('resize', () => {
    const innerWidth = window.innerWidth;
    const innerHeight = window.innerHeight;

    $camera.aspect = innerWidth / innerHeight;
    $camera.updateProjectionMatrix();
    $renderer.setSize(innerWidth, innerHeight);
  });
}

export function init(el) {
  document.querySelector(el).appendChild($renderer.domElement);
  animate();
  onWindowResize();
}
