// #region snippet
const box = document.querySelector(".box")
const map = new Map()
map.set(box, "width:100px;height:100px;background:red") // [!code ++] // [!code focus]

for (let [el, css] of map) {
	console.log(el)
	console.log(css)
	el.style.cssText = css
}
// #endregion snippet
export {}
