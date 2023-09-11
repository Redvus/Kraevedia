if (localStorage.getItem('progressFlightQuest_2') === null) {
    localStorage.setItem('progressFlightQuest_2', JSON.stringify(0));
}

function questionFlightCat_2_1() {
    let questPrepareCatLoad = new Question();
    let questArrowBack = new ArrowsAll();
    let answerWrightNum = 2;
    let progressFlightQuest_2_1 = JSON.parse(localStorage.getItem('progressFlightQuest_2_1'));
    let progressFlightQuest_2_2 = JSON.parse(localStorage.getItem('progressFlightQuest_2_2'));
    let progressFlightQuest_2_3 = JSON.parse(localStorage.getItem('progressFlightQuest_2_3'));

    if (localStorage.getItem('progressFlightQuest_2_1') === null) {
        localStorage.setItem('progressFlightQuest_2_1', JSON.stringify(progressFlightQuest_2_1));
    }

    questPrepareCatLoad.questionBlock('Полет', 'Космическое домино.</br>Позывные космических кораблей', 'Какой позывной корабля «Восток-6»?', 'Кедр', 'Орел', 'Чайка');

    let answerVar_2_1_1 = document.getElementById('answerVar_1'),
        answerVar_2_1_2 = document.getElementById('answerVar_2'),
        answerVar_2_1_3 = document.getElementById('answerVar_3'),
        answerVarRight_2_1 = [answerVar_2_1_1, answerVar_2_1_2, answerVar_2_1_3],
        questionStars = document.createElement('ul')
    ;

    questionStars.className = 'wrapper__stars';
    wrapper.appendChild(questionStars);

    if (progressFlightQuest_2_1 === 0 &&
        progressFlightQuest_2_2 === 1 &&
        progressFlightQuest_2_3 === 0) {
        questionStars.innerHTML = `
            <li id="questionStar_2_1"></li>
            <li id="questionStar_2_2" class="fill"></li>
            <li id="questionStar_2_3"></li>
        `;
    } else if (progressFlightQuest_2_1 === 0 &&
        progressFlightQuest_2_2 === 0 &&
        progressFlightQuest_2_3 === 1) {
        questionStars.innerHTML = `
            <li id="questionStar_2_1"></li>
            <li id="questionStar_2_2"></li>
            <li id="questionStar_2_3" class="fill"></li>
        `;
    } else if (progressFlightQuest_2_1 === 0 &&
        progressFlightQuest_2_2 === 1 &&
        progressFlightQuest_2_3 === 1) {
        questionStars.innerHTML = `
            <li id="questionStar_2_1"></li>
            <li id="questionStar_2_2" class="fill"></li>
            <li id="questionStar_2_3" class="fill"></li>
        `;
    } else {
        questionStars.innerHTML = `
            <li id="questionStar_2_1"></li>
            <li id="questionStar_2_2"></li>
            <li id="questionStar_2_3"></li>
        `;
    }

    const questionStar_2_1 = document.getElementById('questionStar_2_1');

    for (let i = 0; i < answerVarRight_2_1.length; i++) {
        if (answerVarRight_2_1[i] === answerVarRight_2_1[answerWrightNum]) {
            answerVarRight_2_1[i].addEventListener('click', () => {
                let progressFlightQuest_2 = JSON.parse(localStorage.getItem('progressFlightQuest_2'));
                let progressFlightQuestSum_2_1 = progressFlightQuest_2_1 + 1;
                let progressFlightQuestSum_2 = progressFlightQuestSum_2_1 + progressFlightQuest_2;

                localStorage.setItem('progressFlightQuest_2_1', JSON.stringify(progressFlightQuestSum_2_1));
                localStorage.setItem('progressFlightQuest_2', JSON.stringify(progressFlightQuestSum_2));
                if (progressFlightQuestSum_2_1 === 1) {
                    questionStar_2_1.className += 'fill';
                }
            });
        }
    }

    questPrepareCatLoad.answerBlock(answerWrightNum, 'Верно!');

    questArrowBack.arrowNext();
    const arrowNextClick = document.getElementById('answerNext'),
        questValue_2_2 = JSON.parse(localStorage.getItem('progressFlightQuest_2_2')),
        questValue_2_3 = JSON.parse(localStorage.getItem('progressFlightQuest_2_3'))
    ;
    arrowNextClick.addEventListener('click', () => {
        gsap.to(containerWrapperCategory, {
            autoAlpha: 0,
            onComplete: () => {
                if (progressFlightQuest_2_1 === 0 &&
                    progressFlightQuest_2_2 === 0 &&
                    progressFlightQuest_2_3 === 0) {
                    wrapper.removeChild(questionStars);
                } else if (progressFlightQuest_2_1 === 0 &&
                    progressFlightQuest_2_2 === 1 &&
                    progressFlightQuest_2_3 === 0) {
                    wrapper.removeChild(questionStars);
                } else if (progressFlightQuest_2_1 === 0 &&
                    progressFlightQuest_2_2 === 0 &&
                    progressFlightQuest_2_3 === 1) {
                    wrapper.removeChild(questionStars);
                }
                container.removeChild(arrowBackClick);
                container.removeChild(arrowNextClick);
                container.removeChild(containerWrapperCategory);
                wrapper.className = 'wrapper';
                if (questValue_2_2 === 1 && questValue_2_3 === 1) {
                    flightCategory();
                    lockSubQuestFlight();
                } else if (questValue_2_2 === 0) {
                    questionFlightCat_2_2();
                } else if (questValue_2_2 === 1 && questValue_2_3 === 0) {
                    questionFlightCat_2_3();
                }
            }
        });
        if (progressFlightQuest_2_1 === 0 &&
            progressFlightQuest_2_2 === 1 &&
            progressFlightQuest_2_3 === 1) {
            gsap.to(questionStars, {
                autoAlpha: 0,
                delay: '-0.3',
                onComplete: () => {
                    wrapper.removeChild(questionStars);
                }
            });
        }
    });

    questArrowBack.arrowBack();
    const arrowBackClick = document.getElementById('arrowBack'),
        containerWrapperCategory = document.querySelector('.container__wrapper_category');
    arrowBackClick.addEventListener('click', () => {
        gsap.to(containerWrapperCategory, {
            autoAlpha: 0,
            onComplete: () => {
                container.removeChild(arrowBackClick);
                container.removeChild(arrowNextClick);
                container.removeChild(containerWrapperCategory);
                wrapper.className = 'wrapper';
                flightCategory();
                lockSubQuestFlight();
            }
        });
        gsap.to(questionStars, {
            autoAlpha: 0,
            delay: '-0.3',
            onComplete: () => {
                wrapper.removeChild(questionStars);
            }
        });
    });
}

