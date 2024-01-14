import type { DefaultTheme } from "vitepress"
import { Item } from "../type/type"

import getSideBarItemByPath from "../utils/getSidebarByPath"

function getLeetcodeSideBarItem(directory: string): Item[] {
	return getSideBarItemByPath(directory)
}

export function sidebarLeetcode(): DefaultTheme.SidebarItem[] {
	return [
		{
			text: "leetcode",
			collapsed: true,
			base: "/leetcode/",
			items: leetcodeItem,
		},
	]
}

export const leetcodeItem = getLeetcodeSideBarItem("../../leetcode")
