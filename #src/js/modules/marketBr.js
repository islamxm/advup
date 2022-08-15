import Swiper, { Autoplay } from 'swiper';

export const marketBr = () => {
    const el = document.querySelector('.market-br__body_slider');

    if(el) {
        const slider = new Swiper(el, {
            modules: [Autoplay],
            slidesPerView: 1,
            spaceBetween: 20,
            autoplay: {
                delay: 2000,
            },
            loop: true,
            disableOnInteraction: false,
            speed: 1200,
            breakpoints: {
                768: {
                    slidesPerView: 3,
                    spaceBetween: 25,
                },
                620: {
                    slidesPerView: 2,
                    spaceBetween: 10,
                }
            }
        })
    }
}