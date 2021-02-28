let prev = document.querySelector('.prev');
let next = document.querySelector('.next');
let slides = document.querySelectorAll('.content');
let i = 0;

prev.addEventListener('click', () => {
    slides[i].classList.remove('showing');
    i--;
    if (i > slides.length - 1) {
        i = 0;
    }
    if (i < 0) {
        i = slides.length - 1;
    }
    slides[i].classList.add('showing');
    console.log(i);
});
next.addEventListener('click', () => {
    slides[i].classList.remove('showing');
    i++;
    if (i > slides.length - 1) {
        i = 0;
    }
    if (i < 0) {
        i = slides.length - 1;
    }
    slides[i].classList.add('showing');
});
