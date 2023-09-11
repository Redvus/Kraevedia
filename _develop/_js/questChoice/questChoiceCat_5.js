if (localStorage.getItem('progressChoiceQuest_5') === null) {
    localStorage.setItem('progressChoiceQuest_5', JSON.stringify(0));
}

function questionChoiceCat_5_1() {
    let questChoiceCatLoad = new Question();
    let questArrowBack = new ArrowsAll();
    let answerWrightNum = 1;
    let progressChoiceQuest_5_1 = JSON.parse(localStorage.getItem('progressChoiceQuest_5_1'));
    let progressChoiceQuest_5_2 = JSON.parse(localStorage.getItem('progressChoiceQuest_5_2'));
    let progressChoiceQuest_5_3 = JSON.parse(localStorage.getItem('progressChoiceQuest_5_3'));

    if (localStorage.getItem('progressChoiceQuest_5_1') === null) {
        localStorage.setItem('progressChoiceQuest_5_1', JSON.stringify(progressChoiceQuest_5_1));
    }

    questChoiceCatLoad.questionBlock('Отбор', 'Космос в цифрах', 'Известно, что в невесомости позвоночник человека вытягивается, он становится длиннее на?', '20 см', '8 см', '10 см');

    let answerVar_5_1_1 = document.getElementById('answerVar_1'),
        answerVar_5_1_2 = document.getElementById('answerVar_2'),
        answerVar_5_1_3 = document.getElementById('answerVar_3'),
        answerVarRight_5_1 = [answerVar_5_1_1, answerVar_5_1_2, answerVar_5_1_3],
        questionStars = document.createElement('ul')
    ;

    questionStars.className = 'wrapper__stars';
    wrapper.appendChild(questionStars);

    if (progressChoiceQuest_5_1 === 0 &&
        progressChoiceQuest_5_2 === 1 &&
        progressChoiceQuest_5_3 === 0) {
        questionStars.innerHTML = `
            <li id="questionStar_5_1"></li>
            <li id="questionStar_5_2" class="fill"></li>
            <li id="questionStar_5_3"></li>
        `;
    } else if (progressChoiceQuest_5_1 === 0 &&
        progressChoiceQuest_5_2 === 0 &&
        progressChoiceQuest_5_3 === 1) {
        questionStars.innerHTML = `
            <li id="questionStar_5_1"></li>
            <li id="questionStar_5_2"></li>
            <li id="questionStar_5_3" class="fill"></li>
        `;
    } else if (progressChoiceQuest_5_1 === 0 &&
        progressChoiceQuest_5_2 === 1 &&
        progressChoiceQuest_5_3 === 1) {
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
                let progressChoiceQuest_5 = JSON.parse(localStorage.getItem('progressChoiceQuest_5'));
                let progressChoiceQuestSum_5_1 = progressChoiceQuest_5_1 + 1;
                let progressChoiceQuestSum_5 = progressChoiceQuestSum_5_1 + progressChoiceQuest_5;

                localStorage.setItem('progressChoiceQuest_5_1', JSON.stringify(progressChoiceQuestSum_5_1));
                localStorage.setItem('progressChoiceQuest_5', JSON.stringify(progressChoiceQuestSum_5));
                if (progressChoiceQuestSum_5_1 === 1) {
                    questionStar_5_1.className += 'fill';
                }
            });
        }
    }

    questChoiceCatLoad.answerBlock(answerWrightNum, 'Прибавляют в росте все люди в невесомости из-за удлинения позвоночника. После полёта он опять укорачивается. Оба процесса сопровождаются болями в спине');

    questArrowBack.arrowNext();
    const arrowNextClick = document.getElementById('answerNext'),
        questValue_5_2 = JSON.parse(localStorage.getItem('progressChoiceQuest_5_2')),
        questValue_5_3 = JSON.parse(localStorage.getItem('progressChoiceQuest_5_3'))
    ;
    arrowNextClick.addEventListener('click', () => {
        gsap.to(containerWrapperCategory, {
            autoAlpha: 0,
            onComplete: () => {
                if (progressChoiceQuest_5_1 === 0 &&
                    progressChoiceQuest_5_2 === 0 &&
                    progressChoiceQuest_5_3 === 0) {
                    wrapper.removeChild(questionStars);
                } else if (progressChoiceQuest_5_1 === 0 &&
                    progressChoiceQuest_5_2 === 1 &&
                    progressChoiceQuest_5_3 === 0) {
                    wrapper.removeChild(questionStars);
                } else if (progressChoiceQuest_5_1 === 0 &&
                    progressChoiceQuest_5_2 === 0 &&
                    progressChoiceQuest_5_3 === 1) {
                    wrapper.removeChild(questionStars);
                }
                container.removeChild(arrowBackClick);
                container.removeChild(arrowNextClick);
                container.removeChild(containerWrapperCategory);
                wrapper.className = 'wrapper';
                if (questValue_5_2 === 1 && questValue_5_3 === 1) {
                    choiceCategoryDev();
                    lockSubQuestChoice();
                } else if (questValue_5_2 === 0) {
                    questionChoiceCat_5_2();
                } else if (questValue_5_2 === 1 && questValue_5_3 === 0) {
                    questionChoiceCat_5_3();
                }
            }
        });
        if (progressChoiceQuest_5_1 === 0 &&
            progressChoiceQuest_5_2 === 1 &&
            progressChoiceQuest_5_3 === 1) {
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
                choiceCategoryDev();
                lockSubQuestChoice();
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

function questionChoiceCat_5_2() {
    let questChoiceCatLoad = new Question();
    let questArrowBack = new ArrowsAll();
    let answerWrightNum = 1;
    let progressChoiceQuest_5_1 = JSON.parse(localStorage.getItem('progressChoiceQuest_5_1'));
    let progressChoiceQuest_5_2 = JSON.parse(localStorage.getItem('progressChoiceQuest_5_2'));
    let progressChoiceQuest_5_3 = JSON.parse(localStorage.getItem('progressChoiceQuest_5_3'));

    if (localStorage.getItem('progressChoiceQuest_5_2') === null) {
        localStorage.setItem('progressChoiceQuest_5_2', JSON.stringify(progressChoiceQuest_5_2));
    }

    questChoiceCatLoad.questionBlock('Отбор', 'Космос в цифрах', 'Столько раз в сутки космонавты на МКС наблюдают восход и заход Солнца?', 'Двадцать три', 'Шестнадцать', 'Тридцать два');

    let answerVar_5_2_1 = document.getElementById('answerVar_1'),
        answerVar_5_2_2 = document.getElementById('answerVar_2'),
        answerVar_5_2_3 = document.getElementById('answerVar_3'),
        answerVarRight_5_2 = [answerVar_5_2_1, answerVar_5_2_2, answerVar_5_2_3],
        questionStars = document.createElement('ul')
    ;

    questionStars.className = 'wrapper__stars';
    wrapper.appendChild(questionStars);

    if (progressChoiceQuest_5_1 === 1 &&
        progressChoiceQuest_5_2 === 0 &&
        progressChoiceQuest_5_3 === 0) {
        questionStars.innerHTML = `
            <li id="questionStar_5_1" class="fill"></li>
            <li id="questionStar_5_2"></li>
            <li id="questionStar_5_3"></li>
        `;
    } else if (progressChoiceQuest_5_1 === 0 &&
        progressChoiceQuest_5_2 === 0 &&
        progressChoiceQuest_5_3 === 1) {
        questionStars.innerHTML = `
            <li id="questionStar_5_1"></li>
            <li id="questionStar_5_2"></li>
            <li id="questionStar_5_3" class="fill"></li>
        `;
    } else if (progressChoiceQuest_5_1 === 1 &&
        progressChoiceQuest_5_2 === 0 &&
        progressChoiceQuest_5_3 === 1) {
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
                let progressChoiceQuest_5 = JSON.parse(localStorage.getItem('progressChoiceQuest_5'));
                let progressChoiceQuestSum_5_2 = progressChoiceQuest_5_2 + 1;
                let progressChoiceQuestSum_5 = progressChoiceQuestSum_5_2 + progressChoiceQuest_5;

                localStorage.setItem('progressChoiceQuest_5_2', JSON.stringify(progressChoiceQuestSum_5_2));
                localStorage.setItem('progressChoiceQuest_5', JSON.stringify(progressChoiceQuestSum_5));
                if (progressChoiceQuestSum_5_2 === 1) {
                    questionStar_5_2.className += 'fill';
                }
            });
        }
    }

    questChoiceCatLoad.answerBlock(answerWrightNum, 'Заходов и восходов Солнца видят люди, работающие на международной космической станции');

    questArrowBack.arrowNext();
    const arrowNextClick = document.getElementById('answerNext'),
        questValue_5_3 = JSON.parse(localStorage.getItem('progressChoiceQuest_5_3'))
    ;
    arrowNextClick.addEventListener('click', () => {
        gsap.to(containerWrapperCategory, {
            autoAlpha: 0,
            onComplete: () => {
                if (progressChoiceQuest_5_1 === 0 &&
                    progressChoiceQuest_5_2 === 0 &&
                    progressChoiceQuest_5_3 === 0) {
                    wrapper.removeChild(questionStars);
                } else if (progressChoiceQuest_5_1 === 1 &&
                    progressChoiceQuest_5_2 === 0 &&
                    progressChoiceQuest_5_3 === 0) {
                    wrapper.removeChild(questionStars);
                } else if (progressChoiceQuest_5_1 === 0 &&
                    progressChoiceQuest_5_2 === 0 &&
                    progressChoiceQuest_5_3 === 1) {
                    wrapper.removeChild(questionStars);
                }
                container.removeChild(arrowBackClick);
                container.removeChild(arrowNextClick);
                container.removeChild(containerWrapperCategory);
                wrapper.className = 'wrapper';
                if (questValue_5_3 === 1) {
                    choiceCategoryDev();
                    lockSubQuestChoice();
                } else if (questValue_5_3 === 0) {
                    questionChoiceCat_5_3();
                }
            }
        });
        if (progressChoiceQuest_5_1 === 0 &&
            progressChoiceQuest_5_2 === 1 &&
            progressChoiceQuest_5_3 === 1) {
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
                choiceCategoryDev();
                lockSubQuestChoice();
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

function questionChoiceCat_5_3() {
    let questChoiceCatLoad = new Question();
    let questArrowBack = new ArrowsAll();
    let answerWrightNum = 2;
    let progressChoiceQuest_5_1 = JSON.parse(localStorage.getItem('progressChoiceQuest_5_1'));
    let progressChoiceQuest_5_2 = JSON.parse(localStorage.getItem('progressChoiceQuest_5_2'));
    let progressChoiceQuest_5_3 = JSON.parse(localStorage.getItem('progressChoiceQuest_5_3'));

    if (localStorage.getItem('progressChoiceQuest_5_3') === null) {
        localStorage.setItem('progressChoiceQuest_5_3', JSON.stringify(progressChoiceQuest_5_3));
    }

    questChoiceCatLoad.questionBlock('Отбор', 'Космос в цифрах', 'Столько баскетбольных площадок составляет площадь солнечных батарей на МКС?', 'Двенадцать', 'Три', 'Восемь');

    let answerVar_5_3_1 = document.getElementById('answerVar_1'),
        answerVar_5_3_2 = document.getElementById('answerVar_2'),
        answerVar_5_3_3 = document.getElementById('answerVar_3'),
        answerVarRight_5_3 = [answerVar_5_3_1, answerVar_5_3_2, answerVar_5_3_3],
        questionStars = document.createElement('ul')
    ;

    questionStars.className = 'wrapper__stars';
    wrapper.appendChild(questionStars);

    if (progressChoiceQuest_5_1 === 1 &&
        progressChoiceQuest_5_2 === 1 &&
        progressChoiceQuest_5_3 === 0) {
        questionStars.innerHTML = `
            <li id="questionStar_5_1" class="fill"></li>
            <li id="questionStar_5_2" class="fill"></li>
            <li id="questionStar_5_3"></li>
        `;
    } else if (progressChoiceQuest_5_1 === 0 &&
        progressChoiceQuest_5_2 === 0 &&
        progressChoiceQuest_5_3 === 1) {
        questionStars.innerHTML = `
            <li id="questionStar_5_1"></li>
            <li id="questionStar_5_2"></li>
            <li id="questionStar_5_3" class="fill"></li>
        `;
    } else if (progressChoiceQuest_5_1 === 0 &&
        progressChoiceQuest_5_2 === 1 &&
        progressChoiceQuest_5_3 === 0) {
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
                let progressChoiceQuest_5 = JSON.parse(localStorage.getItem('progressChoiceQuest_5'));
                let progressChoiceQuestSum_5_3 = progressChoiceQuest_5_3 + 1;
                let progressChoiceQuestSum_5 = progressChoiceQuestSum_5_3 + progressChoiceQuest_5;

                localStorage.setItem('progressChoiceQuest_5_3', JSON.stringify(progressChoiceQuestSum_5_3));
                localStorage.setItem('progressChoiceQuest_5', JSON.stringify(progressChoiceQuestSum_5));
                localStorage.setItem('progressChoiceAll', JSON.stringify(progressChoiceQuestSum_5));
                if (progressChoiceQuestSum_5_3 === 1) {
                    questionStar_5_3.className += 'fill';
                }
            });
        }
    }

    questChoiceCatLoad.answerBlock(answerWrightNum, 'Единственным источником электрической энергии для МКС является Солнце, свет которого солнечные батареи станции преобразуют в электроэнергию.');

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
                choiceCategoryDev();
                lockSubQuestChoice();
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
                choiceCategoryDev();
                lockSubQuestChoice();
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