// #region snippet
const map = new Map()
map.set(NaN, 1)
map.set(NaN, 2)
map.set(0, "a")
map.set(-0, "b")
map.set(+0, "c")
map.set({ a: 1 }, 1)
map.set({ a: 1 }, 2)
console.log(map) // Map(4) {NaN => 2, 0 => 'c', {…} => 1, {…} => 2}
// #endregion snippet
export {}
