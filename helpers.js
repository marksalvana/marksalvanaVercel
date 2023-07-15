window.addEventListener("scroll", () => {
	const sections = document.querySelectorAll("section")
	const navbarLinks = document.querySelectorAll("nav ul li a")

	const xDistance = document.querySelector("#experience").offsetTop
	const xSections = document.querySelectorAll("section section")
	const xMenu = document.querySelectorAll("#xmenu a")

	console.log(xSections)

	const scrollPosition = window.scrollY
	const offset = 250

	sections.forEach((section) => {
		const sectionTop = section.offsetTop - offset
		const sectionHeight = section.offsetHeight
		const sectionId = section.getAttribute("id")

		if (scrollPosition >= sectionTop && scrollPosition <= sectionTop + sectionHeight) {
			navbarLinks.forEach((link) => {
				link.classList.remove("active")
				document
					.querySelector("nav  ul li a[href*=" + sectionId + "]")
					.classList.add("active")
				document.querySelector("nav ul").classList.replace("opacity-100", "opacity-0")
				document.querySelector("nav ul").classList.add("hidden")
				document.querySelector("#menu-icon").name = "menu"
			})
		}
	})

	xSections.forEach((xSection) => {
		// Experience scroll position
		const xSectionTop = xSection.offsetTop + xDistance - offset
		const xSectionHeight = xSection.offsetHeight
		const xSectionId = xSection.getAttribute("id")

		console.log(scrollPosition, xSectionTop, xSectionHeight, xSectionId)

		if (
			scrollPosition >= xSectionTop &&
			scrollPosition <= xSectionTop + xSectionHeight &&
			screen.width > 768
		) {
			xMenu.forEach((xLink) => {
				xLink.classList.remove("xactive")
				document
					.querySelector("#xmenu a[href*=" + xSectionId + "]")
					.classList.add("xactive")
				document.querySelector("nav ul").classList.replace("opacity-100", "opacity-0")
				document.querySelector("nav ul").classList.add("hidden")
				document.querySelector("#menu-icon").name = "menu"
			})
		}
	})
})

// menu toggle function

function Menu(e) {
	let list = document.querySelector("nav ul")
	e.name === "menu"
		? ((e.name = "close"),
		  list.classList.replace("opacity-0", "opacity-100"),
		  list.classList.remove("hidden"))
		: ((e.name = "menu"),
		  list.classList.replace("opacity-100", "opacity-0"),
		  list.classList.add("hidden"))
}

// Preloader
var loader = document.querySelector("#loader")
window.addEventListener("load", () => {
	loader.classList.add("animate-fade-out")
	setTimeout(() => {
		loader.classList.add("hidden")
	}, 1000)
})
