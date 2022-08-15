export const mobmenu = () => {
    const menu = document.querySelector('.mobmenu');
    const btn = document.querySelector('.header__burger');

    if(menu && btn) {
        btn.addEventListener('click', (e) => {
            btn.classList.toggle('active');
            menu.classList.toggle('active');
        })
    }

    window.addEventListener('resize', () => {
        if(window.innerWidth > 768 && btn && menu) {
            btn.classList.remove('active');
            menu.classList.remove('active');
        }
    })
}