if (localStorage.getItem('progressFlightQuest_5') === null) {
    localStorage.setItem('progressFlightQuest_5', JSON.stringify(0));
}

function questionFlightCat_5_1() {
    let questPrepareCatLoad = new Question();
    let questArrowBack = new ArrowsAll();
    let answerWrightNum = 2;
    let progressFlightQuest_5_1 = JSON.parse(localStorage.getItem('progressFlightQuest_5_1'));
    let progressFlightQuest_5_2 = JSON.parse(localStorage.getItem('progressFlightQuest_5_2'));
    let progressFlightQuest_5_3 = JSON.parse(localStorage.getItem('progressFlightQuest_5_3'));

    if (localStorage.getItem('progressFlightQuest_5_1') === null) {
        localStorage.setItem('progressFlightQuest_5_1', JSON.stringify(progressFlightQuest_5_1));
    }

    questPrepareCatLoad.questionBlock('Полет', 'Космические роботы', 'Какого вида космического аппарата не существует?', 'Возвращаемый', 'Неуловимый', 'Самоликвидируемый');

    let answerVar_5_1_1 = document.getElementById('answerVar_1'),
        answerVar_5_1_2 = document.getElementById('answerVar_2'),
        answerVar_5_1_3 = document.getElementById('answerVar_3'),
        answerVarRight_5_1 = [answerVar_5_1_1, answerVar_5_1_2, answerVar_5_1_3],
        questionStars = document.createElement('ul')
    ;

    questionStars.className = 'wrapper__stars';
    wrapper.appendChild(questionStars);

    if (progressFlightQuest_5_1 === 0 &&
        progressFlightQuest_5_2 === 1 &&
        progressFlightQuest_5_3 === 0) {
        questionStars.innerHTML = `
            <li id="questionStar_5_1"></li>
            <li id="questionStar_5_2" class="fill"></li>
            <li id="questionStar_5_3"></li>
        `;
    } else if (progressFlightQuest_5_1 === 0 &&
        progressFlightQuest_5_2 === 0 &&
        progressFlightQuest_5_3 === 1) {
        questionStars.innerHTML = `
            <li id="questionStar_5_1"></li>
            <li id="questionStar_5_2"></li>
            <li id="questionStar_5_3" class="fill"></li>
        `;
    } else if (progressFlightQuest_5_1 === 0 &&
        progressFlightQuest_5_2 === 1 &&
        progressFlightQuest_5_3 === 1) {
        questionStars.innerHTML = `
            <li id="questionStar_5_1"></li>
            <li id="questionStar_5_2" class="fill"></li>
            <li id="questionStar_5_3" class="fill"></li>
        `;
    } else {
        questionStars.innerHTML = `
            <li id="questionStar_5_1"></li>
            <li id="questionStar_5_2"></li>
            <li id="questionStar_5_3"></li>
        `;
    }

    const questionStar_5_1 = document.getElementById('questionStar_5_1');

    for (let i = 0; i < answerVarRight_5_1.length; i++) {
        if (answerVarRight_5_1[i] === answerVarRight_5_1[answerWrightNum]) {
            answerVarRight_5_1[i].addEventListener('click', () => {
                let progressFlightQuest_5 = JSON.parse(localStorage.getItem('progressFlightQuest_5'));
                let progressFlightQuestSum_5_1 = progressFlightQuest_5_1 + 1;
                let progressFlightQuestSum_5 = progressFlightQuestSum_5_1 + progressFlightQuest_5;

                localStorage.setItem('progressFlightQuest_5_1', JSON.stringify(progressFlightQuestSum_5_1));
                localStorage.setItem('progressFlightQuest_5', JSON.stringify(progressFlightQuestSum_5));
                if (progressFlightQuestSum_5_1 === 1) {
                    questionStar_5_1.className += 'fill';
                }
            });
        }
    }

    questPrepareCatLoad.answerBlock(answerWrightNum, 'Космические аппараты бывают возвращаемые и не возвращаемые');

    questArrowBack.arrowNext();
    const arrowNextClick = document.getElementById('answerNext'),
        questValue_5_2 = JSON.parse(localStorage.getItem('progressFlightQuest_5_2')),
        questValue_5_3 = JSON.parse(localStorage.getItem('progressFlightQuest_5_3'))
    ;
    arrowNextClick.addEventListener('click', () => {
        gsap.to(containerWrapperCategory, {
            autoAlpha: 0,
            onComplete: () => {
                if (progressFlightQuest_5_1 === 0 &&
                    progressFlightQuest_5_2 === 0 &&
                    progressFlightQuest_5_3 === 0) {
                    wrapper.removeChild(questionStars);
                } else if (progressFlightQuest_5_1 === 0 &&
                    progressFlightQuest_5_2 === 1 &&
                    progressFlightQuest_5_3 === 0) {
                    wrapper.removeChild(questionStars);
                } else if (progressFlightQuest_5_1 === 0 &&
                    progressFlightQuest_5_2 === 0 &&
                    progressFlightQuest_5_3 === 1) {
                    wrapper.removeChild(questionStars);
                }
                container.removeChild(arrowBackClick);
                container.removeChild(arrowNextClick);
                container.removeChild(containerWrapperCategory);
                wrapper.className = 'wrapper';
                if (questValue_5_2 === 1 && questValue_5_3 === 1) {
                    flightCategory();
                    lockSubQuestFlight();
                } else if (questValue_5_2 === 0) {
                    questionFlightCat_5_2();
                } else if (questValue_5_2 === 1 && questValue_5_3 === 0) {
                    questionFlightCat_5_3();
                }
            }
        });
        if (progressFlightQuest_5_1 === 0 &&
            progressFlightQuest_5_2 === 1 &&
            progressFlightQuest_5_3 === 1) {
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

function questionFlightCat_5_2() {
    let questPrepareCatLoad = new Question();
    let questArrowBack = new ArrowsAll();
    let answerWrightNum = 2;
    let progressFlightQuest_5_1 = JSON.parse(localStorage.getItem('progressFlightQuest_5_1'));
    let progressFlightQuest_5_2 = JSON.parse(localStorage.getItem('progressFlightQuest_5_2'));
    let progressFlightQuest_5_3 = JSON.parse(localStorage.getItem('progressFlightQuest_5_3'));

    if (localStorage.getItem('progressFlightQuest_5_2') === null) {
        localStorage.setItem('progressFlightQuest_5_2', JSON.stringify(progressFlightQuest_5_2));
    }

    questPrepareCatLoad.questionBlock('Полет', 'Космодромы', 'Какие космические спутники обеспечивают наблюдение за погодными явлениями?', '«Спектр»', '«Азон»', 'Метеоспутники');

    let answerVar_5_2_1 = document.getElementById('answerVar_1'),
        answerVar_5_2_2 = document.getElementById('answerVar_2'),
        answerVar_5_2_3 = document.getElementById('answerVar_3'),
        answerVarRight_5_2 = [answerVar_5_2_1, answerVar_5_2_2, answerVar_5_2_3],
        questionStars = document.createElement('ul')
    ;

    questionStars.className = 'wrapper__stars';
    wrapper.appendChild(questionStars);

    if (progressFlightQuest_5_1 === 1 &&
        progressFlightQuest_5_2 === 0 &&
        progressFlightQuest_5_3 === 0) {
        questionStars.innerHTML = `
            <li id="questionStar_5_1" class="fill"></li>
            <li id="questionStar_5_2"></li>
            <li id="questionStar_5_3"></li>
        `;
    } else if (progressFlightQuest_5_1 === 0 &&
        progressFlightQuest_5_2 === 0 &&
        progressFlightQuest_5_3 === 1) {
        questionStars.innerHTML = `
            <li id="questionStar_5_1"></li>
            <li id="questionStar_5_2"></li>
            <li id="questionStar_5_3" class="fill"></li>
        `;
    } else if (progressFlightQuest_5_1 === 1 &&
        progressFlightQuest_5_2 === 0 &&
        progressFlightQuest_5_3 === 1) {
        questionStars.innerHTML = `
            <li id="questionStar_5_1" class="fill"></li>
            <li id="questionStar_5_2"></li>
            <li id="questionStar_5_3" class="fill"></li>
        `;
    } else {
        questionStars.innerHTML = `
            <li id="questionStar_5_1"></li>
            <li id="questionStar_5_2"></li>
            <li id="questionStar_5_3"></li>
        `;
    }

    const questionStar_5_2 = document.getElementById('questionStar_5_2');

    for (let i = 0; i < answerVarRight_5_2.length; i++) {
        if (answerVarRight_5_2[i] === answerVarRight_5_2[answerWrightNum]) {
            answerVarRight_5_2[i].addEventListener('click', () => {
                let progressFlightQuest_5 = JSON.parse(localStorage.getItem('progressFlightQuest_5'));
                let progressFlightQuestSum_5_2 = progressFlightQuest_5_2 + 1;
                let progressFlightQuestSum_5 = progressFlightQuestSum_5_2 + progressFlightQuest_5;

                localStorage.setItem('progressFlightQuest_5_2', JSON.stringify(progressFlightQuestSum_5_2));
                localStorage.setItem('progressFlightQuest_5', JSON.stringify(progressFlightQuestSum_5));
                if (progressFlightQuestSum_5_2 === 1) {
                    questionStar_5_2.className += 'fill';
                }
            });
        }
    }

    questPrepareCatLoad.answerBlock(answerWrightNum, 'В 1967 году  начала функционировать первая советская метеорологическая спутниковая система «Метеор»');

    questArrowBack.arrowNext();
    const arrowNextClick = document.getElementById('answerNext'),
        questValue_5_3 = JSON.parse(localStorage.getItem('progressFlightQuest_5_3'))
    ;
    arrowNextClick.addEventListener('click', () => {
        gsap.to(containerWrapperCategory, {
            autoAlpha: 0,
            onComplete: () => {
                if (progressFlightQuest_5_1 === 0 &&
                    progressFlightQuest_5_2 === 0 &&
                    progressFlightQuest_5_3 === 0) {
                    wrapper.removeChild(questionStars);
                } else if (progressFlightQuest_5_1 === 1 &&
                    progressFlightQuest_5_2 === 0 &&
                    progressFlightQuest_5_3 === 0) {
                    wrapper.removeChild(questionStars);
                } else if (progressFlightQuest_5_1 === 0 &&
                    progressFlightQuest_5_2 === 0 &&
                    progressFlightQuest_5_3 === 1) {
                    wrapper.removeChild(questionStars);
                }
                container.removeChild(arrowBackClick);
                container.removeChild(arrowNextClick);
                container.removeChild(containerWrapperCategory);
                wrapper.className = 'wrapper';
                if (questValue_5_3 === 1) {
                    flightCategory();
                    lockSubQuestFlight();
                } else if (questValue_5_3 === 0) {
                    questionFlightCat_5_3();
                }
            }
        });
        if (progressFlightQuest_5_1 === 1 &&
            progressFlightQuest_5_2 === 0 &&
            progressFlightQuest_5_3 === 1) {
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

function questionFlightCat_5_3() {
    let questPrepareCatLoad = new Question();
    let questArrowBack = new ArrowsAll();
    let answerWrightNum = 1;
    let progressFlightQuest_5_1 = JSON.parse(localStorage.getItem('progressFlightQuest_5_1'));
    let progressFlightQuest_5_2 = JSON.parse(localStorage.getItem('progressFlightQuest_5_2'));
    let progressFlightQuest_5_3 = JSON.parse(localStorage.getItem('progressFlightQuest_5_3'));

    if (localStorage.getItem('progressFlightQuest_5_3') === null) {
        localStorage.setItem('progressFlightQuest_5_3', JSON.stringify(progressFlightQuest_5_3));
    }

    questPrepareCatLoad.questionBlock('Полет', 'Космодромы', 'Как называется группировка российских спутников, обеспечивающих спутниковую, теле – радио связь?', '«GPS»', '«Глонасс»', '«Iridium»');

    let answerVar_5_3_1 = document.getElementById('answerVar_1'),
        answerVar_5_3_2 = document.getElementById('answerVar_2'),
        answerVar_5_3_3 = document.getElementById('answerVar_3'),
        answerVarRight_5_3 = [answerVar_5_3_1, answerVar_5_3_2, answerVar_5_3_3],
        questionStars = document.createElement('ul')
    ;

    questionStars.className = 'wrapper__stars';
    wrapper.appendChild(questionStars);

    if (progressFlightQuest_5_1 === 1 &&
        progressFlightQuest_5_2 === 1 &&
        progressFlightQuest_5_3 === 0) {
        questionStars.innerHTML = `
            <li id="questionStar_5_1" class="fill"></li>
            <li id="questionStar_5_2" class="fill"></li>
            <li id="questionStar_5_3"></li>
        `;
    } else if (progressFlightQuest_5_1 === 1 &&
        progressFlightQuest_5_2 === 0 &&
        progressFlightQuest_5_3 === 0) {
        questionStars.innerHTML = `
            <li id="questionStar_5_1" class="fill"></li>
            <li id="questionStar_5_2"></li>
            <li id="questionStar_5_3"></li>
        `;
    } else if (progressFlightQuest_5_1 === 0 &&
        progressFlightQuest_5_2 === 1 &&
        progressFlightQuest_5_3 === 0) {
        questionStars.innerHTML = `
            <li id="questionStar_5_1"></li>
            <li id="questionStar_5_2" class="fill"></li>
            <li id="questionStar_5_3"></li>
        `;
    } else {
        questionStars.innerHTML = `
            <li id="questionStar_5_1"></li>
            <li id="questionStar_5_2"></li>
            <li id="questionStar_5_3"></li>
        `;
    }

    const questionStar_5_3 = document.getElementById('questionStar_5_3');

    for (let i = 0; i < answerVarRight_5_3.length; i++) {
        if (answerVarRight_5_3[i] === answerVarRight_5_3[answerWrightNum]) {
            answerVarRight_5_3[i].addEventListener('click', () => {
                let progressFlightQuest_5 = JSON.parse(localStorage.getItem('progressFlightQuest_5'));
                let progressFlightQuestSum_5_3 = progressFlightQuest_5_3 + 1;
                let progressFlightQuestSum_5 = progressFlightQuestSum_5_3 + progressFlightQuest_5;

                localStorage.setItem('progressFlightQuest_5_3', JSON.stringify(progressFlightQuestSum_5_3));
                localStorage.setItem('progressFlightQuest_5', JSON.stringify(progressFlightQuestSum_5));
                localStorage.setItem('progressPrepareAll', JSON.stringify(progressFlightQuestSum_5));
                if (progressFlightQuestSum_5_3 === 1) {
                    questionStar_5_3.className += 'fill';
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