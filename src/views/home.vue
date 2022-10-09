<template>
  <div id="canvas"></div>
</template>

<script>
import { init } from './home.js';

export default {
  name: 'home-view',
  mounted() {
    init('#canvas');
  }
};
</script>
