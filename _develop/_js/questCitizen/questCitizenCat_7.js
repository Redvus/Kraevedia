if (localStorage.getItem('progressChoiceQuest_7') === null) {
    localStorage.setItem('progressChoiceQuest_7', JSON.stringify(0));
}

function questionChoiceCat_7_1() {
    let questChoiceCatLoad = new Question();
    let questArrowBack = new ArrowsAll();
    let answerWrightNum = 1;
    let progressChoiceQuest_7_1 = JSON.parse(localStorage.getItem('progressChoiceQuest_7_1'));
    let progressChoiceQuest_7_2 = JSON.parse(localStorage.getItem('progressChoiceQuest_7_2'));
    let progressChoiceQuest_7_3 = JSON.parse(localStorage.getItem('progressChoiceQuest_7_3'));

    if (localStorage.getItem('progressChoiceQuest_7_1') === null) {
        localStorage.setItem('progressChoiceQuest_7_1', JSON.stringify(progressChoiceQuest_7_1));
    }

    questChoiceCatLoad.questionBlock('Отбор', 'Самара. Космос. Имена', 'Имена скольких космонавтов связаны с Самарской областью?', 'Пять', 'Семь', 'Десять');

    let answerVar_7_1_1 = document.getElementById('answerVar_1'),
        answerVar_7_1_2 = document.getElementById('answerVar_2'),
        answerVar_7_1_3 = document.getElementById('answerVar_3'),
        answerVarRight_7_1 = [answerVar_7_1_1, answerVar_7_1_2, answerVar_7_1_3],
        questionStars = document.createElement('ul')
    ;

    questionStars.className = 'wrapper__stars';
    wrapper.appendChild(questionStars);

    if (progressChoiceQuest_7_1 === 0 &&
        progressChoiceQuest_7_2 === 1 &&
        progressChoiceQuest_7_3 === 0) {
        questionStars.innerHTML = `
            <li id="questionStar_7_1"></li>
            <li id="questionStar_7_2" class="fill"></li>
            <li id="questionStar_7_3"></li>
        `;
    } else if (progressChoiceQuest_7_1 === 0 &&
        progressChoiceQuest_7_2 === 0 &&
        progressChoiceQuest_7_3 === 1) {
        questionStars.innerHTML = `
            <li id="questionStar_7_1"></li>
            <li id="questionStar_7_2"></li>
            <li id="questionStar_7_3" class="fill"></li>
        `;
    } else if (progressChoiceQuest_7_1 === 0 &&
        progressChoiceQuest_7_2 === 1 &&
        progressChoiceQuest_7_3 === 1) {
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
                let progressChoiceQuest_7 = JSON.parse(localStorage.getItem('progressChoiceQuest_7'));
                let progressChoiceQuestSum_7_1 = progressChoiceQuest_7_1 + 1;
                let progressChoiceQuestSum_7 = progressChoiceQuestSum_7_1 + progressChoiceQuest_7;

                localStorage.setItem('progressChoiceQuest_7_1', JSON.stringify(progressChoiceQuestSum_7_1));
                localStorage.setItem('progressChoiceQuest_7', JSON.stringify(progressChoiceQuestSum_7));
                if (progressChoiceQuestSum_7_1 === 1) {
                    questionStar_7_1.className += 'fill';
                }
            });
        }
    }

    questChoiceCatLoad.answerBlock(answerWrightNum, 'С.&nbsp;В.&nbsp;Авдеев, О.&nbsp;Ю.&nbsp;Атьков, В.&nbsp;Ф.&nbsp;Быковский, А.&nbsp;А.&nbsp;Губарев, О.&nbsp;Д.&nbsp;Кононенко, М.&nbsp;Б.&nbsp;Корниенко, Г.&nbsp;М.&nbsp;Манаков');

    questArrowBack.arrowNext();
    const arrowNextClick = document.getElementById('answerNext'),
        questValue_7_2 = JSON.parse(localStorage.getItem('progressChoiceQuest_7_2')),
        questValue_7_3 = JSON.parse(localStorage.getItem('progressChoiceQuest_7_3'))
    ;
    arrowNextClick.addEventListener('click', () => {
        gsap.to(containerWrapperCategory, {
            autoAlpha: 0,
            onComplete: () => {
                if (progressChoiceQuest_7_1 === 0 &&
                    progressChoiceQuest_7_2 === 0 &&
                    progressChoiceQuest_7_3 === 0) {
                    wrapper.removeChild(questionStars);
                } else if (progressChoiceQuest_7_1 === 0 &&
                    progressChoiceQuest_7_2 === 1 &&
                    progressChoiceQuest_7_3 === 0) {
                    wrapper.removeChild(questionStars);
                } else if (progressChoiceQuest_7_1 === 0 &&
                    progressChoiceQuest_7_2 === 0 &&
                    progressChoiceQuest_7_3 === 1) {
                    wrapper.removeChild(questionStars);
                }
                container.removeChild(arrowBackClick);
                container.removeChild(arrowNextClick);
                container.removeChild(containerWrapperCategory);
                wrapper.className = 'wrapper';
                if (questValue_7_2 === 1 && questValue_7_3 === 1) {
                    choiceCategoryDev();
                    lockSubQuestCitizen();
                } else if (questValue_7_2 === 0) {
                    questionChoiceCat_7_2();
                } else if (questValue_7_2 === 1 && questValue_7_3 === 0) {
                    questionChoiceCat_7_3();
                }
            }
        });
        if (progressChoiceQuest_7_1 === 0 &&
            progressChoiceQuest_7_2 === 1 &&
            progressChoiceQuest_7_3 === 1) {
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
                lockSubQuestCitizen();
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

function questionChoiceCat_7_2() {
    let questChoiceCatLoad = new Question();
    let questArrowBack = new ArrowsAll();
    let answerWrightNum = 2;
    let progressChoiceQuest_7_1 = JSON.parse(localStorage.getItem('progressChoiceQuest_7_1'));
    let progressChoiceQuest_7_2 = JSON.parse(localStorage.getItem('progressChoiceQuest_7_2'));
    let progressChoiceQuest_7_3 = JSON.parse(localStorage.getItem('progressChoiceQuest_7_3'));

    if (localStorage.getItem('progressChoiceQuest_7_2') === null) {
        localStorage.setItem('progressChoiceQuest_7_2', JSON.stringify(progressChoiceQuest_7_2));
    }

    questChoiceCatLoad.questionBlock('Отбор', 'Самара. Космос. Имена', 'Сколько объектов в Самаре связано с космосом?', 'Три', 'Семь', 'Десять');

    let answerVar_7_2_1 = document.getElementById('answerVar_1'),
        answerVar_7_2_2 = document.getElementById('answerVar_2'),
        answerVar_7_2_3 = document.getElementById('answerVar_3'),
        answerVarRight_7_2 = [answerVar_7_2_1, answerVar_7_2_2, answerVar_7_2_3],
        questionStars = document.createElement('ul')
    ;

    questionStars.className = 'wrapper__stars';
    wrapper.appendChild(questionStars);

    if (progressChoiceQuest_7_1 === 1 &&
        progressChoiceQuest_7_2 === 0 &&
        progressChoiceQuest_7_3 === 0) {
        questionStars.innerHTML = `
            <li id="questionStar_7_1" class="fill"></li>
            <li id="questionStar_7_2"></li>
            <li id="questionStar_7_3"></li>
        `;
    } else if (progressChoiceQuest_7_1 === 0 &&
        progressChoiceQuest_7_2 === 0 &&
        progressChoiceQuest_7_3 === 1) {
        questionStars.innerHTML = `
            <li id="questionStar_7_1"></li>
            <li id="questionStar_7_2"></li>
            <li id="questionStar_7_3" class="fill"></li>
        `;
    } else if (progressChoiceQuest_7_1 === 1 &&
        progressChoiceQuest_7_2 === 0 &&
        progressChoiceQuest_7_3 === 1) {
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
                let progressChoiceQuest_7 = JSON.parse(localStorage.getItem('progressChoiceQuest_7'));
                let progressChoiceQuestSum_7_2 = progressChoiceQuest_7_2 + 1;
                let progressChoiceQuestSum_7 = progressChoiceQuestSum_7_2 + progressChoiceQuest_7;

                localStorage.setItem('progressChoiceQuest_7_2', JSON.stringify(progressChoiceQuestSum_7_2));
                localStorage.setItem('progressChoiceQuest_7', JSON.stringify(progressChoiceQuestSum_7));
                if (progressChoiceQuestSum_7_2 === 1) {
                    questionStar_7_2.className += 'fill';
                }
            });
        }
    }

    questChoiceCatLoad.answerBlock(answerWrightNum, 'Памятник С.&nbsp;П.&nbsp;Королеву, памятник Д.&nbsp;Ф.&nbsp;Устинову, площадь им. Д.&nbsp;И.&nbsp;Козлова, памятник Покорителям космоса, музейно-выставочный центр «Самара космическая», памятник «Космонавт», монумент «Энергия-Буран, парк имени Ю.&nbsp;А.&nbsp;Гагарина, памятник Ю.&nbsp;А.&nbsp;Гагарину, станция метро «Гагаринская»');

    questArrowBack.arrowNext();
    const arrowNextClick = document.getElementById('answerNext'),
        questValue_7_3 = JSON.parse(localStorage.getItem('progressChoiceQuest_7_3'))
    ;
    arrowNextClick.addEventListener('click', () => {
        gsap.to(containerWrapperCategory, {
            autoAlpha: 0,
            onComplete: () => {
                if (progressChoiceQuest_7_1 === 0 &&
                    progressChoiceQuest_7_2 === 0 &&
                    progressChoiceQuest_7_3 === 0) {
                    wrapper.removeChild(questionStars);
                } else if (progressChoiceQuest_7_1 === 1 &&
                    progressChoiceQuest_7_2 === 0 &&
                    progressChoiceQuest_7_3 === 0) {
                    wrapper.removeChild(questionStars);
                } else if (progressChoiceQuest_7_1 === 0 &&
                    progressChoiceQuest_7_2 === 0 &&
                    progressChoiceQuest_7_3 === 1) {
                    wrapper.removeChild(questionStars);
                }
                container.removeChild(arrowBackClick);
                container.removeChild(arrowNextClick);
                container.removeChild(containerWrapperCategory);
                wrapper.className = 'wrapper';
                if (questValue_7_3 === 1) {
                    choiceCategoryDev();
                    lockSubQuestCitizen();
                } else if (questValue_7_3 === 0) {
                    questionChoiceCat_7_3();
                }
            }
        });
        if (progressChoiceQuest_7_1 === 0 &&
            progressChoiceQuest_7_2 === 1 &&
            progressChoiceQuest_7_3 === 1) {
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
                lockSubQuestCitizen();
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

function questionChoiceCat_7_3() {
    let questChoiceCatLoad = new Question();
    let questArrowBack = new ArrowsAll();
    let answerWrightNum = 2;
    let progressChoiceQuest_7_1 = JSON.parse(localStorage.getItem('progressChoiceQuest_7_1'));
    let progressChoiceQuest_7_2 = JSON.parse(localStorage.getItem('progressChoiceQuest_7_2'));
    let progressChoiceQuest_7_3 = JSON.parse(localStorage.getItem('progressChoiceQuest_7_3'));

    if (localStorage.getItem('progressChoiceQuest_7_3') === null) {
        localStorage.setItem('progressChoiceQuest_7_3', JSON.stringify(progressChoiceQuest_7_3));
    }

    questChoiceCatLoad.questionBlock('Отбор', 'Самара. Космос. Имена', 'По скольким «космическим» улицам можно прогуляться в&nbsp;Самаре?', 'Пять', 'Четыре', 'Семь');

    let answerVar_7_3_1 = document.getElementById('answerVar_1'),
        answerVar_7_3_2 = document.getElementById('answerVar_2'),
        answerVar_7_3_3 = document.getElementById('answerVar_3'),
        answerVarRight_7_3 = [answerVar_7_3_1, answerVar_7_3_2, answerVar_7_3_3],
        questionStars = document.createElement('ul')
    ;

    questionStars.className = 'wrapper__stars';
    wrapper.appendChild(questionStars);

    if (progressChoiceQuest_7_1 === 1 &&
        progressChoiceQuest_7_2 === 1 &&
        progressChoiceQuest_7_3 === 0) {
        questionStars.innerHTML = `
            <li id="questionStar_7_1" class="fill"></li>
            <li id="questionStar_7_2" class="fill"></li>
            <li id="questionStar_7_3"></li>
        `;
    } else if (progressChoiceQuest_7_1 === 0 &&
        progressChoiceQuest_7_2 === 0 &&
        progressChoiceQuest_7_3 === 1) {
        questionStars.innerHTML = `
            <li id="questionStar_7_1"></li>
            <li id="questionStar_7_2"></li>
            <li id="questionStar_7_3" class="fill"></li>
        `;
    } else if (progressChoiceQuest_7_1 === 0 &&
        progressChoiceQuest_7_2 === 1 &&
        progressChoiceQuest_7_3 === 0) {
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
                let progressChoiceQuest_7 = JSON.parse(localStorage.getItem('progressChoiceQuest_7'));
                let progressChoiceQuestSum_7_3 = progressChoiceQuest_7_3 + 1;
                let progressChoiceQuestSum_7 = progressChoiceQuestSum_7_3 + progressChoiceQuest_7;

                localStorage.setItem('progressChoiceQuest_7_3', JSON.stringify(progressChoiceQuestSum_7_3));
                localStorage.setItem('progressChoiceQuest_7', JSON.stringify(progressChoiceQuestSum_7));
                localStorage.setItem('progressChoiceAll', JSON.stringify(progressChoiceQuestSum_7));
                if (progressChoiceQuestSum_7_3 === 1) {
                    questionStar_7_3.className += 'fill';
                }
            });
        }
    }

    questChoiceCatLoad.answerBlock(answerWrightNum, 'ул.&nbsp;Циолковского, ул.&nbsp;Спутника, ул.&nbsp;Юрия Гагарина, ул.&nbsp;Лунная, ул.&nbsp;Академика Кузнецова, ул.&nbsp;Литвинова, ул.&nbsp;Земеца');

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
                lockSubQuestCitizen();
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
                lockSubQuestCitizen();
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