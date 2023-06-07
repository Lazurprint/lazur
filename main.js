// Бургер меню

let burger = document.querySelector('.burger');
let menu = document.querySelector('.header__menu');
let menuLinks = menu.querySelectorAll('.header__link');

burger.addEventListener('click',
    function () {

        burger.classList.toggle('burger--active');

        menu.classList.toggle('header__menu--active')

        document.body.classList.toggle('stop-scroll');
    }
)

menuLinks.forEach(function (el) {
    el.addEventListener('click', function () {
        burger.classList.remove('burger--active');

        menu.classList.remove('header__menu--active');

        document.body.classList.remove('stop-scroll');
    })
});

// слайдеры в hero

// const heroSlider = document.querySelector('.hero-swiper-container');
// const mySwiperHero = new Swiper(heroSlider, {
//     direction: 'horizontal',
//     loop: true,
//     effect: 'fade',
//     pagination: {
//         el: false,
//     },
//     autoplay: {
//         delay: 5000,
//     },
// });

// кнопка "почему мы?"

const aboutBtn = document.querySelector('.about__trigger');
const aboutContent = document.querySelector('.about__content');

aboutBtn.addEventListener('click', () => {
    aboutContent.classList.toggle('about__conten--active')
    aboutBtn.classList.toggle('about__trigger--active')
    if (aboutBtn.textContent !== 'Скрыть') {
        aboutBtn.textContent = 'Скрыть'
    } else {
        aboutBtn.textContent = 'Почему мы?'
    }

})

// Селект в каталоге

const selectGallery = () => {
    const item = document.querySelector('#selectGallery');
    const selectOption = document.querySelector('.select__option');
    const swiperContainer = document.querySelectorAll('.gallery-swp');
    const choices = new Choices(item, {
        searchEnabled: false,
        itemSelectText: '',
        sorter: function (a, b) { },
    });

    choices.passedElement.element.addEventListener('change', () => {
        swiperContainer.forEach(el => {
            el.classList.remove('gallery--active')
        })

        if (item.textContent === 'Книги и журналы') {
            document.querySelector('.swp1').classList.add('gallery--active')
            slader()
        } else if (item.textContent === 'Учебники и игры') {
            document.querySelector('.swp2').classList.add('gallery--active')
            slader()
        } else if (item.textContent === 'Газеты и плакаты') {
            document.querySelector('.swp3').classList.add('gallery--active')
            slader()
        } else if (item.textContent === 'Упаковка и этикетки') {
            document.querySelector('.swp4').classList.add('gallery--active')
            slader()
        } else if (item.textContent === 'Сувенирная продукция') {
            document.querySelector('.swp5').classList.add('gallery--active')
            slader()
        } else if (item.textContent === 'Листовки брошюры и флаеры') {
            document.querySelector('.swp6').classList.add('gallery--active')
            slader()
        } else if (item.textContent === 'Визитки пакеты и календари') {
            document.querySelector('.swp7').classList.add('gallery--active')
            slader()
        }


    });
};

selectGallery();

// Слайдер каталога 

function slader() {
    const gallerySlider = document.querySelectorAll('.gallery-swiper-container');
    gallerySlider.forEach(el => {
        const mySwiperGallery = new Swiper(el, {
            slidesPerView: 3,
            slidesPerColumnFill: 'row',
            slidesPerColumn: 2,
            slidesPerGroup: 2,
            spaceBetween: 50,
            direction: 'horizontal',

            pagination: {
                el: '.gallery-button__pagination',
                type: 'fraction',
            },

            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },

            breakpoints: {
                300: {
                    slidesPerView: 1,
                    slidesPerColumn: 1,
                    slidesPerGroup: 1,
                },

                577: {
                    slidesPerView: 2,
                    slidesPerColumn: 1,
                    spaceBetween: 36,
                    slidesPerGroup: 2,
                },

                940: {
                    slidesPerView: 2,
                    slidesPerColumn: 1,
                    spaceBetween: 38,
                    slidesPerGroup: 2,
                },



                1411: {
                    slidesPerView: 3,
                    slidesPerColumn: 1,
                    spaceBetween: 45,
                    slidesPerGroup: 3,
                },
            }
        });

    })
}

slader()

// кнопка каталога 

const galleryBtn = document.querySelector('.gallery__btn');
const formModal = document.querySelector('.form__modal');
const formClose = document.querySelector('.form__close');

galleryBtn.addEventListener('click', () => {
    formModal.classList.add('modal--active')
})

formClose.addEventListener('click', () => {
    formModal.classList.remove('modal--active')
})

formModal.addEventListener('click', (e) => {
    if (e.target === formModal) {
        formModal.classList.remove('modal--active')
    }
})

// Модальное окно
const modal = document.querySelector('.modal');
const modalItem = document.querySelector('.modal__item');
const galleryItem = document.querySelectorAll('.gallery-swiper-slide');
const modalItemImg = document.querySelector('.modal__item-img');
const modalItemDescr = document.querySelector('.modal__item-descr');
const close = document.querySelector('.close');

galleryItem.forEach(item => {
    item.addEventListener('click', () => {
        modal.classList.add('modal--active')
        modalItemImg.innerHTML = item.innerHTML
    })
})

close.addEventListener('click', () => {
    modal.classList.remove('modal--active')
})

modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.classList.remove('modal--active')
    }
})

// Плавный скролл 

const anchors = document.querySelectorAll('a[href*="#"]');

for (let anchor of anchors) {
    anchor.addEventListener("click", function (event) {
        event.preventDefault();
        const blockID = anchor.getAttribute('href')
        document.querySelector('' + blockID).scrollIntoView({
            behavior: "smooth",
            block: "start"
        })
    })
};

// валидация

let selector = document.querySelector('.form__tel');
let im = new Inputmask('+7 (999) 999-99-99');
im.mask(selector);

let selector2 = document.querySelector('input[type="tel"]');

selector2.addEventListener('input', function () {

    const re = /^\d*(\.\d+)?$/


});

const fileInput = document.querySelector('input[type="file"]');

fileInput.addEventListener('change', (e) => {
    let files = e.currentTarget.files;
    console.log(files);

    if (files.length) {
        fileInput.closest('label').querySelector('span').textContent = files[0].name;
    } else {
        fileInput.closest('label').querySelector('span').textContent = 'Прикрепить файл';
    }

});

let validateForms = function (selector, rules, successModal, yaGoal) {
    new window.JustValidate(selector, {
        rules: rules,
        submitHandler: function (form) {
            let formData = new FormData(form);

            let xhr = new XMLHttpRequest();

            xhr.onreadystatechange = function () {
                if (xhr.readyState === 4) {
                    if (xhr.status === 200) {
                        alert('Отправлено');
                        formModal.classList.remove('modal--active')
                    }
                }
            }

            xhr.open('POST', 'mail.php', true);
            xhr.send(formData);

            form.reset();

            fileInput.closest('label').querySelector('span').textContent = 'Прикрепить файл';
        }
    });
}

validateForms('.form', { email: { required: true, email: true }, tel: { required: true } }, '.thanks-popup', 'send goal');

