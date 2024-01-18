import type { DefaultTheme } from "vitepress"
import { Item } from "../type/type"

import getSideBarItemByPath from "../utils/getSidebarByPath"

function getVarSideBarItem(directory: string): Item[] {
	return getSideBarItemByPath(directory)
}
const varItem = getVarSideBarItem("../../es6/varLetConst")
export function sidebarVar(): DefaultTheme.SidebarItem[] {
	return [
		{
			text: "声明变量",
			// collapsed: true,
			base: "/es6/varLetConst/",
			items: varItem,
		},
	]
}
