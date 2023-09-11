if (localStorage.getItem('progressPrepareQuest_6') === null) {
    localStorage.setItem('progressPrepareQuest_6', JSON.stringify(0));
}

function questionPrepareCat_6_1() {
    let questPrepareCatLoad = new Question();
    let questArrowBack = new ArrowsAll();
    let answerWrightNum = 2;
    let progressPrepareQuest_6_1 = JSON.parse(localStorage.getItem('progressPrepareQuest_6_1'));
    let progressPrepareQuest_6_2 = JSON.parse(localStorage.getItem('progressPrepareQuest_6_2'));
    let progressPrepareQuest_6_3 = JSON.parse(localStorage.getItem('progressPrepareQuest_6_3'));

    if (localStorage.getItem('progressPrepareQuest_6_1') === null) {
        localStorage.setItem('progressPrepareQuest_6_1', JSON.stringify(progressPrepareQuest_6_1));
    }

    questPrepareCatLoad.questionBlock('Подготовка', 'Отгадай планету', 'Эта планета гигант в 61 раз больше Земли и в 15 раз тяжелее, имеет с десяток спутников. Все спутники носят имена Шекспировских героев', 'Нептун', 'Земля', 'Уран');

    let answerVar_6_1_1 = document.getElementById('answerVar_1'),
        answerVar_6_1_2 = document.getElementById('answerVar_2'),
        answerVar_6_1_3 = document.getElementById('answerVar_3'),
        answerVarRight_6_1 = [answerVar_6_1_1, answerVar_6_1_2, answerVar_6_1_3],
        questionStars = document.createElement('ul')
    ;

    questionStars.className = 'wrapper__stars';
    wrapper.appendChild(questionStars);

    if (progressPrepareQuest_6_1 === 0 &&
        progressPrepareQuest_6_2 === 1 &&
        progressPrepareQuest_6_3 === 0) {
        questionStars.innerHTML = `
            <li id="questionStar_6_1"></li>
            <li id="questionStar_6_2" class="fill"></li>
            <li id="questionStar_6_3"></li>
        `;
    } else if (progressPrepareQuest_6_1 === 0 &&
        progressPrepareQuest_6_2 === 0 &&
        progressPrepareQuest_6_3 === 1) {
        questionStars.innerHTML = `
            <li id="questionStar_6_1"></li>
            <li id="questionStar_6_2"></li>
            <li id="questionStar_6_3" class="fill"></li>
        `;
    } else if (progressPrepareQuest_6_1 === 0 &&
        progressPrepareQuest_6_2 === 1 &&
        progressPrepareQuest_6_3 === 1) {
        questionStars.innerHTML = `
            <li id="questionStar_6_1"></li>
            <li id="questionStar_6_2" class="fill"></li>
            <li id="questionStar_6_3" class="fill"></li>
        `;
    } else {
        questionStars.innerHTML = `
            <li id="questionStar_6_1"></li>
            <li id="questionStar_6_2"></li>
            <li id="questionStar_6_3"></li>
        `;
    }

    const questionStar_6_1 = document.getElementById('questionStar_6_1');

    for (let i = 0; i < answerVarRight_6_1.length; i++) {
        if (answerVarRight_6_1[i] === answerVarRight_6_1[answerWrightNum]) {
            answerVarRight_6_1[i].addEventListener('click', () => {
                let progressPrepareQuest_6 = JSON.parse(localStorage.getItem('progressPrepareQuest_6'));
                let progressPrepareQuestSum_6_1 = progressPrepareQuest_6_1 + 1;
                let progressPrepareQuestSum_6 = progressPrepareQuestSum_6_1 + progressPrepareQuest_6;

                localStorage.setItem('progressPrepareQuest_6_1', JSON.stringify(progressPrepareQuestSum_6_1));
                localStorage.setItem('progressPrepareQuest_6', JSON.stringify(progressPrepareQuestSum_6));
                if (progressPrepareQuestSum_6_1 === 1) {
                    questionStar_6_1.className += 'fill';
                }
            });
        }
    }

    questPrepareCatLoad.answerBlock(answerWrightNum, 'Такой вот гигант!');

    questArrowBack.arrowNext();
    const arrowNextClick = document.getElementById('answerNext'),
        questValue_6_2 = JSON.parse(localStorage.getItem('progressPrepareQuest_6_2')),
        questValue_6_3 = JSON.parse(localStorage.getItem('progressPrepareQuest_6_3'))
    ;
    arrowNextClick.addEventListener('click', () => {
        gsap.to(containerWrapperCategory, {
            autoAlpha: 0,
            onComplete: () => {
                if (progressPrepareQuest_6_1 === 0 &&
                    progressPrepareQuest_6_2 === 0 &&
                    progressPrepareQuest_6_3 === 0) {
                    wrapper.removeChild(questionStars);
                } else if (progressPrepareQuest_6_1 === 0 &&
                    progressPrepareQuest_6_2 === 1 &&
                    progressPrepareQuest_6_3 === 0) {
                    wrapper.removeChild(questionStars);
                } else if (progressPrepareQuest_6_1 === 0 &&
                    progressPrepareQuest_6_2 === 0 &&
                    progressPrepareQuest_6_3 === 1) {
                    wrapper.removeChild(questionStars);
                }
                container.removeChild(arrowBackClick);
                container.removeChild(arrowNextClick);
                container.removeChild(containerWrapperCategory);
                wrapper.className = 'wrapper';
                if (questValue_6_2 === 1 && questValue_6_3 === 1) {
                    prepareCategory();
                    lockSubQuestPrepare();
                } else if (questValue_6_2 === 0) {
                    questionPrepareCat_6_2();
                } else if (questValue_6_2 === 1 && questValue_6_3 === 0) {
                    questionPrepareCat_6_3();
                }
            }
        });
        if (progressPrepareQuest_6_1 === 0 &&
            progressPrepareQuest_6_2 === 1 &&
            progressPrepareQuest_6_3 === 1) {
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

function questionPrepareCat_6_2() {
    let questPrepareCatLoad = new Question();
    let questArrowBack = new ArrowsAll();
    let answerWrightNum = 2;
    let progressPrepareQuest_6_1 = JSON.parse(localStorage.getItem('progressPrepareQuest_6_1'));
    let progressPrepareQuest_6_2 = JSON.parse(localStorage.getItem('progressPrepareQuest_6_2'));
    let progressPrepareQuest_6_3 = JSON.parse(localStorage.getItem('progressPrepareQuest_6_3'));

    if (localStorage.getItem('progressPrepareQuest_6_2') === null) {
        localStorage.setItem('progressPrepareQuest_6_2', JSON.stringify(progressPrepareQuest_6_2));
    }

    questPrepareCatLoad.questionBlock('Подготовка', 'Подбери планете спутник ', 'Планета Сатурн', 'спутник Титания', 'спутник Тритон', 'спутник Титан');

    let answerVar_6_2_1 = document.getElementById('answerVar_1'),
        answerVar_6_2_2 = document.getElementById('answerVar_2'),
        answerVar_6_2_3 = document.getElementById('answerVar_3'),
        answerVarRight_6_2 = [answerVar_6_2_1, answerVar_6_2_2, answerVar_6_2_3],
        questionStars = document.createElement('ul')
    ;

    questionStars.className = 'wrapper__stars';
    wrapper.appendChild(questionStars);

    if (progressPrepareQuest_6_1 === 1 &&
        progressPrepareQuest_6_2 === 0 &&
        progressPrepareQuest_6_3 === 0) {
        questionStars.innerHTML = `
            <li id="questionStar_6_1" class="fill"></li>
            <li id="questionStar_6_2"></li>
            <li id="questionStar_6_3"></li>
        `;
    } else if (progressPrepareQuest_6_1 === 0 &&
        progressPrepareQuest_6_2 === 0 &&
        progressPrepareQuest_6_3 === 1) {
        questionStars.innerHTML = `
            <li id="questionStar_6_1"></li>
            <li id="questionStar_6_2"></li>
            <li id="questionStar_6_3" class="fill"></li>
        `;
    } else if (progressPrepareQuest_6_1 === 1 &&
        progressPrepareQuest_6_2 === 0 &&
        progressPrepareQuest_6_3 === 1) {
        questionStars.innerHTML = `
            <li id="questionStar_6_1" class="fill"></li>
            <li id="questionStar_6_2"></li>
            <li id="questionStar_6_3" class="fill"></li>
        `;
    } else {
        questionStars.innerHTML = `
            <li id="questionStar_6_1"></li>
            <li id="questionStar_6_2"></li>
            <li id="questionStar_6_3"></li>
        `;
    }

    const questionStar_6_2 = document.getElementById('questionStar_6_2');

    for (let i = 0; i < answerVarRight_6_2.length; i++) {
        if (answerVarRight_6_2[i] === answerVarRight_6_2[answerWrightNum]) {
            answerVarRight_6_2[i].addEventListener('click', () => {
                let progressPrepareQuest_6 = JSON.parse(localStorage.getItem('progressPrepareQuest_6'));
                let progressPrepareQuestSum_6_2 = progressPrepareQuest_6_2 + 1;
                let progressPrepareQuestSum_6 = progressPrepareQuestSum_6_2 + progressPrepareQuest_6;

                localStorage.setItem('progressPrepareQuest_6_2', JSON.stringify(progressPrepareQuestSum_6_2));
                localStorage.setItem('progressPrepareQuest_6', JSON.stringify(progressPrepareQuestSum_6));
                if (progressPrepareQuestSum_6_2 === 1) {
                    questionStar_6_2.className += 'fill';
                }
            });
        }
    }

    questPrepareCatLoad.answerBlock(answerWrightNum, 'Да – это он!');

    questArrowBack.arrowNext();
    const arrowNextClick = document.getElementById('answerNext'),
        questValue_6_3 = JSON.parse(localStorage.getItem('progressPrepareQuest_6_3'))
    ;
    arrowNextClick.addEventListener('click', () => {
        gsap.to(containerWrapperCategory, {
            autoAlpha: 0,
            onComplete: () => {
                if (progressPrepareQuest_6_1 === 0 &&
                    progressPrepareQuest_6_2 === 0 &&
                    progressPrepareQuest_6_3 === 0) {
                    wrapper.removeChild(questionStars);
                } else if (progressPrepareQuest_6_1 === 1 &&
                    progressPrepareQuest_6_2 === 0 &&
                    progressPrepareQuest_6_3 === 0) {
                    wrapper.removeChild(questionStars);
                } else if (progressPrepareQuest_6_1 === 0 &&
                    progressPrepareQuest_6_2 === 0 &&
                    progressPrepareQuest_6_3 === 1) {
                    wrapper.removeChild(questionStars);
                }
                container.removeChild(arrowBackClick);
                container.removeChild(arrowNextClick);
                container.removeChild(containerWrapperCategory);
                wrapper.className = 'wrapper';
                if (questValue_6_3 === 1) {
                    prepareCategory();
                    lockSubQuestPrepare();
                } else if (questValue_6_3 === 0) {
                    questionPrepareCat_6_3();
                }
            }
        });
        if (progressPrepareQuest_6_1 === 1 &&
            progressPrepareQuest_6_2 === 0 &&
            progressPrepareQuest_6_3 === 1) {
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

function questionPrepareCat_6_3() {
    let questPrepareCatLoad = new Question();
    let questArrowBack = new ArrowsAll();
    let answerWrightNum = 1;
    let progressPrepareQuest_6_1 = JSON.parse(localStorage.getItem('progressPrepareQuest_6_1'));
    let progressPrepareQuest_6_2 = JSON.parse(localStorage.getItem('progressPrepareQuest_6_2'));
    let progressPrepareQuest_6_3 = JSON.parse(localStorage.getItem('progressPrepareQuest_6_3'));

    if (localStorage.getItem('progressPrepareQuest_6_3') === null) {
        localStorage.setItem('progressPrepareQuest_6_3', JSON.stringify(progressPrepareQuest_6_3));
    }

    questPrepareCatLoad.questionBlock('Подготовка', 'Назови планету', 'На какой планете Солнечной системы дуют самые быстрые ветры?', 'Юпитер', 'Нептун', 'Уран');

    let answerVar_6_3_1 = document.getElementById('answerVar_1'),
        answerVar_6_3_2 = document.getElementById('answerVar_2'),
        answerVar_6_3_3 = document.getElementById('answerVar_3'),
        answerVarRight_6_3 = [answerVar_6_3_1, answerVar_6_3_2, answerVar_6_3_3],
        questionStars = document.createElement('ul')
    ;

    questionStars.className = 'wrapper__stars';
    wrapper.appendChild(questionStars);

    if (progressPrepareQuest_6_1 === 1 &&
        progressPrepareQuest_6_2 === 1 &&
        progressPrepareQuest_6_3 === 0) {
        questionStars.innerHTML = `
            <li id="questionStar_6_1" class="fill"></li>
            <li id="questionStar_6_2" class="fill"></li>
            <li id="questionStar_6_3"></li>
        `;
    } else if (progressPrepareQuest_6_1 === 1 &&
        progressPrepareQuest_6_2 === 0 &&
        progressPrepareQuest_6_3 === 0) {
        questionStars.innerHTML = `
            <li id="questionStar_6_1" class="fill"></li>
            <li id="questionStar_6_2"></li>
            <li id="questionStar_6_3"></li>
        `;
    } else if (progressPrepareQuest_6_1 === 0 &&
        progressPrepareQuest_6_2 === 1 &&
        progressPrepareQuest_6_3 === 0) {
        questionStars.innerHTML = `
            <li id="questionStar_6_1"></li>
            <li id="questionStar_6_2" class="fill"></li>
            <li id="questionStar_6_3"></li>
        `;
    } else {
        questionStars.innerHTML = `
            <li id="questionStar_6_1"></li>
            <li id="questionStar_6_2"></li>
            <li id="questionStar_6_3"></li>
        `;
    }

    const questionStar_6_3 = document.getElementById('questionStar_6_3');

    for (let i = 0; i < answerVarRight_6_3.length; i++) {
        if (answerVarRight_6_3[i] === answerVarRight_6_3[answerWrightNum]) {
            answerVarRight_6_3[i].addEventListener('click', () => {
                let progressPrepareQuest_6 = JSON.parse(localStorage.getItem('progressPrepareQuest_6'));
                let progressPrepareQuestSum_6_3 = progressPrepareQuest_6_3 + 1;
                let progressPrepareQuestSum_6 = progressPrepareQuestSum_6_3 + progressPrepareQuest_6;

                localStorage.setItem('progressPrepareQuest_6_3', JSON.stringify(progressPrepareQuestSum_6_3));
                localStorage.setItem('progressPrepareQuest_6', JSON.stringify(progressPrepareQuestSum_6));
                localStorage.setItem('progressPrepareAll', JSON.stringify(progressPrepareQuestSum_6));
                if (progressPrepareQuestSum_6_3 === 1) {
                    questionStar_6_3.className += 'fill';
                }
            });
        }
    }

    questPrepareCatLoad.answerBlock(answerWrightNum, 'Очень быстрые!');

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