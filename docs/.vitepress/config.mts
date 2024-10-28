import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config

import {
	computerBaseGitItem,
	interviewCodeItem,
	interviewCssItem,
	interviewEngineeringItem,
	interviewHtmlItem,
	interviewJsItem,
	interviewNetworkItem,
	leetcodeItem,
	miniprogramItem,
	otherLiveItem,
	sidebarComputerBase,
	sidebarDestructuring_assignment,
	sidebarEs,
	sidebarHarmonyOS,
	sidebarInterview,
	sidebarLeetcode,
	sidebarMiniprogram,
	sidebarOther,
	sidebarSetMap,
	sidebarSpread,
	sidebarVar,
} from './sidebar'

export default defineConfig({
	sitemap: {
		hostname: 'https://blog.seekhoo.cn',
	},
	head: [
		['link', { rel: 'icon', href: '/favicon.ico' }],
		['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
		[
			'link',
			{ rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
		],
		[
			'link',
			{
				href: 'https://fonts.googleapis.com/css2?family=Roboto&display=swap',
				rel: 'stylesheet',
			},
		],
	],
	title: '攻城狮',
	description: 'my study blog',
	// * 显示修改时间
	lastUpdated: true,
	// * 是否去除路由后面的.html
	cleanUrls: true,
	// * markdown 相关配置 详见 https://vitepress.dev/zh/guide/markdown#header-anchors
	markdown: {
		lineNumbers: true,
	},
	themeConfig: {
		logo: '/ico.png',
		// https://vitepress.dev/reference/default-theme-config
		// * 搜索
		search: {
			provider: 'local',
			options: {
				translations: {
					button: {
						buttonText: '搜索文档',
						buttonAriaLabel: '搜索文档',
					},
					modal: {
						footer: {
							selectText: '选择',
							navigateText: '切换',
							closeText: '关闭',
						},
					},
				},
			},
		},
		// * 右侧导航
		outline: {
			label: '页面导航',
		},
		// * 页脚
		footer: {
			message: 'Released under the MIT License.',
			copyright: 'Copyright © 2024-present seek hoo',
		},
		// * 编辑页面
		editLink: {
			pattern: 'https://github.com/huxiguo/blog-vitepress/edit/main/docs/:path',
			text: '编辑此页',
		},
		// 最近更新时间
		lastUpdated: {
			text: '最新更新于',
			formatOptions: {
				dateStyle: 'full',
				timeStyle: 'long',
				hourCycle: 'h23',
			},
		},
		// * 翻页
		docFooter: {
			prev: '上一页',
			next: '下一页',
		},
		// * head 导航栏
		nav: [
			{ text: '首页', link: '/' },
			{
				text: '计算机基础',
				items: [
					{
						text: 'git',
						link: `/computerBase/git/${computerBaseGitItem[0].link}`,
					},
				],
			},
			{
				text: '前端知识体系',
				items: [
					{
						text: 'HTML',
						link: `/interview/html/${interviewHtmlItem[0].link}`,
					},
					{ text: 'CSS', link: `/interview/css/${interviewCssItem[0].link}` },
					{
						text: 'JavaScript',
						link: `/interview/js/${interviewJsItem[0].link}`,
					},
					{
						text: 'Es6',
						link: `/interview/es6/什么是ES`,
					},
					{
						text: 'Code',
						link: `/interview/code/${interviewCodeItem[0].link}`,
					},
					{
						text: 'Network',
						link: `/interview/network/${interviewNetworkItem[0].link}`,
					},
					{
						text: '前端工程化',
						link: `/interview/engineering/${interviewEngineeringItem[0].link}`,
					},
					// { text: "Vue", link: `/interview/vue/${interviewCssItem[0].link}` },
					// { text: "React", link: `/interview/react/${interviewCssItem[0].link}` },
					// { text: "Node", link: `/interview/node/${interviewCssItem[0].link}` },
				],
			},
			{ text: '算法与数据结构', link: `/leetcode/${leetcodeItem[0].link}` },
			// {
			// 	text: "前端工程化",
			// 	items: [
			// 		{
			// 			text: "webpack",
			// 			items: [{ text: "初级", link: "/webpack/primary" }],
			// 		},
			// 		{ text: "vite", link: "/c" },
			// 	],
			// },
			{ text: '微信小程序', link: `/miniprogram/${miniprogramItem[0].link}` },
			// { text: "前端部署", link: "/q" },
			// { text: "全栈开发", link: "/w" },
			{
				text: 'HarmonyOS',
				items: [
					{
						text: '初级认证',
						link: '/harmonyOS/certification/beginner/index',
					},
					{
						text: '中级认证',
						link: '/harmonyOS/certification/intermediate/index',
					},
				],
			},
			{
				text: '其他',
				items: [
					// * 不显示
					// {
					// 	text: "面试总结",
					// 	link: `/other/interview/${otherInterviewItem[0].link}`,
					// },
					{
						text: '生活',
						link: `/other/live/${otherLiveItem[0].link}`,
					},
				],
			},
		],
		// * 侧边栏,根据不同的路由配置
		sidebar: {
			// * 面试题
			'/interview/': { base: '/interview/', items: sidebarInterview() },
			// * leetcode
			'/leetcode/': { base: '/leetcode/', items: sidebarLeetcode() },
			// miniprogram
			'/miniprogram/': { base: '/miniprogram/', items: sidebarMiniprogram() },
			// * 计算机基础
			'/computerBase/': {
				base: '/computerBase/',
				items: sidebarComputerBase(),
			},
			'/set-map/': {
				base: '/set-map/',
				items: sidebarSetMap(),
			},
			'/es6/es': {
				base: '/es6/es/',
				items: sidebarEs(),
			},
			'/es6/varLetConst': {
				base: '/es6/varLetConst/',
				items: sidebarVar(),
			},
			'/es6/destructuring_assignment': {
				base: '/es6/destructuring_assignment/',
				items: sidebarDestructuring_assignment(),
			},
			'/es6/spread': {
				base: '/es6/spread/',
				items: sidebarSpread(),
			},
			'/harmonyOS/certification': {
				base: '/harmonyOS/certification/',
				items: sidebarHarmonyOS(),
			},
			'/other': {
				base: '/other/',
				items: sidebarOther(),
			},
		},
		socialLinks: [{ icon: 'github', link: 'https://github.com/huxiguo' }],
	},
	vite: {},
	vue: {},
})
