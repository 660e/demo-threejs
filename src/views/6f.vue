<template>
  <div id="canvas"></div>
</template>

<script>
import { init } from './6f.js';

export default {
  name: '6f-view',
  mounted() {
    init('#canvas');
  }
};
</script>
