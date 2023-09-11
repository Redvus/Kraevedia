if (localStorage.getItem('progressPrepareQuest_5') === null) {
    localStorage.setItem('progressPrepareQuest_5', JSON.stringify(0));
}

function questionPrepareCat_5_1() {
    let questPrepareCatLoad = new Question();
    let questArrowBack = new ArrowsAll();
    let answerWrightNum = 1;
    let progressPrepareQuest_5_1 = JSON.parse(localStorage.getItem('progressPrepareQuest_5_1'));
    let progressPrepareQuest_5_2 = JSON.parse(localStorage.getItem('progressPrepareQuest_5_2'));
    let progressPrepareQuest_5_3 = JSON.parse(localStorage.getItem('progressPrepareQuest_5_3'));

    if (localStorage.getItem('progressPrepareQuest_5_1') === null) {
        localStorage.setItem('progressPrepareQuest_5_1', JSON.stringify(progressPrepareQuest_5_1));
    }

    questPrepareCatLoad.questionBlock('Подготовка', 'Отгадай планету', 'Самая окольцованная планета', 'Нептун', 'Сатурн', 'Уран');

    let answerVar_5_1_1 = document.getElementById('answerVar_1'),
        answerVar_5_1_2 = document.getElementById('answerVar_2'),
        answerVar_5_1_3 = document.getElementById('answerVar_3'),
        answerVarRight_5_1 = [answerVar_5_1_1, answerVar_5_1_2, answerVar_5_1_3],
        questionStars = document.createElement('ul')
    ;

    questionStars.className = 'wrapper__stars';
    wrapper.appendChild(questionStars);

    if (progressPrepareQuest_5_1 === 0 &&
        progressPrepareQuest_5_2 === 1 &&
        progressPrepareQuest_5_3 === 0) {
        questionStars.innerHTML = `
            <li id="questionStar_5_1"></li>
            <li id="questionStar_5_2" class="fill"></li>
            <li id="questionStar_5_3"></li>
        `;
    } else if (progressPrepareQuest_5_1 === 0 &&
        progressPrepareQuest_5_2 === 0 &&
        progressPrepareQuest_5_3 === 1) {
        questionStars.innerHTML = `
            <li id="questionStar_5_1"></li>
            <li id="questionStar_5_2"></li>
            <li id="questionStar_5_3" class="fill"></li>
        `;
    } else if (progressPrepareQuest_5_1 === 0 &&
        progressPrepareQuest_5_2 === 1 &&
        progressPrepareQuest_5_3 === 1) {
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
                let progressPrepareQuest_5 = JSON.parse(localStorage.getItem('progressPrepareQuest_5'));
                let progressPrepareQuestSum_5_1 = progressPrepareQuest_5_1 + 1;
                let progressPrepareQuestSum_5 = progressPrepareQuestSum_5_1 + progressPrepareQuest_5;

                localStorage.setItem('progressPrepareQuest_5_1', JSON.stringify(progressPrepareQuestSum_5_1));
                localStorage.setItem('progressPrepareQuest_5', JSON.stringify(progressPrepareQuestSum_5));
                if (progressPrepareQuestSum_5_1 === 1) {
                    questionStar_5_1.className += 'fill';
                }
            });
        }
    }

    questPrepareCatLoad.answerBlock(answerWrightNum, 'Самая окольцованная!');

    questArrowBack.arrowNext();
    const arrowNextClick = document.getElementById('answerNext'),
        questValue_5_2 = JSON.parse(localStorage.getItem('progressPrepareQuest_5_2')),
        questValue_5_3 = JSON.parse(localStorage.getItem('progressPrepareQuest_5_3'))
    ;
    arrowNextClick.addEventListener('click', () => {
        gsap.to(containerWrapperCategory, {
            autoAlpha: 0,
            onComplete: () => {
                if (progressPrepareQuest_5_1 === 0 &&
                    progressPrepareQuest_5_2 === 0 &&
                    progressPrepareQuest_5_3 === 0) {
                    wrapper.removeChild(questionStars);
                } else if (progressPrepareQuest_5_1 === 0 &&
                    progressPrepareQuest_5_2 === 1 &&
                    progressPrepareQuest_5_3 === 0) {
                    wrapper.removeChild(questionStars);
                } else if (progressPrepareQuest_5_1 === 0 &&
                    progressPrepareQuest_5_2 === 0 &&
                    progressPrepareQuest_5_3 === 1) {
                    wrapper.removeChild(questionStars);
                }
                container.removeChild(arrowBackClick);
                container.removeChild(arrowNextClick);
                container.removeChild(containerWrapperCategory);
                wrapper.className = 'wrapper';
                if (questValue_5_2 === 1 && questValue_5_3 === 1) {
                    prepareCategory();
                    lockSubQuestPrepare();
                } else if (questValue_5_2 === 0) {
                    questionPrepareCat_5_2();
                } else if (questValue_5_2 === 1 && questValue_5_3 === 0) {
                    questionPrepareCat_5_3();
                }
            }
        });
        if (progressPrepareQuest_5_1 === 0 &&
            progressPrepareQuest_5_2 === 1 &&
            progressPrepareQuest_5_3 === 1) {
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
                prepareCategory();
                lockSubQuestPrepare();
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

function questionPrepareCat_5_2() {
    let questPrepareCatLoad = new Question();
    let questArrowBack = new ArrowsAll();
    let answerWrightNum = 2;
    let progressPrepareQuest_5_1 = JSON.parse(localStorage.getItem('progressPrepareQuest_5_1'));
    let progressPrepareQuest_5_2 = JSON.parse(localStorage.getItem('progressPrepareQuest_5_2'));
    let progressPrepareQuest_5_3 = JSON.parse(localStorage.getItem('progressPrepareQuest_5_3'));

    if (localStorage.getItem('progressPrepareQuest_5_2') === null) {
        localStorage.setItem('progressPrepareQuest_5_2', JSON.stringify(progressPrepareQuest_5_2));
    }

    questPrepareCatLoad.questionBlock('Подготовка', 'Подбери планете спутник ', 'Планета Юпитер', 'спутник Тритон', 'спутник Харон', 'спутник Ио');

    let answerVar_5_2_1 = document.getElementById('answerVar_1'),
        answerVar_5_2_2 = document.getElementById('answerVar_2'),
        answerVar_5_2_3 = document.getElementById('answerVar_3'),
        answerVarRight_5_2 = [answerVar_5_2_1, answerVar_5_2_2, answerVar_5_2_3],
        questionStars = document.createElement('ul')
    ;

    questionStars.className = 'wrapper__stars';
    wrapper.appendChild(questionStars);

    if (progressPrepareQuest_5_1 === 1 &&
        progressPrepareQuest_5_2 === 0 &&
        progressPrepareQuest_5_3 === 0) {
        questionStars.innerHTML = `
            <li id="questionStar_5_1" class="fill"></li>
            <li id="questionStar_5_2"></li>
            <li id="questionStar_5_3"></li>
        `;
    } else if (progressPrepareQuest_5_1 === 0 &&
        progressPrepareQuest_5_2 === 0 &&
        progressPrepareQuest_5_3 === 1) {
        questionStars.innerHTML = `
            <li id="questionStar_5_1"></li>
            <li id="questionStar_5_2"></li>
            <li id="questionStar_5_3" class="fill"></li>
        `;
    } else if (progressPrepareQuest_5_1 === 1 &&
        progressPrepareQuest_5_2 === 0 &&
        progressPrepareQuest_5_3 === 1) {
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
                let progressPrepareQuest_5 = JSON.parse(localStorage.getItem('progressPrepareQuest_5'));
                let progressPrepareQuestSum_5_2 = progressPrepareQuest_5_2 + 1;
                let progressPrepareQuestSum_5 = progressPrepareQuestSum_5_2 + progressPrepareQuest_5;

                localStorage.setItem('progressPrepareQuest_5_2', JSON.stringify(progressPrepareQuestSum_5_2));
                localStorage.setItem('progressPrepareQuest_5', JSON.stringify(progressPrepareQuestSum_5));
                if (progressPrepareQuestSum_5_2 === 1) {
                    questionStar_5_2.className += 'fill';
                }
            });
        }
    }

    questPrepareCatLoad.answerBlock(answerWrightNum, 'Именно он!');

    questArrowBack.arrowNext();
    const arrowNextClick = document.getElementById('answerNext'),
        questValue_5_3 = JSON.parse(localStorage.getItem('progressPrepareQuest_5_3'))
    ;
    arrowNextClick.addEventListener('click', () => {
        gsap.to(containerWrapperCategory, {
            autoAlpha: 0,
            onComplete: () => {
                if (progressPrepareQuest_5_1 === 0 &&
                    progressPrepareQuest_5_2 === 0 &&
                    progressPrepareQuest_5_3 === 0) {
                    wrapper.removeChild(questionStars);
                } else if (progressPrepareQuest_5_1 === 1 &&
                    progressPrepareQuest_5_2 === 0 &&
                    progressPrepareQuest_5_3 === 0) {
                    wrapper.removeChild(questionStars);
                } else if (progressPrepareQuest_5_1 === 0 &&
                    progressPrepareQuest_5_2 === 0 &&
                    progressPrepareQuest_5_3 === 1) {
                    wrapper.removeChild(questionStars);
                }
                container.removeChild(arrowBackClick);
                container.removeChild(arrowNextClick);
                container.removeChild(containerWrapperCategory);
                wrapper.className = 'wrapper';
                if (questValue_5_3 === 1) {
                    prepareCategory();
                    lockSubQuestPrepare();
                } else if (questValue_5_3 === 0) {
                    questionPrepareCat_5_3();
                }
            }
        });
        if (progressPrepareQuest_5_1 === 1 &&
            progressPrepareQuest_5_2 === 0 &&
            progressPrepareQuest_5_3 === 1) {
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
                prepareCategory();
                lockSubQuestPrepare();
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

function questionPrepareCat_5_3() {
    let questPrepareCatLoad = new Question();
    let questArrowBack = new ArrowsAll();
    let answerWrightNum = 1;
    let progressPrepareQuest_5_1 = JSON.parse(localStorage.getItem('progressPrepareQuest_5_1'));
    let progressPrepareQuest_5_2 = JSON.parse(localStorage.getItem('progressPrepareQuest_5_2'));
    let progressPrepareQuest_5_3 = JSON.parse(localStorage.getItem('progressPrepareQuest_5_3'));

    if (localStorage.getItem('progressPrepareQuest_5_3') === null) {
        localStorage.setItem('progressPrepareQuest_5_3', JSON.stringify(progressPrepareQuest_5_3));
    }

    questPrepareCatLoad.questionBlock('Подготовка', 'Назови планету', 'На поверхности какой планеты Солнечной системы самая высокая температура?', 'Нептун', 'Венера', 'Марс');

    let answerVar_5_3_1 = document.getElementById('answerVar_1'),
        answerVar_5_3_2 = document.getElementById('answerVar_2'),
        answerVar_5_3_3 = document.getElementById('answerVar_3'),
        answerVarRight_5_3 = [answerVar_5_3_1, answerVar_5_3_2, answerVar_5_3_3],
        questionStars = document.createElement('ul')
    ;

    questionStars.className = 'wrapper__stars';
    wrapper.appendChild(questionStars);

    if (progressPrepareQuest_5_1 === 1 &&
        progressPrepareQuest_5_2 === 1 &&
        progressPrepareQuest_5_3 === 0) {
        questionStars.innerHTML = `
            <li id="questionStar_5_1" class="fill"></li>
            <li id="questionStar_5_2" class="fill"></li>
            <li id="questionStar_5_3"></li>
        `;
    } else if (progressPrepareQuest_5_1 === 1 &&
        progressPrepareQuest_5_2 === 0 &&
        progressPrepareQuest_5_3 === 0) {
        questionStars.innerHTML = `
            <li id="questionStar_5_1" class="fill"></li>
            <li id="questionStar_5_2"></li>
            <li id="questionStar_5_3"></li>
        `;
    } else if (progressPrepareQuest_5_1 === 0 &&
        progressPrepareQuest_5_2 === 1 &&
        progressPrepareQuest_5_3 === 0) {
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
                let progressPrepareQuest_5 = JSON.parse(localStorage.getItem('progressPrepareQuest_5'));
                let progressPrepareQuestSum_5_3 = progressPrepareQuest_5_3 + 1;
                let progressPrepareQuestSum_5 = progressPrepareQuestSum_5_3 + progressPrepareQuest_5;

                localStorage.setItem('progressPrepareQuest_5_3', JSON.stringify(progressPrepareQuestSum_5_3));
                localStorage.setItem('progressPrepareQuest_5', JSON.stringify(progressPrepareQuestSum_5));
                localStorage.setItem('progressPrepareAll', JSON.stringify(progressPrepareQuestSum_5));
                if (progressPrepareQuestSum_5_3 === 1) {
                    questionStar_5_3.className += 'fill';
                }
            });
        }
    }

    questPrepareCatLoad.answerBlock(answerWrightNum, 'Температура на Венере достигает 464&nbsp;градусов Цельсия');

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
                prepareCategory();
                lockSubQuestPrepare();
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
                prepareCategory();
                lockSubQuestPrepare();
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