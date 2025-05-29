document.addEventListener('DOMContentLoaded', function () {
	const menuButton = document.querySelector('.mobile-menu-button');
	const leftItems = document.querySelector('.left-items');
	const rightItems = document.querySelector('.right-items');

	if (menuButton && leftItems && rightItems) {
		menuButton.addEventListener('click', function () {
			leftItems.classList.toggle('active');
			rightItems.classList.toggle('active');
		});
	}
});