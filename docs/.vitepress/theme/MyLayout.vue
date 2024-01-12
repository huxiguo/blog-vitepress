<script setup lang="ts">
import { useData } from "vitepress"
import DefaultTheme from "vitepress/theme"
import Comment from "./Comment.vue"

const data = useData()
const { Layout } = DefaultTheme
const { page } = data
</script>

<template>
	<Layout>
		<template #doc-footer-before>
			<Comment :key="page.relativePath"></Comment>
		</template>
	</Layout>
</template>
