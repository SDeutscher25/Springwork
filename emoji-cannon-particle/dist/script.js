const emoji = document.querySelectorAll(".emoji div")
const frame6 = gsap.timeline()
let demoHeight = demo.offsetHeight
let maxY = -demoHeight * 0.85
let minY = -demoHeight * 0.4

emoji.forEach((e, i)=> {
	duration = gsap.utils.random(1, 2),
	frame6.to(e, {
	duration:duration/2,
	ease:"power1.out",
	y:()=>gsap.utils.random(minY, maxY),
	repeat:1, yoyo:true
}, i* 0.03)
	frame6.to(e, {
		scale:gsap.utils.random(0.5, 1.5),
		x:gsap.utils.random(-demoHeight/2.5, demoHeight/2.5),
		duration:duration,
		rotation:gsap.utils.random(-360, 360)
		
	}, "<")
	
	
})

window.addEventListener("pointerdown", ()=> frame6.restart())