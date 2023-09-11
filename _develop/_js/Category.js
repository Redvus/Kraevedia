class Category {

    categoryMain() {
        // wrapper.className += ' wrapper__game';
        const wrapperGame = document.querySelector('.wrapper__game')
        const categoryBlock = document.createElement('div');
        categoryBlock.className = 'container__category';
        categoryBlock.innerHTML = `
            <div class="category__main" id="categoryChoice">
                <div class="category__main_stars">
                    <picture>
                        <img src="assets/games/cosmicpuzzles/images/cp_stars_fill.png" alt="Количество набранных очков">
                    </picture>
                    <div class="category__main_value">
                        <span id="progressChoiceValue"></span> / 24
                    </div>
                </div>
                <div class="category__main_image category__main_image--choice"></div>
                <div class="category__main_title">
                    <h3>Отбор</h3>
                </div>
            </div>
            
            <div class="category__main" id="categoryPrepare">
                <div class="category__main_stars">
                    <picture>
                        <img src="assets/games/cosmicpuzzles/images/cp_stars_fill.png" alt="Количество набранных очков">
                    </picture>
                    <div class="category__main_value">
                        <span id="progressPrepareValue"></span> / 24
                    </div>
                </div>
                <div class="category__main_image category__main_image--prepare"></div>
                <div class="category__main_title">
                    <h3>Подготовка</h3>
                </div>
            </div>
            
            <div class="category__main" id="categoryFlight">
                <div class="category__main_stars">
                    <picture>
                        <img src="assets/games/cosmicpuzzles/images/cp_stars_fill.png" alt="Количество набранных очков">
                    </picture>
                    <div class="category__main_value">
                        <span id="progressFlightValue"></span> / 24
                    </div>
                </div>
                <div class="category__main_image category__main_image--flight"></div>
                <div class="category__main_title">
                    <h3>Полет</h3>
                </div>
            </div>
        `;
        container.appendChild(categoryBlock);

        const introBlockBack = document.createElement('div');
        introBlockBack.className = 'wrapper__game';
        wrapper.appendChild(introBlockBack);

        function categoryAnimation() {
            let tl = gsap.timeline();
            const categoryChoice = document.getElementById('categoryChoice'),
                categoryPrepare = document.getElementById('categoryPrepare'),
                categoryFlight = document.getElementById('categoryFlight'),
                wrapperGame = document.querySelector('.wrapper__game')
            ;
            tl
                .from(wrapperGame, {
                    autoAlpha: 0,
                    duration: 0.6
                })
                .from([categoryChoice, categoryPrepare, categoryFlight], {
                    autoAlpha: 0,
                    duration: 0.6,
                    delay: '-0.3',
                    y: "-0.5rem",
                    stagger: 0.2
                })
            ;
        }

        categoryAnimation();
    }

    categoryProgress(progressID, progressNameValue) {
        let progressValue = document.getElementById(progressID),
            progressBasic = 0
        ;

        if (localStorage.getItem(progressNameValue) === null) {
            localStorage.setItem(progressNameValue, JSON.stringify(progressBasic));
            progressValue.textContent = JSON.parse(localStorage.getItem(progressNameValue));
        } else {
            progressValue.textContent = JSON.parse(localStorage.getItem(progressNameValue));
        }
    }
}