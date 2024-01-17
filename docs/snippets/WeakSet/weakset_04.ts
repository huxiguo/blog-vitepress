// #region snippet
const ws = new Set()
function Person(name: string, age: number) {
	this.name = name
	this.age = age
	ws.add(this)
}
Person.prototype.sayHello = function () {
	if (!ws.has(this)) throw new TypeError("sayHello方法只能在Person的实例上调用")
	console.log(`hello world`)
}

// 添加方法，手动将对象从ws中移出
Person.prototype.destory = function () {
	ws.delete(this)
}

let p = new Person("hoo", 20)
p.sayHello()
p.destory() // 在对对象p销毁前，先要将Set中对他的引用切换，即在Set中将其删除
p = null // 将p对象销毁
console.log(ws) // 但因为ws中保存着对对象p的引用，所以垃圾回收并没有回收p，一直在内存中存着
// #endregion snippet
export {}
