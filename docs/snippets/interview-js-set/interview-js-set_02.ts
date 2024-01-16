// #region snippet
// 例一
const set1 = new Set([1, 2, 3, 4, 4])
;[...set1]
// [1, 2, 3, 4]

// 例二
const set2 = new Set([1, 2, 3, 4, 5, 5, 5, 5])
set2.size // 5

// 例三
const set3 = new Set(document.querySelectorAll("div"))
set3.size // 56

// 类似于
const set4 = new Set()
document.querySelectorAll("div").forEach((div) => set4.add(div))
set4.size // 239
// #endregion snippet
export {}
