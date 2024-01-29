// #region snippet
function getArea(shape: string, options) {
	let area = 0 // 保存最终计算得到的面积
	switch (shape) {
		case "rectangle": // 魔术字符串
			area = options.width * options.height
			break
		case "triangle": // 魔术字符串
			area = (options.width * options.height) / 2
			break
		case "circle": // 魔术字符串
			area = Math.PI * options.radius * options.radius
			break
	}
	return area
}

const area = getArea("rectangle", { width: 100, height: 100 })
console.log(area)

// #endregion snippet
export {}
