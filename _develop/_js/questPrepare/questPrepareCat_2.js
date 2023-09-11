if (localStorage.getItem('progressPrepareQuest_2') === null) {
    localStorage.setItem('progressPrepareQuest_2', JSON.stringify(0));
}

function questionPrepareCat_2_1() {
    let questPrepareCatLoad = new Question();
    let questArrowBack = new ArrowsAll();
    let answerWrightNum = 1;
    let progressPrepareQuest_2_1 = JSON.parse(localStorage.getItem('progressPrepareQuest_2_1'));
    let progressPrepareQuest_2_2 = JSON.parse(localStorage.getItem('progressPrepareQuest_2_2'));
    let progressPrepareQuest_2_3 = JSON.parse(localStorage.getItem('progressPrepareQuest_2_3'));

    if (localStorage.getItem('progressPrepareQuest_2_1') === null) {
        localStorage.setItem('progressPrepareQuest_2_1', JSON.stringify(progressPrepareQuest_2_1));
    }

    questPrepareCatLoad.questionBlock('Подготовка', 'Отгадай планету', 'Вечерней звездой» и «Утренней звездой» называли древние греки самое яркое после Луны небесное светило, видимое на ночном небе.', 'Сатурн', 'Венера', 'Юпитер');

    let answerVar_2_1_1 = document.getElementById('answerVar_1'),
        answerVar_2_1_2 = document.getElementById('answerVar_2'),
        answerVar_2_1_3 = document.getElementById('answerVar_3'),
        answerVarRight_2_1 = [answerVar_2_1_1, answerVar_2_1_2, answerVar_2_1_3],
        questionStars = document.createElement('ul')
    ;

    questionStars.className = 'wrapper__stars';
    wrapper.appendChild(questionStars);

    if (progressPrepareQuest_2_1 === 0 &&
        progressPrepareQuest_2_2 === 1 &&
        progressPrepareQuest_2_3 === 0) {
        questionStars.innerHTML = `
            <li id="questionStar_2_1"></li>
            <li id="questionStar_2_2" class="fill"></li>
            <li id="questionStar_2_3"></li>
        `;
    } else if (progressPrepareQuest_2_1 === 0 &&
        progressPrepareQuest_2_2 === 0 &&
        progressPrepareQuest_2_3 === 1) {
        questionStars.innerHTML = `
            <li id="questionStar_2_1"></li>
            <li id="questionStar_2_2"></li>
            <li id="questionStar_2_3" class="fill"></li>
        `;
    } else if (progressPrepareQuest_2_1 === 0 &&
        progressPrepareQuest_2_2 === 1 &&
        progressPrepareQuest_2_3 === 1) {
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
                let progressPrepareQuest_2 = JSON.parse(localStorage.getItem('progressPrepareQuest_2'));
                let progressPrepareQuestSum_2_1 = progressPrepareQuest_2_1 + 1;
                let progressPrepareQuestSum_2 = progressPrepareQuestSum_2_1 + progressPrepareQuest_2;

                localStorage.setItem('progressPrepareQuest_2_1', JSON.stringify(progressPrepareQuestSum_2_1));
                localStorage.setItem('progressPrepareQuest_2', JSON.stringify(progressPrepareQuestSum_2));
                if (progressPrepareQuestSum_2_1 === 1) {
                    questionStar_2_1.className += 'fill';
                }
            });
        }
    }

    questPrepareCatLoad.answerBlock(answerWrightNum, 'Правильно!');

    questArrowBack.arrowNext();
    const arrowNextClick = document.getElementById('answerNext'),
        questValue_2_2 = JSON.parse(localStorage.getItem('progressPrepareQuest_2_2')),
        questValue_2_3 = JSON.parse(localStorage.getItem('progressPrepareQuest_2_3'))
    ;
    arrowNextClick.addEventListener('click', () => {
        gsap.to(containerWrapperCategory, {
            autoAlpha: 0,
            onComplete: () => {
                if (progressPrepareQuest_2_1 === 0 &&
                    progressPrepareQuest_2_2 === 0 &&
                    progressPrepareQuest_2_3 === 0) {
                    wrapper.removeChild(questionStars);
                } else if (progressPrepareQuest_2_1 === 0 &&
                    progressPrepareQuest_2_2 === 1 &&
                    progressPrepareQuest_2_3 === 0) {
                    wrapper.removeChild(questionStars);
                } else if (progressPrepareQuest_2_1 === 0 &&
                    progressPrepareQuest_2_2 === 0 &&
                    progressPrepareQuest_2_3 === 1) {
                    wrapper.removeChild(questionStars);
                }
                container.removeChild(arrowBackClick);
                container.removeChild(arrowNextClick);
                container.removeChild(containerWrapperCategory);
                wrapper.className = 'wrapper';
                if (questValue_2_2 === 1 && questValue_2_3 === 1) {
                    prepareCategory();
                    lockSubQuestPrepare();
                } else if (questValue_2_2 === 0) {
                    questionPrepareCat_2_2();
                } else if (questValue_2_2 === 1 && questValue_2_3 === 0) {
                    questionPrepareCat_2_3();
                }
            }
        });
        if (progressPrepareQuest_2_1 === 0 &&
            progressPrepareQuest_2_2 === 1 &&
            progressPrepareQuest_2_3 === 1) {
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

function questionPrepareCat_2_2() {
    let questPrepareCatLoad = new Question();
    let questArrowBack = new ArrowsAll();
    let answerWrightNum = 2;
    let progressPrepareQuest_2_1 = JSON.parse(localStorage.getItem('progressPrepareQuest_2_1'));
    let progressPrepareQuest_2_2 = JSON.parse(localStorage.getItem('progressPrepareQuest_2_2'));
    let progressPrepareQuest_2_3 = JSON.parse(localStorage.getItem('progressPrepareQuest_2_3'));

    if (localStorage.getItem('progressPrepareQuest_2_2') === null) {
        localStorage.setItem('progressPrepareQuest_2_2', JSON.stringify(progressPrepareQuest_2_2));
    }

    questPrepareCatLoad.questionBlock('Подготовка', 'Подбери планете спутник', 'Планета Венера', 'спутник Деймос', 'спутник Тритон', 'Нет спутников');

    let answerVar_2_2_1 = document.getElementById('answerVar_1'),
        answerVar_2_2_2 = document.getElementById('answerVar_2'),
        answerVar_2_2_3 = document.getElementById('answerVar_3'),
        answerVarRight_2_2 = [answerVar_2_2_1, answerVar_2_2_2, answerVar_2_2_3],
        questionStars = document.createElement('ul')
    ;

    questionStars.className = 'wrapper__stars';
    wrapper.appendChild(questionStars);

    if (progressPrepareQuest_2_1 === 1 &&
        progressPrepareQuest_2_2 === 0 &&
        progressPrepareQuest_2_3 === 0) {
        questionStars.innerHTML = `
            <li id="questionStar_2_1" class="fill"></li>
            <li id="questionStar_2_2"></li>
            <li id="questionStar_2_3"></li>
        `;
    } else if (progressPrepareQuest_2_1 === 0 &&
        progressPrepareQuest_2_2 === 0 &&
        progressPrepareQuest_2_3 === 1) {
        questionStars.innerHTML = `
            <li id="questionStar_2_1"></li>
            <li id="questionStar_2_2"></li>
            <li id="questionStar_2_3" class="fill"></li>
        `;
    } else if (progressPrepareQuest_2_1 === 1 &&
        progressPrepareQuest_2_2 === 0 &&
        progressPrepareQuest_2_3 === 1) {
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
                let progressPrepareQuest_2 = JSON.parse(localStorage.getItem('progressPrepareQuest_2'));
                let progressPrepareQuestSum_2_2 = progressPrepareQuest_2_2 + 1;
                let progressPrepareQuestSum_2 = progressPrepareQuestSum_2_2 + progressPrepareQuest_2;

                localStorage.setItem('progressPrepareQuest_2_2', JSON.stringify(progressPrepareQuestSum_2_2));
                localStorage.setItem('progressPrepareQuest_2', JSON.stringify(progressPrepareQuestSum_2));
                if (progressPrepareQuestSum_2_2 === 1) {
                    questionStar_2_2.className += 'fill';
                }
            });
        }
    }

    questPrepareCatLoad.answerBlock(answerWrightNum, 'Именно так');

    questArrowBack.arrowNext();
    const arrowNextClick = document.getElementById('answerNext'),
        questValue_2_3 = JSON.parse(localStorage.getItem('progressPrepareQuest_2_3'))
    ;
    arrowNextClick.addEventListener('click', () => {
        gsap.to(containerWrapperCategory, {
            autoAlpha: 0,
            onComplete: () => {
                if (progressPrepareQuest_2_1 === 0 &&
                    progressPrepareQuest_2_2 === 0 &&
                    progressPrepareQuest_2_3 === 0) {
                    wrapper.removeChild(questionStars);
                } else if (progressPrepareQuest_2_1 === 1 &&
                    progressPrepareQuest_2_2 === 0 &&
                    progressPrepareQuest_2_3 === 0) {
                    wrapper.removeChild(questionStars);
                } else if (progressPrepareQuest_2_1 === 0 &&
                    progressPrepareQuest_2_2 === 0 &&
                    progressPrepareQuest_2_3 === 1) {
                    wrapper.removeChild(questionStars);
                }
                container.removeChild(arrowBackClick);
                container.removeChild(arrowNextClick);
                container.removeChild(containerWrapperCategory);
                wrapper.className = 'wrapper';
                if (questValue_2_3 === 1) {
                    prepareCategory();
                    lockSubQuestPrepare();
                } else if (questValue_2_3 === 0) {
                    questionPrepareCat_2_3();
                }
            }
        });
        if (progressPrepareQuest_2_1 === 1 &&
            progressPrepareQuest_2_2 === 0 &&
            progressPrepareQuest_2_3 === 1) {
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

function questionPrepareCat_2_3() {
    let questPrepareCatLoad = new Question();
    let questArrowBack = new ArrowsAll();
    let answerWrightNum = 1;
    let progressPrepareQuest_2_1 = JSON.parse(localStorage.getItem('progressPrepareQuest_2_1'));
    let progressPrepareQuest_2_2 = JSON.parse(localStorage.getItem('progressPrepareQuest_2_2'));
    let progressPrepareQuest_2_3 = JSON.parse(localStorage.getItem('progressPrepareQuest_2_3'));

    if (localStorage.getItem('progressPrepareQuest_2_3') === null) {
        localStorage.setItem('progressPrepareQuest_2_3', JSON.stringify(progressPrepareQuest_2_3));
    }

    questPrepareCatLoad.questionBlock('Подготовка', 'Назови планету', 'Какие две планеты Солнечной системы не имеют естественных спутников?', 'Марс и Юпитер', 'Меркурий и Венера', 'Плутон и Нептун');

    let answerVar_2_3_1 = document.getElementById('answerVar_1'),
        answerVar_2_3_2 = document.getElementById('answerVar_2'),
        answerVar_2_3_3 = document.getElementById('answerVar_3'),
        answerVarRight_2_3 = [answerVar_2_3_1, answerVar_2_3_2, answerVar_2_3_3],
        questionStars = document.createElement('ul')
    ;

    questionStars.className = 'wrapper__stars';
    wrapper.appendChild(questionStars);

    if (progressPrepareQuest_2_1 === 1 &&
        progressPrepareQuest_2_2 === 1 &&
        progressPrepareQuest_2_3 === 0) {
        questionStars.innerHTML = `
            <li id="questionStar_2_1" class="fill"></li>
            <li id="questionStar_2_2" class="fill"></li>
            <li id="questionStar_2_3"></li>
        `;
    } else if (progressPrepareQuest_2_1 === 1 &&
        progressPrepareQuest_2_2 === 0 &&
        progressPrepareQuest_2_3 === 0) {
        questionStars.innerHTML = `
            <li id="questionStar_2_1" class="fill"></li>
            <li id="questionStar_2_2"></li>
            <li id="questionStar_2_3"></li>
        `;
    } else if (progressPrepareQuest_2_1 === 0 &&
        progressPrepareQuest_2_2 === 1 &&
        progressPrepareQuest_2_3 === 0) {
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
                let progressPrepareQuest_2 = JSON.parse(localStorage.getItem('progressPrepareQuest_2'));
                let progressPrepareQuestSum_2_3 = progressPrepareQuest_2_3 + 1;
                let progressPrepareQuestSum_2 = progressPrepareQuestSum_2_3 + progressPrepareQuest_2;

                localStorage.setItem('progressPrepareQuest_2_3', JSON.stringify(progressPrepareQuestSum_2_3));
                localStorage.setItem('progressPrepareQuest_2', JSON.stringify(progressPrepareQuestSum_2));
                localStorage.setItem('progressPrepareAll', JSON.stringify(progressPrepareQuestSum_2));
                if (progressPrepareQuestSum_2_3 === 1) {
                    questionStar_2_3.className += 'fill';
                }
            });
        }
    }

    questPrepareCatLoad.answerBlock(answerWrightNum, 'Всё верно!');

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