import type { DefaultTheme } from "vitepress"
import { Item } from "../type/type"

import getSideBarItemByPath from "../utils/getSidebarByPath"

function getMiniprogramSideBarItem(directory: string): Item[] {
	return getSideBarItemByPath(directory)
}

export function sidebarMiniprogram(): DefaultTheme.SidebarItem[] {
	return [
		{
			text: "微信小程序",

			base: "/miniprogram/",
			items: miniprogramItem,
		},
	]
}

export const miniprogramItem = getMiniprogramSideBarItem("../../miniprogram")
