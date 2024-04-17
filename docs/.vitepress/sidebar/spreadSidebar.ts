import type { DefaultTheme } from "vitepress"
import { Item } from "../type/type"

import getSideBarItemByPath from "../utils/getSidebarByPath"

function getSetMapSideBarItem(directory: string): Item[] {
	return getSideBarItemByPath(directory)
}
const spreadItem = getSetMapSideBarItem("../../es6/spread")
export function sidebarSpread(): DefaultTheme.SidebarItem[] {
	return [
		{
			text: "展开运算符",
			// collapsed: false,
			base: "/es6/spread/",
			items: spreadItem,
		},
	]
}
