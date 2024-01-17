<script setup lang="ts">
import { useData } from "vitepress"
import DefaultTheme from "vitepress/theme"
import { nextTick, provide } from "vue"
import Comment from "./Comment.vue"
import Particles from "./Particles.vue"

const { isDark } = useData()

const enableTransitions = () =>
	"startViewTransition" in document &&
	window.matchMedia("(prefers-reduced-motion: no-preference)").matches

provide("toggle-appearance", async ({ clientX: x, clientY: y }: MouseEvent) => {
	if (!enableTransitions()) {
		isDark.value = !isDark.value
		return
	}

	const clipPath = [
		`circle(0px at ${x}px ${y}px)`,
		`circle(${Math.hypot(
			Math.max(x, innerWidth - x),
			Math.max(y, innerHeight - y)
		)}px at ${x}px ${y}px)`,
	]

	// @ts-ignore
	await document.startViewTransition(async () => {
		isDark.value = !isDark.value
		await nextTick()
	}).ready

	document.documentElement.animate(
		{ clipPath: isDark.value ? clipPath.reverse() : clipPath },
		{
			duration: 300,
			easing: "ease-in",
			pseudoElement: `::view-transition-${isDark.value ? "old" : "new"}(root)`,
		}
	)
})

const data = useData()
const { Layout } = DefaultTheme
const { page } = data
</script>

<template>
	<Layout>
		<template #layout-top>
			<Particles />
		</template>
		<template #doc-footer-before>
			<Comment :key="page.relativePath"></Comment>
		</template>
	</Layout>
</template>

<style>
:root {
	--vp-c-indigo-1: var(--vp-c-green-1);
	--vp-c-indigo-2: var(--vp-c-green-2);
	--vp-c-indigo-3: var(--vp-c-green-3);
	--vp-c-indigo-soft: rgba(48, 164, 108, 0.14);
}
.custom-block blockquote {
	color: var(--vp-c-text-3) !important;
}
::view-transition-old(root),
::view-transition-new(root) {
	animation: none;
	mix-blend-mode: normal;
}

::view-transition-old(root),
.dark::view-transition-new(root) {
	z-index: 1;
}

::view-transition-new(root),
.dark::view-transition-old(root) {
	z-index: 9999;
}

.VPSwitchAppearance {
	width: 22px !important;
}

.VPSwitchAppearance .check {
	transform: none !important;
}
</style>
