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
document.addEventListener("DOMContentLoaded", () => {
    // 1. Знаходимо елементи керування та контенту
    const prevBtnSec5 = document.querySelector('.previos'); // Ліва кнопка
    const nextBtnSec5 = document.querySelector('.next');    // Права кнопка
    
    // Елементи, які будемо змінювати
    const titleImage = document.querySelector('.gonestdor'); // Картинка-заголовок (наприклад, Nest Doorbell)
    const infoCard = document.querySelector('.dorbell-info'); // Біла картка
    const descriptionText = document.querySelector('.Door-info'); // Текст опису
    const productImage = document.querySelector('.doorbell'); // Картинка самого продукту всередині картки

    // 2. База даних товарів (Тут зміни шляхи до картинок і текст на свої!)
    const sec5Products = [
        {
            // Слайд 1 (Поточний)
            titleImg: './image/Google Nest Doorbell.png',
            text: 'Meet the smarter, sharper wired Nest Doorbell.',
            productImg: './image/image-removebg-preview (2) (1) (1).png'
        },
        {
            // Слайд 2 (Наприклад, Камера) - ЗАМІНИ ШЛЯХИ
            titleImg: './image/Google Nest Doorbell.png', // Сюди постав картинку назви іншого товару
            text: 'Keep an eye on what matters with Nest Cam.',
            productImg: './image/image-removebg-preview (3).png' // Сюди картинку іншого товару
        },
        {
            // Слайд 3 (Наприклад, Інший девайс) - ЗАМІНИ ШЛЯХИ
            titleImg: './image/Google Nest Doorbell.png', 
            text: 'Stay connected with the new Google Device.',
            productImg: './image/31750hI5MLL-removebg-preview.png'
        }
    ];

    let currentSec5Index = 0; // Початковий слайд
    let isSec5Animating = false; // Блокування частих кліків

    // 3. Функція оновлення слайду
    function updateSec5Slide(index) {
        if (isSec5Animating) return;
        isSec5Animating = true;

        // Додаємо клас зникнення (анімація)
        titleImage.classList.add('fade-out');
        infoCard.classList.add('fade-out');

        // Чекаємо 300мс, поки зникне, потім міняємо дані
        setTimeout(() => {
            const product = sec5Products[index];

            // Оновлюємо картинки та текст
            titleImage.src = product.titleImg;
            descriptionText.innerText = product.text;
            productImage.src = product.productImg;

            // Видаляємо клас зникнення (поява нового контенту)
            titleImage.classList.remove('fade-out');
            infoCard.classList.remove('fade-out');

            // Знімаємо блокування анімації
            setTimeout(() => {
                isSec5Animating = false;
            }, 300);
        }, 300);
    }

    // 4. Обробники подій для кнопок
    if(nextBtnSec5 && prevBtnSec5) {
        nextBtnSec5.addEventListener('click', () => {
            currentSec5Index++;
            if (currentSec5Index >= sec5Products.length) {
                currentSec5Index = 0; // Зациклюємо по колу
            }
            updateSec5Slide(currentSec5Index);
        });

        prevBtnSec5.addEventListener('click', () => {
            currentSec5Index--;
            if (currentSec5Index < 0) {
                currentSec5Index = sec5Products.length - 1; // Йдемо на останній слайд
            }
            updateSec5Slide(currentSec5Index);
        });
    }
});




function changeImage(direction) {
    if (isAnimating) return;
    isAnimating = true;
    slideContainer.classList.add('hide');

    setTimeout(() => {
        if (direction === 'next') {
            currentIndex++;
            if (currentIndex >= images.length) {
                currentIndex = 0;
            }
        } else if (direction === 'prev') {
            currentIndex--;
            if (currentIndex < 0) {
                currentIndex = images.length - 1;
            }
        }

        slideContainer.style.backgroundImage = images[currentIndex];
        slideContainer.classList.remove('hide');

        setTimeout(() => {
            isAnimating = false;
        }, 400); // Час має відповідати transition в CSS (0.4s)
    }, 400);
}

if (nextBtn && prevBtn) {
    nextBtn.addEventListener('click', () => changeImage('next'));
    prevBtn.addEventListener('click', () => changeImage('prev'));
}

// --- НОВА ЛОГІКА ДЛЯ АНІМАЦІЇ ПРОДУКТІВ ---

// Знаходимо всі елементи з класами product1, product2 та product3
const allProducts = document.querySelectorAll('.product1, .product2, .product3');

allProducts.forEach(product => {
    // При наведенні миші додаємо клас активності
    product.addEventListener('mouseenter', () => {
        product.classList.add('google-hover-active');
    });

    // Коли миша йде з елемента, прибираємо клас
    product.addEventListener('mouseleave', () => {
        product.classList.remove('google-hover-active');
    });
});