function questionFlightCat_2_2() {
    let questPrepareCatLoad = new Question();
    let questArrowBack = new ArrowsAll();
    let answerWrightNum = 1;
    let progressFlightQuest_2_1 = JSON.parse(localStorage.getItem('progressFlightQuest_2_1'));
    let progressFlightQuest_2_2 = JSON.parse(localStorage.getItem('progressFlightQuest_2_2'));
    let progressFlightQuest_2_3 = JSON.parse(localStorage.getItem('progressFlightQuest_2_3'));

    if (localStorage.getItem('progressFlightQuest_2_2') === null) {
        localStorage.setItem('progressFlightQuest_2_2', JSON.stringify(progressFlightQuest_2_2));
    }

    questPrepareCatLoad.questionBlock('Полет', 'Космическое домино.</br>Позывные космических кораблей', 'Какой позывной корабля «Восход-1»?', 'Гранат', 'Рубин', 'Сапфир');

    let answerVar_2_2_1 = document.getElementById('answerVar_1'),
        answerVar_2_2_2 = document.getElementById('answerVar_2'),
        answerVar_2_2_3 = document.getElementById('answerVar_3'),
        answerVarRight_2_2 = [answerVar_2_2_1, answerVar_2_2_2, answerVar_2_2_3],
        questionStars = document.createElement('ul')
    ;

    questionStars.className = 'wrapper__stars';
    wrapper.appendChild(questionStars);

    if (progressFlightQuest_2_1 === 1 &&
        progressFlightQuest_2_2 === 0 &&
        progressFlightQuest_2_3 === 0) {
        questionStars.innerHTML = `
            <li id="questionStar_2_1" class="fill"></li>
            <li id="questionStar_2_2"></li>
            <li id="questionStar_2_3"></li>
        `;
    } else if (progressFlightQuest_2_1 === 0 &&
        progressFlightQuest_2_2 === 0 &&
        progressFlightQuest_2_3 === 1) {
        questionStars.innerHTML = `
            <li id="questionStar_2_1"></li>
            <li id="questionStar_2_2"></li>
            <li id="questionStar_2_3" class="fill"></li>
        `;
    } else if (progressFlightQuest_2_1 === 1 &&
        progressFlightQuest_2_2 === 0 &&
        progressFlightQuest_2_3 === 1) {
        questionStars.innerHTML = `
            <li id="questionStar_2_1" class="fill"></li>
            <li id="questionStar_2_2"></li>
            <li id="questionStar_2_3" class="fill"></li>
        `;
    } else {
        questionStars.innerHTML = `
            <li id="questionStar_2_1"></li>
            <li id="questionStar_2_2"></li>
            <li id="questionStar_2_3"></li>
        `;
    }

    const questionStar_2_2 = document.getElementById('questionStar_2_2');

    for (let i = 0; i < answerVarRight_2_2.length; i++) {
        if (answerVarRight_2_2[i] === answerVarRight_2_2[answerWrightNum]) {
            answerVarRight_2_2[i].addEventListener('click', () => {
                let progressFlightQuest_2 = JSON.parse(localStorage.getItem('progressFlightQuest_2'));
                let progressFlightQuestSum_2_2 = progressFlightQuest_2_2 + 1;
                let progressFlightQuestSum_2 = progressFlightQuestSum_2_2 + progressFlightQuest_2;

                localStorage.setItem('progressFlightQuest_2_2', JSON.stringify(progressFlightQuestSum_2_2));
                localStorage.setItem('progressFlightQuest_2', JSON.stringify(progressFlightQuestSum_2));
                if (progressFlightQuestSum_2_2 === 1) {
                    questionStar_2_2.className += 'fill';
                }
            });
        }
    }

    questPrepareCatLoad.answerBlock(answerWrightNum, 'Снова верно!');

    questArrowBack.arrowNext();
    const arrowNextClick = document.getElementById('answerNext'),
        questValue_2_3 = JSON.parse(localStorage.getItem('progressFlightQuest_2_3'))
    ;
    arrowNextClick.addEventListener('click', () => {
        gsap.to(containerWrapperCategory, {
            autoAlpha: 0,
            onComplete: () => {
                if (progressFlightQuest_2_1 === 0 &&
                    progressFlightQuest_2_2 === 0 &&
                    progressFlightQuest_2_3 === 0) {
                    wrapper.removeChild(questionStars);
                } else if (progressFlightQuest_2_1 === 1 &&
                    progressFlightQuest_2_2 === 0 &&
                    progressFlightQuest_2_3 === 0) {
                    wrapper.removeChild(questionStars);
                } else if (progressFlightQuest_2_1 === 0 &&
                    progressFlightQuest_2_2 === 0 &&
                    progressFlightQuest_2_3 === 1) {
                    wrapper.removeChild(questionStars);
                }
                container.removeChild(arrowBackClick);
                container.removeChild(arrowNextClick);
                container.removeChild(containerWrapperCategory);
                wrapper.className = 'wrapper';
                if (questValue_2_3 === 1) {
                    flightCategory();
                    lockSubQuestFlight();
                } else if (questValue_2_3 === 0) {
                    questionFlightCat_2_3();
                }
            }
        });
        if (progressFlightQuest_2_1 === 1 &&
            progressFlightQuest_2_2 === 0 &&
            progressFlightQuest_2_3 === 1) {
            gsap.to(questionStars, {
                autoAlpha: 0,
                delay: '-0.3',
                onComplete: () => {
                    wrapper.removeChild(questionStars);
                }
            });
        }
    });

    questArrowBack.arrowBack();
    const arrowBackClick = document.getElementById('arrowBack'),
        containerWrapperCategory = document.querySelector('.container__wrapper_category');
    arrowBackClick.addEventListener('click', () => {
        gsap.to(containerWrapperCategory, {
            autoAlpha: 0,
            onComplete: () => {
                container.removeChild(arrowBackClick);
                container.removeChild(arrowNextClick);
                container.removeChild(containerWrapperCategory);
                wrapper.className = 'wrapper';
                flightCategory();
                lockSubQuestFlight();
            }
        });
        gsap.to(questionStars, {
            autoAlpha: 0,
            delay: '-0.3',
            onComplete: () => {
                wrapper.removeChild(questionStars);
            }
        });
    });
}

