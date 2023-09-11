if (localStorage.getItem('progressPrepareQuest_7') === null) {
    localStorage.setItem('progressPrepareQuest_7', JSON.stringify(0));
}

function questionPrepareCat_7_1() {
    let questPrepareCatLoad = new Question();
    let questArrowBack = new ArrowsAll();
    let answerWrightNum = 1;
    let progressPrepareQuest_7_1 = JSON.parse(localStorage.getItem('progressPrepareQuest_7_1'));
    let progressPrepareQuest_7_2 = JSON.parse(localStorage.getItem('progressPrepareQuest_7_2'));
    let progressPrepareQuest_7_3 = JSON.parse(localStorage.getItem('progressPrepareQuest_7_3'));

    if (localStorage.getItem('progressPrepareQuest_7_1') === null) {
        localStorage.setItem('progressPrepareQuest_7_1', JSON.stringify(progressPrepareQuest_7_1));
    }

    questPrepareCatLoad.questionBlock('Подготовка', 'Отгадай планету', 'Эта планета названа в честь древнеримского божества, с именем которого связан морской праздник пересечения экватора.', 'Уран', 'Нептун', 'Сатурн');

    let answerVar_7_1_1 = document.getElementById('answerVar_1'),
        answerVar_7_1_2 = document.getElementById('answerVar_2'),
        answerVar_7_1_3 = document.getElementById('answerVar_3'),
        answerVarRight_7_1 = [answerVar_7_1_1, answerVar_7_1_2, answerVar_7_1_3],
        questionStars = document.createElement('ul')
    ;

    questionStars.className = 'wrapper__stars';
    wrapper.appendChild(questionStars);

    if (progressPrepareQuest_7_1 === 0 &&
        progressPrepareQuest_7_2 === 1 &&
        progressPrepareQuest_7_3 === 0) {
        questionStars.innerHTML = `
            <li id="questionStar_7_1"></li>
            <li id="questionStar_7_2" class="fill"></li>
            <li id="questionStar_7_3"></li>
        `;
    } else if (progressPrepareQuest_7_1 === 0 &&
        progressPrepareQuest_7_2 === 0 &&
        progressPrepareQuest_7_3 === 1) {
        questionStars.innerHTML = `
            <li id="questionStar_7_1"></li>
            <li id="questionStar_7_2"></li>
            <li id="questionStar_7_3" class="fill"></li>
        `;
    } else if (progressPrepareQuest_7_1 === 0 &&
        progressPrepareQuest_7_2 === 1 &&
        progressPrepareQuest_7_3 === 1) {
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
                let progressPrepareQuest_7 = JSON.parse(localStorage.getItem('progressPrepareQuest_7'));
                let progressPrepareQuestSum_7_1 = progressPrepareQuest_7_1 + 1;
                let progressPrepareQuestSum_7 = progressPrepareQuestSum_7_1 + progressPrepareQuest_7;

                localStorage.setItem('progressPrepareQuest_7_1', JSON.stringify(progressPrepareQuestSum_7_1));
                localStorage.setItem('progressPrepareQuest_7', JSON.stringify(progressPrepareQuestSum_7));
                if (progressPrepareQuestSum_7_1 === 1) {
                    questionStar_7_1.className += 'fill';
                }
            });
        }
    }

    questPrepareCatLoad.answerBlock(answerWrightNum, 'Точно так!');

    questArrowBack.arrowNext();
    const arrowNextClick = document.getElementById('answerNext'),
        questValue_7_2 = JSON.parse(localStorage.getItem('progressPrepareQuest_7_2')),
        questValue_7_3 = JSON.parse(localStorage.getItem('progressPrepareQuest_7_3'))
    ;
    arrowNextClick.addEventListener('click', () => {
        gsap.to(containerWrapperCategory, {
            autoAlpha: 0,
            onComplete: () => {
                if (progressPrepareQuest_7_1 === 0 &&
                    progressPrepareQuest_7_2 === 0 &&
                    progressPrepareQuest_7_3 === 0) {
                    wrapper.removeChild(questionStars);
                } else if (progressPrepareQuest_7_1 === 0 &&
                    progressPrepareQuest_7_2 === 1 &&
                    progressPrepareQuest_7_3 === 0) {
                    wrapper.removeChild(questionStars);
                } else if (progressPrepareQuest_7_1 === 0 &&
                    progressPrepareQuest_7_2 === 0 &&
                    progressPrepareQuest_7_3 === 1) {
                    wrapper.removeChild(questionStars);
                }
                container.removeChild(arrowBackClick);
                container.removeChild(arrowNextClick);
                container.removeChild(containerWrapperCategory);
                wrapper.className = 'wrapper';
                if (questValue_7_2 === 1 && questValue_7_3 === 1) {
                    prepareCategory();
                    lockSubQuestPrepare();
                } else if (questValue_7_2 === 0) {
                    questionPrepareCat_7_2();
                } else if (questValue_7_2 === 1 && questValue_7_3 === 0) {
                    questionPrepareCat_7_3();
                }
            }
        });
        if (progressPrepareQuest_7_1 === 0 &&
            progressPrepareQuest_7_2 === 1 &&
            progressPrepareQuest_7_3 === 1) {
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

function questionPrepareCat_7_2() {
    let questPrepareCatLoad = new Question();
    let questArrowBack = new ArrowsAll();
    let answerWrightNum = 1;
    let progressPrepareQuest_7_1 = JSON.parse(localStorage.getItem('progressPrepareQuest_7_1'));
    let progressPrepareQuest_7_2 = JSON.parse(localStorage.getItem('progressPrepareQuest_7_2'));
    let progressPrepareQuest_7_3 = JSON.parse(localStorage.getItem('progressPrepareQuest_7_3'));

    if (localStorage.getItem('progressPrepareQuest_7_2') === null) {
        localStorage.setItem('progressPrepareQuest_7_2', JSON.stringify(progressPrepareQuest_7_2));
    }

    questPrepareCatLoad.questionBlock('Подготовка', 'Подбери планете спутник ', 'Планета Уран', 'спутник Европа', 'спутник Титания', 'спутник Харон');

    let answerVar_7_2_1 = document.getElementById('answerVar_1'),
        answerVar_7_2_2 = document.getElementById('answerVar_2'),
        answerVar_7_2_3 = document.getElementById('answerVar_3'),
        answerVarRight_7_2 = [answerVar_7_2_1, answerVar_7_2_2, answerVar_7_2_3],
        questionStars = document.createElement('ul')
    ;

    questionStars.className = 'wrapper__stars';
    wrapper.appendChild(questionStars);

    if (progressPrepareQuest_7_1 === 1 &&
        progressPrepareQuest_7_2 === 0 &&
        progressPrepareQuest_7_3 === 0) {
        questionStars.innerHTML = `
            <li id="questionStar_7_1" class="fill"></li>
            <li id="questionStar_7_2"></li>
            <li id="questionStar_7_3"></li>
        `;
    } else if (progressPrepareQuest_7_1 === 0 &&
        progressPrepareQuest_7_2 === 0 &&
        progressPrepareQuest_7_3 === 1) {
        questionStars.innerHTML = `
            <li id="questionStar_7_1"></li>
            <li id="questionStar_7_2"></li>
            <li id="questionStar_7_3" class="fill"></li>
        `;
    } else if (progressPrepareQuest_7_1 === 1 &&
        progressPrepareQuest_7_2 === 0 &&
        progressPrepareQuest_7_3 === 1) {
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
                let progressPrepareQuest_7 = JSON.parse(localStorage.getItem('progressPrepareQuest_7'));
                let progressPrepareQuestSum_7_2 = progressPrepareQuest_7_2 + 1;
                let progressPrepareQuestSum_7 = progressPrepareQuestSum_7_2 + progressPrepareQuest_7;

                localStorage.setItem('progressPrepareQuest_7_2', JSON.stringify(progressPrepareQuestSum_7_2));
                localStorage.setItem('progressPrepareQuest_7', JSON.stringify(progressPrepareQuestSum_7));
                if (progressPrepareQuestSum_7_2 === 1) {
                    questionStar_7_2.className += 'fill';
                }
            });
        }
    }

    questPrepareCatLoad.answerBlock(answerWrightNum, 'Да – верно!');

    questArrowBack.arrowNext();
    const arrowNextClick = document.getElementById('answerNext'),
        questValue_7_3 = JSON.parse(localStorage.getItem('progressPrepareQuest_7_3'))
    ;
    arrowNextClick.addEventListener('click', () => {
        gsap.to(containerWrapperCategory, {
            autoAlpha: 0,
            onComplete: () => {
                if (progressPrepareQuest_7_1 === 0 &&
                    progressPrepareQuest_7_2 === 0 &&
                    progressPrepareQuest_7_3 === 0) {
                    wrapper.removeChild(questionStars);
                } else if (progressPrepareQuest_7_1 === 1 &&
                    progressPrepareQuest_7_2 === 0 &&
                    progressPrepareQuest_7_3 === 0) {
                    wrapper.removeChild(questionStars);
                } else if (progressPrepareQuest_7_1 === 0 &&
                    progressPrepareQuest_7_2 === 0 &&
                    progressPrepareQuest_7_3 === 1) {
                    wrapper.removeChild(questionStars);
                }
                container.removeChild(arrowBackClick);
                container.removeChild(arrowNextClick);
                container.removeChild(containerWrapperCategory);
                wrapper.className = 'wrapper';
                if (questValue_7_3 === 1) {
                    prepareCategory();
                    lockSubQuestPrepare();
                } else if (questValue_7_3 === 0) {
                    questionPrepareCat_7_3();
                }
            }
        });
        if (progressPrepareQuest_7_1 === 1 &&
            progressPrepareQuest_7_2 === 0 &&
            progressPrepareQuest_7_3 === 1) {
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

function questionPrepareCat_7_3() {
    let questPrepareCatLoad = new Question();
    let questArrowBack = new ArrowsAll();
    let answerWrightNum = 1;
    let progressPrepareQuest_7_1 = JSON.parse(localStorage.getItem('progressPrepareQuest_7_1'));
    let progressPrepareQuest_7_2 = JSON.parse(localStorage.getItem('progressPrepareQuest_7_2'));
    let progressPrepareQuest_7_3 = JSON.parse(localStorage.getItem('progressPrepareQuest_7_3'));

    if (localStorage.getItem('progressPrepareQuest_7_3') === null) {
        localStorage.setItem('progressPrepareQuest_7_3', JSON.stringify(progressPrepareQuest_7_3));
    }

    questPrepareCatLoad.questionBlock('Подготовка', 'Назови планету', 'Какая планета Солнечной системы названа именем предка верховного бога римлян?', 'Сатурн', 'Уран', 'Венера');

    let answerVar_7_3_1 = document.getElementById('answerVar_1'),
        answerVar_7_3_2 = document.getElementById('answerVar_2'),
        answerVar_7_3_3 = document.getElementById('answerVar_3'),
        answerVarRight_7_3 = [answerVar_7_3_1, answerVar_7_3_2, answerVar_7_3_3],
        questionStars = document.createElement('ul')
    ;

    questionStars.className = 'wrapper__stars';
    wrapper.appendChild(questionStars);

    if (progressPrepareQuest_7_1 === 1 &&
        progressPrepareQuest_7_2 === 1 &&
        progressPrepareQuest_7_3 === 0) {
        questionStars.innerHTML = `
            <li id="questionStar_7_1" class="fill"></li>
            <li id="questionStar_7_2" class="fill"></li>
            <li id="questionStar_7_3"></li>
        `;
    } else if (progressPrepareQuest_7_1 === 1 &&
        progressPrepareQuest_7_2 === 0 &&
        progressPrepareQuest_7_3 === 0) {
        questionStars.innerHTML = `
            <li id="questionStar_7_1" class="fill"></li>
            <li id="questionStar_7_2"></li>
            <li id="questionStar_7_3"></li>
        `;
    } else if (progressPrepareQuest_7_1 === 0 &&
        progressPrepareQuest_7_2 === 1 &&
        progressPrepareQuest_7_3 === 0) {
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
                let progressPrepareQuest_7 = JSON.parse(localStorage.getItem('progressPrepareQuest_7'));
                let progressPrepareQuestSum_7_3 = progressPrepareQuest_7_3 + 1;
                let progressPrepareQuestSum_7 = progressPrepareQuestSum_7_3 + progressPrepareQuest_7;

                localStorage.setItem('progressPrepareQuest_7_3', JSON.stringify(progressPrepareQuestSum_7_3));
                localStorage.setItem('progressPrepareQuest_7', JSON.stringify(progressPrepareQuestSum_7));
                localStorage.setItem('progressPrepareAll', JSON.stringify(progressPrepareQuestSum_7));
                if (progressPrepareQuestSum_7_3 === 1) {
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