// Получаем контейнер слайдера
const slider = document.querySelector('.swiper-container');

// Загружаем данные из .json файла
fetch('news.json')
    .then(response => response.json())
    .then(data => {
        // Создаем слайды на основе данных из .json файла
        const slides = data.map(newsItem => {
            return `
        <div class="swiper-slide">
          <h3>${newsItem.title}</h3>
          <p>${newsItem.text}</p>
          <img class="landing-care-slider-img" src="${newsItem.imageUrl}" alt="${newsItem.imageUrl}">
        </div>
      `;
        });
        // Вставляем слайды в слайдер
        slider.querySelector('.swiper-wrapper').innerHTML = slides.join('');

        //// Инициализируем Swiper.js
        // настройки свайпера
        let mySlider = new Swiper(slider, {
            // Default parameters
            initialSlide: 0,
            loop: false,
            spaceBetween: 10,
            centeredSlides: false,
            slideToClickedSlide: true,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            // Responsive breakpoints
            breakpoints: {
                // when window width is >= 320px
                320: {
                    slidesPerView: 2,
                    spaceBetween: 5
                },
                // when window width is >= 480px
                480: {
                    slidesPerView: 2,
                    spaceBetween: 10
                },
                // when window width is >= 640px
                640: {
                    slidesPerView: 3,
                    spaceBetween: 40
                }
            }
        })


    })
    .catch(error => console.error(error));
