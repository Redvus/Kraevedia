if (localStorage.getItem('progressChoiceQuest_8') === null) {
    localStorage.setItem('progressChoiceQuest_8', JSON.stringify(0));
}

function questionChoiceCat_8_1() {
    let questChoiceCatLoad = new Question();
    let questArrowBack = new ArrowsAll();
    let answerWrightNum = 1;
    let progressChoiceQuest_8_1 = JSON.parse(localStorage.getItem('progressChoiceQuest_8_1'));
    let progressChoiceQuest_8_2 = JSON.parse(localStorage.getItem('progressChoiceQuest_8_2'));
    let progressChoiceQuest_8_3 = JSON.parse(localStorage.getItem('progressChoiceQuest_8_3'));

    if (localStorage.getItem('progressChoiceQuest_8_1') === null) {
        localStorage.setItem('progressChoiceQuest_8_1', JSON.stringify(progressChoiceQuest_8_1));
    }

    questChoiceCatLoad.questionBlock('Отбор', 'Космос в кино', 'Чтобы выполнить задание и вернуться живыми домой космонавтам придётся пройти через тяжёлые испытания', '«Укрощение огня»', '«Время первых»', '«Салют – 7»');

    let answerVar_8_1_1 = document.getElementById('answerVar_1'),
        answerVar_8_1_2 = document.getElementById('answerVar_2'),
        answerVar_8_1_3 = document.getElementById('answerVar_3'),
        answerVarRight_8_1 = [answerVar_8_1_1, answerVar_8_1_2, answerVar_8_1_3],
        questionStars = document.createElement('ul')
    ;

    questionStars.className = 'wrapper__stars';
    wrapper.appendChild(questionStars);

    if (progressChoiceQuest_8_1 === 0 &&
        progressChoiceQuest_8_2 === 1 &&
        progressChoiceQuest_8_3 === 0) {
        questionStars.innerHTML = `
            <li id="questionStar_8_1"></li>
            <li id="questionStar_8_2" class="fill"></li>
            <li id="questionStar_8_3"></li>
        `;
    } else if (progressChoiceQuest_8_1 === 0 &&
        progressChoiceQuest_8_2 === 0 &&
        progressChoiceQuest_8_3 === 1) {
        questionStars.innerHTML = `
            <li id="questionStar_8_1"></li>
            <li id="questionStar_8_2"></li>
            <li id="questionStar_8_3" class="fill"></li>
        `;
    } else if (progressChoiceQuest_8_1 === 0 &&
        progressChoiceQuest_8_2 === 1 &&
        progressChoiceQuest_8_3 === 1) {
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
                let progressChoiceQuest_8 = JSON.parse(localStorage.getItem('progressChoiceQuest_8'));
                let progressChoiceQuestSum_8_1 = progressChoiceQuest_8_1 + 1;
                let progressChoiceQuestSum_8 = progressChoiceQuestSum_8_1 + progressChoiceQuest_8;

                localStorage.setItem('progressChoiceQuest_8_1', JSON.stringify(progressChoiceQuestSum_8_1));
                localStorage.setItem('progressChoiceQuest_8', JSON.stringify(progressChoiceQuestSum_8));
                if (progressChoiceQuestSum_8_1 === 1) {
                    questionStar_8_1.className += 'fill';
                }
            });
        }
    }

    questChoiceCatLoad.answerBlock(answerWrightNum, '«Вре́мя пе́рвых» — российский исторический фильм о первом выходе в открытый космос Алексея Леонова.');

    questArrowBack.arrowNext();
    const arrowNextClick = document.getElementById('answerNext'),
        questValue_8_2 = JSON.parse(localStorage.getItem('progressChoiceQuest_8_2')),
        questValue_8_3 = JSON.parse(localStorage.getItem('progressChoiceQuest_8_3'))
    ;
    arrowNextClick.addEventListener('click', () => {
        gsap.to(containerWrapperCategory, {
            autoAlpha: 0,
            onComplete: () => {
                if (progressChoiceQuest_8_1 === 0 &&
                    progressChoiceQuest_8_2 === 0 &&
                    progressChoiceQuest_8_3 === 0) {
                    wrapper.removeChild(questionStars);
                } else if (progressChoiceQuest_8_1 === 0 &&
                    progressChoiceQuest_8_2 === 1 &&
                    progressChoiceQuest_8_3 === 0) {
                    wrapper.removeChild(questionStars);
                } else if (progressChoiceQuest_8_1 === 0 &&
                    progressChoiceQuest_8_2 === 0 &&
                    progressChoiceQuest_8_3 === 1) {
                    wrapper.removeChild(questionStars);
                }
                container.removeChild(arrowBackClick);
                container.removeChild(arrowNextClick);
                container.removeChild(containerWrapperCategory);
                wrapper.className = 'wrapper';
                if (questValue_8_2 === 1 && questValue_8_3 === 1) {
                    choiceCategoryDev();
                    lockSubQuestChoice();
                } else if (questValue_8_2 === 0) {
                    questionChoiceCat_8_2();
                } else if (questValue_8_2 === 1 && questValue_8_3 === 0) {
                    questionChoiceCat_8_3();
                }
            }
        });
        if (progressChoiceQuest_8_1 === 0 &&
            progressChoiceQuest_8_2 === 1 &&
            progressChoiceQuest_8_3 === 1) {
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

function questionChoiceCat_8_2() {
    let questChoiceCatLoad = new Question();
    let questArrowBack = new ArrowsAll();
    let answerWrightNum = 2;
    let progressChoiceQuest_8_1 = JSON.parse(localStorage.getItem('progressChoiceQuest_8_1'));
    let progressChoiceQuest_8_2 = JSON.parse(localStorage.getItem('progressChoiceQuest_8_2'));
    let progressChoiceQuest_8_3 = JSON.parse(localStorage.getItem('progressChoiceQuest_8_3'));

    if (localStorage.getItem('progressChoiceQuest_8_2') === null) {
        localStorage.setItem('progressChoiceQuest_8_2', JSON.stringify(progressChoiceQuest_8_2));
    }

    questChoiceCatLoad.questionBlock('Отбор', 'Космос в кино', 'Лейтмотивом фильма является борьба за право быть первым.', '«Время первых»', '«Главный конструктор»', '«Гагарин. Первый в космосе»');

    let answerVar_8_2_1 = document.getElementById('answerVar_1'),
        answerVar_8_2_2 = document.getElementById('answerVar_2'),
        answerVar_8_2_3 = document.getElementById('answerVar_3'),
        answerVarRight_8_2 = [answerVar_8_2_1, answerVar_8_2_2, answerVar_8_2_3],
        questionStars = document.createElement('ul')
    ;

    questionStars.className = 'wrapper__stars';
    wrapper.appendChild(questionStars);

    if (progressChoiceQuest_8_1 === 1 &&
        progressChoiceQuest_8_2 === 0 &&
        progressChoiceQuest_8_3 === 0) {
        questionStars.innerHTML = `
            <li id="questionStar_8_1" class="fill"></li>
            <li id="questionStar_8_2"></li>
            <li id="questionStar_8_3"></li>
        `;
    } else if (progressChoiceQuest_8_1 === 0 &&
        progressChoiceQuest_8_2 === 0 &&
        progressChoiceQuest_8_3 === 1) {
        questionStars.innerHTML = `
            <li id="questionStar_8_1"></li>
            <li id="questionStar_8_2"></li>
            <li id="questionStar_8_3" class="fill"></li>
        `;
    } else if (progressChoiceQuest_8_1 === 1 &&
        progressChoiceQuest_8_2 === 0 &&
        progressChoiceQuest_8_3 === 1) {
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
                let progressChoiceQuest_8 = JSON.parse(localStorage.getItem('progressChoiceQuest_8'));
                let progressChoiceQuestSum_8_2 = progressChoiceQuest_8_2 + 1;
                let progressChoiceQuestSum_8 = progressChoiceQuestSum_8_2 + progressChoiceQuest_8;

                localStorage.setItem('progressChoiceQuest_8_2', JSON.stringify(progressChoiceQuestSum_8_2));
                localStorage.setItem('progressChoiceQuest_8', JSON.stringify(progressChoiceQuestSum_8));
                if (progressChoiceQuestSum_8_2 === 1) {
                    questionStar_8_2.className += 'fill';
                }
            });
        }
    }

    questChoiceCatLoad.answerBlock(answerWrightNum, 'Фильм посвящен жизни Юрия Гагарина. В центре фильма находится космический полет Гагарина, перед и во время которого он вспоминает различные ключевые моменты своей жизни.');

    questArrowBack.arrowNext();
    const arrowNextClick = document.getElementById('answerNext'),
        questValue_8_3 = JSON.parse(localStorage.getItem('progressChoiceQuest_8_3'))
    ;
    arrowNextClick.addEventListener('click', () => {
        gsap.to(containerWrapperCategory, {
            autoAlpha: 0,
            onComplete: () => {
                if (progressChoiceQuest_8_1 === 0 &&
                    progressChoiceQuest_8_2 === 0 &&
                    progressChoiceQuest_8_3 === 0) {
                    wrapper.removeChild(questionStars);
                } else if (progressChoiceQuest_8_1 === 1 &&
                    progressChoiceQuest_8_2 === 0 &&
                    progressChoiceQuest_8_3 === 0) {
                    wrapper.removeChild(questionStars);
                } else if (progressChoiceQuest_8_1 === 0 &&
                    progressChoiceQuest_8_2 === 0 &&
                    progressChoiceQuest_8_3 === 1) {
                    wrapper.removeChild(questionStars);
                }
                container.removeChild(arrowBackClick);
                container.removeChild(arrowNextClick);
                container.removeChild(containerWrapperCategory);
                wrapper.className = 'wrapper';
                if (questValue_8_3 === 1) {
                    choiceCategoryDev();
                    lockSubQuestChoice();
                } else if (questValue_8_3 === 0) {
                    questionChoiceCat_8_3();
                }
            }
        });
        if (progressChoiceQuest_8_1 === 0 &&
            progressChoiceQuest_8_2 === 1 &&
            progressChoiceQuest_8_3 === 1) {
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

function questionChoiceCat_8_3() {
    let questChoiceCatLoad = new Question();
    let questArrowBack = new ArrowsAll();
    let answerWrightNum = 1;
    let progressChoiceQuest_8_1 = JSON.parse(localStorage.getItem('progressChoiceQuest_8_1'));
    let progressChoiceQuest_8_2 = JSON.parse(localStorage.getItem('progressChoiceQuest_8_2'));
    let progressChoiceQuest_8_3 = JSON.parse(localStorage.getItem('progressChoiceQuest_8_3'));

    if (localStorage.getItem('progressChoiceQuest_8_3') === null) {
        localStorage.setItem('progressChoiceQuest_8_3', JSON.stringify(progressChoiceQuest_8_3));
    }

    questChoiceCatLoad.questionBlock('Отбор', 'Космос в кино', 'Неожиданно на станции, которая находится в открытом космосе, происходит поломка.', '«Укрощение огня»', '«Салют – 7»', '«Человек на луне»');

    let answerVar_8_3_1 = document.getElementById('answerVar_1'),
        answerVar_8_3_2 = document.getElementById('answerVar_2'),
        answerVar_8_3_3 = document.getElementById('answerVar_3'),
        answerVarRight_8_3 = [answerVar_8_3_1, answerVar_8_3_2, answerVar_8_3_3],
        questionStars = document.createElement('ul')
    ;

    questionStars.className = 'wrapper__stars';
    wrapper.appendChild(questionStars);

    if (progressChoiceQuest_8_1 === 1 &&
        progressChoiceQuest_8_2 === 1 &&
        progressChoiceQuest_8_3 === 0) {
        questionStars.innerHTML = `
            <li id="questionStar_8_1" class="fill"></li>
            <li id="questionStar_8_2" class="fill"></li>
            <li id="questionStar_8_3"></li>
        `;
    } else if (progressChoiceQuest_8_1 === 0 &&
        progressChoiceQuest_8_2 === 0 &&
        progressChoiceQuest_8_3 === 1) {
        questionStars.innerHTML = `
            <li id="questionStar_8_1"></li>
            <li id="questionStar_8_2"></li>
            <li id="questionStar_8_3" class="fill"></li>
        `;
    } else if (progressChoiceQuest_8_1 === 0 &&
        progressChoiceQuest_8_2 === 1 &&
        progressChoiceQuest_8_3 === 0) {
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
                let progressChoiceQuest_8 = JSON.parse(localStorage.getItem('progressChoiceQuest_8'));
                let progressChoiceQuestSum_8_3 = progressChoiceQuest_8_3 + 1;
                let progressChoiceQuestSum_8 = progressChoiceQuestSum_8_3 + progressChoiceQuest_8;

                localStorage.setItem('progressChoiceQuest_8_3', JSON.stringify(progressChoiceQuestSum_8_3));
                localStorage.setItem('progressChoiceQuest_8', JSON.stringify(progressChoiceQuestSum_8));
                localStorage.setItem('progressChoiceAll', JSON.stringify(progressChoiceQuestSum_8));
                if (progressChoiceQuestSum_8_3 === 1) {
                    questionStar_8_3.className += 'fill';
                }
            });
        }
    }

    questChoiceCatLoad.answerBlock(answerWrightNum, 'Фильм основан на реальных событиях, которые происходили в 1985 году. Неожиданно на станции, которая находится в открытом космосе, происходит поломка. Правительство решает отправить на станцию самых лучших специалистов - космонавтов, чтобы предотвратить страшную катастрофу');

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