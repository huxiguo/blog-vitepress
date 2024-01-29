import type { DefaultTheme } from "vitepress"
import { Item } from "../type/type"
import getSideBarItemByPath from "../utils/getSidebarByPath"
// 读取interview/html目录下的文件返回数组
/**
 *
 * @param directory
 * @returns
 */
function getInterviewSideBarItem(directory: string): Item[] {
	return getSideBarItemByPath(directory)
}

// 读取/interview/*文件夹下所有的文件返回item[]
const interviewHtmlItem = getInterviewSideBarItem("../../interview/html")
const interviewCssItem = getInterviewSideBarItem("../../interview/css")
const interviewCodeItem = getInterviewSideBarItem("../../interview/code")
let interviewJsItem = getInterviewSideBarItem("../../interview/js")
const interviewNetworkItem = getInterviewSideBarItem("../../interview/network")
export function sidebarInterview(): DefaultTheme.SidebarItem[] {
	return [
		{
			text: "html",
			collapsed: true,
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
			base: "/interview/js/",
			items: interviewJsItem,
		},
		{
			text: "es6",
			collapsed: true,
			base: "/interview/es6/",
			items: [
				{ text: "什么是ES", link: "什么是ES" },
				{ text: "定义变量", base: "/es6/varLetConst/", link: "变量和常量" },
				{ text: "Symbol", link: "symbol" },
				{ text: "BigInt", link: "BigInt" },
				{ text: "模板字符串", link: "模板字符串" },
				{ text: "箭头函数", link: "箭头函数" },
				{
					text: "对象字面量增强",
					link: "对象字面量增强",
				},
				{
					text: "解构赋值",
					base: "/es6/destructuring_assignment/",
					link: "解构赋值是什么",
				},
				{ text: "默认参数", link: "默认参数" },
				{ text: "剩余参数", link: "剩余参数" },
				{ text: "展开运算符", link: "展开运算符" },
				{ text: "set和map", base: "/es6/es/", link: "什么是es" },
				{ text: "class和继承", link: "class和继承" },
				{
					text: "字符串数组对象的新增方法",

					link: "字符串数组对象的新增方法",
				},
				{ text: "Generator", link: "Generator" },
				{ text: "Promise", link: "Promise" },
				{
					text: "Proxy和Reflect",

					link: "Proxy和Reflect",
				},
			],
		},
		{
			text: "手写代码",
			collapsed: true,
			base: "/interview/code/",
			items: interviewCodeItem,
		},
		{
			text: "Network",
			collapsed: true,
			base: "/interview/network/",
			items: interviewNetworkItem,
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

export {
	interviewCodeItem,
	interviewCssItem,
	interviewHtmlItem,
	interviewJsItem,
	interviewNetworkItem,
}
