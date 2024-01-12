import { defineConfig } from "vitepress"
import type { DefaultTheme } from "vitepress"
import fs from "node:fs"
import path from "node:path"
// https://vitepress.dev/reference/site-config

// 读取/interview/*文件夹下所有的文件返回item[]
const interviewHtmlItem = getSideBarItem("html")
const interviewCssItem = getSideBarItem("css")
const interviewCodeItem = getSideBarItem("code")
const interviewJsItem = getSideBarItem("js")

export default defineConfig({
	title: "blog",
	description: "my study blog",
	// * 显示修改时间
	lastUpdated: true,
	// * 是否去除路由后面的.html
	cleanUrls: true,
	// * markdown 相关配置 详见 https://vitepress.dev/zh/guide/markdown#header-anchors
	markdown: {
		lineNumbers: true,
	},
	themeConfig: {
		// https://vitepress.dev/reference/default-theme-config
		// * 搜索
		search: {
			provider: "local",
		},
		// * 右侧导航
		outline: {
			label: "页面导航",
		},
		// * 页脚
		footer: {
			message: "Released under the MIT License.",
			copyright: "Copyright © 2024-present seek hoo",
		},
		nav: [
			{ text: "首页", link: "/" },
			{
				text: "高频面试题",
				items: [
					{ text: "HTML", link: `/interview/html/${interviewHtmlItem[0].link}` },
					{ text: "CSS", link: `/interview/css/${interviewCssItem[0].link}` },
					{ text: "JavaScript", link: `/interview/javascript/${interviewJsItem[0].link}` },
					{ text: "Code", link: `/interview/code/${interviewCodeItem[0].link}` },
					// { text: "Vue", link: `/interview/vue/${interviewCssItem[0].link}` },
					// { text: "React", link: `/interview/react/${interviewCssItem[0].link}` },
					// { text: "Node", link: `/interview/node/${interviewCssItem[0].link}` },
				],
			},
			{ text: "测试路由", link: "/markdown-examples" },
		],
		sidebar: {
			"/interview/": { base: "/interview/", items: sidebarInterview() },
		},
		socialLinks: [{ icon: "github", link: "https://github.com/huxiguo" }],
	},
})

function sidebarInterview(): DefaultTheme.SidebarItem[] {
	return [
		{
			text: "html",
			collapsed: true,
			docFooterText: "0000000000",
			base: "/interview/html/",
			items: interviewHtmlItem,
		},
		{
			text: "css",
			collapsed: true,
			base: "/interview/css/",
			items: interviewCssItem,
		},
		{
			text: "JavaScript",
			collapsed: true,
			base: "/interview/javascript/",
			items: interviewJsItem,
		},
		{
			text: "手写代码",
			collapsed: true,
			base: "/interview/code/",
			items: interviewCodeItem,
		},
		// {
		// 	text: "vue",
		// 	collapsed: true,
		// 	base: "/interview/code/",
		// 	items: interviewCodeItem,
		// },
		// {
		// 	text: "react",
		// 	collapsed: true,
		// 	base: "/interview/code/",
		// 	items: interviewCodeItem,
		// },
		// {
		// 	text: "node",
		// 	collapsed: true,
		// 	base: "/interview/code/",
		// 	items: interviewCodeItem,
		// },
	]
}

// 读取interview/html目录下的文件返回数组

interface Item {
	text: string
	link: string
}

/**
 *
 * @param directory
 * @returns
 */
function getSideBarItem(directory: string): Item[] {
	const itemList: Item[] = []
	const dir = path.resolve(__dirname, `../interview/${directory}`)
	fs.readdirSync(dir).map((file) => {
		const name = path.basename(file, ".md")
		itemList.push({ text: name, link: name })
	})
	return itemList
}

/**
 * TODO vite
 * ? 为什么vite打包后使用fs操作读取的文件还在，不会出现路径错误？
 */
