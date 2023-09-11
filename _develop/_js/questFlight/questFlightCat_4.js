if (localStorage.getItem('progressFlightQuest_4') === null) {
    localStorage.setItem('progressFlightQuest_4', JSON.stringify(0));
}

function questionFlightCat_4_1() {
    let questPrepareCatLoad = new Question();
    let questArrowBack = new ArrowsAll();
    let answerWrightNum = 2;
    let progressFlightQuest_4_1 = JSON.parse(localStorage.getItem('progressFlightQuest_4_1'));
    let progressFlightQuest_4_2 = JSON.parse(localStorage.getItem('progressFlightQuest_4_2'));
    let progressFlightQuest_4_3 = JSON.parse(localStorage.getItem('progressFlightQuest_4_3'));

    if (localStorage.getItem('progressFlightQuest_4_1') === null) {
        localStorage.setItem('progressFlightQuest_4_1', JSON.stringify(progressFlightQuest_4_1));
    }

    questPrepareCatLoad.questionBlock('Полет', 'Космодромы', 'С каких космодромов совершаются запуски ракет – носителей РФ?', 'Байконур, Восточный, Куру, мыс Канаверал', 'Куру, Вэньчан, мыс Канаверал, Тайюань', 'Плесецк, Байконур, Куру, Восточный');

    let answerVar_4_1_1 = document.getElementById('answerVar_1'),
        answerVar_4_1_2 = document.getElementById('answerVar_2'),
        answerVar_4_1_3 = document.getElementById('answerVar_3'),
        answerVarRight_4_1 = [answerVar_4_1_1, answerVar_4_1_2, answerVar_4_1_3],
        questionStars = document.createElement('ul')
    ;

    questionStars.className = 'wrapper__stars';
    wrapper.appendChild(questionStars);

    if (progressFlightQuest_4_1 === 0 &&
        progressFlightQuest_4_2 === 1 &&
        progressFlightQuest_4_3 === 0) {
        questionStars.innerHTML = `
            <li id="questionStar_4_1"></li>
            <li id="questionStar_4_2" class="fill"></li>
            <li id="questionStar_4_3"></li>
        `;
    } else if (progressFlightQuest_4_1 === 0 &&
        progressFlightQuest_4_2 === 0 &&
        progressFlightQuest_4_3 === 1) {
        questionStars.innerHTML = `
            <li id="questionStar_4_1"></li>
            <li id="questionStar_4_2"></li>
            <li id="questionStar_4_3" class="fill"></li>
        `;
    } else if (progressFlightQuest_4_1 === 0 &&
        progressFlightQuest_4_2 === 1 &&
        progressFlightQuest_4_3 === 1) {
        questionStars.innerHTML = `
            <li id="questionStar_4_1"></li>
            <li id="questionStar_4_2" class="fill"></li>
            <li id="questionStar_4_3" class="fill"></li>
        `;
    } else {
        questionStars.innerHTML = `
            <li id="questionStar_4_1"></li>
            <li id="questionStar_4_2"></li>
            <li id="questionStar_4_3"></li>
        `;
    }

    const questionStar_4_1 = document.getElementById('questionStar_4_1');

    for (let i = 0; i < answerVarRight_4_1.length; i++) {
        if (answerVarRight_4_1[i] === answerVarRight_4_1[answerWrightNum]) {
            answerVarRight_4_1[i].addEventListener('click', () => {
                let progressFlightQuest_4 = JSON.parse(localStorage.getItem('progressFlightQuest_4'));
                let progressFlightQuestSum_4_1 = progressFlightQuest_4_1 + 1;
                let progressFlightQuestSum_4 = progressFlightQuestSum_4_1 + progressFlightQuest_4;

                localStorage.setItem('progressFlightQuest_4_1', JSON.stringify(progressFlightQuestSum_4_1));
                localStorage.setItem('progressFlightQuest_4', JSON.stringify(progressFlightQuestSum_4));
                if (progressFlightQuestSum_4_1 === 1) {
                    questionStar_4_1.className += 'fill';
                }
            });
        }
    }

    questPrepareCatLoad.answerBlock(answerWrightNum, 'Точно так!');

    questArrowBack.arrowNext();
    const arrowNextClick = document.getElementById('answerNext'),
        questValue_4_2 = JSON.parse(localStorage.getItem('progressFlightQuest_4_2')),
        questValue_4_3 = JSON.parse(localStorage.getItem('progressFlightQuest_4_3'))
    ;
    arrowNextClick.addEventListener('click', () => {
        gsap.to(containerWrapperCategory, {
            autoAlpha: 0,
            onComplete: () => {
                if (progressFlightQuest_4_1 === 0 &&
                    progressFlightQuest_4_2 === 0 &&
                    progressFlightQuest_4_3 === 0) {
                    wrapper.removeChild(questionStars);
                } else if (progressFlightQuest_4_1 === 0 &&
                    progressFlightQuest_4_2 === 1 &&
                    progressFlightQuest_4_3 === 0) {
                    wrapper.removeChild(questionStars);
                } else if (progressFlightQuest_4_1 === 0 &&
                    progressFlightQuest_4_2 === 0 &&
                    progressFlightQuest_4_3 === 1) {
                    wrapper.removeChild(questionStars);
                }
                container.removeChild(arrowBackClick);
                container.removeChild(arrowNextClick);
                container.removeChild(containerWrapperCategory);
                wrapper.className = 'wrapper';
                if (questValue_4_2 === 1 && questValue_4_3 === 1) {
                    flightCategory();
                    lockSubQuestFlight();
                } else if (questValue_4_2 === 0) {
                    questionFlightCat_4_2();
                } else if (questValue_4_2 === 1 && questValue_4_3 === 0) {
                    questionFlightCat_4_3();
                }
            }
        });
        if (progressFlightQuest_4_1 === 0 &&
            progressFlightQuest_4_2 === 1 &&
            progressFlightQuest_4_3 === 1) {
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

function questionFlightCat_4_2() {
    let questPrepareCatLoad = new Question();
    let questArrowBack = new ArrowsAll();
    let answerWrightNum = 1;
    let progressFlightQuest_4_1 = JSON.parse(localStorage.getItem('progressFlightQuest_4_1'));
    let progressFlightQuest_4_2 = JSON.parse(localStorage.getItem('progressFlightQuest_4_2'));
    let progressFlightQuest_4_3 = JSON.parse(localStorage.getItem('progressFlightQuest_4_3'));

    if (localStorage.getItem('progressFlightQuest_4_2') === null) {
        localStorage.setItem('progressFlightQuest_4_2', JSON.stringify(progressFlightQuest_4_2));
    }

    questPrepareCatLoad.questionBlock('Полет', 'Космодромы', 'На каком космодроме расположена стартовая площадка, с которой был запущен космический корабль «Восток – 1» с первым космонавтом на борту?', 'Плесецк', 'Байконур', 'Куру');

    let answerVar_4_2_1 = document.getElementById('answerVar_1'),
        answerVar_4_2_2 = document.getElementById('answerVar_2'),
        answerVar_4_2_3 = document.getElementById('answerVar_3'),
        answerVarRight_4_2 = [answerVar_4_2_1, answerVar_4_2_2, answerVar_4_2_3],
        questionStars = document.createElement('ul')
    ;

    questionStars.className = 'wrapper__stars';
    wrapper.appendChild(questionStars);

    if (progressFlightQuest_4_1 === 1 &&
        progressFlightQuest_4_2 === 0 &&
        progressFlightQuest_4_3 === 0) {
        questionStars.innerHTML = `
            <li id="questionStar_4_1" class="fill"></li>
            <li id="questionStar_4_2"></li>
            <li id="questionStar_4_3"></li>
        `;
    } else if (progressFlightQuest_4_1 === 0 &&
        progressFlightQuest_4_2 === 0 &&
        progressFlightQuest_4_3 === 1) {
        questionStars.innerHTML = `
            <li id="questionStar_4_1"></li>
            <li id="questionStar_4_2"></li>
            <li id="questionStar_4_3" class="fill"></li>
        `;
    } else if (progressFlightQuest_4_1 === 1 &&
        progressFlightQuest_4_2 === 0 &&
        progressFlightQuest_4_3 === 1) {
        questionStars.innerHTML = `
            <li id="questionStar_4_1" class="fill"></li>
            <li id="questionStar_4_2"></li>
            <li id="questionStar_4_3" class="fill"></li>
        `;
    } else {
        questionStars.innerHTML = `
            <li id="questionStar_4_1"></li>
            <li id="questionStar_4_2"></li>
            <li id="questionStar_4_3"></li>
        `;
    }

    const questionStar_4_2 = document.getElementById('questionStar_4_2');

    for (let i = 0; i < answerVarRight_4_2.length; i++) {
        if (answerVarRight_4_2[i] === answerVarRight_4_2[answerWrightNum]) {
            answerVarRight_4_2[i].addEventListener('click', () => {
                let progressFlightQuest_4 = JSON.parse(localStorage.getItem('progressFlightQuest_4'));
                let progressFlightQuestSum_4_2 = progressFlightQuest_4_2 + 1;
                let progressFlightQuestSum_4 = progressFlightQuestSum_4_2 + progressFlightQuest_4;

                localStorage.setItem('progressFlightQuest_4_2', JSON.stringify(progressFlightQuestSum_4_2));
                localStorage.setItem('progressFlightQuest_4', JSON.stringify(progressFlightQuestSum_4));
                if (progressFlightQuestSum_4_2 === 1) {
                    questionStar_4_2.className += 'fill';
                }
            });
        }
    }

    questPrepareCatLoad.answerBlock(answerWrightNum, 'Да – верно!');

    questArrowBack.arrowNext();
    const arrowNextClick = document.getElementById('answerNext'),
        questValue_4_3 = JSON.parse(localStorage.getItem('progressFlightQuest_4_3'))
    ;
    arrowNextClick.addEventListener('click', () => {
        gsap.to(containerWrapperCategory, {
            autoAlpha: 0,
            onComplete: () => {
                if (progressFlightQuest_4_1 === 0 &&
                    progressFlightQuest_4_2 === 0 &&
                    progressFlightQuest_4_3 === 0) {
                    wrapper.removeChild(questionStars);
                } else if (progressFlightQuest_4_1 === 1 &&
                    progressFlightQuest_4_2 === 0 &&
                    progressFlightQuest_4_3 === 0) {
                    wrapper.removeChild(questionStars);
                } else if (progressFlightQuest_4_1 === 0 &&
                    progressFlightQuest_4_2 === 0 &&
                    progressFlightQuest_4_3 === 1) {
                    wrapper.removeChild(questionStars);
                }
                container.removeChild(arrowBackClick);
                container.removeChild(arrowNextClick);
                container.removeChild(containerWrapperCategory);
                wrapper.className = 'wrapper';
                if (questValue_4_3 === 1) {
                    flightCategory();
                    lockSubQuestFlight();
                } else if (questValue_4_3 === 0) {
                    questionFlightCat_4_3();
                }
            }
        });
        if (progressFlightQuest_4_1 === 1 &&
            progressFlightQuest_4_2 === 0 &&
            progressFlightQuest_4_3 === 1) {
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

function questionFlightCat_4_3() {
    let questPrepareCatLoad = new Question();
    let questArrowBack = new ArrowsAll();
    let answerWrightNum = 1;
    let progressFlightQuest_4_1 = JSON.parse(localStorage.getItem('progressFlightQuest_4_1'));
    let progressFlightQuest_4_2 = JSON.parse(localStorage.getItem('progressFlightQuest_4_2'));
    let progressFlightQuest_4_3 = JSON.parse(localStorage.getItem('progressFlightQuest_4_3'));

    if (localStorage.getItem('progressFlightQuest_4_3') === null) {
        localStorage.setItem('progressFlightQuest_4_3', JSON.stringify(progressFlightQuest_4_3));
    }

    questPrepareCatLoad.questionBlock('Полет', 'Космодромы', 'Как называется космодром, расположенный на Дальнем Востоке Амурской области, вблизи города Циолковский?', 'Байконур', 'Восточный', 'Куру');

    let answerVar_4_3_1 = document.getElementById('answerVar_1'),
        answerVar_4_3_2 = document.getElementById('answerVar_2'),
        answerVar_4_3_3 = document.getElementById('answerVar_3'),
        answerVarRight_4_3 = [answerVar_4_3_1, answerVar_4_3_2, answerVar_4_3_3],
        questionStars = document.createElement('ul')
    ;

    questionStars.className = 'wrapper__stars';
    wrapper.appendChild(questionStars);

    if (progressFlightQuest_4_1 === 1 &&
        progressFlightQuest_4_2 === 1 &&
        progressFlightQuest_4_3 === 0) {
        questionStars.innerHTML = `
            <li id="questionStar_4_1" class="fill"></li>
            <li id="questionStar_4_2" class="fill"></li>
            <li id="questionStar_4_3"></li>
        `;
    } else if (progressFlightQuest_4_1 === 1 &&
        progressFlightQuest_4_2 === 0 &&
        progressFlightQuest_4_3 === 0) {
        questionStars.innerHTML = `
            <li id="questionStar_4_1" class="fill"></li>
            <li id="questionStar_4_2"></li>
            <li id="questionStar_4_3"></li>
        `;
    } else if (progressFlightQuest_4_1 === 0 &&
        progressFlightQuest_4_2 === 1 &&
        progressFlightQuest_4_3 === 0) {
        questionStars.innerHTML = `
            <li id="questionStar_4_1"></li>
            <li id="questionStar_4_2" class="fill"></li>
            <li id="questionStar_4_3"></li>
        `;
    } else {
        questionStars.innerHTML = `
            <li id="questionStar_4_1"></li>
            <li id="questionStar_4_2"></li>
            <li id="questionStar_4_3"></li>
        `;
    }

    const questionStar_4_3 = document.getElementById('questionStar_4_3');

    for (let i = 0; i < answerVarRight_4_3.length; i++) {
        if (answerVarRight_4_3[i] === answerVarRight_4_3[answerWrightNum]) {
            answerVarRight_4_3[i].addEventListener('click', () => {
                let progressFlightQuest_4 = JSON.parse(localStorage.getItem('progressFlightQuest_4'));
                let progressFlightQuestSum_4_3 = progressFlightQuest_4_3 + 1;
                let progressFlightQuestSum_4 = progressFlightQuestSum_4_3 + progressFlightQuest_4;

                localStorage.setItem('progressFlightQuest_4_3', JSON.stringify(progressFlightQuestSum_4_3));
                localStorage.setItem('progressFlightQuest_4', JSON.stringify(progressFlightQuestSum_4));
                localStorage.setItem('progressPrepareAll', JSON.stringify(progressFlightQuestSum_4));
                if (progressFlightQuestSum_4_3 === 1) {
                    questionStar_4_3.className += 'fill';
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