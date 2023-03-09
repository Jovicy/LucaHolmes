// Toggle Part
const toggleBtn = document.querySelector('.nav__toggle');
const menu = document.querySelector('.nav__menu');

toggleBtn.addEventListener('click', function() {
    menu.classList.toggle('active');
});
