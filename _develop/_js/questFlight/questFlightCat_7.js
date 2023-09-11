if (localStorage.getItem('progressFlightQuest_7') === null) {
    localStorage.setItem('progressFlightQuest_7', JSON.stringify(0));
}

function questionFlightCat_7_1() {
    let questPrepareCatLoad = new Question();
    let questArrowBack = new ArrowsAll();
    let answerWrightNum = 2;
    let progressFlightQuest_7_1 = JSON.parse(localStorage.getItem('progressFlightQuest_7_1'));
    let progressFlightQuest_7_2 = JSON.parse(localStorage.getItem('progressFlightQuest_7_2'));
    let progressFlightQuest_7_3 = JSON.parse(localStorage.getItem('progressFlightQuest_7_3'));

    if (localStorage.getItem('progressFlightQuest_7_1') === null) {
        localStorage.setItem('progressFlightQuest_7_1', JSON.stringify(progressFlightQuest_7_1));
    }

    questPrepareCatLoad.questionBlock('Полет', 'Фантасты открывают небо', 'Впервые «космический корабль» появился на страницах романа', 'Дж. Эстор «Путешествие в другие миры»', 'Ле Фор Жорж и де Графиньи Анри «Вокруг Солнца»', 'Айзек Азимов в рассказе «В плену у Весты»');

    let answerVar_7_1_1 = document.getElementById('answerVar_1'),
        answerVar_7_1_2 = document.getElementById('answerVar_2'),
        answerVar_7_1_3 = document.getElementById('answerVar_3'),
        answerVarRight_7_1 = [answerVar_7_1_1, answerVar_7_1_2, answerVar_7_1_3],
        questionStars = document.createElement('ul')
    ;

    questionStars.className = 'wrapper__stars';
    wrapper.appendChild(questionStars);

    if (progressFlightQuest_7_1 === 0 &&
        progressFlightQuest_7_2 === 1 &&
        progressFlightQuest_7_3 === 0) {
        questionStars.innerHTML = `
            <li id="questionStar_7_1"></li>
            <li id="questionStar_7_2" class="fill"></li>
            <li id="questionStar_7_3"></li>
        `;
    } else if (progressFlightQuest_7_1 === 0 &&
        progressFlightQuest_7_2 === 0 &&
        progressFlightQuest_7_3 === 1) {
        questionStars.innerHTML = `
            <li id="questionStar_7_1"></li>
            <li id="questionStar_7_2"></li>
            <li id="questionStar_7_3" class="fill"></li>
        `;
    } else if (progressFlightQuest_7_1 === 0 &&
        progressFlightQuest_7_2 === 1 &&
        progressFlightQuest_7_3 === 1) {
        questionStars.innerHTML = `
            <li id="questionStar_7_1"></li>
            <li id="questionStar_7_2" class="fill"></li>
            <li id="questionStar_7_3" class="fill"></li>
        `;
    } else {
        questionStars.innerHTML = `
            <li id="questionStar_7_1"></li>
            <li id="questionStar_7_2"></li>
            <li id="questionStar_7_3"></li>
        `;
    }

    const questionStar_7_1 = document.getElementById('questionStar_7_1');

    for (let i = 0; i < answerVarRight_7_1.length; i++) {
        if (answerVarRight_7_1[i] === answerVarRight_7_1[answerWrightNum]) {
            answerVarRight_7_1[i].addEventListener('click', () => {
                let progressFlightQuest_7 = JSON.parse(localStorage.getItem('progressFlightQuest_7'));
                let progressFlightQuestSum_7_1 = progressFlightQuest_7_1 + 1;
                let progressFlightQuestSum_7 = progressFlightQuestSum_7_1 + progressFlightQuest_7;

                localStorage.setItem('progressFlightQuest_7_1', JSON.stringify(progressFlightQuestSum_7_1));
                localStorage.setItem('progressFlightQuest_7', JSON.stringify(progressFlightQuestSum_7));
                if (progressFlightQuestSum_7_1 === 1) {
                    questionStar_7_1.className += 'fill';
                }
            });
        }
    }

    questPrepareCatLoad.answerBlock(answerWrightNum, 'Точно так!');

    questArrowBack.arrowNext();
    const arrowNextClick = document.getElementById('answerNext'),
        questValue_7_2 = JSON.parse(localStorage.getItem('progressFlightQuest_7_2')),
        questValue_7_3 = JSON.parse(localStorage.getItem('progressFlightQuest_7_3'))
    ;
    arrowNextClick.addEventListener('click', () => {
        gsap.to(containerWrapperCategory, {
            autoAlpha: 0,
            onComplete: () => {
                if (progressFlightQuest_7_1 === 0 &&
                    progressFlightQuest_7_2 === 0 &&
                    progressFlightQuest_7_3 === 0) {
                    wrapper.removeChild(questionStars);
                } else if (progressFlightQuest_7_1 === 0 &&
                    progressFlightQuest_7_2 === 1 &&
                    progressFlightQuest_7_3 === 0) {
                    wrapper.removeChild(questionStars);
                } else if (progressFlightQuest_7_1 === 0 &&
                    progressFlightQuest_7_2 === 0 &&
                    progressFlightQuest_7_3 === 1) {
                    wrapper.removeChild(questionStars);
                }
                container.removeChild(arrowBackClick);
                container.removeChild(arrowNextClick);
                container.removeChild(containerWrapperCategory);
                wrapper.className = 'wrapper';
                if (questValue_7_2 === 1 && questValue_7_3 === 1) {
                    flightCategory();
                    lockSubQuestFlight();
                } else if (questValue_7_2 === 0) {
                    questionFlightCat_7_2();
                } else if (questValue_7_2 === 1 && questValue_7_3 === 0) {
                    questionFlightCat_7_3();
                }
            }
        });
        if (progressFlightQuest_7_1 === 0 &&
            progressFlightQuest_7_2 === 1 &&
            progressFlightQuest_7_3 === 1) {
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

function questionFlightCat_7_2() {
    let questPrepareCatLoad = new Question();
    let questArrowBack = new ArrowsAll();
    let answerWrightNum = 2;
    let progressFlightQuest_7_1 = JSON.parse(localStorage.getItem('progressFlightQuest_7_1'));
    let progressFlightQuest_7_2 = JSON.parse(localStorage.getItem('progressFlightQuest_7_2'));
    let progressFlightQuest_7_3 = JSON.parse(localStorage.getItem('progressFlightQuest_7_3'));

    if (localStorage.getItem('progressFlightQuest_7_2') === null) {
        localStorage.setItem('progressFlightQuest_7_2', JSON.stringify(progressFlightQuest_7_2));
    }

    questPrepareCatLoad.questionBlock('Полет', 'Фантасты открывают небо', 'Впервые о космических роботах или роботах, помогающих в подготовке к полетам, заговорил на страницах своих произведений', 'Анри де Парвиль «Житель с планеты Марс»', 'Отто Гайль «Выстрел во Вселенную»', 'Айзек Азимов «Я, робот»');

    let answerVar_7_2_1 = document.getElementById('answerVar_1'),
        answerVar_7_2_2 = document.getElementById('answerVar_2'),
        answerVar_7_2_3 = document.getElementById('answerVar_3'),
        answerVarRight_7_2 = [answerVar_7_2_1, answerVar_7_2_2, answerVar_7_2_3],
        questionStars = document.createElement('ul')
    ;

    questionStars.className = 'wrapper__stars';
    wrapper.appendChild(questionStars);

    if (progressFlightQuest_7_1 === 1 &&
        progressFlightQuest_7_2 === 0 &&
        progressFlightQuest_7_3 === 0) {
        questionStars.innerHTML = `
            <li id="questionStar_7_1" class="fill"></li>
            <li id="questionStar_7_2"></li>
            <li id="questionStar_7_3"></li>
        `;
    } else if (progressFlightQuest_7_1 === 0 &&
        progressFlightQuest_7_2 === 0 &&
        progressFlightQuest_7_3 === 1) {
        questionStars.innerHTML = `
            <li id="questionStar_7_1"></li>
            <li id="questionStar_7_2"></li>
            <li id="questionStar_7_3" class="fill"></li>
        `;
    } else if (progressFlightQuest_7_1 === 1 &&
        progressFlightQuest_7_2 === 0 &&
        progressFlightQuest_7_3 === 1) {
        questionStars.innerHTML = `
            <li id="questionStar_7_1" class="fill"></li>
            <li id="questionStar_7_2"></li>
            <li id="questionStar_7_3" class="fill"></li>
        `;
    } else {
        questionStars.innerHTML = `
            <li id="questionStar_7_1"></li>
            <li id="questionStar_7_2"></li>
            <li id="questionStar_7_3"></li>
        `;
    }

    const questionStar_7_2 = document.getElementById('questionStar_7_2');

    for (let i = 0; i < answerVarRight_7_2.length; i++) {
        if (answerVarRight_7_2[i] === answerVarRight_7_2[answerWrightNum]) {
            answerVarRight_7_2[i].addEventListener('click', () => {
                let progressFlightQuest_7 = JSON.parse(localStorage.getItem('progressFlightQuest_7'));
                let progressFlightQuestSum_7_2 = progressFlightQuest_7_2 + 1;
                let progressFlightQuestSum_7 = progressFlightQuestSum_7_2 + progressFlightQuest_7;

                localStorage.setItem('progressFlightQuest_7_2', JSON.stringify(progressFlightQuestSum_7_2));
                localStorage.setItem('progressFlightQuest_7', JSON.stringify(progressFlightQuestSum_7));
                if (progressFlightQuestSum_7_2 === 1) {
                    questionStar_7_2.className += 'fill';
                }
            });
        }
    }

    questPrepareCatLoad.answerBlock(answerWrightNum, 'Да – верно!');

    questArrowBack.arrowNext();
    const arrowNextClick = document.getElementById('answerNext'),
        questValue_7_3 = JSON.parse(localStorage.getItem('progressFlightQuest_7_3'))
    ;
    arrowNextClick.addEventListener('click', () => {
        gsap.to(containerWrapperCategory, {
            autoAlpha: 0,
            onComplete: () => {
                if (progressFlightQuest_7_1 === 0 &&
                    progressFlightQuest_7_2 === 0 &&
                    progressFlightQuest_7_3 === 0) {
                    wrapper.removeChild(questionStars);
                } else if (progressFlightQuest_7_1 === 1 &&
                    progressFlightQuest_7_2 === 0 &&
                    progressFlightQuest_7_3 === 0) {
                    wrapper.removeChild(questionStars);
                } else if (progressFlightQuest_7_1 === 0 &&
                    progressFlightQuest_7_2 === 0 &&
                    progressFlightQuest_7_3 === 1) {
                    wrapper.removeChild(questionStars);
                }
                container.removeChild(arrowBackClick);
                container.removeChild(arrowNextClick);
                container.removeChild(containerWrapperCategory);
                wrapper.className = 'wrapper';
                if (questValue_7_3 === 1) {
                    flightCategory();
                    lockSubQuestFlight();
                } else if (questValue_7_3 === 0) {
                    questionFlightCat_7_3();
                }
            }
        });
        if (progressFlightQuest_7_1 === 1 &&
            progressFlightQuest_7_2 === 0 &&
            progressFlightQuest_7_3 === 1) {
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

function questionFlightCat_7_3() {
    let questPrepareCatLoad = new Question();
    let questArrowBack = new ArrowsAll();
    let answerWrightNum = 1;
    let progressFlightQuest_7_1 = JSON.parse(localStorage.getItem('progressFlightQuest_7_1'));
    let progressFlightQuest_7_2 = JSON.parse(localStorage.getItem('progressFlightQuest_7_2'));
    let progressFlightQuest_7_3 = JSON.parse(localStorage.getItem('progressFlightQuest_7_3'));

    if (localStorage.getItem('progressFlightQuest_7_3') === null) {
        localStorage.setItem('progressFlightQuest_7_3', JSON.stringify(progressFlightQuest_7_3));
    }

    questPrepareCatLoad.questionBlock('Полет', 'Фантасты открывают небо', 'Космическая медицина открылась читателям на страницах романа', 'Дж. Эстор «Путешествие в другие миры»', 'Олдос Хаксли «Дивный новый мир»', 'Артур Кларк «Фонтаны рая»');

    let answerVar_7_3_1 = document.getElementById('answerVar_1'),
        answerVar_7_3_2 = document.getElementById('answerVar_2'),
        answerVar_7_3_3 = document.getElementById('answerVar_3'),
        answerVarRight_7_3 = [answerVar_7_3_1, answerVar_7_3_2, answerVar_7_3_3],
        questionStars = document.createElement('ul')
    ;

    questionStars.className = 'wrapper__stars';
    wrapper.appendChild(questionStars);

    if (progressFlightQuest_7_1 === 1 &&
        progressFlightQuest_7_2 === 1 &&
        progressFlightQuest_7_3 === 0) {
        questionStars.innerHTML = `
            <li id="questionStar_7_1" class="fill"></li>
            <li id="questionStar_7_2" class="fill"></li>
            <li id="questionStar_7_3"></li>
        `;
    } else if (progressFlightQuest_7_1 === 1 &&
        progressFlightQuest_7_2 === 0 &&
        progressFlightQuest_7_3 === 0) {
        questionStars.innerHTML = `
            <li id="questionStar_7_1" class="fill"></li>
            <li id="questionStar_7_2"></li>
            <li id="questionStar_7_3"></li>
        `;
    } else if (progressFlightQuest_7_1 === 0 &&
        progressFlightQuest_7_2 === 1 &&
        progressFlightQuest_7_3 === 0) {
        questionStars.innerHTML = `
            <li id="questionStar_7_1"></li>
            <li id="questionStar_7_2" class="fill"></li>
            <li id="questionStar_7_3"></li>
        `;
    } else {
        questionStars.innerHTML = `
            <li id="questionStar_7_1"></li>
            <li id="questionStar_7_2"></li>
            <li id="questionStar_7_3"></li>
        `;
    }

    const questionStar_7_3 = document.getElementById('questionStar_7_3');

    for (let i = 0; i < answerVarRight_7_3.length; i++) {
        if (answerVarRight_7_3[i] === answerVarRight_7_3[answerWrightNum]) {
            answerVarRight_7_3[i].addEventListener('click', () => {
                let progressFlightQuest_7 = JSON.parse(localStorage.getItem('progressFlightQuest_7'));
                let progressFlightQuestSum_7_3 = progressFlightQuest_7_3 + 1;
                let progressFlightQuestSum_7 = progressFlightQuestSum_7_3 + progressFlightQuest_7;

                localStorage.setItem('progressFlightQuest_7_3', JSON.stringify(progressFlightQuestSum_7_3));
                localStorage.setItem('progressFlightQuest_7', JSON.stringify(progressFlightQuestSum_7));
                localStorage.setItem('progressPrepareAll', JSON.stringify(progressFlightQuestSum_7));
                if (progressFlightQuestSum_7_3 === 1) {
                    questionStar_7_3.className += 'fill';
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