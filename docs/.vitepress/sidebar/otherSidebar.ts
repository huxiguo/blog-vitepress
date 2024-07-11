import type { DefaultTheme } from "vitepress"
import { Item } from "../type/type"
import getSideBarItemByPath from "../utils/getSidebarByPath"

function getOtherSideBarItem(directory: string): Item[] {
	return getSideBarItemByPath(directory)
}

const otherInterviewItem = getOtherSideBarItem("../../other/interview")
const otherLiveItem = getOtherSideBarItem("../../other/live")

export function sidebarOther(): DefaultTheme.SidebarItem[] {
	return [
		{
			text: "面试总结",
			collapsed: true,
			base: "/other/interview/",
			items: otherInterviewItem,
		},
		{
			text: "生活",
			collapsed: true,
			base: "/other/live/",
			items: otherLiveItem,
		},
	]
}

export { otherInterviewItem, otherLiveItem }
