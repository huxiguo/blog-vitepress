// #region snippet
const obj = {
	a: 1,
	b: 2,
	["0"]: "a",
	["1"]: "b",
}
console.log(obj)

const m = new Map<string, string | number>([
	["a", 1],
	["b", 2],
	["0", "a"],
	["1", "b"],
])
console.log(m)
// #endregion snippet
export {}
