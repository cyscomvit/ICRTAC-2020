const elmnt = document.querySelector(".hver-nav")

window.addEventListener("scroll", () => {
	const scrolled = window.scrollY;
	if (scrolled >= 400) {
		elmnt.classList.remove("hver-nav");
	}
	if (scrolled < 400) {
		elmnt.classList.add("hver-nav");
	}
})
