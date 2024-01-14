import fs from "node:fs"
import path from "node:path"

import { Item } from "../type/type"

export default function getSideBarItemByPath(directory: string): Item[] {
	const itemList: Item[] = []
	const dir = path.resolve(__dirname, `${directory}`)
	fs.readdirSync(dir).map((file) => {
		const name = path.basename(file, ".md")
		itemList.push({ text: name, link: name })
	})
	return itemList
}
