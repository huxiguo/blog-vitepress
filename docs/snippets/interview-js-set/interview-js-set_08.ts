// #region snippet
function dedupe(array) {
	return Array.from(new Set(array))
}

dedupe([1, 1, 2, 3]) // [1, 2, 3]
// #endregion snippet
export {}
