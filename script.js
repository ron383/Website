document.addEventListener('DOMContentLoaded', function () {
    const burgerBtn = document.getElementById('burger-btn');
    const mainNav = document.getElementById('main-nav');

    burgerBtn.addEventListener('click', function () {
        if (mainNav.style.display === 'flex') {
            mainNav.classList.remove('fadeIn');
            mainNav.classList.add('fadeOut');
            setTimeout(() => {
                mainNav.style.display = 'none';
                mainNav.classList.remove('fadeOut');
            }, 500);
        } else {
            mainNav.style.display = 'flex';
            mainNav.classList.remove('fadeOut');
            mainNav.classList.add('fadeIn');
        }
    });
});
