document.addEventListener("DOMContentLoaded", () => {
	const twineLogo = document.getElementById('twine-logo');
	const caseStudy = document.getElementById('four');

	// twineLogo.style.opacity = 1;

	if (window.scrollY >= caseStudy.offsetTop) {
		console.log(window.scrollY)
	}
})