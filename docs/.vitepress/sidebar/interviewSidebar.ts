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
const interviewJsItem = getInterviewSideBarItem("../../interview/js")
const interviewNetworkItem = getInterviewSideBarItem("../../interview/network")

export function sidebarInterview(): DefaultTheme.SidebarItem[] {
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
			base: "/interview/js/",
			items: interviewJsItem,
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

export { interviewCodeItem, interviewCssItem, interviewHtmlItem, interviewJsItem, interviewNetworkItem }
