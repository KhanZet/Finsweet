const burgerButton = document.querySelector('.header__burger-button');
const header = document.querySelector('.header');
burgerButton.addEventListener('click', () => {
	burgerButton.classList.toggle('_active');
	header.classList.toggle('_active');
})