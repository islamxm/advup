import mixitup from 'mixitup';
import Swiper from 'swiper';


const renderSlider = (sliderEl) => {
    if(sliderEl) {
        const slider = new Swiper(sliderEl, {
            slidesPerView: 1,
            spaceBetween: 70,
        })
    }
}


export const port = () => {
    const el = document.querySelector('.port__body_content_slider_wr');
    const sliderEl = document.querySelector('.port__body_content_slider');
    if(el) {
        const mixer = mixitup(el);
        renderSlider(sliderEl);
        // mixer.on('mixEnd', renderSlider)
        el.addEventListener('mixEnd', () => renderSlider(sliderEl))
    }
}