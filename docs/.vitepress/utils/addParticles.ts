// 添加一个script标签到head中

export default function addScript(src: string) {
	const script = document.createElement("script")
	script.setAttribute("src", src)
	document.head.appendChild(script)
}
