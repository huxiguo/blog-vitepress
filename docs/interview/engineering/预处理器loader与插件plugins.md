# 预处理器 loader 与 插件 plugins

## 区别

- `loader` 是文件加载器，能够加载资源文件，并对这些文件进行一些处理，诸如编译、压缩等，最终一起打包到指定的文件中
- `plugin` 赋予了 webpack 各种灵活的功能，例如打包优化、资源管理、环境变量注入等，目的是解决 loader 无法实现的其他事

![](https://static.vue-js.com/9a04ec40-a7c2-11eb-ab90-d9ae814b240d.png)

- loader 运行在打包文件之前
- plugins 在整个编译周期都起作用

在`Webpack` `运行的生命周期中会广播出许多事件，Plugin` 可以监听这些事件，在合适的时机通过`Webpack`提供的 `API`改变输出结果

对于`loader`，实质是一个转换器，将 A 文件进行编译形成 B 文件，操作的是文件，比如将`A.scss`或`A.less`转变为`B.css`，单纯的文件转换过程

## 什么是 loader

:::tip
默认 Webpack 只能处理 JS 和 JSON 文件，对于其它类型的文件需要借除 loader 预处理器来帮忙。

loader 的作用就是让 Webpack 能够去处理那些非 JS 和 JSON 文件的模块。
:::

其本质为函数，函数中的 `this` 作为上下文会被 `webpack` 填充，因此我们不能将 `loader`设为一个箭头函数

函数接受一个参数，为 `webpack` 传递给 `loader` 的文件源内容

函数中 `this` 是由 `webpack` 提供的对象，能够获取当前 `loader` 所需要的各种信息

函数中有异步操作或同步操作，异步操作通过 `this.callback` 返回，返回值要求为 `string` 或者 `Buffer`

```js
// 导出一个函数，source为webpack传递给loader的文件源内容
module.exports = function (source) {
	const content = doSomeThing2JsString(source)

	// 如果 loader 配置了 options 对象，那么this.query将指向 options
	const options = this.query

	// 可以用作解析其他模块路径的上下文
	console.log("this.context")

	/*
	 * this.callback 参数：
	 * error：Error | null，当 loader 出错时向外抛出一个 error
	 * content：String | Buffer，经过 loader 编译后需要导出的内容
	 * sourceMap：为方便调试生成的编译后内容的 source map
	 * ast：本次编译生成的 AST 静态语法树，之后执行的 loader 可以直接使用这个 AST，进而省去重复生成 AST 的过程
	 */
	this.callback(null, content) // 异步
	return content // 同步
}
```

## 什么是 plugin

由于`webpack`基于发布订阅模式，在运行的生命周期中会广播出许多事件，插件通过监听这些事件，就可以在特定的阶段执行自己的插件任务

- 插件必须是一个函数或者是一个包含 `apply` 方法的对象，这样才能访问`compiler`实例
- 传给每个插件的 `compiler` 和 `compilation` 对象都是同一个引用，因此不建议修改
- 异步的事件需要在插件处理完任务时调用回调函数通知 `Webpack` 进入下一个流程，不然会卡住

```js
class MyPlugin {
	// Webpack 会调用 MyPlugin 实例的 apply 方法给插件实例传入 compiler 对象
	apply(compiler) {
		// 找到合适的事件钩子，实现自己的插件功能
		compiler.hooks.emit.tap("MyPlugin", (compilation) => {
			// compilation: 当前打包构建流程的上下文
			console.log(compilation)

			// do something...
		})
	}
}
```

## 实现自己的loader