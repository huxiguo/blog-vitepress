import type { DefaultTheme } from "vitepress"
import { Item } from "../type/type"

import getSideBarItemByPath from "../utils/getSidebarByPath"

function getSetMapSideBarItem(directory: string): Item[] {
	return getSideBarItemByPath(directory)
}
const setItem = getSetMapSideBarItem("../../set-map/set")
const weakSetItem = getSetMapSideBarItem("../../set-map/WeakSet")
const mapItem = getSetMapSideBarItem("../../set-map/map")
const weakMapItem = getSetMapSideBarItem("../../set-map/WeakMap")
export function sidebarSetMap(): DefaultTheme.SidebarItem[] {
	return [
		{
			text: "set",
			collapsed: true,
			base: "/set-map/set/",
			items: setItem,
		},
		{
			text: "WeakSet",
			collapsed: true,
			base: "/set-map/WeakSet/",
			items: weakSetItem,
		},
		{
			text: "set 和 WeakSet",
			base: "/set-map/",
			link: "/set和WeakSet对比",
		},
		{
			text: "map",
			collapsed: true,
			base: "/set-map/map/",
			items: mapItem,
		},
		{
			text: "WeakMap",
			collapsed: true,
			base: "/set-map/WeakMap/",
			items: weakMapItem,
		},
		{
			text: "总结",
			base: "/set-map/",
			link: "/总结",
		},
		{
			text: "测试题",
			base: "/set-map/",
			link: "/测试题",
		},
	]
}
