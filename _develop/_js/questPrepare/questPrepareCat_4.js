if (localStorage.getItem('progressPrepareQuest_4') === null) {
    localStorage.setItem('progressPrepareQuest_4', JSON.stringify(0));
}

function questionPrepareCat_4_1() {
    let questPrepareCatLoad = new Question();
    let questArrowBack = new ArrowsAll();
    let answerWrightNum = 1;
    let progressPrepareQuest_4_1 = JSON.parse(localStorage.getItem('progressPrepareQuest_4_1'));
    let progressPrepareQuest_4_2 = JSON.parse(localStorage.getItem('progressPrepareQuest_4_2'));
    let progressPrepareQuest_4_3 = JSON.parse(localStorage.getItem('progressPrepareQuest_4_3'));

    if (localStorage.getItem('progressPrepareQuest_4_1') === null) {
        localStorage.setItem('progressPrepareQuest_4_1', JSON.stringify(progressPrepareQuest_4_1));
    }

    questPrepareCatLoad.questionBlock('Подготовка', 'Отгадай планету', 'Это первая планета, у которой были открыты спутники. Спутники вместе с этой планетой представляют собой уменьшенную копию Солнечной системы. наблюдение за этой планетой позволило рассчитать скорость света. Еще эта планета известна своим Большим Красным пятном.', 'Нептун', 'Юпитер', 'Меркурий');

    let answerVar_4_1_1 = document.getElementById('answerVar_1'),
        answerVar_4_1_2 = document.getElementById('answerVar_2'),
        answerVar_4_1_3 = document.getElementById('answerVar_3'),
        answerVarRight_4_1 = [answerVar_4_1_1, answerVar_4_1_2, answerVar_4_1_3],
        questionStars = document.createElement('ul')
    ;

    questionStars.className = 'wrapper__stars';
    wrapper.appendChild(questionStars);

    if (progressPrepareQuest_4_1 === 0 &&
        progressPrepareQuest_4_2 === 1 &&
        progressPrepareQuest_4_3 === 0) {
        questionStars.innerHTML = `
            <li id="questionStar_4_1"></li>
            <li id="questionStar_4_2" class="fill"></li>
            <li id="questionStar_4_3"></li>
        `;
    } else if (progressPrepareQuest_4_1 === 0 &&
        progressPrepareQuest_4_2 === 0 &&
        progressPrepareQuest_4_3 === 1) {
        questionStars.innerHTML = `
            <li id="questionStar_4_1"></li>
            <li id="questionStar_4_2"></li>
            <li id="questionStar_4_3" class="fill"></li>
        `;
    } else if (progressPrepareQuest_4_1 === 0 &&
        progressPrepareQuest_4_2 === 1 &&
        progressPrepareQuest_4_3 === 1) {
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
                let progressPrepareQuest_4 = JSON.parse(localStorage.getItem('progressPrepareQuest_4'));
                let progressPrepareQuestSum_4_1 = progressPrepareQuest_4_1 + 1;
                let progressPrepareQuestSum_4 = progressPrepareQuestSum_4_1 + progressPrepareQuest_4;

                localStorage.setItem('progressPrepareQuest_4_1', JSON.stringify(progressPrepareQuestSum_4_1));
                localStorage.setItem('progressPrepareQuest_4', JSON.stringify(progressPrepareQuestSum_4));
                if (progressPrepareQuestSum_4_1 === 1) {
                    questionStar_4_1.className += 'fill';
                }
            });
        }
    }

    questPrepareCatLoad.answerBlock(answerWrightNum, 'Именно так!');

    questArrowBack.arrowNext();
    const arrowNextClick = document.getElementById('answerNext'),
        questValue_4_2 = JSON.parse(localStorage.getItem('progressPrepareQuest_4_2')),
        questValue_4_3 = JSON.parse(localStorage.getItem('progressPrepareQuest_4_3'))
    ;
    arrowNextClick.addEventListener('click', () => {
        gsap.to(containerWrapperCategory, {
            autoAlpha: 0,
            onComplete: () => {
                if (progressPrepareQuest_4_1 === 0 &&
                    progressPrepareQuest_4_2 === 0 &&
                    progressPrepareQuest_4_3 === 0) {
                    wrapper.removeChild(questionStars);
                } else if (progressPrepareQuest_4_1 === 0 &&
                    progressPrepareQuest_4_2 === 1 &&
                    progressPrepareQuest_4_3 === 0) {
                    wrapper.removeChild(questionStars);
                } else if (progressPrepareQuest_4_1 === 0 &&
                    progressPrepareQuest_4_2 === 0 &&
                    progressPrepareQuest_4_3 === 1) {
                    wrapper.removeChild(questionStars);
                }
                container.removeChild(arrowBackClick);
                container.removeChild(arrowNextClick);
                container.removeChild(containerWrapperCategory);
                wrapper.className = 'wrapper';
                if (questValue_4_2 === 1 && questValue_4_3 === 1) {
                    prepareCategory();
                    lockSubQuestPrepare();
                } else if (questValue_4_2 === 0) {
                    questionPrepareCat_4_2();
                } else if (questValue_4_2 === 1 && questValue_4_3 === 0) {
                    questionPrepareCat_4_3();
                }
            }
        });
        if (progressPrepareQuest_4_1 === 0 &&
            progressPrepareQuest_4_2 === 1 &&
            progressPrepareQuest_4_3 === 1) {
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

function questionPrepareCat_4_2() {
    let questPrepareCatLoad = new Question();
    let questArrowBack = new ArrowsAll();
    let answerWrightNum = 2;
    let progressPrepareQuest_4_1 = JSON.parse(localStorage.getItem('progressPrepareQuest_4_1'));
    let progressPrepareQuest_4_2 = JSON.parse(localStorage.getItem('progressPrepareQuest_4_2'));
    let progressPrepareQuest_4_3 = JSON.parse(localStorage.getItem('progressPrepareQuest_4_3'));

    if (localStorage.getItem('progressPrepareQuest_4_2') === null) {
        localStorage.setItem('progressPrepareQuest_4_2', JSON.stringify(progressPrepareQuest_4_2));
    }

    questPrepareCatLoad.questionBlock('Подготовка', 'Подбери планете спутник ', 'Планета Марс', 'спутник Титания', 'спутник Европа', 'спутник Деймос');

    let answerVar_4_2_1 = document.getElementById('answerVar_1'),
        answerVar_4_2_2 = document.getElementById('answerVar_2'),
        answerVar_4_2_3 = document.getElementById('answerVar_3'),
        answerVarRight_4_2 = [answerVar_4_2_1, answerVar_4_2_2, answerVar_4_2_3],
        questionStars = document.createElement('ul')
    ;

    questionStars.className = 'wrapper__stars';
    wrapper.appendChild(questionStars);

    if (progressPrepareQuest_4_1 === 1 &&
        progressPrepareQuest_4_2 === 0 &&
        progressPrepareQuest_4_3 === 0) {
        questionStars.innerHTML = `
            <li id="questionStar_4_1" class="fill"></li>
            <li id="questionStar_4_2"></li>
            <li id="questionStar_4_3"></li>
        `;
    } else if (progressPrepareQuest_4_1 === 0 &&
        progressPrepareQuest_4_2 === 0 &&
        progressPrepareQuest_4_3 === 1) {
        questionStars.innerHTML = `
            <li id="questionStar_4_1"></li>
            <li id="questionStar_4_2"></li>
            <li id="questionStar_4_3" class="fill"></li>
        `;
    } else if (progressPrepareQuest_4_1 === 1 &&
        progressPrepareQuest_4_2 === 0 &&
        progressPrepareQuest_4_3 === 1) {
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
                let progressPrepareQuest_4 = JSON.parse(localStorage.getItem('progressPrepareQuest_4'));
                let progressPrepareQuestSum_4_2 = progressPrepareQuest_4_2 + 1;
                let progressPrepareQuestSum_4 = progressPrepareQuestSum_4_2 + progressPrepareQuest_4;

                localStorage.setItem('progressPrepareQuest_4_2', JSON.stringify(progressPrepareQuestSum_4_2));
                localStorage.setItem('progressPrepareQuest_4', JSON.stringify(progressPrepareQuestSum_4));
                if (progressPrepareQuestSum_4_2 === 1) {
                    questionStar_4_2.className += 'fill';
                }
            });
        }
    }

    questPrepareCatLoad.answerBlock(answerWrightNum, 'Правильно!');

    questArrowBack.arrowNext();
    const arrowNextClick = document.getElementById('answerNext'),
        questValue_4_3 = JSON.parse(localStorage.getItem('progressPrepareQuest_4_3'))
    ;
    arrowNextClick.addEventListener('click', () => {
        gsap.to(containerWrapperCategory, {
            autoAlpha: 0,
            onComplete: () => {
                if (progressPrepareQuest_4_1 === 0 &&
                    progressPrepareQuest_4_2 === 0 &&
                    progressPrepareQuest_4_3 === 0) {
                    wrapper.removeChild(questionStars);
                } else if (progressPrepareQuest_4_1 === 1 &&
                    progressPrepareQuest_4_2 === 0 &&
                    progressPrepareQuest_4_3 === 0) {
                    wrapper.removeChild(questionStars);
                } else if (progressPrepareQuest_4_1 === 0 &&
                    progressPrepareQuest_4_2 === 0 &&
                    progressPrepareQuest_4_3 === 1) {
                    wrapper.removeChild(questionStars);
                }
                container.removeChild(arrowBackClick);
                container.removeChild(arrowNextClick);
                container.removeChild(containerWrapperCategory);
                wrapper.className = 'wrapper';
                if (questValue_4_3 === 1) {
                    prepareCategory();
                    lockSubQuestPrepare();
                } else if (questValue_4_3 === 0) {
                    questionPrepareCat_4_3();
                }
            }
        });
        if (progressPrepareQuest_4_1 === 1 &&
            progressPrepareQuest_4_2 === 0 &&
            progressPrepareQuest_4_3 === 1) {
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

function questionPrepareCat_4_3() {
    let questPrepareCatLoad = new Question();
    let questArrowBack = new ArrowsAll();
    let answerWrightNum = 1;
    let progressPrepareQuest_4_1 = JSON.parse(localStorage.getItem('progressPrepareQuest_4_1'));
    let progressPrepareQuest_4_2 = JSON.parse(localStorage.getItem('progressPrepareQuest_4_2'));
    let progressPrepareQuest_4_3 = JSON.parse(localStorage.getItem('progressPrepareQuest_4_3'));

    if (localStorage.getItem('progressPrepareQuest_4_3') === null) {
        localStorage.setItem('progressPrepareQuest_4_3', JSON.stringify(progressPrepareQuest_4_3));
    }

    questPrepareCatLoad.questionBlock('Подготовка', 'Назови планету', 'Какая планета Солнечной системы весит больше прочих планет и лун вместе взятых?', 'Меркурий', 'Юпитер', 'Уран');

    let answerVar_4_3_1 = document.getElementById('answerVar_1'),
        answerVar_4_3_2 = document.getElementById('answerVar_2'),
        answerVar_4_3_3 = document.getElementById('answerVar_3'),
        answerVarRight_4_3 = [answerVar_4_3_1, answerVar_4_3_2, answerVar_4_3_3],
        questionStars = document.createElement('ul')
    ;

    questionStars.className = 'wrapper__stars';
    wrapper.appendChild(questionStars);

    if (progressPrepareQuest_4_1 === 1 &&
        progressPrepareQuest_4_2 === 1 &&
        progressPrepareQuest_4_3 === 0) {
        questionStars.innerHTML = `
            <li id="questionStar_4_1" class="fill"></li>
            <li id="questionStar_4_2" class="fill"></li>
            <li id="questionStar_4_3"></li>
        `;
    } else if (progressPrepareQuest_4_1 === 1 &&
        progressPrepareQuest_4_2 === 0 &&
        progressPrepareQuest_4_3 === 0) {
        questionStars.innerHTML = `
            <li id="questionStar_4_1" class="fill"></li>
            <li id="questionStar_4_2"></li>
            <li id="questionStar_4_3"></li>
        `;
    } else if (progressPrepareQuest_4_1 === 0 &&
        progressPrepareQuest_4_2 === 1 &&
        progressPrepareQuest_4_3 === 0) {
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
                let progressPrepareQuest_4 = JSON.parse(localStorage.getItem('progressPrepareQuest_4'));
                let progressPrepareQuestSum_4_3 = progressPrepareQuest_4_3 + 1;
                let progressPrepareQuestSum_4 = progressPrepareQuestSum_4_3 + progressPrepareQuest_4;

                localStorage.setItem('progressPrepareQuest_4_3', JSON.stringify(progressPrepareQuestSum_4_3));
                localStorage.setItem('progressPrepareQuest_4', JSON.stringify(progressPrepareQuestSum_4));
                localStorage.setItem('progressPrepareAll', JSON.stringify(progressPrepareQuestSum_4));
                if (progressPrepareQuestSum_4_3 === 1) {
                    questionStar_4_3.className += 'fill';
                }
            });
        }
    }

    questPrepareCatLoad.answerBlock(answerWrightNum, 'Ну конечно же!');

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