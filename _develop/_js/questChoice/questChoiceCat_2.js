if (localStorage.getItem('progressChoiceQuest_2') === null) {
    localStorage.setItem('progressChoiceQuest_2', JSON.stringify(0));
}

// Choice. Quest 2
function questionChoiceCat_2_1() {
    let questChoiceCatLoad = new Question();
    let questArrowBack = new ArrowsAll();
    let answerWrightNum = 2;
    let progressChoiceQuest_2_1 = JSON.parse(localStorage.getItem('progressChoiceQuest_2_1'));
    let progressChoiceQuest_2_2 = JSON.parse(localStorage.getItem('progressChoiceQuest_2_2'));
    let progressChoiceQuest_2_3 = JSON.parse(localStorage.getItem('progressChoiceQuest_2_3'));

    if (localStorage.getItem('progressChoiceQuest_2_1') === null) {
        localStorage.setItem('progressChoiceQuest_2_1', JSON.stringify(progressChoiceQuest_2_1));
    }

    questChoiceCatLoad.questionBlock('Отбор', 'Первый отряд космонавтов', 'В каком году был создан первый отряд космонавтов?', '1961', '1957', '1960');

    let answerVar_2_1_1 = document.getElementById('answerVar_1'),
        answerVar_2_1_2 = document.getElementById('answerVar_2'),
        answerVar_2_1_3 = document.getElementById('answerVar_3'),
        answerVarRight_2_1 = [answerVar_2_1_1, answerVar_2_1_2, answerVar_2_1_3],
        questionStars = document.createElement('ul')
    ;

    questionStars.className = 'wrapper__stars';
    wrapper.appendChild(questionStars);

    if (progressChoiceQuest_2_1 === 0 &&
        progressChoiceQuest_2_2 === 1 &&
        progressChoiceQuest_2_3 === 0) {
        questionStars.innerHTML = `
            <li id="questionStar_2_1"></li>
            <li id="questionStar_2_2" class="fill"></li>
            <li id="questionStar_2_3"></li>
        `;
    } else if (progressChoiceQuest_2_1 === 0 &&
        progressChoiceQuest_2_2 === 0 &&
        progressChoiceQuest_2_3 === 1) {
        questionStars.innerHTML = `
            <li id="questionStar_2_1"></li>
            <li id="questionStar_2_2"></li>
            <li id="questionStar_2_3" class="fill"></li>
        `;
    } else if (progressChoiceQuest_2_1 === 0 &&
        progressChoiceQuest_2_2 === 1 &&
        progressChoiceQuest_2_3 === 1) {
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
                let progressChoiceQuest_2 = JSON.parse(localStorage.getItem('progressChoiceQuest_2'));
                let progressChoiceQuestSum_2_1 = progressChoiceQuest_2_1 + 1;
                let progressChoiceQuestSum_2 = progressChoiceQuestSum_2_1 + progressChoiceQuest_2;

                localStorage.setItem('progressChoiceQuest_2_1', JSON.stringify(progressChoiceQuestSum_2_1));
                localStorage.setItem('progressChoiceQuest_2', JSON.stringify(progressChoiceQuestSum_2));
                if (progressChoiceQuestSum_2_1 === 1) {
                    questionStar_2_1.className += 'fill';
                }
            });
        }
    }

    questChoiceCatLoad.answerBlock(answerWrightNum, 'Первый отряд космонавтов СССР был сформирован в феврале — апреле 1960 года.');

    questArrowBack.arrowNext();
    const arrowNextClick = document.getElementById('answerNext'),
        questValue_2_2 = JSON.parse(localStorage.getItem('progressChoiceQuest_2_2')),
        questValue_2_3 = JSON.parse(localStorage.getItem('progressChoiceQuest_2_3'))
    ;
    arrowNextClick.addEventListener('click', () => {
        gsap.to(containerWrapperCategory, {
            autoAlpha: 0,
            onComplete: () => {
                if (progressChoiceQuest_2_1 === 0 &&
                    progressChoiceQuest_2_2 === 0 &&
                    progressChoiceQuest_2_3 === 0) {
                    wrapper.removeChild(questionStars);
                } else if (progressChoiceQuest_2_1 === 0 &&
                    progressChoiceQuest_2_2 === 1 &&
                    progressChoiceQuest_2_3 === 0) {
                    wrapper.removeChild(questionStars);
                } else if (progressChoiceQuest_2_1 === 0 &&
                    progressChoiceQuest_2_2 === 0 &&
                    progressChoiceQuest_2_3 === 1) {
                    wrapper.removeChild(questionStars);
                }
                container.removeChild(arrowBackClick);
                container.removeChild(arrowNextClick);
                container.removeChild(containerWrapperCategory);
                wrapper.className = 'wrapper';
                if (questValue_2_2 === 1 && questValue_2_3 === 1) {
                    choiceCategoryDev();
                    lockSubQuestChoice();
                } else if (questValue_2_2 === 0) {
                    questionChoiceCat_2_2();
                } else if (questValue_2_2 === 1 && questValue_2_3 === 0) {
                    questionChoiceCat_2_3();
                }
            }
        });
        if (progressChoiceQuest_2_1 === 0 &&
            progressChoiceQuest_2_2 === 1 &&
            progressChoiceQuest_2_3 === 1) {
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

function questionChoiceCat_2_2() {
    let questChoiceCatLoad = new Question();
    let questArrowBack = new ArrowsAll();
    let answerWrightNum = 1;
    let progressChoiceQuest_2_1 = JSON.parse(localStorage.getItem('progressChoiceQuest_2_1'));
    let progressChoiceQuest_2_2 = JSON.parse(localStorage.getItem('progressChoiceQuest_2_2'));
    let progressChoiceQuest_2_3 = JSON.parse(localStorage.getItem('progressChoiceQuest_2_3'));

    if (localStorage.getItem('progressChoiceQuest_2_2') === null) {
        localStorage.setItem('progressChoiceQuest_2_2', JSON.stringify(progressChoiceQuest_2_2));
    }

    questChoiceCatLoad.questionBlock('Отбор', 'Первый отряд космонавтов', 'Какие требования предъявлялись к кандидатам в космонавты?', 'Российское гражданство', 'Определённый рост, вес, крепкое здоровье', 'Оплата налогов');

    let answerVar_2_2_1 = document.getElementById('answerVar_1'),
        answerVar_2_2_2 = document.getElementById('answerVar_2'),
        answerVar_2_2_3 = document.getElementById('answerVar_3'),
        answerVarRight_2_2 = [answerVar_2_2_1, answerVar_2_2_2, answerVar_2_2_3],
        questionStars = document.createElement('ul')
    ;

    questionStars.className = 'wrapper__stars';
    wrapper.appendChild(questionStars);

    if (progressChoiceQuest_2_1 === 1 &&
        progressChoiceQuest_2_2 === 0 &&
        progressChoiceQuest_2_3 === 0) {
        questionStars.innerHTML = `
            <li id="questionStar_2_1" class="fill"></li>
            <li id="questionStar_2_2"></li>
            <li id="questionStar_2_3"></li>
        `;
    } else if (progressChoiceQuest_2_1 === 0 &&
        progressChoiceQuest_2_2 === 0 &&
        progressChoiceQuest_2_3 === 1) {
        questionStars.innerHTML = `
            <li id="questionStar_2_1"></li>
            <li id="questionStar_2_2"></li>
            <li id="questionStar_2_3" class="fill"></li>
        `;
    } else if (progressChoiceQuest_2_1 === 1 &&
        progressChoiceQuest_2_2 === 0 &&
        progressChoiceQuest_2_3 === 1) {
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
                let progressChoiceQuest_2 = JSON.parse(localStorage.getItem('progressChoiceQuest_2'));
                let progressChoiceQuestSum_2_2 = progressChoiceQuest_2_2 + 1;
                let progressChoiceQuestSum_2 = progressChoiceQuestSum_2_2 + progressChoiceQuest_2;

                localStorage.setItem('progressChoiceQuest_2_2', JSON.stringify(progressChoiceQuestSum_2_2));
                localStorage.setItem('progressChoiceQuest_2', JSON.stringify(progressChoiceQuestSum_2));
                if (progressChoiceQuestSum_2_2 === 1) {
                    questionStar_2_2.className += 'fill';
                }
            });
        }
    }

    questChoiceCatLoad.answerBlock(answerWrightNum, '59 лет назад космонавт должен был состоять в партии, быть опытным военным летчиком не выше 170 см и не старше 30 лет, обладать безупречным здоровьем и физической подготовкой на уровне мастера спорта.');

    questArrowBack.arrowNext();
    const arrowNextClick = document.getElementById('answerNext'),
        questValue_2_3 = JSON.parse(localStorage.getItem('progressChoiceQuest_2_3'))
    ;
    arrowNextClick.addEventListener('click', () => {
        gsap.to(containerWrapperCategory, {
            autoAlpha: 0,
            onComplete: () => {
                if (progressChoiceQuest_2_1 === 0 &&
                    progressChoiceQuest_2_2 === 0 &&
                    progressChoiceQuest_2_3 === 0) {
                    wrapper.removeChild(questionStars);
                } else if (progressChoiceQuest_2_1 === 1 &&
                    progressChoiceQuest_2_2 === 0 &&
                    progressChoiceQuest_2_3 === 0) {
                    wrapper.removeChild(questionStars);
                } else if (progressChoiceQuest_2_1 === 0 &&
                    progressChoiceQuest_2_2 === 0 &&
                    progressChoiceQuest_2_3 === 1) {
                    wrapper.removeChild(questionStars);
                }
                container.removeChild(arrowBackClick);
                container.removeChild(arrowNextClick);
                container.removeChild(containerWrapperCategory);
                wrapper.className = 'wrapper';
                if (questValue_2_3 === 1) {
                    choiceCategoryDev();
                    lockSubQuestChoice();
                } else if (questValue_2_3 === 0) {
                    questionChoiceCat_2_3();
                }
            }
        });
        if (progressChoiceQuest_2_1 === 0 &&
            progressChoiceQuest_2_2 === 1 &&
            progressChoiceQuest_2_3 === 1) {
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

function questionChoiceCat_2_3() {
    let questChoiceCatLoad = new Question();
    let questArrowBack = new ArrowsAll();
    let answerWrightNum = 2;
    let progressChoiceQuest_2_1 = JSON.parse(localStorage.getItem('progressChoiceQuest_2_1'));
    let progressChoiceQuest_2_2 = JSON.parse(localStorage.getItem('progressChoiceQuest_2_2'));
    let progressChoiceQuest_2_3 = JSON.parse(localStorage.getItem('progressChoiceQuest_2_3'));

    if (localStorage.getItem('progressChoiceQuest_2_3') === null) {
        localStorage.setItem('progressChoiceQuest_2_3', JSON.stringify(progressChoiceQuest_2_3));
    }

    questChoiceCatLoad.questionBlock('Отбор', 'Первый отряд космонавтов', 'Сколько человек из первого отряда космонавтов покорили космическое пространство?', 'Пятнадцать человек', 'Двадцать человек', 'Двенадцать человек');

    let answerVar_2_3_1 = document.getElementById('answerVar_1'),
        answerVar_2_3_2 = document.getElementById('answerVar_2'),
        answerVar_2_3_3 = document.getElementById('answerVar_3'),
        answerVarRight_2_3 = [answerVar_2_3_1, answerVar_2_3_2, answerVar_2_3_3],
        questionStars = document.createElement('ul')
    ;

    questionStars.className = 'wrapper__stars';
    wrapper.appendChild(questionStars);

    if (progressChoiceQuest_2_1 === 1 &&
        progressChoiceQuest_2_2 === 1 &&
        progressChoiceQuest_2_3 === 0) {
        questionStars.innerHTML = `
            <li id="questionStar_2_1" class="fill"></li>
            <li id="questionStar_2_2" class="fill"></li>
            <li id="questionStar_2_3"></li>
        `;
    } else if (progressChoiceQuest_2_1 === 0 &&
        progressChoiceQuest_2_2 === 0 &&
        progressChoiceQuest_2_3 === 1) {
        questionStars.innerHTML = `
            <li id="questionStar_2_1"></li>
            <li id="questionStar_2_2"></li>
            <li id="questionStar_2_3" class="fill"></li>
        `;
    } else if (progressChoiceQuest_2_1 === 0 &&
        progressChoiceQuest_2_2 === 1 &&
        progressChoiceQuest_2_3 === 0) {
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
                let progressChoiceQuest_2 = JSON.parse(localStorage.getItem('progressChoiceQuest_2'));
                let progressChoiceQuestSum_2_3 = progressChoiceQuest_2_3 + 1;
                let progressChoiceQuestSum_2 = progressChoiceQuestSum_2_3 + progressChoiceQuest_2;

                localStorage.setItem('progressChoiceQuest_2_3', JSON.stringify(progressChoiceQuestSum_2_3));
                localStorage.setItem('progressChoiceQuest_2', JSON.stringify(progressChoiceQuestSum_2));
                localStorage.setItem('progressChoiceAll', JSON.stringify(progressChoiceQuestSum_2));
                if (progressChoiceQuestSum_2_3 === 1) {
                    questionStar_2_3.className += 'fill';
                }
            });
        }
    }

    questChoiceCatLoad.answerBlock(answerWrightNum, '12 первого отряда космонавтов побывали в космосе. И некоторые из них стали участниками и других космических программ — «Восход» и «Союз».');

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