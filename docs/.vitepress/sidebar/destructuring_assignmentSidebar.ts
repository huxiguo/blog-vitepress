import type { DefaultTheme } from "vitepress"
import { Item } from "../type/type"

import getSideBarItemByPath from "../utils/getSidebarByPath"

function getSetMapSideBarItem(directory: string): Item[] {
	return getSideBarItemByPath(directory)
}
const destructuring_assignment_item = getSetMapSideBarItem(
	"../../es6/destructuring_assignment"
)
export function sidebarDestructuring_assignment(): DefaultTheme.SidebarItem[] {
	return [
		{
			text: "解构赋值",
			// collapsed: false,
			base: "/es6/destructuring_assignment/",
			items: destructuring_assignment_item,
		},
	]
}