function questionFlightCat_2_3() {
    let questPrepareCatLoad = new Question();
    let questArrowBack = new ArrowsAll();
    let answerWrightNum = 1;
    let progressFlightQuest_2_1 = JSON.parse(localStorage.getItem('progressFlightQuest_2_1'));
    let progressFlightQuest_2_2 = JSON.parse(localStorage.getItem('progressFlightQuest_2_2'));
    let progressFlightQuest_2_3 = JSON.parse(localStorage.getItem('progressFlightQuest_2_3'));

    if (localStorage.getItem('progressFlightQuest_2_3') === null) {
        localStorage.setItem('progressFlightQuest_2_3', JSON.stringify(progressFlightQuest_2_3));
    }

    questPrepareCatLoad.questionBlock('Полет', 'Космическое домино.</br>Позывные космических кораблей', 'Какой позывной корабля «Восход-2»?', 'Яшма', 'Алмаз', 'Коралл');

    let answerVar_2_3_1 = document.getElementById('answerVar_1'),
        answerVar_2_3_2 = document.getElementById('answerVar_2'),
        answerVar_2_3_3 = document.getElementById('answerVar_3'),
        answerVarRight_2_3 = [answerVar_2_3_1, answerVar_2_3_2, answerVar_2_3_3],
        questionStars = document.createElement('ul')
    ;

    questionStars.className = 'wrapper__stars';
    wrapper.appendChild(questionStars);

    if (progressFlightQuest_2_1 === 1 &&
        progressFlightQuest_2_2 === 1 &&
        progressFlightQuest_2_3 === 0) {
        questionStars.innerHTML = `
            <li id="questionStar_2_1" class="fill"></li>
            <li id="questionStar_2_2" class="fill"></li>
            <li id="questionStar_2_3"></li>
        `;
    } else if (progressFlightQuest_2_1 === 1 &&
        progressFlightQuest_2_2 === 0 &&
        progressFlightQuest_2_3 === 0) {
        questionStars.innerHTML = `
            <li id="questionStar_2_1" class="fill"></li>
            <li id="questionStar_2_2"></li>
            <li id="questionStar_2_3"></li>
        `;
    } else if (progressFlightQuest_2_1 === 0 &&
        progressFlightQuest_2_2 === 1 &&
        progressFlightQuest_2_3 === 0) {
        questionStars.innerHTML = `
            <li id="questionStar_2_1"></li>
            <li id="questionStar_2_2" class="fill"></li>
            <li id="questionStar_2_3"></li>
        `;
    } else {
        questionStars.innerHTML = `
            <li id="questionStar_2_1"></li>
            <li id="questionStar_2_2"></li>
            <li id="questionStar_2_3"></li>
        `;
    }

    const questionStar_2_3 = document.getElementById('questionStar_2_3');

    for (let i = 0; i < answerVarRight_2_3.length; i++) {
        if (answerVarRight_2_3[i] === answerVarRight_2_3[answerWrightNum]) {
            answerVarRight_2_3[i].addEventListener('click', () => {
                let progressFlightQuest_2 = JSON.parse(localStorage.getItem('progressFlightQuest_2'));
                let progressFlightQuestSum_2_3 = progressFlightQuest_2_3 + 1;
                let progressFlightQuestSum_2 = progressFlightQuestSum_2_3 + progressFlightQuest_2;

                localStorage.setItem('progressFlightQuest_2_3', JSON.stringify(progressFlightQuestSum_2_3));
                localStorage.setItem('progressFlightQuest_2', JSON.stringify(progressFlightQuestSum_2));
                if (progressFlightQuestSum_2_3 === 1) {
                    questionStar_2_3.className += 'fill';
                }
            });
        }
    }

    questPrepareCatLoad.answerBlock(answerWrightNum, 'И снова в точку!');

    questArrowBack.arrowNext();
    const arrowNextClick = document.getElementById('answerNext');
    arrowNextClick.addEventListener('click', () => {
        gsap.to(containerWrapperCategory, {
            autoAlpha: 0,
            onComplete: () => {
                container.removeChild(arrowBackClick);
                container.removeChild(arrowNextClick);
                container.removeChild(containerWrapperCategory);
                wrapper.className = 'wrapper';
                flightCategory();
                lockSubQuestFlight();
            }
        });
        gsap.to(questionStars, {
            autoAlpha: 0,
            delay: '-0.3',
            onComplete: () => {
                wrapper.removeChild(questionStars);
            }
        });
    });

    questArrowBack.arrowBack();
    const arrowBackClick = document.getElementById('arrowBack'),
        containerWrapperCategory = document.querySelector('.container__wrapper_category');
    arrowBackClick.addEventListener('click', () => {
        gsap.to(containerWrapperCategory, {
            autoAlpha: 0,
            onComplete: () => {
                container.removeChild(arrowBackClick);
                container.removeChild(arrowNextClick);
                container.removeChild(containerWrapperCategory);
                wrapper.className = 'wrapper';
                flightCategory();
                lockSubQuestFlight();
            }
        });
        gsap.to(questionStars, {
            autoAlpha: 0,
            delay: '-0.3',
            onComplete: () => {
                wrapper.removeChild(questionStars);
            }
        });
    });
}