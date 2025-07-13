//your JS code here. If required.
function display() {
		let width=window.innerWidth;
	let height=window.innerHeight;
let textsize=`Width: ${width} and Height:${height}`

	document.querySelector("h1").textContent=textsize
}

display()

window.addEventListener("resize", display)