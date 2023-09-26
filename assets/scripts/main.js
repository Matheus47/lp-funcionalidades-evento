/*
-- Carousel
*/

const prev = document.querySelector("#prev");
const next = document.querySelector("#next");

let carouselContent = document.querySelector("#carousel-content");

let carouselInner = document.querySelector("#carousel-inner");
let carouselInnerWidth = carouselInner.getBoundingClientRect().width;

let leftValue = 0;

// Variavel usada para setar o movimento do carousel
const totalMovementSize =
	parseFloat(document.querySelector(".box").getBoundingClientRect().width, 10) +
	parseFloat(
		window.getComputedStyle(carouselInner).getPropertyValue("gap"),
		10
	);

prev.addEventListener("click", () => {
	if (!leftValue == 0) {
		leftValue -= -totalMovementSize;
		carouselInner.style.left = leftValue + "px";
	}
});

next.addEventListener("click", () => {
	const carouselContentWidth = carouselContent.getBoundingClientRect().width;
	if (carouselInnerWidth - Math.abs(leftValue) > carouselContentWidth) {
		leftValue -= totalMovementSize;
		carouselInner.style.left = leftValue + "px";
	}
});

const mediaQuery510 = window.matchMedia("(max-width: 510px)");
const mediaQuery770 = window.matchMedia("(max-width: 770px)");

mediaQuery510.addEventListener("change", mediaManagement);
mediaQuery770.addEventListener("change", mediaManagement);

let oldViewportWidth = window.innerWidth;

function mediaManagement() {
	const newViewportWidth = window.innerWidth;
	if (leftValue <= -totalMovementSize && oldViewportWidth < newViewportWidth) {
		leftValue += totalMovementSize;
		carouselInner.style.left = leftValue + "px";
		oldViewportWidth = newViewportWidth;
	} else if (
		leftValue <= -totalMovementSize &&
		oldViewportWidth > newViewportWidth
	) {
		leftValue -= totalMovementSize;
		cCarouselInner.style.left = leftValue + "px";
		oldViewportWidth = newViewportWidth;
	}
}
