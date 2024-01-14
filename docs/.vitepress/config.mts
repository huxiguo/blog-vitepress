import { defineConfig } from "vitepress"

// https://vitepress.dev/reference/site-config

import {
	interviewCodeItem,
	interviewCssItem,
	interviewHtmlItem,
	interviewJsItem,
	interviewNetworkItem,
	sidebarInterview,
	leetcodeItem,
	sidebarLeetcode,
} from "./sidebar"

export default defineConfig({
	title: "aaaaaaa",
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
		// 最近更新时间
		lastUpdated: {
			text: "最新更新于",
			formatOptions: {
				dateStyle: "full",
				timeStyle: "long",
				hourCycle: "h23",
			},
		},
		// * 翻页
		docFooter: {
			prev: "上一页",
			next: "下一页",
		},
		// * head 导航栏
		nav: [
			{ text: "首页", link: "/" },
			{ text: "计算机基础", link: "/" },
			{
				text: "高频面试题",
				items: [
					{ text: "HTML", link: `/interview/html/${interviewHtmlItem[0].link}` },
					{ text: "CSS", link: `/interview/css/${interviewCssItem[0].link}` },
					{ text: "JavaScript", link: `/interview/js/${interviewJsItem[0].link}` },
					{ text: "Code", link: `/interview/code/${interviewCodeItem[0].link}` },
					{ text: "Network", link: `/interview/network/${interviewNetworkItem[0].link}` },
					// { text: "Vue", link: `/interview/vue/${interviewCssItem[0].link}` },
					// { text: "React", link: `/interview/react/${interviewCssItem[0].link}` },
					// { text: "Node", link: `/interview/node/${interviewCssItem[0].link}` },
				],
			},
			{ text: "leetcode", link: `/leetcode/${leetcodeItem[0].link}` },
			{ text: "前端工程化", link: "/" },
			{ text: "前端部署", link: "/" },
			{ text: "全栈开发", link: "/" },
		],
		// * 侧边栏,根据不同的路由配置
		sidebar: {
			// * 面试题
			"/interview/": { base: "/interview/", items: sidebarInterview() },
			// * leetcode
			"/leetcode/": { base: "/leetcode/", items: sidebarLeetcode() },
		},
		socialLinks: [{ icon: "github", link: "https://github.com/huxiguo" }],
	},
	vite: {},
})
