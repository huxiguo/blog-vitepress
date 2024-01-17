// #region snippet
Object.prototype[Symbol.iterator] = function* () {
	for (let key in this) {
		yield [key, this[key]]
	}
}
const obj = {
	a: 11,
	b: [1, 2, 3],
}

const m = new Map(obj as any)
console.log(m) // Map(2) {'a' => 11, 'b' => [1, 2, 3]}
// #endregion snippet
export {}
