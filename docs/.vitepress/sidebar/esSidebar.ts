import type { DefaultTheme } from "vitepress"
import { Item } from "../type/type"

import getSideBarItemByPath from "../utils/getSidebarByPath"

function getEsSideBarItem(directory: string): Item[] {
	return getSideBarItemByPath(directory)
}
const esItem = getEsSideBarItem("../../es6/es")
const varItem = getEsSideBarItem("../../es6/varLetConst")
export function sidebarEs(): DefaultTheme.SidebarItem[] {
	return [
		{
			text: "ECMAScript",
			// collapsed: true,
			base: "/es6/es/",
			items: esItem,
		},
	]
}
