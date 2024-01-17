// #region snippet
const s = new Set(["red", "green", "blue"])

for (let item of s.keys()) {
	console.log(item)
}
// red
// green
// blue

for (let x of s) {
	console.log(x)
}
// red
// green
// blue

for (let item of s.values()) {
	console.log(item)
}
// red
// green
// blue

for (let item of s.entries()) {
	console.log(item)
}
// ["red", "red"]
// ["green", "green"]
// ["blue", "blue"]

// #endregion snippet
export {}
