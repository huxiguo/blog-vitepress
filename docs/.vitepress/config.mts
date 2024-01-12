import { defineConfig } from "vitepress"
import type { DefaultTheme } from "vitepress"
import fs from "node:fs"
import path from "node:path"

// https://vitepress.dev/reference/site-config

// 读取/interview/*文件夹下所有的文件返回item[]
const interviewHtmlItem = getInterviewSideBarItem("html")
const interviewCssItem = getInterviewSideBarItem("css")
const interviewCodeItem = getInterviewSideBarItem("code")
const interviewJsItem = getInterviewSideBarItem("js")

// leetcode 文件夹

const leetcodeItem = getLeetcodeSideBarItem()

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
			options: {
				translations: {
					button: {
						buttonText: "搜索文档",
						buttonAriaLabel: "搜索文档",
					},
					modal: {
						footer: {
							selectText: "选择",
							navigateText: "切换",
							closeText: "关闭",
						},
					},
				},
			},
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
		// * 编辑页面
		editLink: {
			pattern: "https://github.com/huxiguo/blog-vitepress/edit/main/docs/:path",
			text: "编辑此页",
		},
		lastUpdated: {
			text: "最新更新于",
			formatOptions: {
				dateStyle: "full",
				timeStyle: "long",
				hourCycle: "h23",
			},
		},
		docFooter: {
			prev: "上一页",
			next: "下一页",
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
			{ text: "leetcode", link: `/leetcode/${leetcodeItem[0].link}` },
		],
		sidebar: {
			"/interview/": { base: "/interview/", items: sidebarInterview() },
			"/leetcode/": { base: "/leetcode/", items: sidebarLeetcode() },
		},
		socialLinks: [{ icon: "github", link: "https://github.com/huxiguo" }],
	},
	vite: {},
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

function sidebarLeetcode(): DefaultTheme.SidebarItem[] {
	return [
		{
			text: "leetcode",
			collapsed: true,
			base: "/leetcode/",
			items: leetcodeItem,
		},
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
function getInterviewSideBarItem(directory: string): Item[] {
	const itemList: Item[] = []
	const dir = path.resolve(__dirname, `../interview/${directory}`)
	fs.readdirSync(dir).map((file) => {
		const name = path.basename(file, ".md")
		itemList.push({ text: name, link: name })
	})
	return itemList
}
function getLeetcodeSideBarItem(): Item[] {
	const itemList: Item[] = []
	const dir = path.resolve(__dirname, `../leetcode/`)
	fs.readdirSync(dir).map((file) => {
		const name = path.basename(file, ".md")
		itemList.push({ text: name, link: name })
	})
	return itemList
}
