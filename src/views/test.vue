<template>
  <div id="canvas"></div>
</template>

<script>
import { init } from './test.js';

export default {
  name: 'test-view',
  mounted() {
    init('#canvas');
  }
};
</script>
