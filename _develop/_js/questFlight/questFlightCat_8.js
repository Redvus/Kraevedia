if (localStorage.getItem('progressFlightQuest_8') === null) {
    localStorage.setItem('progressFlightQuest_8', JSON.stringify(0));
}

function questionFlightCat_8_1() {
    let questPrepareCatLoad = new Question();
    let questArrowBack = new ArrowsAll();
    let answerWrightNum = 1;
    let progressFlightQuest_8_1 = JSON.parse(localStorage.getItem('progressFlightQuest_8_1'));
    let progressFlightQuest_8_2 = JSON.parse(localStorage.getItem('progressFlightQuest_8_2'));
    let progressFlightQuest_8_3 = JSON.parse(localStorage.getItem('progressFlightQuest_8_3'));

    if (localStorage.getItem('progressFlightQuest_8_1') === null) {
        localStorage.setItem('progressFlightQuest_8_1', JSON.stringify(progressFlightQuest_8_1));
    }

    questPrepareCatLoad.questionBlock('Полет', 'Первые представления фантастов о космосе', 'Первый «космический» туризм описан на страницах романа', 'Жюль Верн «Путешествие на Луну и обратно»', 'Кларк Артур «Лунная пыль»', 'Станислав Лэм «Астронавты»');

    let answerVar_8_1_1 = document.getElementById('answerVar_1'),
        answerVar_8_1_2 = document.getElementById('answerVar_2'),
        answerVar_8_1_3 = document.getElementById('answerVar_3'),
        answerVarRight_8_1 = [answerVar_8_1_1, answerVar_8_1_2, answerVar_8_1_3],
        questionStars = document.createElement('ul')
    ;

    questionStars.className = 'wrapper__stars';
    wrapper.appendChild(questionStars);

    if (progressFlightQuest_8_1 === 0 &&
        progressFlightQuest_8_2 === 1 &&
        progressFlightQuest_8_3 === 0) {
        questionStars.innerHTML = `
            <li id="questionStar_8_1"></li>
            <li id="questionStar_8_2" class="fill"></li>
            <li id="questionStar_8_3"></li>
        `;
    } else if (progressFlightQuest_8_1 === 0 &&
        progressFlightQuest_8_2 === 0 &&
        progressFlightQuest_8_3 === 1) {
        questionStars.innerHTML = `
            <li id="questionStar_8_1"></li>
            <li id="questionStar_8_2"></li>
            <li id="questionStar_8_3" class="fill"></li>
        `;
    } else if (progressFlightQuest_8_1 === 0 &&
        progressFlightQuest_8_2 === 1 &&
        progressFlightQuest_8_3 === 1) {
        questionStars.innerHTML = `
            <li id="questionStar_8_1"></li>
            <li id="questionStar_8_2" class="fill"></li>
            <li id="questionStar_8_3" class="fill"></li>
        `;
    } else {
        questionStars.innerHTML = `
            <li id="questionStar_8_1"></li>
            <li id="questionStar_8_2"></li>
            <li id="questionStar_8_3"></li>
        `;
    }

    const questionStar_8_1 = document.getElementById('questionStar_8_1');

    for (let i = 0; i < answerVarRight_8_1.length; i++) {
        if (answerVarRight_8_1[i] === answerVarRight_8_1[answerWrightNum]) {
            answerVarRight_8_1[i].addEventListener('click', () => {
                let progressFlightQuest_8 = JSON.parse(localStorage.getItem('progressFlightQuest_8'));
                let progressFlightQuestSum_8_1 = progressFlightQuest_8_1 + 1;
                let progressFlightQuestSum_8 = progressFlightQuestSum_8_1 + progressFlightQuest_8;

                localStorage.setItem('progressFlightQuest_8_1', JSON.stringify(progressFlightQuestSum_8_1));
                localStorage.setItem('progressFlightQuest_8', JSON.stringify(progressFlightQuestSum_8));
                if (progressFlightQuestSum_8_1 === 1) {
                    questionStar_8_1.className += 'fill';
                }
            });
        }
    }

    questPrepareCatLoad.answerBlock(answerWrightNum, 'Именно так!');

    questArrowBack.arrowNext();
    const arrowNextClick = document.getElementById('answerNext'),
        questValue_8_2 = JSON.parse(localStorage.getItem('progressFlightQuest_8_2')),
        questValue_8_3 = JSON.parse(localStorage.getItem('progressFlightQuest_8_3'))
    ;
    arrowNextClick.addEventListener('click', () => {
        gsap.to(containerWrapperCategory, {
            autoAlpha: 0,
            onComplete: () => {
                if (progressFlightQuest_8_1 === 0 &&
                    progressFlightQuest_8_2 === 0 &&
                    progressFlightQuest_8_3 === 0) {
                    wrapper.removeChild(questionStars);
                } else if (progressFlightQuest_8_1 === 0 &&
                    progressFlightQuest_8_2 === 1 &&
                    progressFlightQuest_8_3 === 0) {
                    wrapper.removeChild(questionStars);
                } else if (progressFlightQuest_8_1 === 0 &&
                    progressFlightQuest_8_2 === 0 &&
                    progressFlightQuest_8_3 === 1) {
                    wrapper.removeChild(questionStars);
                }
                container.removeChild(arrowBackClick);
                container.removeChild(arrowNextClick);
                container.removeChild(containerWrapperCategory);
                wrapper.className = 'wrapper';
                if (questValue_8_2 === 1 && questValue_8_3 === 1) {
                    flightCategory();
                    lockSubQuestFlight();
                } else if (questValue_8_2 === 0) {
                    questionFlightCat_8_2();
                } else if (questValue_8_2 === 1 && questValue_8_3 === 0) {
                    questionFlightCat_8_3();
                }
            }
        });
        if (progressFlightQuest_8_1 === 0 &&
            progressFlightQuest_8_2 === 1 &&
            progressFlightQuest_8_3 === 1) {
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

function questionFlightCat_8_2() {
    let questPrepareCatLoad = new Question();
    let questArrowBack = new ArrowsAll();
    let answerWrightNum = 2;
    let progressFlightQuest_8_1 = JSON.parse(localStorage.getItem('progressFlightQuest_8_1'));
    let progressFlightQuest_8_2 = JSON.parse(localStorage.getItem('progressFlightQuest_8_2'));
    let progressFlightQuest_8_3 = JSON.parse(localStorage.getItem('progressFlightQuest_8_3'));

    if (localStorage.getItem('progressFlightQuest_8_2') === null) {
        localStorage.setItem('progressFlightQuest_8_2', JSON.stringify(progressFlightQuest_8_2));
    }

    questPrepareCatLoad.questionBlock('Полет', 'Первые представления фантастов о космосе', 'Первый полет, подготовка космонавтов впервые описаны в романе', 'Дж. Эстор «Путешествие в другие миры»', 'Станислав Лем «Магелланово облако»', 'Брейдбери Р. «Космонавт»');

    let answerVar_8_2_1 = document.getElementById('answerVar_1'),
        answerVar_8_2_2 = document.getElementById('answerVar_2'),
        answerVar_8_2_3 = document.getElementById('answerVar_3'),
        answerVarRight_8_2 = [answerVar_8_2_1, answerVar_8_2_2, answerVar_8_2_3],
        questionStars = document.createElement('ul')
    ;

    questionStars.className = 'wrapper__stars';
    wrapper.appendChild(questionStars);

    if (progressFlightQuest_8_1 === 1 &&
        progressFlightQuest_8_2 === 0 &&
        progressFlightQuest_8_3 === 0) {
        questionStars.innerHTML = `
            <li id="questionStar_8_1" class="fill"></li>
            <li id="questionStar_8_2"></li>
            <li id="questionStar_8_3"></li>
        `;
    } else if (progressFlightQuest_8_1 === 0 &&
        progressFlightQuest_8_2 === 0 &&
        progressFlightQuest_8_3 === 1) {
        questionStars.innerHTML = `
            <li id="questionStar_8_1"></li>
            <li id="questionStar_8_2"></li>
            <li id="questionStar_8_3" class="fill"></li>
        `;
    } else if (progressFlightQuest_8_1 === 1 &&
        progressFlightQuest_8_2 === 0 &&
        progressFlightQuest_8_3 === 1) {
        questionStars.innerHTML = `
            <li id="questionStar_8_1" class="fill"></li>
            <li id="questionStar_8_2"></li>
            <li id="questionStar_8_3" class="fill"></li>
        `;
    } else {
        questionStars.innerHTML = `
            <li id="questionStar_8_1"></li>
            <li id="questionStar_8_2"></li>
            <li id="questionStar_8_3"></li>
        `;
    }

    const questionStar_8_2 = document.getElementById('questionStar_8_2');

    for (let i = 0; i < answerVarRight_8_2.length; i++) {
        if (answerVarRight_8_2[i] === answerVarRight_8_2[answerWrightNum]) {
            answerVarRight_8_2[i].addEventListener('click', () => {
                let progressFlightQuest_8 = JSON.parse(localStorage.getItem('progressFlightQuest_8'));
                let progressFlightQuestSum_8_2 = progressFlightQuest_8_2 + 1;
                let progressFlightQuestSum_8 = progressFlightQuestSum_8_2 + progressFlightQuest_8;

                localStorage.setItem('progressFlightQuest_8_2', JSON.stringify(progressFlightQuestSum_8_2));
                localStorage.setItem('progressFlightQuest_8', JSON.stringify(progressFlightQuestSum_8));
                if (progressFlightQuestSum_8_2 === 1) {
                    questionStar_8_2.className += 'fill';
                }
            });
        }
    }

    questPrepareCatLoad.answerBlock(answerWrightNum, 'Да – верно!');

    questArrowBack.arrowNext();
    const arrowNextClick = document.getElementById('answerNext'),
        questValue_8_3 = JSON.parse(localStorage.getItem('progressFlightQuest_8_3'))
    ;
    arrowNextClick.addEventListener('click', () => {
        gsap.to(containerWrapperCategory, {
            autoAlpha: 0,
            onComplete: () => {
                if (progressFlightQuest_8_1 === 0 &&
                    progressFlightQuest_8_2 === 0 &&
                    progressFlightQuest_8_3 === 0) {
                    wrapper.removeChild(questionStars);
                } else if (progressFlightQuest_8_1 === 1 &&
                    progressFlightQuest_8_2 === 0 &&
                    progressFlightQuest_8_3 === 0) {
                    wrapper.removeChild(questionStars);
                } else if (progressFlightQuest_8_1 === 0 &&
                    progressFlightQuest_8_2 === 0 &&
                    progressFlightQuest_8_3 === 1) {
                    wrapper.removeChild(questionStars);
                }
                container.removeChild(arrowBackClick);
                container.removeChild(arrowNextClick);
                container.removeChild(containerWrapperCategory);
                wrapper.className = 'wrapper';
                if (questValue_8_3 === 1) {
                    flightCategory();
                    lockSubQuestFlight();
                } else if (questValue_8_3 === 0) {
                    questionFlightCat_8_3();
                }
            }
        });
        if (progressFlightQuest_8_1 === 1 &&
            progressFlightQuest_8_2 === 0 &&
            progressFlightQuest_8_3 === 1) {
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

function questionFlightCat_8_3() {
    let questPrepareCatLoad = new Question();
    let questArrowBack = new ArrowsAll();
    let answerWrightNum = 2;
    let progressFlightQuest_8_1 = JSON.parse(localStorage.getItem('progressFlightQuest_8_1'));
    let progressFlightQuest_8_2 = JSON.parse(localStorage.getItem('progressFlightQuest_8_2'));
    let progressFlightQuest_8_3 = JSON.parse(localStorage.getItem('progressFlightQuest_8_3'));

    if (localStorage.getItem('progressFlightQuest_8_3') === null) {
        localStorage.setItem('progressFlightQuest_8_3', JSON.stringify(progressFlightQuest_8_3));
    }

    questPrepareCatLoad.questionBlock('Полет', 'Первые представления фантастов о космосе', 'Этот автор впервые описал «космическую пищу» в своем произведении', 'Жюль Верн «Путешествие на Луну и обратно»', 'Кларк А. «Космическая одиссея 2001»', 'Красногорский Б. и Святский Д. «Острова эфирного океана»');

    let answerVar_8_3_1 = document.getElementById('answerVar_1'),
        answerVar_8_3_2 = document.getElementById('answerVar_2'),
        answerVar_8_3_3 = document.getElementById('answerVar_3'),
        answerVarRight_8_3 = [answerVar_8_3_1, answerVar_8_3_2, answerVar_8_3_3],
        questionStars = document.createElement('ul')
    ;

    questionStars.className = 'wrapper__stars';
    wrapper.appendChild(questionStars);

    if (progressFlightQuest_8_1 === 1 &&
        progressFlightQuest_8_2 === 1 &&
        progressFlightQuest_8_3 === 0) {
        questionStars.innerHTML = `
            <li id="questionStar_8_1" class="fill"></li>
            <li id="questionStar_8_2" class="fill"></li>
            <li id="questionStar_8_3"></li>
        `;
    } else if (progressFlightQuest_8_1 === 1 &&
        progressFlightQuest_8_2 === 0 &&
        progressFlightQuest_8_3 === 0) {
        questionStars.innerHTML = `
            <li id="questionStar_8_1" class="fill"></li>
            <li id="questionStar_8_2"></li>
            <li id="questionStar_8_3"></li>
        `;
    } else if (progressFlightQuest_8_1 === 0 &&
        progressFlightQuest_8_2 === 1 &&
        progressFlightQuest_8_3 === 0) {
        questionStars.innerHTML = `
            <li id="questionStar_8_1"></li>
            <li id="questionStar_8_2" class="fill"></li>
            <li id="questionStar_8_3"></li>
        `;
    } else {
        questionStars.innerHTML = `
            <li id="questionStar_8_1"></li>
            <li id="questionStar_8_2"></li>
            <li id="questionStar_8_3"></li>
        `;
    }

    const questionStar_8_3 = document.getElementById('questionStar_8_3');

    for (let i = 0; i < answerVarRight_8_3.length; i++) {
        if (answerVarRight_8_3[i] === answerVarRight_8_3[answerWrightNum]) {
            answerVarRight_8_3[i].addEventListener('click', () => {
                let progressFlightQuest_8 = JSON.parse(localStorage.getItem('progressFlightQuest_8'));
                let progressFlightQuestSum_8_3 = progressFlightQuest_8_3 + 1;
                let progressFlightQuestSum_8 = progressFlightQuestSum_8_3 + progressFlightQuest_8;

                localStorage.setItem('progressFlightQuest_8_3', JSON.stringify(progressFlightQuestSum_8_3));
                localStorage.setItem('progressFlightQuest_8', JSON.stringify(progressFlightQuestSum_8));
                localStorage.setItem('progressPrepareAll', JSON.stringify(progressFlightQuestSum_8));
                if (progressFlightQuestSum_8_3 === 1) {
                    questionStar_8_3.className += 'fill';
                }
            });
        }
    }

    questPrepareCatLoad.answerBlock(answerWrightNum, 'Правильно!');

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