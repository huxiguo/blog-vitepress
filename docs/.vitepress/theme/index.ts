import DefaultTheme from "vitepress/theme"
import "./style/index.css"

import vitepressNprogress from "vitepress-plugin-nprogress"
import "vitepress-plugin-nprogress/lib/css/index.css"

import MyLayout from "./MyLayout.vue"

import ClickAnimation from "./plugins/ClickAnimation"

export default {
	extends: DefaultTheme,
	Layout: MyLayout,
	enhanceApp: (ctx) => {
		vitepressNprogress(ctx)
		ClickAnimation()
		const { app } = ctx
	},
}
