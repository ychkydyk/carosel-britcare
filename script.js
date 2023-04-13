// Получаем контейнер слайдера
const swiperContainer = document.querySelector('.swiper-container');

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
        swiperContainer.querySelector('.swiper-wrapper').innerHTML = slides.join('');

        // Инициализируем Swiper.js
        new Swiper(swiperContainer, {
            loop: true,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
        });

        // настройки свайпера, не отрабатывают! Проверить с утра!
        const swiper = new Swiper('.swiper', {
            // Default parameters
            slidesPerView: 2,
            spaceBetween: 10,
            // Responsive breakpoints
            breakpoints: {
                // when window width is >= 320px
                320: {
                    slidesPerView: 1.5,
                    spaceBetween: 5
                },
                // when window width is >= 480px
                480: {
                    slidesPerView: 1.5,
                    spaceBetween: 10
                },
                // when window width is >= 640px
                640: {
                    slidesPerView: 2,
                    spaceBetween: 40
                }
            }
        })
    })
    .catch(error => console.error(error));
