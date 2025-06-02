let burgerBtn = document.querySelector('.burger-menu-btn');
let burgerMenu = document.querySelector('.burger-menu');

let isBurgerOpen = false;

burgerBtn.onclick = function() {
    if (!isBurgerOpen) {
        burgerMenu.style.display = 'block';
        burgerBtn.style.backgroundImage = 'url(burger-menu-close.png)';
        isBurgerOpen = true;
    } else {
        burgerMenu.style.display = 'none';
        burgerBtn.style.backgroundImage = 'url(burger-menu-open.png)';
        isBurgerOpen = false;
    }
}
