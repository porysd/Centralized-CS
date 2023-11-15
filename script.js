

const tabLogos = document.querySelectorAll('.tab-logo');
const tabContents = document.querySelectorAll('.tab-content');

tabLogos.forEach((tabLogo, index) => {
    tabLogo.addEventListener('click', (event) => {
        event.preventDefault(); 
        // Hide all tab contents
        tabContents.forEach(content => content.style.display = 'none');
        
        // Show the selected tab content
        tabContents[index].style.display = 'block';
    });
});


var mySwiper = new Swiper('.sub-tabs', {
    slidesPerView: 'auto',
    loop: true,
    initialSlide: 0, 
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});


var tabButtons = document.querySelectorAll('.swiper-slide');
tabButtons.forEach(function (button, index) {
    button.addEventListener('click', function () {
        mySwiper.slideTo(index);
    });
});


