if (localStorage.getItem('progressPrepareQuest_8') === null) {
    localStorage.setItem('progressPrepareQuest_8', JSON.stringify(0));
}

function questionPrepareCat_8_1() {
    let questPrepareCatLoad = new Question();
    let questArrowBack = new ArrowsAll();
    let answerWrightNum = 1;
    let progressPrepareQuest_8_1 = JSON.parse(localStorage.getItem('progressPrepareQuest_8_1'));
    let progressPrepareQuest_8_2 = JSON.parse(localStorage.getItem('progressPrepareQuest_8_2'));
    let progressPrepareQuest_8_3 = JSON.parse(localStorage.getItem('progressPrepareQuest_8_3'));

    if (localStorage.getItem('progressPrepareQuest_8_1') === null) {
        localStorage.setItem('progressPrepareQuest_8_1', JSON.stringify(progressPrepareQuest_8_1));
    }

    questPrepareCatLoad.questionBlock('Подготовка', 'Отгадай планету', 'Эта планета единственная в Солнечной системе названная не в честь богов. Она самая большая из планет земной группы. Больше 70 % ее поверхности покрыто водой.', 'Венера', 'Земля', 'Нептун');

    let answerVar_8_1_1 = document.getElementById('answerVar_1'),
        answerVar_8_1_2 = document.getElementById('answerVar_2'),
        answerVar_8_1_3 = document.getElementById('answerVar_3'),
        answerVarRight_8_1 = [answerVar_8_1_1, answerVar_8_1_2, answerVar_8_1_3],
        questionStars = document.createElement('ul')
    ;

    questionStars.className = 'wrapper__stars';
    wrapper.appendChild(questionStars);

    if (progressPrepareQuest_8_1 === 0 &&
        progressPrepareQuest_8_2 === 1 &&
        progressPrepareQuest_8_3 === 0) {
        questionStars.innerHTML = `
            <li id="questionStar_8_1"></li>
            <li id="questionStar_8_2" class="fill"></li>
            <li id="questionStar_8_3"></li>
        `;
    } else if (progressPrepareQuest_8_1 === 0 &&
        progressPrepareQuest_8_2 === 0 &&
        progressPrepareQuest_8_3 === 1) {
        questionStars.innerHTML = `
            <li id="questionStar_8_1"></li>
            <li id="questionStar_8_2"></li>
            <li id="questionStar_8_3" class="fill"></li>
        `;
    } else if (progressPrepareQuest_8_1 === 0 &&
        progressPrepareQuest_8_2 === 1 &&
        progressPrepareQuest_8_3 === 1) {
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
                let progressPrepareQuest_8 = JSON.parse(localStorage.getItem('progressPrepareQuest_8'));
                let progressPrepareQuestSum_8_1 = progressPrepareQuest_8_1 + 1;
                let progressPrepareQuestSum_8 = progressPrepareQuestSum_8_1 + progressPrepareQuest_8;

                localStorage.setItem('progressPrepareQuest_8_1', JSON.stringify(progressPrepareQuestSum_8_1));
                localStorage.setItem('progressPrepareQuest_8', JSON.stringify(progressPrepareQuestSum_8));
                if (progressPrepareQuestSum_8_1 === 1) {
                    questionStar_8_1.className += 'fill';
                }
            });
        }
    }

    questPrepareCatLoad.answerBlock(answerWrightNum, 'Ну конечно же!');

    questArrowBack.arrowNext();
    const arrowNextClick = document.getElementById('answerNext'),
        questValue_8_2 = JSON.parse(localStorage.getItem('progressPrepareQuest_8_2')),
        questValue_8_3 = JSON.parse(localStorage.getItem('progressPrepareQuest_8_3'))
    ;
    arrowNextClick.addEventListener('click', () => {
        gsap.to(containerWrapperCategory, {
            autoAlpha: 0,
            onComplete: () => {
                if (progressPrepareQuest_8_1 === 0 &&
                    progressPrepareQuest_8_2 === 0 &&
                    progressPrepareQuest_8_3 === 0) {
                    wrapper.removeChild(questionStars);
                } else if (progressPrepareQuest_8_1 === 0 &&
                    progressPrepareQuest_8_2 === 1 &&
                    progressPrepareQuest_8_3 === 0) {
                    wrapper.removeChild(questionStars);
                } else if (progressPrepareQuest_8_1 === 0 &&
                    progressPrepareQuest_8_2 === 0 &&
                    progressPrepareQuest_8_3 === 1) {
                    wrapper.removeChild(questionStars);
                }
                container.removeChild(arrowBackClick);
                container.removeChild(arrowNextClick);
                container.removeChild(containerWrapperCategory);
                wrapper.className = 'wrapper';
                if (questValue_8_2 === 1 && questValue_8_3 === 1) {
                    prepareCategory();
                    lockSubQuestPrepare();
                } else if (questValue_8_2 === 0) {
                    questionPrepareCat_8_2();
                } else if (questValue_8_2 === 1 && questValue_8_3 === 0) {
                    questionPrepareCat_8_3();
                }
            }
        });
        if (progressPrepareQuest_8_1 === 0 &&
            progressPrepareQuest_8_2 === 1 &&
            progressPrepareQuest_8_3 === 1) {
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

function questionPrepareCat_8_2() {
    let questPrepareCatLoad = new Question();
    let questArrowBack = new ArrowsAll();
    let answerWrightNum = 2;
    let progressPrepareQuest_8_1 = JSON.parse(localStorage.getItem('progressPrepareQuest_8_1'));
    let progressPrepareQuest_8_2 = JSON.parse(localStorage.getItem('progressPrepareQuest_8_2'));
    let progressPrepareQuest_8_3 = JSON.parse(localStorage.getItem('progressPrepareQuest_8_3'));

    if (localStorage.getItem('progressPrepareQuest_8_2') === null) {
        localStorage.setItem('progressPrepareQuest_8_2', JSON.stringify(progressPrepareQuest_8_2));
    }

    questPrepareCatLoad.questionBlock('Подготовка', 'Подбери планете спутник ', 'Планета Нептун', 'спутник Ио', 'спутник Харон', 'спутник Тритон');

    let answerVar_8_2_1 = document.getElementById('answerVar_1'),
        answerVar_8_2_2 = document.getElementById('answerVar_2'),
        answerVar_8_2_3 = document.getElementById('answerVar_3'),
        answerVarRight_8_2 = [answerVar_8_2_1, answerVar_8_2_2, answerVar_8_2_3],
        questionStars = document.createElement('ul')
    ;

    questionStars.className = 'wrapper__stars';
    wrapper.appendChild(questionStars);

    if (progressPrepareQuest_8_1 === 1 &&
        progressPrepareQuest_8_2 === 0 &&
        progressPrepareQuest_8_3 === 0) {
        questionStars.innerHTML = `
            <li id="questionStar_8_1" class="fill"></li>
            <li id="questionStar_8_2"></li>
            <li id="questionStar_8_3"></li>
        `;
    } else if (progressPrepareQuest_8_1 === 0 &&
        progressPrepareQuest_8_2 === 0 &&
        progressPrepareQuest_8_3 === 1) {
        questionStars.innerHTML = `
            <li id="questionStar_8_1"></li>
            <li id="questionStar_8_2"></li>
            <li id="questionStar_8_3" class="fill"></li>
        `;
    } else if (progressPrepareQuest_8_1 === 1 &&
        progressPrepareQuest_8_2 === 0 &&
        progressPrepareQuest_8_3 === 1) {
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
                let progressPrepareQuest_8 = JSON.parse(localStorage.getItem('progressPrepareQuest_8'));
                let progressPrepareQuestSum_8_2 = progressPrepareQuest_8_2 + 1;
                let progressPrepareQuestSum_8 = progressPrepareQuestSum_8_2 + progressPrepareQuest_8;

                localStorage.setItem('progressPrepareQuest_8_2', JSON.stringify(progressPrepareQuestSum_8_2));
                localStorage.setItem('progressPrepareQuest_8', JSON.stringify(progressPrepareQuestSum_8));
                if (progressPrepareQuestSum_8_2 === 1) {
                    questionStar_8_2.className += 'fill';
                }
            });
        }
    }

    questPrepareCatLoad.answerBlock(answerWrightNum, 'Так держать!');

    questArrowBack.arrowNext();
    const arrowNextClick = document.getElementById('answerNext'),
        questValue_8_3 = JSON.parse(localStorage.getItem('progressPrepareQuest_8_3'))
    ;
    arrowNextClick.addEventListener('click', () => {
        gsap.to(containerWrapperCategory, {
            autoAlpha: 0,
            onComplete: () => {
                if (progressPrepareQuest_8_1 === 0 &&
                    progressPrepareQuest_8_2 === 0 &&
                    progressPrepareQuest_8_3 === 0) {
                    wrapper.removeChild(questionStars);
                } else if (progressPrepareQuest_8_1 === 1 &&
                    progressPrepareQuest_8_2 === 0 &&
                    progressPrepareQuest_8_3 === 0) {
                    wrapper.removeChild(questionStars);
                } else if (progressPrepareQuest_8_1 === 0 &&
                    progressPrepareQuest_8_2 === 0 &&
                    progressPrepareQuest_8_3 === 1) {
                    wrapper.removeChild(questionStars);
                }
                container.removeChild(arrowBackClick);
                container.removeChild(arrowNextClick);
                container.removeChild(containerWrapperCategory);
                wrapper.className = 'wrapper';
                if (questValue_8_3 === 1) {
                    prepareCategory();
                    lockSubQuestPrepare();
                } else if (questValue_8_3 === 0) {
                    questionPrepareCat_8_3();
                }
            }
        });
        if (progressPrepareQuest_8_1 === 1 &&
            progressPrepareQuest_8_2 === 0 &&
            progressPrepareQuest_8_3 === 1) {
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

function questionPrepareCat_8_3() {
    let questPrepareCatLoad = new Question();
    let questArrowBack = new ArrowsAll();
    let answerWrightNum = 2;
    let progressPrepareQuest_8_1 = JSON.parse(localStorage.getItem('progressPrepareQuest_8_1'));
    let progressPrepareQuest_8_2 = JSON.parse(localStorage.getItem('progressPrepareQuest_8_2'));
    let progressPrepareQuest_8_3 = JSON.parse(localStorage.getItem('progressPrepareQuest_8_3'));

    if (localStorage.getItem('progressPrepareQuest_8_3') === null) {
        localStorage.setItem('progressPrepareQuest_8_3', JSON.stringify(progressPrepareQuest_8_3));
    }

    questPrepareCatLoad.questionBlock('Подготовка', 'Назови планету', 'На какой из планет Солнечной системы астрономы наблюдают ярчайшие полярные сияния?', 'Марс', 'Земля', 'Юпитер');

    let answerVar_8_3_1 = document.getElementById('answerVar_1'),
        answerVar_8_3_2 = document.getElementById('answerVar_2'),
        answerVar_8_3_3 = document.getElementById('answerVar_3'),
        answerVarRight_8_3 = [answerVar_8_3_1, answerVar_8_3_2, answerVar_8_3_3],
        questionStars = document.createElement('ul')
    ;

    questionStars.className = 'wrapper__stars';
    wrapper.appendChild(questionStars);

    if (progressPrepareQuest_8_1 === 1 &&
        progressPrepareQuest_8_2 === 1 &&
        progressPrepareQuest_8_3 === 0) {
        questionStars.innerHTML = `
            <li id="questionStar_8_1" class="fill"></li>
            <li id="questionStar_8_2" class="fill"></li>
            <li id="questionStar_8_3"></li>
        `;
    } else if (progressPrepareQuest_8_1 === 1 &&
        progressPrepareQuest_8_2 === 0 &&
        progressPrepareQuest_8_3 === 0) {
        questionStars.innerHTML = `
            <li id="questionStar_8_1" class="fill"></li>
            <li id="questionStar_8_2"></li>
            <li id="questionStar_8_3"></li>
        `;
    } else if (progressPrepareQuest_8_1 === 0 &&
        progressPrepareQuest_8_2 === 1 &&
        progressPrepareQuest_8_3 === 0) {
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
                let progressPrepareQuest_8 = JSON.parse(localStorage.getItem('progressPrepareQuest_8'));
                let progressPrepareQuestSum_8_3 = progressPrepareQuest_8_3 + 1;
                let progressPrepareQuestSum_8 = progressPrepareQuestSum_8_3 + progressPrepareQuest_8;

                localStorage.setItem('progressPrepareQuest_8_3', JSON.stringify(progressPrepareQuestSum_8_3));
                localStorage.setItem('progressPrepareQuest_8', JSON.stringify(progressPrepareQuestSum_8));
                localStorage.setItem('progressPrepareAll', JSON.stringify(progressPrepareQuestSum_8));
                if (progressPrepareQuestSum_8_3 === 1) {
                    questionStar_8_3.className += 'fill';
                }
            });
        }
    }

    questPrepareCatLoad.answerBlock(answerWrightNum, 'Ну надо же, верно!');

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