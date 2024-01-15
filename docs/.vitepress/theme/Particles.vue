<script setup lang="ts">
import { onMounted } from "vue"
import addScript from "../utils/addParticles"
onMounted(() => {
	addScript("/js/particles.js")
})
</script>
<template>
	<div id="particles-js">
		<canvas
			class="particles-js-canvas-el"
			style="width: 100%; height: 100%"
			width="1203"
			height="1329"
		></canvas>
	</div>
</template>
<style>
#particles-js {
	position: fixed;
	width: 100%;
	height: 100%;
	z-index: 0;
}
#app {
	position: relative;
	z-index: 1;
}
aside.sidebar {
	background-color: transparent;
}
</style>
