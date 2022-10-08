<template>
  <div id="canvas"></div>
</template>

<script>
import * as THREE from 'three';

export default {
  name: 'home-view',
  data() {
    return {
      camera: new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000),
      renderer: new THREE.WebGLRenderer()
    };
  },
  mounted() {
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    document.querySelector('#canvas').appendChild(this.renderer.domElement);

    const scene = new THREE.Scene();

    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
    const cube = new THREE.Mesh(geometry, material);

    scene.add(cube);
    this.camera.position.z = 3;

    this.animate(scene, cube);
  },
  methods: {
    animate(scene, cube) {
      requestAnimationFrame(() => this.animate(scene, cube));
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
      this.renderer.render(scene, this.camera);
    }
  }
};
</script>
