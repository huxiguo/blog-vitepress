import DefaultTheme from "vitepress/theme"
import "./style/index.css"

import vitepressNprogress from "vitepress-plugin-nprogress"
import "vitepress-plugin-nprogress/lib/css/index.css"

import MyLayout from "./MyLayout.vue"

import ClickAnimation from "./plugins/ClickAnimation"

import { useLive2d } from "vitepress-theme-website"

export default {
	extends: DefaultTheme,
	Layout: MyLayout,
	enhanceApp: (ctx) => {
		vitepressNprogress(ctx)
		ClickAnimation()
		const { app } = ctx
	},
	setup() {
		useLive2d({
			enable: true,
			model: {
				url: "https://raw.githubusercontent.com/iCharlesZ/vscode-live2d-models/master/model-library/chiaki_kitty/chiaki_kitty.model.json",
			},
			// display: {
			// 	position: "right",
			// 	width: "135px",
			// 	height: "300px",
			// 	xOffset: "135px",
			// 	yOffset: "15px",
			// },
			mobile: {
				show: true,
			},
			react: {
				opacity: 1,
			},
		})
	},
}
