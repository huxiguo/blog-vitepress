import DefaultTheme from "vitepress/theme"

import vitepressNprogress from "vitepress-plugin-nprogress"
import "vitepress-plugin-nprogress/lib/css/index.css"

import MyLayout from "./MyLayout.vue"

export default {
	extends: DefaultTheme,
	Layout: MyLayout,
	enhanceApp: (ctx) => {
		vitepressNprogress(ctx)
		// addScript("/js/particles.js")
	},
}
