// #region snippet
// 用Set来作为Map构造函数的参数
const set = new Set<[string, () => string]>([
	["foo", () => "foo"],
	["bar", () => "bar"],
])
const m1 = new Map(set) // Map (2) {"foo" => () => "foo", "bar" => () => "bar"}

// 可以用Map来作为Map构造函数的参数
const map = new Map([
	["a", 1],
	["b", 2],
])
const m2 = new Map(map)
console.log(m2) // Map(2) {'a' => 1, 'b' => 2}
// #endregion snippet
export {}
