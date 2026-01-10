const slideContainer = document.querySelector('.show-slides');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');


const images = [
    'url("./image/image 3.png")',       
    'url("./image/Property 1=Variant2.png")',   
    'url("./image/Property 1=Variant3.png")',        

];
let currentIndex = 0;
let isAnimating = false; 

function changeImage(direction) {

    if (isAnimating) return;
    isAnimating = true;

    slideContainer.classList.add('hide');


    setTimeout(() => {

        if (direction === 'next') {
            currentIndex++;
            if (currentIndex >= images.length) currentIndex = 0;
        } else {
            currentIndex--;
            if (currentIndex < 0) currentIndex = images.length - 1;
        }

        slideContainer.style.backgroundImage = images[currentIndex];


        slideContainer.classList.remove('hide');
        

        setTimeout(() => {
            isAnimating = false;
        }, 400);

    }, 400);
}


nextBtn.addEventListener('click', () => changeImage('next'));
prevBtn.addEventListener('click', () => changeImage('prev'));

document.addEventListener("DOMContentLoaded", () => {
    const products = document.querySelectorAll('.product1');

    products.forEach(product => {
        product.addEventListener('mouseenter', () => {
            product.classList.add('google-hover-active');
        });

        product.addEventListener('mouseleave', () => {
            product.classList.remove('google-hover-active');
        });
    });
});