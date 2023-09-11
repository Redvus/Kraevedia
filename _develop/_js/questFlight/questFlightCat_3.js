if (localStorage.getItem('progressFlightQuest_3') === null) {
    localStorage.setItem('progressFlightQuest_3', JSON.stringify(0));
}

function questionFlightCat_3_1() {
    let questPrepareCatLoad = new Question();
    let questArrowBack = new ArrowsAll();
    let answerWrightNum = 1;
    let progressFlightQuest_3_1 = JSON.parse(localStorage.getItem('progressFlightQuest_3_1'));
    let progressFlightQuest_3_2 = JSON.parse(localStorage.getItem('progressFlightQuest_3_2'));
    let progressFlightQuest_3_3 = JSON.parse(localStorage.getItem('progressFlightQuest_3_3'));

    if (localStorage.getItem('progressFlightQuest_3_1') === null) {
        localStorage.setItem('progressFlightQuest_3_1', JSON.stringify(progressFlightQuest_3_1));
    }

    questPrepareCatLoad.questionBlock('Полет', 'Пальцем в небо', 'Какое из утверждений правда?', 'Власти Объединённых Арабских Эмиратов запрещают мусульманам осваивать Марс', 'Упаковка хлеба, употребляемого в космосе, рассчитана на один укус', 'Современный космический скафандр в случае повреждения способен сам восстанавливать свою целостность');

    let answerVar_3_1_1 = document.getElementById('answerVar_1'),
        answerVar_3_1_2 = document.getElementById('answerVar_2'),
        answerVar_3_1_3 = document.getElementById('answerVar_3'),
        answerVarRight_3_1 = [answerVar_3_1_1, answerVar_3_1_2, answerVar_3_1_3],
        questionStars = document.createElement('ul')
    ;

    questionStars.className = 'wrapper__stars';
    wrapper.appendChild(questionStars);

    if (progressFlightQuest_3_1 === 0 &&
        progressFlightQuest_3_2 === 1 &&
        progressFlightQuest_3_3 === 0) {
        questionStars.innerHTML = `
            <li id="questionStar_3_1"></li>
            <li id="questionStar_3_2" class="fill"></li>
            <li id="questionStar_3_3"></li>
        `;
    } else if (progressFlightQuest_3_1 === 0 &&
        progressFlightQuest_3_2 === 0 &&
        progressFlightQuest_3_3 === 1) {
        questionStars.innerHTML = `
            <li id="questionStar_3_1"></li>
            <li id="questionStar_3_2"></li>
            <li id="questionStar_3_3" class="fill"></li>
        `;
    } else if (progressFlightQuest_3_1 === 0 &&
        progressFlightQuest_3_2 === 1 &&
        progressFlightQuest_3_3 === 1) {
        questionStars.innerHTML = `
            <li id="questionStar_3_1"></li>
            <li id="questionStar_3_2" class="fill"></li>
            <li id="questionStar_3_3" class="fill"></li>
        `;
    } else {
        questionStars.innerHTML = `
            <li id="questionStar_3_1"></li>
            <li id="questionStar_3_2"></li>
            <li id="questionStar_3_3"></li>
        `;
    }

    const questionStar_3_1 = document.getElementById('questionStar_3_1');

    for (let i = 0; i < answerVarRight_3_1.length; i++) {
        if (answerVarRight_3_1[i] === answerVarRight_3_1[answerWrightNum]) {
            answerVarRight_3_1[i].addEventListener('click', () => {
                let progressFlightQuest_3 = JSON.parse(localStorage.getItem('progressFlightQuest_3'));
                let progressFlightQuestSum_3_1 = progressFlightQuest_3_1 + 1;
                let progressFlightQuestSum_3 = progressFlightQuestSum_3_1 + progressFlightQuest_3;

                localStorage.setItem('progressFlightQuest_3_1', JSON.stringify(progressFlightQuestSum_3_1));
                localStorage.setItem('progressFlightQuest_3', JSON.stringify(progressFlightQuestSum_3));
                if (progressFlightQuestSum_3_1 === 1) {
                    questionStar_3_1.className += 'fill';
                }
            });
        }
    }

    questPrepareCatLoad.answerBlock(answerWrightNum, 'Угадал!');

    questArrowBack.arrowNext();
    const arrowNextClick = document.getElementById('answerNext'),
        questValue_3_2 = JSON.parse(localStorage.getItem('progressFlightQuest_3_2')),
        questValue_3_3 = JSON.parse(localStorage.getItem('progressFlightQuest_3_3'))
    ;
    arrowNextClick.addEventListener('click', () => {
        gsap.to(containerWrapperCategory, {
            autoAlpha: 0,
            onComplete: () => {
                if (progressFlightQuest_3_1 === 0 &&
                    progressFlightQuest_3_2 === 0 &&
                    progressFlightQuest_3_3 === 0) {
                    wrapper.removeChild(questionStars);
                } else if (progressFlightQuest_3_1 === 0 &&
                    progressFlightQuest_3_2 === 1 &&
                    progressFlightQuest_3_3 === 0) {
                    wrapper.removeChild(questionStars);
                } else if (progressFlightQuest_3_1 === 0 &&
                    progressFlightQuest_3_2 === 0 &&
                    progressFlightQuest_3_3 === 1) {
                    wrapper.removeChild(questionStars);
                }
                container.removeChild(arrowBackClick);
                container.removeChild(arrowNextClick);
                container.removeChild(containerWrapperCategory);
                wrapper.className = 'wrapper';
                if (questValue_3_2 === 1 && questValue_3_3 === 1) {
                    flightCategory();
                    lockSubQuestFlight();
                } else if (questValue_3_2 === 0) {
                    questionFlightCat_3_2();
                } else if (questValue_3_2 === 1 && questValue_3_3 === 0) {
                    questionFlightCat_3_3();
                }
            }
        });
        if (progressFlightQuest_3_1 === 0 &&
            progressFlightQuest_3_2 === 1 &&
            progressFlightQuest_3_3 === 1) {
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

function questionFlightCat_3_2() {
    let questPrepareCatLoad = new Question();
    let questArrowBack = new ArrowsAll();
    let answerWrightNum = 2;
    let progressFlightQuest_3_1 = JSON.parse(localStorage.getItem('progressFlightQuest_3_1'));
    let progressFlightQuest_3_2 = JSON.parse(localStorage.getItem('progressFlightQuest_3_2'));
    let progressFlightQuest_3_3 = JSON.parse(localStorage.getItem('progressFlightQuest_3_3'));

    if (localStorage.getItem('progressFlightQuest_3_2') === null) {
        localStorage.setItem('progressFlightQuest_3_2', JSON.stringify(progressFlightQuest_3_2));
    }

    questPrepareCatLoad.questionBlock('Полет', 'Пальцем в небо', 'Какое из утверждений правда', 'В созвездии Лиры находиться планета, на&nbsp;92% состоящая из рубина', 'Жидкая тушь для ресниц была создана по просьбе женщин&nbsp;– космонавтов', 'Обратный отсчет, сопровождающий запуск космических кораблей, придумали не космонавты, не ученые, а кинематографисты');

    let answerVar_3_2_1 = document.getElementById('answerVar_1'),
        answerVar_3_2_2 = document.getElementById('answerVar_2'),
        answerVar_3_2_3 = document.getElementById('answerVar_3'),
        answerVarRight_3_2 = [answerVar_3_2_1, answerVar_3_2_2, answerVar_3_2_3],
        questionStars = document.createElement('ul')
    ;

    questionStars.className = 'wrapper__stars';
    wrapper.appendChild(questionStars);

    if (progressFlightQuest_3_1 === 1 &&
        progressFlightQuest_3_2 === 0 &&
        progressFlightQuest_3_3 === 0) {
        questionStars.innerHTML = `
            <li id="questionStar_3_1" class="fill"></li>
            <li id="questionStar_3_2"></li>
            <li id="questionStar_3_3"></li>
        `;
    } else if (progressFlightQuest_3_1 === 0 &&
        progressFlightQuest_3_2 === 0 &&
        progressFlightQuest_3_3 === 1) {
        questionStars.innerHTML = `
            <li id="questionStar_3_1"></li>
            <li id="questionStar_3_2"></li>
            <li id="questionStar_3_3" class="fill"></li>
        `;
    } else if (progressFlightQuest_3_1 === 1 &&
        progressFlightQuest_3_2 === 0 &&
        progressFlightQuest_3_3 === 1) {
        questionStars.innerHTML = `
            <li id="questionStar_3_1" class="fill"></li>
            <li id="questionStar_3_2"></li>
            <li id="questionStar_3_3" class="fill"></li>
        `;
    } else {
        questionStars.innerHTML = `
            <li id="questionStar_3_1"></li>
            <li id="questionStar_3_2"></li>
            <li id="questionStar_3_3"></li>
        `;
    }

    const questionStar_3_2 = document.getElementById('questionStar_3_2');

    for (let i = 0; i < answerVarRight_3_2.length; i++) {
        if (answerVarRight_3_2[i] === answerVarRight_3_2[answerWrightNum]) {
            answerVarRight_3_2[i].addEventListener('click', () => {
                let progressFlightQuest_3 = JSON.parse(localStorage.getItem('progressFlightQuest_3'));
                let progressFlightQuestSum_3_2 = progressFlightQuest_3_2 + 1;
                let progressFlightQuestSum_3 = progressFlightQuestSum_3_2 + progressFlightQuest_3;

                localStorage.setItem('progressFlightQuest_3_2', JSON.stringify(progressFlightQuestSum_3_2));
                localStorage.setItem('progressFlightQuest_3', JSON.stringify(progressFlightQuestSum_3));
                if (progressFlightQuestSum_3_2 === 1) {
                    questionStar_3_2.className += 'fill';
                }
            });
        }
    }

    questPrepareCatLoad.answerBlock(answerWrightNum, 'Да – верно!');

    questArrowBack.arrowNext();
    const arrowNextClick = document.getElementById('answerNext'),
        questValue_3_3 = JSON.parse(localStorage.getItem('progressFlightQuest_3_3'))
    ;
    arrowNextClick.addEventListener('click', () => {
        gsap.to(containerWrapperCategory, {
            autoAlpha: 0,
            onComplete: () => {
                if (progressFlightQuest_3_1 === 0 &&
                    progressFlightQuest_3_2 === 0 &&
                    progressFlightQuest_3_3 === 0) {
                    wrapper.removeChild(questionStars);
                } else if (progressFlightQuest_3_1 === 1 &&
                    progressFlightQuest_3_2 === 0 &&
                    progressFlightQuest_3_3 === 0) {
                    wrapper.removeChild(questionStars);
                } else if (progressFlightQuest_3_1 === 0 &&
                    progressFlightQuest_3_2 === 0 &&
                    progressFlightQuest_3_3 === 1) {
                    wrapper.removeChild(questionStars);
                }
                container.removeChild(arrowBackClick);
                container.removeChild(arrowNextClick);
                container.removeChild(containerWrapperCategory);
                wrapper.className = 'wrapper';
                if (questValue_3_3 === 1) {
                    flightCategory();
                    lockSubQuestFlight();
                } else if (questValue_3_3 === 0) {
                    questionFlightCat_3_3();
                }
            }
        });
        if (progressFlightQuest_3_1 === 1 &&
            progressFlightQuest_3_2 === 0 &&
            progressFlightQuest_3_3 === 1) {
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

function questionFlightCat_3_3() {
    let questPrepareCatLoad = new Question();
    let questArrowBack = new ArrowsAll();
    let answerWrightNum = 1;
    let progressFlightQuest_3_1 = JSON.parse(localStorage.getItem('progressFlightQuest_3_1'));
    let progressFlightQuest_3_2 = JSON.parse(localStorage.getItem('progressFlightQuest_3_2'));
    let progressFlightQuest_3_3 = JSON.parse(localStorage.getItem('progressFlightQuest_3_3'));

    if (localStorage.getItem('progressFlightQuest_3_3') === null) {
        localStorage.setItem('progressFlightQuest_3_3', JSON.stringify(progressFlightQuest_3_3));
    }

    questPrepareCatLoad.questionBlock('Полет', 'Пальцем в небо', 'Какое из утверждений правда', 'В созвездии Дракона находится планета на 92 % состоящая из изумруда', 'Первой наградой, полученной Юрием Гагариным после приземления 12 апреля 1961 года, была медаль «За освоение целинных земель»', 'МС, отправленное с борта орбитальной станции, идет до Земли 28 дней?');

    let answerVar_3_3_1 = document.getElementById('answerVar_1'),
        answerVar_3_3_2 = document.getElementById('answerVar_2'),
        answerVar_3_3_3 = document.getElementById('answerVar_3'),
        answerVarRight_3_3 = [answerVar_3_3_1, answerVar_3_3_2, answerVar_3_3_3],
        questionStars = document.createElement('ul')
    ;

    questionStars.className = 'wrapper__stars';
    wrapper.appendChild(questionStars);

    if (progressFlightQuest_3_1 === 1 &&
        progressFlightQuest_3_2 === 1 &&
        progressFlightQuest_3_3 === 0) {
        questionStars.innerHTML = `
            <li id="questionStar_3_1" class="fill"></li>
            <li id="questionStar_3_2" class="fill"></li>
            <li id="questionStar_3_3"></li>
        `;
    } else if (progressFlightQuest_3_1 === 1 &&
        progressFlightQuest_3_2 === 0 &&
        progressFlightQuest_3_3 === 0) {
        questionStars.innerHTML = `
            <li id="questionStar_3_1" class="fill"></li>
            <li id="questionStar_3_2"></li>
            <li id="questionStar_3_3"></li>
        `;
    } else if (progressFlightQuest_3_1 === 0 &&
        progressFlightQuest_3_2 === 1 &&
        progressFlightQuest_3_3 === 0) {
        questionStars.innerHTML = `
            <li id="questionStar_3_1"></li>
            <li id="questionStar_3_2" class="fill"></li>
            <li id="questionStar_3_3"></li>
        `;
    } else {
        questionStars.innerHTML = `
            <li id="questionStar_3_1"></li>
            <li id="questionStar_3_2"></li>
            <li id="questionStar_3_3"></li>
        `;
    }

    const questionStar_3_3 = document.getElementById('questionStar_3_3');

    for (let i = 0; i < answerVarRight_3_3.length; i++) {
        if (answerVarRight_3_3[i] === answerVarRight_3_3[answerWrightNum]) {
            answerVarRight_3_3[i].addEventListener('click', () => {
                let progressFlightQuest_3 = JSON.parse(localStorage.getItem('progressFlightQuest_3'));
                let progressFlightQuestSum_3_3 = progressFlightQuest_3_3 + 1;
                let progressFlightQuestSum_3 = progressFlightQuestSum_3_3 + progressFlightQuest_3;

                localStorage.setItem('progressFlightQuest_3_3', JSON.stringify(progressFlightQuestSum_3_3));
                localStorage.setItem('progressFlightQuest_3', JSON.stringify(progressFlightQuestSum_3));
                localStorage.setItem('progressPrepareAll', JSON.stringify(progressFlightQuestSum_3));
                if (progressFlightQuestSum_3_3 === 1) {
                    questionStar_3_3.className += 'fill';
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