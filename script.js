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
    })
    .catch(error => console.error(error));
