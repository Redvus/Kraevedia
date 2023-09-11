class Intro {

    introStart() {
        const introBlockTop = document.createElement('div');
        introBlockTop.className = 'wrapper__top';
        introBlockTop.innerHTML = `
            <picture id="introTitle" class="wrapper__top_title">
                <img src="assets/games/kraevedia/images/kraevedia_title.png" alt="Название игры. Краеведия">
            </picture>
        `;
        wrapper.removeChild(container);
        wrapper.appendChild(introBlockTop);

        const introBlockBack = document.createElement('div');
        introBlockBack.className = 'wrapper__intro';
        wrapper.appendChild(introBlockBack);

        // Кнопки
        const introBlockButtons = document.createElement('div');
        introBlockButtons.className = 'wrapper__bottom';
        introBlockButtons.innerHTML = `
            <ul class="wrapper__bottom_menu">
                <li><a href="javascript:void(0);" id="clickAboutLibrary">О библиотеке</a></li>
                <li><a href="javascript:void(0);" id="clickAboutAuthors">Авторы</a></li>
                <li><a href="javascript:void(0);" id="clickLoadGame">Начать игру</a></li>
            </ul>
        `;
        wrapper.appendChild(introBlockButtons);

        const wrapperTop = document.querySelector('.wrapper__top'),
            wrapperTitle = document.querySelector('.wrapper__title'),
            wrapperBottom = document.querySelector('.wrapper__bottom'),
            wrapperBack = document.querySelector('.wrapper__intro')
        ;

        function introAnim() {
            let tl = gsap.timeline();
            tl
                .to(wrapperBack, {
                    duration: 0.6,
                    autoAlpha: 1
                })
                .to(wrapperTop, {
                    duration: 0.4,
                    autoAlpha: 1
                })
                .to(wrapperBottom, {
                    duration: 0.4,
                    delay: '-0.4',
                    autoAlpha: 1
                })
            ;
        }
        introAnim();
    }
}