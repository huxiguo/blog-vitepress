// #region snippet
let set1 = new Set([1, 2, 3, 4, 5])

set1 = new Set([...set1].map((item) => item * 2))
console.log(set1) // Set(5) { 2, 4, 6, 8, 10 }

let set2 = new Set([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
set2 = new Set([...set2].filter((item) => item % 2 !== 0))
console.log(set2) // Set(5) { 1, 3, 5, 7, 9 }
// #endregion snippet
export {}
