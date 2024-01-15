import type { DefaultTheme } from "vitepress"

import getSideBarItemByPath from "../utils/getSidebarByPath"

// const computerBaseNetworkItem = getSideBarItemByPath("../../computerBase/network")
// const computerBaseAlgorithmItem = getSideBarItemByPath("../../computerBase/algorithm")
// const computerBaseDataStructureItem = getSideBarItemByPath("../../computerBase/dataStructure")
// const computerBaseDesignPatternItem = getSideBarItemByPath("../../computerBase/designPattern")
// const computerBaseOSItem = getSideBarItemByPath("../../computerBase/os")
// const computerBaseDatabaseItem = getSideBarItemByPath("../../computerBase/database")
// const computerBaseLinuxItem = getSideBarItemByPath("../../computerBase/linux")
export const computerBaseGitItem = getSideBarItemByPath("../../computerBase/git")

export function sidebarComputerBase(): DefaultTheme.SidebarItem[] {
	return [
		{
			text: "git",
			collapsed: true,
			base: "/computerBase/git/",
			items: computerBaseGitItem,
		},
	]
}
