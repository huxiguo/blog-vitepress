import type { DefaultTheme } from "vitepress"
import { Item } from "../type/type"

import getSideBarItemByPath from "../utils/getSidebarByPath"

function getSideBarItem(directory: string): Item[] {
	return getSideBarItemByPath(directory)
}
const harmonyOSSidebar1 = getSideBarItem(
	"../../harmonyOS/certification/beginner"
)
const harmonyOSSidebar2 = getSideBarItem(
	"../../harmonyOS/certification/intermediate"
)
export function sidebarHarmonyOS(): DefaultTheme.SidebarItem[] {
	return [
		{
			text: "初级认证",
			collapsed: true,
			base: "/harmonyOS/certification/beginner/",
			items: harmonyOSSidebar1,
		},
		{
			text: "中级认证",
			collapsed: true,
			base: "/harmonyOS/certification/intermediate/",
			items: harmonyOSSidebar2,
		},
	]
}
