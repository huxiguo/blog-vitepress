// #region snippet
const ws = new WeakSet()
// ws.add(1) // 报错
ws.add(Symbol()) // 由于兼容性差异，在不同平台会有不一样的效果
// #endregion snippet
export {}
