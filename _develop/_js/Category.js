class Category {

    categoryMain() {
        const categoryBlock = document.createElement('div');
        categoryBlock.className = 'container__category';
        categoryBlock.innerHTML = `
            <div class="category__main" id="categoryCitizen">
                <div class="category__main_stars">
                    <picture>
                        <img src="assets/games/kraevedia/images/kraevedia_starFill.png" alt="Количество набранных очков">
                    </picture>
                    <div class="category__main_value">
                        <span id="progressCitizenValue"></span> / 24
                    </div>
                </div>
                <div class="category__main_image">
                    <div class="category__main_title">
                        <h3>I<br />Житель</h3>
                    </div>
                </div>
            </div>
            
            <div class="category__main" id="categoryChicherone">
                <div class="category__main_stars">
                    <picture>
                        <img src="assets/games/kraevedia/images/kraevedia_starFill.png" alt="Количество набранных очков">
                    </picture>
                    <div class="category__main_value">
                        <span id="progressChicheroneValue"></span> / 24
                    </div>
                </div>
                <div class="category__main_image">
                    <div class="category__main_title">
                        <h3>II<br />Чичероне</h3>
                    </div>
                </div>
            </div>
            
            <div class="category__main" id="categoryKraeved">
                <div class="category__main_stars">
                    <picture>
                        <img src="assets/games/kraevedia/images/kraevedia_starFill.png" alt="Количество набранных очков">
                    </picture>
                    <div class="category__main_value">
                        <span id="progressKraevedValue"></span> / 24
                    </div>
                </div>
                <div class="category__main_image">
                    <div class="category__main_title">
                        <h3>III<br />Краевед</h3>
                    </div>
                </div>
            </div>
        `;
        container.appendChild(categoryBlock);

        const introBlockBack = document.createElement('div');
        introBlockBack.className = 'wrapper__service';
        wrapper.appendChild(introBlockBack);

        function categoryAnimation() {
            let tl = gsap.timeline();
            const categoryCitizen = document.getElementById('categoryCitizen'),
                categoryChicherone = document.getElementById('categoryChicherone'),
                categoryKraeved = document.getElementById('categoryKraeved'),
                wrapperService = document.querySelector('.wrapper__service')
            ;
            tl
                .from(wrapperService, {
                    autoAlpha: 0,
                    duration: 0.6
                })
                .from([categoryCitizen, categoryChicherone, categoryKraeved], {
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