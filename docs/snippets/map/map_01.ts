// #region snippet
const box = document.querySelector(".box")
const obj = {
	[box]: "width:100px;height:100px;background:red", // [!code error] // [!code focus]
}
for (let key in obj) {
	console.log(key) // [object HTMLDivElement]
}
// #endregion snippet
export {}
